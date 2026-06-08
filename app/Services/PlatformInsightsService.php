<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class PlatformInsightsService
{
    /** @return array<int, array{rank: int, name: string, order_lines: int, orders: int}> */
    public function topMedications(int $limit = 5): array
    {
        if (! Schema::hasTable('order_medicines') || ! Schema::hasTable('rx_orders')) {
            return [];
        }

        $rows = DB::table('order_medicines as om')
            ->join('rx_orders as o', 'o.id', '=', 'om.order_id')
            ->leftJoin('pharmacy_medications as pm', 'pm.id', '=', 'om.pharmacy_medication_id')
            ->whereNotIn('o.status', ['reject'])
            ->selectRaw('COALESCE(NULLIF(TRIM(pm.name), ""), NULLIF(TRIM(om.name), ""), "Unknown") as medication_name')
            ->selectRaw('COUNT(*) as order_lines')
            ->selectRaw('COUNT(DISTINCT om.order_id) as orders')
            ->groupBy(DB::raw('COALESCE(NULLIF(TRIM(pm.name), ""), NULLIF(TRIM(om.name), ""), "Unknown")'))
            ->orderByDesc('order_lines')
            ->limit($limit)
            ->get();

        return $this->rankRows($rows, 'medication_name', [
            'order_lines' => 'order_lines',
            'orders' => 'orders',
        ]);
    }

    /** @return array<int, array{rank: int, name: string, type: string|null, bookings: int}> */
    public function topServices(int $limit = 5): array
    {
        if (! Schema::hasTable('appointments') || ! Schema::hasTable('services')) {
            return [];
        }

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
            ->orderByDesc('bookings')
            ->limit($limit)
            ->get();

        return $this->rankRows($rows, 'name', [
            'type' => 'type',
            'bookings' => 'bookings',
        ]);
    }

    public function ccsBookingsTotal(): ?int
    {
        if (! Schema::hasTable('appointments') || ! Schema::hasTable('services')) {
            return null;
        }

        return (int) DB::table('appointments as a')
            ->join('services as s', 's.id', '=', 'a.service_id')
            ->where('s.type', 'ccs')
            ->where('a.status', '!=', 'cancelled')
            ->count();
    }

    public function dispensingErrorLogsTotal(): ?int
    {
        if (! Schema::hasTable('dispensing_error_logs')) {
            return null;
        }

        return (int) DB::table('dispensing_error_logs')->count();
    }

    /**
     * @return array{
     *     total: int|null,
     *     breakdown: array<int, array{label: string, count: int}>,
     *     note: string|null
     * }
     */
    public function whatsAppMessagesTotal(): array
    {
        $breakdown = [];
        $total = 0;
        $hasAnySource = false;

        if (Schema::hasTable('rx_supplement_recommendation_cycles')) {
            $count = (int) DB::table('rx_supplement_recommendation_cycles')
                ->whereNotNull('whatsapp_sent_at')
                ->count();
            $breakdown[] = [
                'label' => 'Supplement recommendation follow-ups',
                'count' => $count,
            ];
            $total += $count;
            $hasAnySource = true;
        }

        if (Schema::hasTable('patient_auth_events')) {
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
        }

        if (! $hasAnySource) {
            return [
                'total' => null,
                'breakdown' => [],
                'note' => 'No WhatsApp tracking tables are available in this database.',
            ];
        }

        return [
            'total' => $total,
            'breakdown' => $breakdown,
            'note' => 'Order status and refill WhatsApp alerts are not stored in the database; this total covers tracked outbound messages only.',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function snapshot(): array
    {
        return [
            'top_medications' => $this->topMedications(),
            'top_services' => $this->topServices(),
            'ccs_bookings_total' => $this->ccsBookingsTotal(),
            'dispensing_error_logs_total' => $this->dispensingErrorLogsTotal(),
            'whatsapp' => $this->whatsAppMessagesTotal(),
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
