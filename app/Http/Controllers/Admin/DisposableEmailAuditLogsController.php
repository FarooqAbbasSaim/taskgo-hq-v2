<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DisposableEmailAuditLogsController extends Controller
{
    public function index(Request $request)
    {
        abort_unless((bool) config('features.disposable_email_audit_logs', false), 404);

        $crmUrl = rtrim((string) config('services.taskgo_crm.url'), '/');
        $token = (string) config('services.taskgo_crm.hq_api_token');

        if ($crmUrl === '' || $token === '') {
            return view('admin.disposable-email-audit-logs', [
                'title' => 'Disposable Email Audit Logs',
                'error' => 'CRM audit log API is not configured. Set TASKGO_CRM_URL and HQ_ONBOARDING_API_TOKEN.',
                'logs' => null,
                'filters' => $this->filters($request),
            ]);
        }

        $filters = $this->filters($request);

        $response = Http::timeout(30)
            ->withToken($token)
            ->acceptJson()
            ->get($crmUrl . '/api/hq/disposable-email-audit-logs', $filters);

        if ($response->failed()) {
            return view('admin.disposable-email-audit-logs', [
                'title' => 'Disposable Email Audit Logs',
                'error' => $response->json('message') ?? 'Failed to fetch audit logs from CRM.',
                'logs' => null,
                'filters' => $filters,
            ]);
        }

        return view('admin.disposable-email-audit-logs', [
            'title' => 'Disposable Email Audit Logs',
            'error' => null,
            'logs' => $response->json(),
            'filters' => $filters,
        ]);
    }

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
            'email' => $request->query('email'),
            'per_page' => $perPage,
            'page' => $request->query('page'),
        ], fn ($v) => $v !== null && $v !== '');
    }
}

