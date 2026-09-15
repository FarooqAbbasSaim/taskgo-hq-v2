<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SupportViewSessionsController extends Controller
{
    public function index(Request $request)
    {
        abort_unless((bool) config('features.support_view_sessions_log', false), 404);

        $crmUrl = rtrim((string) config('services.taskgo_crm.url'), '/');
        $token = (string) config('services.taskgo_crm.hq_api_token');

        if ($crmUrl === '' || $token === '') {
            return view('admin.support-view-sessions', [
                'title' => 'Support View Sessions',
                'error' => 'CRM Support View API is not configured. Set TASKGO_CRM_URL and HQ_ONBOARDING_API_TOKEN.',
                'logs' => null,
                'filters' => $this->filters($request),
            ]);
        }

        $filters = $this->filters($request);

        $response = Http::timeout(30)
            ->withToken($token)
            ->acceptJson()
            ->get($crmUrl . '/api/hq/support-sessions', $filters);

        if ($response->failed()) {
            return view('admin.support-view-sessions', [
                'title' => 'Support View Sessions',
                'error' => $response->json('message') ?? 'Failed to fetch Support View sessions from CRM.',
                'logs' => null,
                'filters' => $filters,
            ]);
        }

        return view('admin.support-view-sessions', [
            'title' => 'Support View Sessions',
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
            'status' => $request->query('status'),
            'mode' => $request->query('mode'),
            'customer_id' => $request->query('customer_id'),
            'target_user_id' => $request->query('target_user_id'),
            'hq_actor_email' => $request->query('hq_actor_email'),
            'target_email' => $request->query('target_email'),
            'per_page' => $perPage,
            'page' => $request->query('page'),
        ], fn ($v) => $v !== null && $v !== '');
    }
}
