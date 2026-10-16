<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\PlatformInsightsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class PlatformInsightsController extends Controller
{
    public function __construct(private PlatformInsightsService $insights)
    {
    }

    public function index(Request $request): View
    {
        abort_unless((bool) config('features.platform_insights', false), 404);

        $validated = $request->validate([
            'period' => 'nullable|in:15d,30d,2m,3m,custom',
            'from' => 'nullable|date',
            'to' => 'nullable|date',
            'organization_id' => 'nullable|integer|min:1',
            'pharmacy_ids' => 'nullable|array',
            'pharmacy_ids.*' => 'integer|min:1',
            'pharmacy_id' => 'nullable|integer|min:1',
        ]);

        $pharmacyIds = $validated['pharmacy_ids'] ?? [];
        if ($pharmacyIds === [] && isset($validated['pharmacy_id'])) {
            $pharmacyIds = [(int) $validated['pharmacy_id']];
        }

        $data = $this->insights->snapshot([
            'period' => $validated['period'] ?? '2m',
            'from' => $validated['from'] ?? null,
            'to' => $validated['to'] ?? null,
            'organization_id' => isset($validated['organization_id']) ? (int) $validated['organization_id'] : null,
            'pharmacy_ids' => $pharmacyIds,
        ]);

        return view('admin.platform-insights', [
            'title' => 'Platform Insights',
            'insights' => $data,
            'error' => ($data['errors'] ?? []) !== [] ? implode(' ', $data['errors']) : null,
        ]);
    }

    public function medicationOrders(Request $request): JsonResponse
    {
        abort_unless((bool) config('features.platform_insights', false), 404);

        $validated = $request->validate([
            'medication' => 'required|string|max:500',
            'page' => 'nullable|integer|min:1',
            'per_page' => 'nullable|integer|min:1|max:100',
        ]);

        $result = $this->insights->ordersForMedication(
            $validated['medication'],
            (int) ($validated['page'] ?? 1),
            (int) ($validated['per_page'] ?? 25),
        );

        if ($result['error']) {
            return response()->json([
                'success' => false,
                'message' => $result['error'],
            ], 422);
        }

        return response()->json([
            'success' => true,
            'medication' => $validated['medication'],
            'data' => $result['data'],
            'meta' => [
                'total' => $result['total'],
                'page' => $result['page'],
                'per_page' => $result['per_page'],
                'last_page' => $result['per_page'] > 0 ? (int) ceil($result['total'] / $result['per_page']) : 1,
            ],
        ]);
    }
}
