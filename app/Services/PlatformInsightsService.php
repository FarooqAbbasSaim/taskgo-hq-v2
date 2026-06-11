<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Throwable;

class PlatformInsightsService
{
    /** @return array{data: array<int, array<string, mixed>>, error: string|null} */
    public function topMedications(int $limit = 5): array
    {
        if (! Schema::hasTable('order_medicines') || ! Schema::hasTable('rx_orders')) {
            return ['data' => [], 'error' => null];
        }

        if (! Schema::hasColumn('order_medicines', 'name')) {
            return ['data' => [], 'error' => 'Medication name column is unavailable in this database.'];
        }

        try {
            $rows = DB::table('order_medicines as om')
                ->join('rx_orders as o', 'o.id', '=', 'om.order_id')
                ->whereNotIn('o.status', ['reject'])
                ->whereNotNull('om.name')
                ->where('om.name', '!=', '')
                ->selectRaw('TRIM(om.name) as medication_name')
                ->selectRaw('COUNT(*) as order_lines')
                ->selectRaw('COUNT(DISTINCT om.order_id) as orders')
                ->groupByRaw('TRIM(om.name)')
                ->orderByRaw('COUNT(*) DESC')
                ->limit($limit)
                ->get();

            return [
                'data' => $this->rankRows($rows, 'medication_name', [
                    'order_lines' => 'order_lines',
                    'orders' => 'orders',
                ]),
                'error' => null,
            ];
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::topMedications failed', ['exception' => $e->getMessage()]);

            return ['data' => [], 'error' => 'Could not load medication rankings.'];
        }
    }

    /** @return array{data: array<int, array<string, mixed>>, error: string|null} */
    public function topServices(int $limit = 5): array
    {
        if (! Schema::hasTable('appointments') || ! Schema::hasTable('services')) {
            return ['data' => [], 'error' => null];
        }

        try {
            $rows = DB::table('appointments as a')
                ->join('services as s', 's.id', '=', 'a.service_id')
                ->where('a.status', '!=', 'cancelled')
                ->select([
                    's.id',
                    's.name',
                    's.type',
                    DB::raw('COUNT(*) as bookings'),
                ])
                ->groupBy('s.id', 's.name', 's.type')
                ->orderByRaw('COUNT(*) DESC')
                ->limit($limit)
                ->get();

            return [
                'data' => $this->rankRows($rows, 'name', [
                    'type' => 'type',
                    'bookings' => 'bookings',
                ]),
                'error' => null,
            ];
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::topServices failed', ['exception' => $e->getMessage()]);

            return ['data' => [], 'error' => 'Could not load service rankings.'];
        }
    }

    /** @return array{value: int|null, error: string|null} */
    public function ccsBookingsTotal(): array
    {
        if (! Schema::hasTable('appointments') || ! Schema::hasTable('services')) {
            return ['value' => null, 'error' => null];
        }

        try {
            return [
                'value' => (int) DB::table('appointments as a')
                    ->join('services as s', 's.id', '=', 'a.service_id')
                    ->where('s.type', 'ccs')
                    ->where('a.status', '!=', 'cancelled')
                    ->count(),
                'error' => null,
            ];
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::ccsBookingsTotal failed', ['exception' => $e->getMessage()]);

            return ['value' => null, 'error' => 'Could not load CCS booking total.'];
        }
    }

    /** @return array{value: int|null, error: string|null} */
    public function dispensingErrorLogsTotal(): array
    {
        if (! Schema::hasTable('dispensing_error_logs')) {
            return ['value' => null, 'error' => null];
        }

        try {
            return [
                'value' => (int) DB::table('dispensing_error_logs')->count(),
                'error' => null,
            ];
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::dispensingErrorLogsTotal failed', ['exception' => $e->getMessage()]);

            return ['value' => null, 'error' => 'Could not load dispensing error log total.'];
        }
    }

    /**
     * @return array{
     *     total: int|null,
     *     breakdown: array<int, array{label: string, count: int}>,
     *     note: string|null,
     *     error: string|null
     * }
     */
    public function whatsAppMessagesTotal(): array
    {
        $breakdown = [];
        $total = 0;
        $hasAnySource = false;
        $errors = [];

        if (Schema::hasTable('rx_supplement_recommendation_cycles')) {
            try {
                $count = (int) DB::table('rx_supplement_recommendation_cycles')
                    ->whereNotNull('whatsapp_sent_at')
                    ->count();
                $breakdown[] = [
                    'label' => 'Supplement recommendation follow-ups',
                    'count' => $count,
                ];
                $total += $count;
                $hasAnySource = true;
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::whatsAppMessagesTotal supplement failed', ['exception' => $e->getMessage()]);
                $errors[] = 'Supplement WhatsApp count unavailable.';
            }
        }

        if (Schema::hasTable('patient_auth_events')) {
            try {
                $count = (int) DB::table('patient_auth_events')
                    ->where('channel', 'whatsapp')
                    ->whereIn('action', ['otp_sent', 'otp_resent'])
                    ->where('result', 'success')
                    ->count();
                $breakdown[] = [
                    'label' => 'Login OTP (My Pharmacy Portal)',
                    'count' => $count,
                ];
                $total += $count;
                $hasAnySource = true;
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::whatsAppMessagesTotal otp failed', ['exception' => $e->getMessage()]);
                $errors[] = 'Login OTP WhatsApp count unavailable.';
            }
        }

        if (! $hasAnySource) {
            return [
                'total' => null,
                'breakdown' => [],
                'note' => 'No WhatsApp tracking tables are available in this database.',
                'error' => null,
            ];
        }

        return [
            'total' => $total,
            'breakdown' => $breakdown,
            'note' => 'Order status and refill WhatsApp alerts are not stored in the database; this total covers tracked outbound messages only.',
            'error' => $errors !== [] ? implode(' ', $errors) : null,
        ];
    }

