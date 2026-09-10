<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HqUser;
use App\Models\SupportTicket;
use App\Models\SupportTicketAttachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class SupportTicketController extends Controller
{
    public function index(Request $request)
    {
        $query = SupportTicket::query()->latest('updated_at');
        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }
        if ($request->filled('urgency')) {
            $query->where('urgency', $request->string('urgency'));
        }
        if ($request->filled('q')) {
            $term = '%' . $request->string('q') . '%';
            $query->where(function ($builder) use ($term) {
                $builder->where('reference', 'like', $term)
                    ->orWhere('subject', 'like', $term)
                    ->orWhere('requester_name', 'like', $term)
                    ->orWhere('requester_email', 'like', $term)
                    ->orWhere('pharmacy_name', 'like', $term);
            });
        }

        $counts = SupportTicket::select('status', DB::raw('count(*) as total'))->groupBy('status')->pluck('total', 'status');
        $stats = [
            'open' => SupportTicket::whereNotIn('status', ['resolved', 'closed', 'duplicate', 'cancelled'])->count(),
            'new' => (int) ($counts['new'] ?? 0),
            'waiting' => (int) ($counts['waiting_for_customer'] ?? 0),
            'resolved' => (int) ($counts['resolved'] ?? 0),
        ];

        return view('admin.support.index', [
            'title' => 'Support Tickets',
            'tickets' => $query->paginate(30)->withQueryString(),
            'stats' => $stats,
            'statuses' => SupportTicket::STATUSES,
        ]);
    }

    public function show(SupportTicket $ticket)
    {
        $ticket->update(['hq_last_viewed_at' => now(), 'hq_unread' => false]);

        return view('admin.support.show', [
            'title' => $ticket->reference,
            'ticket' => $ticket->load('messages.attachments'),
            'hqUsers' => HqUser::where('status', 'active')->orderBy('name')->get(['id', 'name', 'email']),
            'statuses' => SupportTicket::STATUSES,
        ]);
    }

    public function update(Request $request, SupportTicket $ticket)
    {
        $validated = $request->validate([
            'status' => 'required|in:' . implode(',', SupportTicket::STATUSES),
            'urgency' => 'required|in:low,normal,high,urgent',
            'assigned_to' => 'nullable|exists:hq_users,id',
            'duplicate_reference' => 'nullable|string|max:24',
        ]);
        $assigned = !empty($validated['assigned_to']) ? HqUser::find($validated['assigned_to']) : null;
        $duplicate = !empty($validated['duplicate_reference'])
            ? SupportTicket::where('reference', $validated['duplicate_reference'])->whereKeyNot($ticket->id)->first()
            : null;
        if ($validated['status'] === 'duplicate' && !$duplicate) {
            return back()->withErrors(['duplicate_reference' => 'Enter the reference of the original ticket before marking this ticket as duplicate.'])->withInput();
        }

        $previousStatus = $ticket->status;
        $ticket->update([
            'status' => $validated['status'],
            'urgency' => $validated['urgency'],
            'assigned_to' => optional($assigned)->id,
            'assigned_name' => optional($assigned)->name,
            'duplicate_of' => optional($duplicate)->id,
            'resolved_at' => $validated['status'] === 'resolved' ? ($ticket->resolved_at ?: now()) : null,
            'closed_at' => $validated['status'] === 'closed' ? ($ticket->closed_at ?: now()) : null,
            'customer_unread' => true,
        ]);
        $mailFailed = $previousStatus !== $ticket->status && !$this->sendStatusUpdate($ticket);

        $response = back()->with('success', 'Ticket details updated.');
        return $mailFailed ? $response->with('warning', 'The ticket was updated, but the email notification could not be delivered.') : $response;
    }

    public function assignToMe(SupportTicket $ticket)
    {
        $user = Auth::guard('hq')->user();
        $previousStatus = $ticket->status;
        $ticket->update([
            'assigned_to' => $user->id,
            'assigned_name' => $user->name,
            'status' => $ticket->status === 'new' ? 'assigned' : $ticket->status,
            'customer_unread' => true,
        ]);
        $mailFailed = $previousStatus !== $ticket->status && !$this->sendStatusUpdate($ticket);

        $response = back()->with('success', 'Ticket assigned to you.');
        return $mailFailed ? $response->with('warning', 'The ticket was assigned, but the email notification could not be delivered.') : $response;
    }

    public function reply(Request $request, SupportTicket $ticket)
    {
        $validated = $request->validate([
            'body' => 'required|string|max:20000',
            'is_internal' => 'nullable|boolean',
            'status_after_reply' => 'nullable|in:in_progress,waiting_for_customer,resolved',
            'attachment' => 'nullable|file|mimes:pdf,doc,docx,jpg,jpeg,png|max:10240',
        ]);
        $user = Auth::guard('hq')->user();
        $internal = (bool) ($validated['is_internal'] ?? false);
        $message = $ticket->messages()->create([
            'sender_type' => 'hq',
            'sender_id' => $user->id,
            'sender_name' => $user->name,
            'sender_email' => $user->email,
            'body' => $validated['body'],
            'is_internal' => $internal,
        ]);

        foreach ($request->hasFile('attachment') ? [$request->file('attachment')] : [] as $file) {
            SupportTicketAttachment::create([
                'support_ticket_id' => $ticket->id,
                'support_ticket_message_id' => $message->id,
                'original_name' => $file->getClientOriginalName(),
                'mime_type' => $file->getMimeType(),
                'size' => $file->getSize(),
                'contents' => base64_encode(file_get_contents($file->getRealPath())),
            ]);
        }

        $mailFailed = false;
        if (!$internal) {
            $status = $validated['status_after_reply'] ?? 'waiting_for_customer';
            $ticket->update([
                'status' => $status,
                'resolved_at' => $status === 'resolved' ? now() : null,
                'customer_unread' => true,
            ]);
            $ticketMessage = $message;
            try {
                Mail::send('emails.support-ticket-reply', compact('ticket', 'ticketMessage'), function ($mail) use ($ticket) {
                    $mail->to($ticket->requester_email, $ticket->requester_name)
                        ->subject("Update on {$ticket->reference}: {$ticket->subject}");
                });
            } catch (\Throwable $exception) {
                report($exception);
                $mailFailed = true;
            }
        }

        $response = back()->with('success', $internal ? 'Private note added.' : 'Reply saved and sent to the customer.');
        return $mailFailed ? $response->with('warning', 'The reply was saved, but the email notification could not be delivered.') : $response;
    }

    public function attachment(SupportTicketAttachment $attachment)
    {
        return response(base64_decode($attachment->contents), 200, [
            'Content-Type' => $attachment->mime_type ?: 'application/octet-stream',
            'Content-Disposition' => 'attachment; filename="' . addslashes(basename(str_replace(["\r", "\n"], '', $attachment->original_name))) . '"',
        ]);
    }

    private function sendStatusUpdate(SupportTicket $ticket): bool
    {
        try {
            Mail::send('emails.support-ticket-status', compact('ticket'), function ($mail) use ($ticket) {
                $mail->to($ticket->requester_email, $ticket->requester_name)
                    ->subject("Status update for {$ticket->reference}: " . ucwords(str_replace('_', ' ', $ticket->status)));
            });
            return true;
        } catch (\Throwable $exception) {
            report($exception);
            return false;
        }
    }
}
