<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CorporateRegistration;
use Carbon\CarbonImmutable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\View\View;

class CorporateRegistrationsController extends Controller
{
    public function index(): View
    {
        $registrations = CorporateRegistration::query()
            ->orderByRaw("FIELD(status, 'pending', 'approved', 'rejected')")
            ->orderByDesc('created_at')
            ->limit(500)
            ->get();

        return view('corporate-registrations.index', [
            'title' => 'Corporate Registrations',
            'registrations' => $registrations,
        ]);
    }

    public function approve(Request $request, int $id): RedirectResponse
    {
        $request->validate([
            'send_email' => ['nullable', 'in:1'],
        ]);

        $sendEmail = $request->boolean('send_email', true);

        $registration = CorporateRegistration::query()->findOrFail($id);

        if ($registration->status !== 'pending') {
            return back()->with('warning', 'This registration is not pending.');
        }

        $plainToken = Str::random(64);
        $tokenHash = hash('sha256', $plainToken);
        $expiresAt = CarbonImmutable::now()->addHours(48);

        DB::transaction(function () use ($registration, $tokenHash, $expiresAt) {
            DB::table('corporate_users')->updateOrInsert(
                ['email' => $registration->email],
                [
                    'company_name' => $registration->company_name,
                    'status' => 'pending',
                    'corporate_registration_id' => $registration->id,
                    'updated_at' => CarbonImmutable::now(),
                    'created_at' => CarbonImmutable::now(),
                ]
            );

            DB::table('corporate_password_set_tokens')->insert([
                'email' => $registration->email,
                'token_hash' => $tokenHash,
                'expires_at' => $expiresAt,
                'used_at' => null,
                'created_at' => CarbonImmutable::now(),
                'updated_at' => CarbonImmutable::now(),
            ]);

            $registration->update([
                'status' => 'approved',
                'approved_at' => CarbonImmutable::now(),
                'approved_by_hq_user_id' => Auth::guard('hq')->id(),
            ]);
        });

        if ($sendEmail) {
            $portalUrl = rtrim((string) config('services.my_vaccine_portal.url'), '/');
            $setPasswordUrl = $portalUrl . '/set-password?email=' . urlencode($registration->email) . '&token=' . urlencode($plainToken);

            Mail::send('emails.corporate_set_password', [
                'companyName' => $registration->company_name,
                'setPasswordUrl' => $setPasswordUrl,
                'expiresHours' => 48,
            ], function ($message) use ($registration) {
                $message->to($registration->email)
                    ->subject('Set your password - My Vaccine Portal');
            });

            $registration->update([
                'set_password_email_sent_at' => CarbonImmutable::now(),
            ]);
        }

        return back()->with('success', 'Approved. Set-password link ' . ($sendEmail ? 'sent.' : 'generated (email not sent).'));
    }
}

