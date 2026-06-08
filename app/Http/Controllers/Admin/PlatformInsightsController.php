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

        $data = $this->insights->snapshot();

        return view('admin.platform-insights', [
            'title' => 'Platform Insights',
            'insights' => $data,
            'error' => ($data['errors'] ?? []) !== [] ? implode(' ', $data['errors']) : null,
        ]);
    }
}