    /**
     * @return array{data: array<int, array<string, mixed>>, total: int, page: int, per_page: int, error: string|null}
     */
    public function ordersForMedication(string $medicationName, int $page = 1, int $perPage = 25): array
    {
        $medicationName = trim($medicationName);
        $page = max(1, $page);
        $perPage = min(100, max(1, $perPage));

        if ($medicationName === '') {
            return ['data' => [], 'total' => 0, 'page' => $page, 'per_page' => $perPage, 'error' => 'Medication name is required.'];
        }

        if (! Schema::hasTable('order_medicines') || ! Schema::hasTable('rx_orders')) {
            return ['data' => [], 'total' => 0, 'page' => $page, 'per_page' => $perPage, 'error' => null];
        }

        try {
            $base = DB::table('order_medicines as om')
                ->join('rx_orders as o', 'o.id', '=', 'om.order_id')
                ->whereNotIn('o.status', ['reject'])
                ->whereNotNull('om.name')
                ->whereRaw('TRIM(om.name) = ?', [$medicationName]);

            $total = (int) (clone $base)->distinct()->count('o.id');

            $orderIds = (clone $base)
                ->select('o.id')
                ->distinct()
                ->orderByDesc('o.id')
                ->forPage($page, $perPage)
                ->pluck('o.id');

            if ($orderIds->isEmpty()) {
                return ['data' => [], 'total' => $total, 'page' => $page, 'per_page' => $perPage, 'error' => null];
            }

            $rows = DB::table('rx_orders as o')
                ->leftJoin('rx_users as u', 'u.id', '=', 'o.user_id')
                ->leftJoin('pharmacies as p', 'p.id', '=', 'o.nominated_pharmacy_id')
                ->whereIn('o.id', $orderIds->all())
                ->select([
                    'o.id',
                    'o.created_at',
                    'o.status',
                    'o.collection_method',
                    DB::raw("COALESCE(p.pharmacy_name, o.nominated_pharmacy, '—') as pharmacy_name"),
                    DB::raw("TRIM(CONCAT(COALESCE(u.first_name, ''), ' ', COALESCE(u.last_name, ''))) as patient_name"),
                    'u.email as patient_email',
                ])
                ->orderByDesc('o.created_at')
                ->get();

            $quantities = DB::table('order_medicines')
                ->select('order_id', DB::raw('SUM(quantity) as qty'))
                ->whereIn('order_id', $orderIds->all())
                ->whereRaw('TRIM(name) = ?', [$medicationName])
                ->groupBy('order_id')
                ->pluck('qty', 'order_id');

            $data = $rows->map(function ($row) use ($quantities) {
                return [
                    'id' => (int) $row->id,
                    'order_no' => 'RX-' . $row->id,
                    'created_at' => $row->created_at ? (string) $row->created_at : null,
                    'status' => ucfirst((string) ($row->status ?? '')),
                    'collection_method' => $row->collection_method ?: '—',
                    'pharmacy_name' => $row->pharmacy_name ?: '—',
                    'patient_name' => trim((string) ($row->patient_name ?? '')) ?: '—',
                    'patient_email' => $row->patient_email ?: '—',
                    'quantity' => (int) ($quantities[$row->id] ?? 0),
                ];
            })->values()->all();

            return [
                'data' => $data,
                'total' => $total,
                'page' => $page,
                'per_page' => $perPage,
                'error' => null,
            ];
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::ordersForMedication failed', [
                'medication' => $medicationName,
                'exception' => $e->getMessage(),
            ]);

            return [
                'data' => [],
                'total' => 0,
                'page' => $page,
                'per_page' => $perPage,
                'error' => 'Could not load orders for this medication.',
            ];
        }
    }

    /**
     * @return array<string, mixed>
     */
    public function snapshot(): array
    {
        $medications = $this->topMedications();
        $services = $this->topServices();
        $ccs = $this->ccsBookingsTotal();
        $dispensing = $this->dispensingErrorLogsTotal();
        $whatsapp = $this->whatsAppMessagesTotal();

        $errors = array_values(array_filter([
            $medications['error'],
            $services['error'],
            $ccs['error'],
            $dispensing['error'],
            $whatsapp['error'],
        ]));

        return [
            'top_medications' => $medications['data'],
            'top_services' => $services['data'],
            'ccs_bookings_total' => $ccs['value'],
            'dispensing_error_logs_total' => $dispensing['value'],
            'whatsapp' => [
                'total' => $whatsapp['total'],
                'breakdown' => $whatsapp['breakdown'],
                'note' => $whatsapp['note'],
            ],
            'errors' => $errors,
            'generated_at' => now()->format('M j, Y g:i A'),
        ];
    }

    /**
     * @param  Collection<int, object>  $rows
     * @param  array<string, string>  $extraFields
     * @return array<int, array<string, mixed>>
     */
    private function rankRows(Collection $rows, string $nameKey, array $extraFields): array
    {
        $ranked = [];

        foreach ($rows->values() as $index => $row) {
            $item = [
                'rank' => $index + 1,
                'name' => (string) ($row->{$nameKey} ?? 'Unknown'),
            ];

            foreach ($extraFields as $outputKey => $sourceKey) {
                $item[$outputKey] = $row->{$sourceKey} ?? null;
            }

            $ranked[] = $item;
        }

        return $ranked;
    }
}
