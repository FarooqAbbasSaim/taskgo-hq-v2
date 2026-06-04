<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\View\View;

class PatientAuthEventsController extends Controller
{
    public function index(Request $request): View
    {
        abort_unless((bool) config('features.patient_auth_events_log', false), 404);

        $filters = $this->filters($request);

        if (! Schema::hasTable('patient_auth_events')) {
            return view('admin.patient-auth-events', [
                'title' => 'Patient Auth Logs',
                'error' => 'The patient_auth_events table is not available. Run RX migrations first.',
                'events' => null,
                'filters' => $filters,
            ]);
        }

        try {
            $query = DB::table('patient_auth_events as e')
                ->leftJoin('rx_users as u', 'u.id', '=', 'e.user_id')
                ->select([
                    'e.id',
                    'e.user_id',
                    'e.action',
                    'e.channel',
                    'e.result',
                    'e.ip_address',
                    'e.user_agent',
                    'e.meta',
                    'e.created_at',
                    'u.email as user_email',
                    DB::raw("TRIM(CONCAT(COALESCE(u.first_name, ''), ' ', COALESCE(u.last_name, ''))) as user_name"),
                ])
                ->orderByDesc('e.created_at');

            if (! empty($filters['action'])) {
                $query->where('e.action', $filters['action']);
            }

            if (! empty($filters['result'])) {
                $query->where('e.result', $filters['result']);
            }

            if (! empty($filters['user_id'])) {
                $query->where('e.user_id', (int) $filters['user_id']);
            }

            if (! empty($filters['email'])) {
                $email = (string) $filters['email'];
                $query->where('u.email', 'like', '%'.$email.'%');
            }

            $events = $query->paginate((int) $filters['per_page'])
                ->withQueryString()
                ->through(function ($row) {
                    $meta = $row->meta;
                    if (is_string($meta)) {
                        $decoded = json_decode($meta, true);
                        $meta = is_array($decoded) ? $decoded : null;
                    }

                    return [
                        'id' => $row->id,
                        'user_id' => $row->user_id,
                        'user_email' => $row->user_email,
                        'user_name' => trim((string) $row->user_name) ?: null,
                        'action' => $row->action,
                        'channel' => $row->channel ? ucfirst((string) $row->channel) : null,
                        'result' => $row->result ? ucfirst((string) $row->result) : '',
                        'result_raw' => strtolower((string) $row->result),
                        'ip_address' => $row->ip_address,
                        'user_agent' => $row->user_agent,
                        'meta' => is_array($meta) ? $meta : null,
                        'meta_summary' => $this->metaSummary(is_array($meta) ? $meta : null),
                        'created_at' => $row->created_at
                            ? Carbon::parse($row->created_at)->format('M j, Y g:i:s A')
                            : '',
                    ];
                });
        } catch (\Throwable $e) {
            report($e);

            return view('admin.patient-auth-events', [
                'title' => 'Patient Auth Logs',
                'error' => 'Failed to load patient auth logs.',
                'events' => null,
                'filters' => $filters,
            ]);
        }

        return view('admin.patient-auth-events', [
            'title' => 'Patient Auth Logs',
            'error' => null,
            'events' => $events,
            'filters' => $filters,
        ]);
    }

    /** @return array<string, mixed> */
    private function filters(Request $request): array
    {
        $perPage = (int) $request->query('per_page', 50);
        if ($perPage <= 0) {
            $perPage = 50;
        }
        if ($perPage > 200) {
            $perPage = 200;
        }

        return array_filter([
            'action' => $request->query('action'),
            'result' => $request->query('result'),
            'user_id' => $request->query('user_id'),
            'email' => $request->query('email'),
            'per_page' => $perPage,
        ], fn ($v) => $v !== null && $v !== '');
    }

    /** @param array<string, mixed>|null $meta */
    private function metaSummary(?array $meta): ?string
    {
        if ($meta === null || $meta === []) {
            return null;
        }

        $parts = [];
        foreach (['reason', 'path', 'error'] as $key) {
            if (! empty($meta[$key])) {
                $parts[] = $key.': '.$meta[$key];
            }
        }

        if ($parts !== []) {
            return implode(' · ', $parts);
        }

        $encoded = json_encode($meta, JSON_UNESCAPED_UNICODE);

        return is_string($encoded) ? $encoded : null;
    }
}
