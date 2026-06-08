<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\PlatformInsightsService;
use Illuminate\View\View;

class PlatformInsightsController extends Controller
{
    public function __construct(private PlatformInsightsService $insights)
    {
    }

    public function index(): View
    {
        abort_unless((bool) config('features.platform_insights', false), 404);

        try {
            $data = $this->insights->snapshot();
            $error = null;
        } catch (\Throwable $e) {
            report($e);
            $data = [
                'top_medications' => [],
                'top_services' => [],
                'ccs_bookings_total' => null,
                'dispensing_error_logs_total' => null,
                'whatsapp' => [
                    'total' => null,
                    'breakdown' => [],
                    'note' => null,
                ],
                'generated_at' => now()->format('M j, Y g:i A'),
            ];
            $error = 'Failed to load platform insights. Check HQ database connectivity.';
        }

        return view('admin.platform-insights', [
            'title' => 'Platform Insights',
            'insights' => $data,
            'error' => $error,
        ]);
    }
}
