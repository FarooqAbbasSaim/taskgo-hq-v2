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

    /**
     * Top pharmacies by service-booking volume (all appointment statuses) in a window.
     *
     * @param  list<int>  $pharmacyIds
     * @return array{
     *     data: list<array<string, mixed>>,
     *     date_range: string,
     *     from_label: string,
     *     to_label: string,
     *     note: string|null,
     *     error: string|null
     * }
     */
    public function topPharmaciesByAppointments(
        \DateTimeInterface $from,
        \DateTimeInterface $to,
        array $pharmacyIds = [],
        int $limit = 5
    ): array {
        $fromLabel = \Carbon\Carbon::parse($from)->format('d M Y');
        $toLabel = \Carbon\Carbon::parse($to)->format('d M Y');
        $result = [
            'data' => [],
            'date_range' => $fromLabel . ' – ' . $toLabel,
            'from_label' => $fromLabel,
            'to_label' => $toLabel,
            'note' => 'All statuses. Ranked by total appointments created in this period. Pharmacy is the booking location (appointments.pharmacy_id).',
            'error' => null,
        ];

        if (! Schema::hasTable('appointments')) {
            return $result;
        }

        $statusKeys = ['confirmed', 'claimed', 'attended', 'completed', 'waitlist', 'unattended', 'cancelled'];

        try {
            $query = DB::table('appointments as a')
                ->leftJoin('pharmacies as p', 'p.id', '=', 'a.pharmacy_id')
                ->where('a.created_at', '>=', $from)
                ->where('a.created_at', '<=', $to)
                ->whereNotNull('a.pharmacy_id');

            if ($pharmacyIds !== []) {
                $query->whereIn('a.pharmacy_id', $pharmacyIds);
            }

            $rows = $query
                ->select([
                    'a.pharmacy_id',
                    DB::raw('COALESCE(MAX(p.pharmacy_name), CONCAT(\'Pharmacy \', a.pharmacy_id)) as pharmacy_name'),
                    DB::raw('COUNT(*) as total'),
                    DB::raw("SUM(CASE WHEN a.status = 'confirmed' THEN 1 ELSE 0 END) as st_confirmed"),
                    DB::raw("SUM(CASE WHEN a.status = 'claimed' THEN 1 ELSE 0 END) as st_claimed"),
                    DB::raw("SUM(CASE WHEN a.status = 'attended' THEN 1 ELSE 0 END) as st_attended"),
                    DB::raw("SUM(CASE WHEN a.status = 'completed' THEN 1 ELSE 0 END) as st_completed"),
                    DB::raw("SUM(CASE WHEN a.status = 'waitlist' THEN 1 ELSE 0 END) as st_waitlist"),
                    DB::raw("SUM(CASE WHEN a.status = 'unattended' THEN 1 ELSE 0 END) as st_unattended"),
                    DB::raw("SUM(CASE WHEN a.status = 'cancelled' THEN 1 ELSE 0 END) as st_cancelled"),
                    DB::raw("SUM(CASE WHEN a.status IS NULL OR a.status NOT IN ('confirmed','claimed','attended','completed','waitlist','unattended','cancelled') THEN 1 ELSE 0 END) as st_other"),
                ])
                ->groupBy('a.pharmacy_id')
                ->orderByDesc('total')
                ->limit($limit)
                ->get();

            $result['data'] = $rows->values()->map(static function ($row, int $index) use ($statusKeys, $fromLabel, $toLabel) {
                $statuses = [];
                foreach ($statusKeys as $status) {
                    $count = (int) ($row->{'st_' . $status} ?? 0);
                    if ($count > 0) {
                        $statuses[$status] = $count;
                    }
                }
                $other = (int) ($row->st_other ?? 0);
                if ($other > 0) {
                    $statuses['other'] = $other;
                }

                return [
                    'rank' => $index + 1,
                    'pharmacy_id' => (int) $row->pharmacy_id,
                    'pharmacy_name' => (string) ($row->pharmacy_name ?: ('Pharmacy ' . $row->pharmacy_id)),
                    'date_range' => $fromLabel . ' – ' . $toLabel,
                    'total' => (int) $row->total,
                    'statuses' => $statuses,
                ];
            })->all();

            return $result;
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::topPharmaciesByAppointments failed', [
                'exception' => $e->getMessage(),
            ]);
            $result['error'] = 'Could not load top pharmacies by appointments.';

            return $result;
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
     * Top reasons from the dispensing error "type" dropdown.
     *
     * @return array{data: array<int, array{rank: int, name: string, count: int}>, error: string|null}
     */
    public function topDispensingErrorReasons(int $limit = 3): array
    {
        if (! Schema::hasTable('dispensing_error_logs') || ! Schema::hasColumn('dispensing_error_logs', 'type')) {
            return ['data' => [], 'error' => null];
        }

        try {
            $rows = DB::table('dispensing_error_logs')
                ->whereNotNull('type')
                ->where('type', '!=', '')
                ->selectRaw('TRIM(type) as reason')
                ->selectRaw('COUNT(*) as total')
                ->groupByRaw('TRIM(type)')
                ->orderByRaw('COUNT(*) DESC')
                ->limit($limit)
                ->get();

            return [
                'data' => $this->rankRows($rows, 'reason', [
                    'count' => 'total',
                ]),
                'error' => null,
            ];
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::topDispensingErrorReasons failed', ['exception' => $e->getMessage()]);

            return ['data' => [], 'error' => 'Could not load top dispensing error reasons.'];
        }
    }

    /**
     * Platform-wide MVP opt-in counts (schools + corporates).
     *
     * @return array{
     *     schools: int|null,
     *     corporates: int|null,
     *     total: int|null,
     *     error: string|null
     * }
     */
    public function mvpOptIns(): array
    {
        $schools = null;
        $corporates = null;
        $errors = [];

        if (Schema::hasTable('mvp_school_opt_ins')) {
            try {
                $schools = (int) DB::table('mvp_school_opt_ins')->count();
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::mvpOptIns schools failed', ['exception' => $e->getMessage()]);
                $errors[] = 'Could not load school opt-in total.';
            }
        }

        if (Schema::hasTable('mvp_corporate_opt_ins')) {
            try {
                $corporates = (int) DB::table('mvp_corporate_opt_ins')->count();
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::mvpOptIns corporates failed', ['exception' => $e->getMessage()]);
                $errors[] = 'Could not load corporate opt-in total.';
            }
        }

        $total = null;
        if ($schools !== null || $corporates !== null) {
            $total = (int) ($schools ?? 0) + (int) ($corporates ?? 0);
        }

        return [
            'schools' => $schools,
            'corporates' => $corporates,
            'total' => $total,
            'error' => $errors !== [] ? implode(' ', $errors) : null,
        ];
    }

    /**
     * Platform-wide MVP registered participants by type.
     *
     * @return array{
     *     children: int|null,
     *     teachers: int|null,
     *     students: int|null,
     *     employees: int|null,
     *     total: int|null,
     *     error: string|null
     * }
     */
    public function mvpParticipants(): array
    {
        $children = null;
        $teachers = null;
        $students = null;
        $employees = null;
        $errors = [];

        if (Schema::hasTable('mvp_school_parent_forms')) {
            try {
                $hasParticipantType = Schema::hasColumn('mvp_school_parent_forms', 'participant_type');

                if ($hasParticipantType) {
                    $teachers = (int) DB::table('mvp_school_parent_forms')
                        ->where('participant_type', 'teacher')
                        ->count();
                    $students = (int) DB::table('mvp_school_parent_forms')
                        ->where('participant_type', 'student_18_plus')
                        ->count();
                    $children = (int) DB::table('mvp_school_parent_forms')
                        ->where(function ($q) {
                            $q->whereNull('participant_type')
                                ->orWhere('participant_type', '')
                                ->orWhere('participant_type', 'child');
                        })
                        ->count();
                } else {
                    $children = (int) DB::table('mvp_school_parent_forms')->count();
                    $teachers = 0;
                    $students = 0;
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::mvpParticipants school forms failed', ['exception' => $e->getMessage()]);
                $errors[] = 'Could not load school participant totals.';
            }
        }

        if (Schema::hasTable('mvp_corporate_employee_forms')) {
            try {
                $employees = (int) DB::table('mvp_corporate_employee_forms')->count();
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::mvpParticipants employees failed', ['exception' => $e->getMessage()]);
                $errors[] = 'Could not load employee participant total.';
            }
        }

        $parts = [$children, $teachers, $students, $employees];
        $total = null;
        if (array_filter($parts, static fn ($v) => $v !== null) !== []) {
            $total = (int) ($children ?? 0)
                + (int) ($teachers ?? 0)
                + (int) ($students ?? 0)
                + (int) ($employees ?? 0);
        }

        return [
            'children' => $children,
            'teachers' => $teachers,
            'students' => $students,
            'employees' => $employees,
            'total' => $total,
            'error' => $errors !== [] ? implode(' ', $errors) : null,
        ];
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

    public const PERIOD_OPTIONS = [
        '15d' => 'Last 15 days',
        '30d' => 'Last 30 days',
        '2m' => 'Last 2 months',
        '3m' => 'Last 3 months',
        'all' => 'All time',
        'custom' => 'Custom range',
    ];

    /**
     * @return list<array{id: int, name: string, organization_id: int|null}>
     */
    public function pharmacyOptions(?int $organizationId = null): array
    {
        if (! Schema::hasTable('pharmacies') || ! Schema::hasColumn('pharmacies', 'pharmacy_name')) {
            return [];
        }

        try {
            $query = DB::table('pharmacies')->orderBy('pharmacy_name');
            if (Schema::hasColumn('pharmacies', 'status')) {
                $query->where(function ($q) {
                    $q->whereNull('status')->orWhere('status', '')->orWhere('status', 'active');
                });
            }
            if ($organizationId && Schema::hasColumn('pharmacies', 'created_by')) {
                $query->where('created_by', $organizationId);
            }

            $columns = ['id', 'pharmacy_name'];
            if (Schema::hasColumn('pharmacies', 'created_by')) {
                $columns[] = 'created_by';
            }

            return $query->get($columns)
                ->map(static function ($row) {
                    $orgId = isset($row->created_by) && $row->created_by !== null && $row->created_by !== ''
                        ? (int) $row->created_by
                        : null;

                    return [
                        'id' => (int) $row->id,
                        'name' => (string) $row->pharmacy_name,
                        'organization_id' => $orgId,
                    ];
                })
                ->values()
                ->all();
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::pharmacyOptions failed', ['exception' => $e->getMessage()]);

            return [];
        }
    }

    /**
     * Customer/admin organizations that own one or more pharmacies.
     *
     * @return list<array{id: int, name: string}>
     */
    public function organizationOptions(): array
    {
        if (! Schema::hasTable('users')
            || ! Schema::hasTable('pharmacies')
            || ! Schema::hasColumn('pharmacies', 'created_by')) {
            return [];
        }

        try {
            $ownerIds = DB::table('pharmacies')
                ->whereNotNull('created_by')
                ->where('created_by', '!=', '')
                ->distinct()
                ->pluck('created_by')
                ->map(static fn ($id) => (int) $id)
                ->filter(static fn ($id) => $id > 0)
                ->values()
                ->all();

            if ($ownerIds === []) {
                return [];
            }

            $query = DB::table('users')
                ->whereIn('users.id', $ownerIds)
                ->orderBy('users.name');

            if (Schema::hasColumn('users', 'user_type')) {
                $query->where('users.user_type', 'admin');
            }

            $hasSubscriptionJoin = Schema::hasTable('pharmacy_subscriptions')
                && Schema::hasColumn('users', 'pharmacy_subscription_id');

            if ($hasSubscriptionJoin) {
                $query->leftJoin(
                    'pharmacy_subscriptions',
                    'users.pharmacy_subscription_id',
                    '=',
                    'pharmacy_subscriptions.id'
                );
            }

            $select = ['users.id', 'users.name', 'users.email'];
            if ($hasSubscriptionJoin) {
                $select[] = 'pharmacy_subscriptions.pharmacy_name as subscription_pharmacy_name';
            }

            return $query->get($select)
                ->map(static function ($row) {
                    $subscriptionName = trim((string) ($row->subscription_pharmacy_name ?? ''));
                    $name = $subscriptionName !== ''
                        ? $subscriptionName
                        : trim((string) ($row->name ?? ''));
                    if ($name === '') {
                        $name = 'Organization #' . (int) $row->id;
                    }
                    $email = trim((string) ($row->email ?? ''));
                    if ($email !== '') {
                        $name .= ' (' . $email . ')';
                    }

                    return [
                        'id' => (int) $row->id,
                        'name' => $name,
                    ];
                })
                ->values()
                ->all();
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::organizationOptions failed', ['exception' => $e->getMessage()]);

            return [];
        }
    }

    /**
     * @return list<int>
     */
    public function pharmacyIdsForOrganization(int $organizationId): array
    {
        if ($organizationId <= 0 || ! Schema::hasTable('pharmacies') || ! Schema::hasColumn('pharmacies', 'created_by')) {
            return [];
        }

        try {
            $query = DB::table('pharmacies')->where('created_by', $organizationId);
            if (Schema::hasColumn('pharmacies', 'status')) {
                $query->where(function ($q) {
                    $q->whereNull('status')->orWhere('status', '')->orWhere('status', 'active');
                });
            }

            return $query->pluck('id')
                ->map(static fn ($id) => (int) $id)
                ->values()
                ->all();
        } catch (Throwable $e) {
            return [];
        }
    }

    /**
     * @return array{id: int|null, name: string|null}
     */
    public function resolveOrganization(?int $organizationId): array
    {
        if (! $organizationId) {
            return ['id' => null, 'name' => null];
        }

        foreach ($this->organizationOptions() as $org) {
            if ((int) $org['id'] === $organizationId) {
                return ['id' => (int) $org['id'], 'name' => (string) $org['name']];
            }
        }

        return ['id' => $organizationId, 'name' => 'Organization #' . $organizationId];
    }

    /**
     * @param  array{period?: string, from?: string|null, to?: string|null}  $filters
     * @return array{
     *     period: string,
     *     period_label: string,
     *     from: \Carbon\Carbon,
     *     to: \Carbon\Carbon,
     *     from_input: string,
     *     to_input: string,
     *     from_label: string,
     *     to_label: string
     * }
     */
    public function resolvePeriod(array $filters): array
    {
        $period = (string) ($filters['period'] ?? '2m');
        if (! array_key_exists($period, self::PERIOD_OPTIONS)) {
            $period = '2m';
        }

        $to = now()->endOfDay();
        $from = now()->subMonths(2)->startOfDay();

        if ($period === '15d') {
            $from = now()->subDays(15)->startOfDay();
        } elseif ($period === '30d') {
            $from = now()->subDays(30)->startOfDay();
        } elseif ($period === '2m') {
            $from = now()->subMonths(2)->startOfDay();
        } elseif ($period === '3m') {
            $from = now()->subMonths(3)->startOfDay();
        } elseif ($period === 'all') {
            $from = \Carbon\Carbon::create(2000, 1, 1, 0, 0, 0, config('app.timezone'))->startOfDay();
        } elseif ($period === 'custom') {
            try {
                $fromRaw = trim((string) ($filters['from'] ?? ''));
                $toRaw = trim((string) ($filters['to'] ?? ''));
                if ($fromRaw !== '') {
                    $from = \Carbon\Carbon::parse($fromRaw)->startOfDay();
                }
                if ($toRaw !== '') {
                    $to = \Carbon\Carbon::parse($toRaw)->endOfDay();
                }
                if ($from->gt($to)) {
                    [$from, $to] = [$to->copy()->startOfDay(), $from->copy()->endOfDay()];
                }
            } catch (Throwable $e) {
                $period = '2m';
                $from = now()->subMonths(2)->startOfDay();
                $to = now()->endOfDay();
            }
        }

        return [
            'period' => $period,
            'period_label' => self::PERIOD_OPTIONS[$period] ?? 'Last 2 months',
            'from' => $from,
            'to' => $to,
            'from_input' => $from->format('Y-m-d'),
            'to_input' => $to->format('Y-m-d'),
            'from_label' => $from->format('M j, Y'),
            'to_label' => $to->format('M j, Y'),
        ];
    }

    /**
     * @param  array<string, mixed>  $filters
     * @return list<int>
     */
    public function normalizePharmacyIds(array $filters): array
    {
        $raw = $filters['pharmacy_ids'] ?? $filters['pharmacy_id'] ?? [];
        if (! is_array($raw)) {
            $raw = [$raw];
        }

        $ids = [];
        foreach ($raw as $value) {
            $id = (int) $value;
            if ($id > 0) {
                $ids[$id] = $id;
            }
        }

        return array_values($ids);
    }

    /**
     * @param  list<int>  $pharmacyIds
     * @return list<array{id: int, name: string, created_by: int|null}>
     */
    public function resolvePharmacies(array $pharmacyIds): array
    {
        if ($pharmacyIds === [] || ! Schema::hasTable('pharmacies')) {
            return [];
        }

        try {
            return DB::table('pharmacies')
                ->whereIn('id', $pharmacyIds)
                ->orderBy('pharmacy_name')
                ->get(['id', 'pharmacy_name', 'created_by'])
                ->map(static fn ($row) => [
                    'id' => (int) $row->id,
                    'name' => (string) $row->pharmacy_name,
                    'created_by' => $row->created_by !== null ? (int) $row->created_by : null,
                ])
                ->values()
                ->all();
        } catch (Throwable $e) {
            return [];
        }
    }

    /**
     * @param  list<array{id: int, name: string}>  $pharmacies
     */
    public function pharmacyScopeLabel(array $pharmacies): string
    {
        if ($pharmacies === []) {
            return 'All pharmacies';
        }
        if (count($pharmacies) === 1) {
            return (string) $pharmacies[0]['name'];
        }
        if (count($pharmacies) <= 3) {
            return implode(', ', array_map(static fn ($p) => (string) $p['name'], $pharmacies));
        }

        return count($pharmacies) . ' pharmacies selected';
    }

    /**
     * Period metrics with optional pharmacy scope.
     * Appointment channels are not stored separately — combined platform/pharmacy totals.
     *
     * @param  array{period?: string, from?: string|null, to?: string|null, organization_id?: int|null, pharmacy_ids?: list<int>|int, pharmacy_id?: int|list<int>|null}  $filters
     * @return array<string, mixed>
     */
    public function recentWindowMetrics(array $filters = []): array
    {
        $period = $this->resolvePeriod($filters);
        $from = $period['from'];
        $to = $period['to'];
        $organizationId = isset($filters['organization_id']) ? (int) $filters['organization_id'] : null;
        if ($organizationId !== null && $organizationId <= 0) {
            $organizationId = null;
        }
        $organization = $this->resolveOrganization($organizationId);

        $pharmacyIds = $this->normalizePharmacyIds($filters);
        if ($organizationId) {
            $orgPharmacyIds = $this->pharmacyIdsForOrganization($organizationId);
            if ($pharmacyIds === []) {
                $pharmacyIds = $orgPharmacyIds;
            } else {
                $allowed = array_flip($orgPharmacyIds);
                $pharmacyIds = array_values(array_filter(
                    $pharmacyIds,
                    static fn ($id) => isset($allowed[$id])
                ));
            }
        }

        $pharmacies = $this->resolvePharmacies($pharmacyIds);
        $pharmacyIds = array_map(static fn ($p) => (int) $p['id'], $pharmacies);
        // Org selected with zero pharmacies must not fall through to "all pharmacies".
        $forceEmptyScope = $organizationId !== null && $pharmacyIds === [];
        $pharmacyLabel = $this->pharmacyScopeLabel($pharmacies);
        if ($forceEmptyScope) {
            $pharmacyLabel = ($organization['name'] ?: 'Organization') . ' (no pharmacies)';
        } elseif ($organization['name'] && $pharmacyIds !== []) {
            $pharmacyLabel = $organization['name'] . ' · ' . $pharmacyLabel;
        }

        $empty = [
            'period' => $period['period'],
            'period_label' => $period['period_label'],
            'from' => $from->toDateTimeString(),
            'to' => $to->toDateTimeString(),
            'from_input' => $period['from_input'],
            'to_input' => $period['to_input'],
            'from_label' => $period['from_label'],
            'to_label' => $period['to_label'],
            'organization_id' => $organization['id'],
            'organization_name' => $organization['name'],
            'pharmacy_ids' => $pharmacyIds,
            'pharmacy_names' => array_map(static fn ($p) => (string) $p['name'], $pharmacies),
            'pharmacy_id' => count($pharmacyIds) === 1 ? $pharmacyIds[0] : null,
            'pharmacy_name' => $pharmacyLabel,
            'appointments' => [
                'total' => null,
                'non_cancelled' => null,
                'booked' => null,
                'attended' => null,
                'note' => 'Portal, widget, and in-clinic bookings are not stored as separate channels; figures are the combined total for the selected scope. Attended includes status claimed (and legacy attended).',
            ],
            'mvp_opt_ins' => ['schools' => null, 'corporates' => null, 'total' => null],
            'mvp_registrations' => [
                'schools' => null,
                'corporates' => null,
                'children' => null,
                'teachers' => null,
                'students' => null,
                'employees' => null,
                'total' => null,
                'note' => 'Offsite My Vaccine Portal participant registrations created in this window (children, teachers, students 18+, employees).',
            ],
            'vaccinated' => [
                'schools' => null,
                'corporates' => null,
                'total' => null,
                'note' => 'Participants with vaccination_outcome = vaccinated and updated in this window.',
            ],
            'by_service' => [
                'title' => $pharmacyLabel . ' — by service',
                'total' => null,
                'rows' => [],
                'note' => null,
            ],
            'top_pharmacies' => [
                'data' => [],
                'date_range' => $period['from_label'] . ' – ' . $period['to_label'],
                'from_label' => $period['from_label'],
                'to_label' => $period['to_label'],
                'note' => null,
                'error' => null,
            ],
            'error' => null,
        ];

        $errors = [];

        if (Schema::hasTable('appointments')) {
            try {
                if ($forceEmptyScope) {
                    $empty['appointments']['total'] = 0;
                    $empty['appointments']['non_cancelled'] = 0;
                    $empty['appointments']['booked'] = 0;
                    $empty['appointments']['attended'] = 0;
                    $empty['top_pharmacies']['data'] = [];
                } else {
                    $base = $this->appointmentsQuery($from, $to, $pharmacyIds);
                    $empty['appointments']['total'] = (int) (clone $base)->count();
                    $empty['appointments']['non_cancelled'] = (int) (clone $base)
                        ->where('appointments.status', '!=', 'cancelled')
                        ->count();
                    $empty['appointments']['booked'] = (int) (clone $base)
                        ->whereNotIn('appointments.status', ['cancelled', 'waitlist'])
                        ->count();
                    // CRM migrated attended → claimed; count both for legacy rows.
                    $empty['appointments']['attended'] = (int) (clone $base)
                        ->whereIn('appointments.status', ['claimed', 'attended'])
                        ->count();
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::recentWindowMetrics appointments failed', [
                    'exception' => $e->getMessage(),
                ]);
                $errors[] = 'Could not load recent appointment totals.';
            }

            if (! $forceEmptyScope) {
                $topPharmacies = $this->topPharmaciesByAppointments($from, $to, $pharmacyIds, 5);
                $empty['top_pharmacies'] = $topPharmacies;
                if (! empty($topPharmacies['error'])) {
                    $errors[] = $topPharmacies['error'];
                }
            }
        }

        if (Schema::hasTable('mvp_school_opt_ins')) {
            try {
                if ($forceEmptyScope) {
                    $empty['mvp_opt_ins']['schools'] = 0;
                } else {
                    $q = DB::table('mvp_school_opt_ins')
                        ->where('created_at', '>=', $from)
                        ->where('created_at', '<=', $to);
                    if ($pharmacyIds !== [] && Schema::hasColumn('mvp_school_opt_ins', 'assigned_pharmacy_id')) {
                        $q->whereIn('assigned_pharmacy_id', $pharmacyIds);
                    }
                    $empty['mvp_opt_ins']['schools'] = (int) $q->count();
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::recentWindowMetrics school opt-ins failed', [
                    'exception' => $e->getMessage(),
                ]);
                $errors[] = 'Could not load recent school opt-ins.';
            }
        }

        if (Schema::hasTable('mvp_corporate_opt_ins')) {
            try {
                if ($forceEmptyScope) {
                    $empty['mvp_opt_ins']['corporates'] = 0;
                } else {
                    $q = DB::table('mvp_corporate_opt_ins')
                        ->where('created_at', '>=', $from)
                        ->where('created_at', '<=', $to);
                    if ($pharmacyIds !== [] && Schema::hasColumn('mvp_corporate_opt_ins', 'assigned_pharmacy_id')) {
                        $q->whereIn('assigned_pharmacy_id', $pharmacyIds);
                    }
                    $empty['mvp_opt_ins']['corporates'] = (int) $q->count();
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::recentWindowMetrics corporate opt-ins failed', [
                    'exception' => $e->getMessage(),
                ]);
                $errors[] = 'Could not load recent corporate opt-ins.';
            }
        }

        $optParts = [$empty['mvp_opt_ins']['schools'], $empty['mvp_opt_ins']['corporates']];
        if (array_filter($optParts, static fn ($v) => $v !== null) !== []) {
            $empty['mvp_opt_ins']['total'] = (int) ($empty['mvp_opt_ins']['schools'] ?? 0)
                + (int) ($empty['mvp_opt_ins']['corporates'] ?? 0);
        }

        $subscriptionIds = $pharmacyIds !== [] ? $this->subscriptionIdsForPharmacies($pharmacyIds) : [];

        if (Schema::hasTable('mvp_school_parent_forms')) {
            try {
                if ($forceEmptyScope) {
                    $empty['mvp_registrations']['schools'] = 0;
                    $empty['mvp_registrations']['children'] = 0;
                    $empty['mvp_registrations']['teachers'] = 0;
                    $empty['mvp_registrations']['students'] = 0;
                } else {
                    $q = DB::table('mvp_school_parent_forms')
                        ->where('created_at', '>=', $from)
                        ->where('created_at', '<=', $to);
                    if ($pharmacyIds !== []) {
                        $this->applyPharmacyToParticipantForms($q, 'mvp_school_parent_forms', $pharmacyIds, $subscriptionIds);
                    }

                    if (Schema::hasColumn('mvp_school_parent_forms', 'participant_type')) {
                        $row = (clone $q)->selectRaw('COUNT(*) as total')
                            ->selectRaw("SUM(CASE WHEN participant_type = 'teacher' THEN 1 ELSE 0 END) as teachers")
                            ->selectRaw("SUM(CASE WHEN participant_type = 'student_18_plus' THEN 1 ELSE 0 END) as students")
                            ->selectRaw("SUM(CASE WHEN participant_type IS NULL OR participant_type = '' OR participant_type = 'child' THEN 1 ELSE 0 END) as children")
                            ->first();
                        $empty['mvp_registrations']['schools'] = (int) ($row->total ?? 0);
                        $empty['mvp_registrations']['teachers'] = (int) ($row->teachers ?? 0);
                        $empty['mvp_registrations']['students'] = (int) ($row->students ?? 0);
                        $empty['mvp_registrations']['children'] = (int) ($row->children ?? 0);
                    } else {
                        $schoolTotal = (int) $q->count();
                        $empty['mvp_registrations']['schools'] = $schoolTotal;
                        $empty['mvp_registrations']['children'] = $schoolTotal;
                        $empty['mvp_registrations']['teachers'] = 0;
                        $empty['mvp_registrations']['students'] = 0;
                    }
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::recentWindowMetrics school registrations failed', [
                    'exception' => $e->getMessage(),
                ]);
                $errors[] = 'Could not load recent school vaccine portal registrations.';
            }
        }

        if (Schema::hasTable('mvp_corporate_employee_forms')) {
            try {
                if ($forceEmptyScope) {
                    $empty['mvp_registrations']['corporates'] = 0;
                    $empty['mvp_registrations']['employees'] = 0;
                } else {
                    $q = DB::table('mvp_corporate_employee_forms')
                        ->where('created_at', '>=', $from)
                        ->where('created_at', '<=', $to);
                    if ($pharmacyIds !== []) {
                        $this->applyPharmacyToParticipantForms($q, 'mvp_corporate_employee_forms', $pharmacyIds, $subscriptionIds);
                    }
                    $employeeTotal = (int) $q->count();
                    $empty['mvp_registrations']['corporates'] = $employeeTotal;
                    $empty['mvp_registrations']['employees'] = $employeeTotal;
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::recentWindowMetrics corporate registrations failed', [
                    'exception' => $e->getMessage(),
                ]);
                $errors[] = 'Could not load recent corporate vaccine portal registrations.';
            }
        }

        $regParts = [
            $empty['mvp_registrations']['children'],
            $empty['mvp_registrations']['teachers'],
            $empty['mvp_registrations']['students'],
            $empty['mvp_registrations']['employees'],
        ];
        if (array_filter($regParts, static fn ($v) => $v !== null) !== []) {
            $empty['mvp_registrations']['total'] = (int) ($empty['mvp_registrations']['children'] ?? 0)
                + (int) ($empty['mvp_registrations']['teachers'] ?? 0)
                + (int) ($empty['mvp_registrations']['students'] ?? 0)
                + (int) ($empty['mvp_registrations']['employees'] ?? 0);
        }

        if (Schema::hasTable('mvp_school_parent_forms')
            && Schema::hasColumn('mvp_school_parent_forms', 'vaccination_outcome')) {
            try {
                if ($forceEmptyScope) {
                    $empty['vaccinated']['schools'] = 0;
                } else {
                    $q = DB::table('mvp_school_parent_forms')
                        ->where('vaccination_outcome', 'vaccinated')
                        ->where('updated_at', '>=', $from)
                        ->where('updated_at', '<=', $to);
                    if ($pharmacyIds !== []) {
                        $this->applyPharmacyToParticipantForms($q, 'mvp_school_parent_forms', $pharmacyIds, $subscriptionIds);
                    }
                    $empty['vaccinated']['schools'] = (int) $q->count();
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::recentWindowMetrics school vaccinated failed', [
                    'exception' => $e->getMessage(),
                ]);
                $errors[] = 'Could not load recent school vaccinations.';
            }
        }

        if (Schema::hasTable('mvp_corporate_employee_forms')
            && Schema::hasColumn('mvp_corporate_employee_forms', 'vaccination_outcome')) {
            try {
                if ($forceEmptyScope) {
                    $empty['vaccinated']['corporates'] = 0;
                } else {
                    $q = DB::table('mvp_corporate_employee_forms')
                        ->where('vaccination_outcome', 'vaccinated')
                        ->where('updated_at', '>=', $from)
                        ->where('updated_at', '<=', $to);
                    if ($pharmacyIds !== []) {
                        $this->applyPharmacyToParticipantForms($q, 'mvp_corporate_employee_forms', $pharmacyIds, $subscriptionIds);
                    }
                    $empty['vaccinated']['corporates'] = (int) $q->count();
                }
            } catch (Throwable $e) {
                Log::error('PlatformInsightsService::recentWindowMetrics corporate vaccinated failed', [
                    'exception' => $e->getMessage(),
                ]);
                $errors[] = 'Could not load recent corporate vaccinations.';
            }
        }

        $vaxParts = [$empty['vaccinated']['schools'], $empty['vaccinated']['corporates']];
        if (array_filter($vaxParts, static fn ($v) => $v !== null) !== []) {
            $empty['vaccinated']['total'] = (int) ($empty['vaccinated']['schools'] ?? 0)
                + (int) ($empty['vaccinated']['corporates'] ?? 0);
        }

        $byService = $forceEmptyScope
            ? [
                'title' => $pharmacyLabel . ' — by service',
                'total' => 0,
                'rows' => [],
                'note' => 'No pharmacies found for the selected organization.',
                'error' => null,
            ]
            : $this->bookingsByService($from, $to, $pharmacyIds, $pharmacyLabel);
        $empty['by_service'] = [
            'title' => $byService['title'],
            'total' => $byService['total'],
            'rows' => $byService['rows'],
            'note' => $byService['note'],
        ];
        $empty['drinagh'] = [
            'pharmacies' => $empty['pharmacy_names'],
            'total' => $byService['total'],
            'by_service' => $byService['rows'],
            'note' => $byService['note'],
        ];
        if ($byService['error']) {
            $errors[] = $byService['error'];
        }

        $empty['error'] = $errors !== [] ? implode(' ', $errors) : null;

        return $empty;
    }

    /**
     * @return array{id: int|null, name: string|null, created_by: int|null}
     */
    private function resolvePharmacy(?int $pharmacyId): array
    {
        if (! $pharmacyId) {
            return ['id' => null, 'name' => null, 'created_by' => null];
        }

        $rows = $this->resolvePharmacies([$pharmacyId]);

        return $rows[0] ?? ['id' => null, 'name' => null, 'created_by' => null];
    }

    /**
     * @param  list<int>  $pharmacyIds
     * @return list<int>
     */
    private function subscriptionIdsForPharmacies(array $pharmacyIds): array
    {
        if ($pharmacyIds === []
            || ! Schema::hasTable('pharmacy_subscriptions')
            || ! Schema::hasColumn('pharmacy_subscriptions', 'user_id')) {
            return [];
        }

        $ownerIds = [];
        foreach ($this->resolvePharmacies($pharmacyIds) as $pharmacy) {
            if (! empty($pharmacy['created_by'])) {
                $ownerIds[(int) $pharmacy['created_by']] = (int) $pharmacy['created_by'];
            }
        }

        if ($ownerIds === []) {
            return [];
        }

        try {
            return DB::table('pharmacy_subscriptions')
                ->whereIn('user_id', array_values($ownerIds))
                ->pluck('id')
                ->map(static fn ($id) => (int) $id)
                ->unique()
                ->values()
                ->all();
        } catch (Throwable $e) {
            return [];
        }
    }

    /**
     * @param  \Illuminate\Database\Query\Builder  $query
     * @param  list<int>  $pharmacyIds
     * @param  list<int>  $subscriptionIds
     */
    private function applyPharmacyToParticipantForms($query, string $table, array $pharmacyIds, array $subscriptionIds): void
    {
        if ($pharmacyIds === []) {
            return;
        }

        $query->where(function ($outer) use ($table, $pharmacyIds, $subscriptionIds) {
            if ($subscriptionIds !== [] && Schema::hasColumn($table, 'pharmacy_subscription_id')) {
                $outer->orWhereIn($table . '.pharmacy_subscription_id', $subscriptionIds);
            }

            if ($table === 'mvp_school_parent_forms'
                && Schema::hasTable('mvp_school_opt_ins')
                && Schema::hasColumn('mvp_school_opt_ins', 'assigned_pharmacy_id')
                && Schema::hasColumn('mvp_school_parent_forms', 'school_registration_id')
                && Schema::hasColumn('mvp_school_opt_ins', 'source_school_registration_id')) {
                $outer->orWhereIn('mvp_school_parent_forms.school_registration_id', function ($sub) use ($pharmacyIds) {
                    $sub->select('source_school_registration_id')
                        ->from('mvp_school_opt_ins')
                        ->whereIn('assigned_pharmacy_id', $pharmacyIds)
                        ->whereNotNull('source_school_registration_id');
                });
            }

            if ($subscriptionIds === []
                && ! (
                    $table === 'mvp_school_parent_forms'
                    && Schema::hasTable('mvp_school_opt_ins')
                )) {
                $outer->orWhereRaw('1 = 0');
            }
        });
    }

    /**
     * @param  list<int>  $pharmacyIds
     * @return \Illuminate\Database\Query\Builder
     */
    private function appointmentsQuery(\DateTimeInterface $from, \DateTimeInterface $to, array $pharmacyIds = [])
    {
        $query = DB::table('appointments')
            ->where('appointments.created_at', '>=', $from)
            ->where('appointments.created_at', '<=', $to);

        if ($pharmacyIds !== [] && Schema::hasTable('pharmacy_services')) {
            $query->whereIn('appointments.service_id', function ($sub) use ($pharmacyIds) {
                $sub->select('service_id')
                    ->from('pharmacy_services')
                    ->whereIn('pharmacy_id', $pharmacyIds);
            });
        } elseif ($pharmacyIds !== []) {
            $ownerIds = [];
            foreach ($this->resolvePharmacies($pharmacyIds) as $pharmacy) {
                if (! empty($pharmacy['created_by'])) {
                    $ownerIds[(int) $pharmacy['created_by']] = (int) $pharmacy['created_by'];
                }
            }
            if ($ownerIds !== []) {
                $query->whereIn('appointments.customer_id', array_values($ownerIds));
            } else {
                $query->whereRaw('1 = 0');
            }
        }

        return $query;
    }

    /**
     * @param  list<int>|int|null  $pharmacyIds
     * @return array{
     *     title: string,
     *     total: int|null,
     *     rows: list<array{name: string, count: int}>,
     *     note: string|null,
     *     error: string|null
     * }
     */
    public function bookingsByService(
        \DateTimeInterface $from,
        \DateTimeInterface $to,
        array|int|null $pharmacyIds = null,
        ?string $pharmacyName = null
    ): array {
        if (is_int($pharmacyIds)) {
            $pharmacyIds = $pharmacyIds > 0 ? [$pharmacyIds] : [];
        } elseif ($pharmacyIds === null) {
            $pharmacyIds = [];
        }

        $title = $pharmacyName
            ? ($pharmacyName . ' — by service')
            : ($pharmacyIds === [] ? 'All pharmacies — by service' : 'Selected pharmacies — by service');

        $result = [
            'title' => $title,
            'total' => null,
            'rows' => [],
            'note' => 'Booked appointments (excluding cancelled and waitlist) in this window.',
            'error' => null,
        ];

        if (! Schema::hasTable('appointments') || ! Schema::hasTable('services')) {
            return $result;
        }

        try {
            $query = DB::table('appointments as a')
                ->join('services as s', 's.id', '=', 'a.service_id')
                ->where('a.created_at', '>=', $from)
                ->where('a.created_at', '<=', $to)
                ->whereNotIn('a.status', ['cancelled', 'waitlist']);

            if ($pharmacyIds !== [] && Schema::hasTable('pharmacy_services')) {
                $query->whereIn('a.service_id', function ($sub) use ($pharmacyIds) {
                    $sub->select('service_id')
                        ->from('pharmacy_services')
                        ->whereIn('pharmacy_id', $pharmacyIds);
                });
            } elseif ($pharmacyIds !== []) {
                $ownerIds = [];
                foreach ($this->resolvePharmacies($pharmacyIds) as $pharmacy) {
                    if (! empty($pharmacy['created_by'])) {
                        $ownerIds[(int) $pharmacy['created_by']] = (int) $pharmacy['created_by'];
                    }
                }
                if ($ownerIds !== []) {
                    $query->whereIn('a.customer_id', array_values($ownerIds));
                } else {
                    $query->whereRaw('1 = 0');
                }
            }

            $rows = $query
                ->groupBy('s.name')
                ->orderByRaw('COUNT(*) DESC')
                ->selectRaw('s.name as service_name')
                ->selectRaw('COUNT(*) as bookings')
                ->get();

            $result['rows'] = $rows->map(static fn ($row) => [
                'name' => (string) ($row->service_name ?: 'Unknown service'),
                'count' => (int) $row->bookings,
            ])->values()->all();
            $result['total'] = (int) $rows->sum('bookings');

            return $result;
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::bookingsByService failed', [
                'exception' => $e->getMessage(),
            ]);
            $result['error'] = 'Could not load bookings by service.';

            return $result;
        }
    }

    /** @deprecated Use bookingsByService() with a pharmacy filter */
    public function drinaghBookingsByService(\DateTimeInterface|string $from): array
    {
        $fromDt = $from instanceof \DateTimeInterface
            ? $from
            : \Carbon\Carbon::parse($from);

        if (! Schema::hasTable('pharmacies')) {
            return [
                'pharmacies' => [],
                'total' => 0,
                'by_service' => [],
                'note' => 'No Drinagh pharmacies found.',
                'error' => null,
            ];
        }

        try {
            $ids = DB::table('pharmacies')
                ->where('pharmacy_name', 'like', '%Drinagh%')
                ->where('pharmacy_name', 'not like', '%TEST%')
                ->pluck('id')
                ->map(static fn ($id) => (int) $id)
                ->all();

            if ($ids === []) {
                return [
                    'pharmacies' => [],
                    'total' => 0,
                    'by_service' => [],
                    'note' => 'No Drinagh pharmacies found.',
                    'error' => null,
                ];
            }

            $rows = DB::table('appointments as a')
                ->join('services as s', 's.id', '=', 'a.service_id')
                ->whereIn('a.service_id', function ($sub) use ($ids) {
                    $sub->select('service_id')->from('pharmacy_services')->whereIn('pharmacy_id', $ids);
                })
                ->where('a.created_at', '>=', $fromDt)
                ->whereNotIn('a.status', ['cancelled', 'waitlist'])
                ->groupBy('s.name')
                ->orderByRaw('COUNT(*) DESC')
                ->selectRaw('s.name as service_name')
                ->selectRaw('COUNT(*) as bookings')
                ->get();

            return [
                'pharmacies' => DB::table('pharmacies')->whereIn('id', $ids)->orderBy('pharmacy_name')->pluck('pharmacy_name')->all(),
                'total' => (int) $rows->sum('bookings'),
                'by_service' => $rows->map(static fn ($row) => [
                    'name' => (string) ($row->service_name ?: 'Unknown service'),
                    'count' => (int) $row->bookings,
                ])->values()->all(),
                'note' => 'Booked appointments (excluding cancelled and waitlist) for Drinagh pharmacies.',
                'error' => null,
            ];
        } catch (Throwable $e) {
            Log::error('PlatformInsightsService::drinaghBookingsByService failed', [
                'exception' => $e->getMessage(),
            ]);

            return [
                'pharmacies' => [],
                'total' => null,
                'by_service' => [],
                'note' => null,
                'error' => 'Could not load Drinagh bookings by service.',
            ];
        }
    }

    /**
     * @param  array<string, mixed>  $snapshot
     */
    public function formatRecentCopyText(array $snapshot): string
    {
        $recent = $snapshot['recent'] ?? [];
        $lines = [];
        $lines[] = 'Taskgo Platform Insights — Period stats';
        $lines[] = 'Generated: ' . (string) ($snapshot['generated_at'] ?? now()->format('M j, Y g:i A'));
        $lines[] = 'Period: ' . ($recent['period_label'] ?? 'Last 2 months')
            . ' (' . ($recent['from_label'] ?? '—') . ' – ' . ($recent['to_label'] ?? '—') . ')';
        $lines[] = 'Organization: ' . ($recent['organization_name'] ?? 'All organizations');
        $lines[] = 'Pharmacy: ' . ($recent['pharmacy_name'] ?? 'All pharmacies');
        foreach ($recent['pharmacy_names'] ?? [] as $name) {
            $lines[] = '  - ' . $name;
        }
        $lines[] = '';
        $lines[] = 'Appointments booked (portal + widgets + in-clinic combined)';
        $lines[] = '  Booked (excl. cancelled & waitlist): ' . $this->fmtNum($recent['appointments']['booked'] ?? null);
        $lines[] = '  Attended only (claimed + legacy attended): ' . $this->fmtNum($recent['appointments']['attended'] ?? null);
        $lines[] = '  Non-cancelled (incl. waitlist): ' . $this->fmtNum($recent['appointments']['non_cancelled'] ?? null);
        $lines[] = '  All statuses: ' . $this->fmtNum($recent['appointments']['total'] ?? null);
        if (! empty($recent['appointments']['note'])) {
            $lines[] = '  Note: ' . $recent['appointments']['note'];
        }
        $lines[] = '';
        $lines[] = 'School / corporate opt-ins received';
        $lines[] = '  Schools: ' . $this->fmtNum($recent['mvp_opt_ins']['schools'] ?? null);
        $lines[] = '  Corporates: ' . $this->fmtNum($recent['mvp_opt_ins']['corporates'] ?? null);
        $lines[] = '  Total: ' . $this->fmtNum($recent['mvp_opt_ins']['total'] ?? null);
        $lines[] = '';
        $lines[] = 'Offsite vaccine portal registrations (participants)';
        $lines[] = '  Children: ' . $this->fmtNum($recent['mvp_registrations']['children'] ?? null);
        $lines[] = '  Teachers: ' . $this->fmtNum($recent['mvp_registrations']['teachers'] ?? null);
        $lines[] = '  Students (18+): ' . $this->fmtNum($recent['mvp_registrations']['students'] ?? null);
        $lines[] = '  Employees: ' . $this->fmtNum($recent['mvp_registrations']['employees'] ?? null);
        $lines[] = '  Total: ' . $this->fmtNum($recent['mvp_registrations']['total'] ?? null);
        $lines[] = '  (School forms: ' . $this->fmtNum($recent['mvp_registrations']['schools'] ?? null)
            . ' · Corporate forms: ' . $this->fmtNum($recent['mvp_registrations']['corporates'] ?? null) . ')';
        if (! empty($recent['mvp_registrations']['note'])) {
            $lines[] = '  Note: ' . $recent['mvp_registrations']['note'];
        }
        $lines[] = '';
        $lines[] = 'Participants vaccinated';
        $lines[] = '  Schools: ' . $this->fmtNum($recent['vaccinated']['schools'] ?? null);
        $lines[] = '  Corporates: ' . $this->fmtNum($recent['vaccinated']['corporates'] ?? null);
        $lines[] = '  Total: ' . $this->fmtNum($recent['vaccinated']['total'] ?? null);
        if (! empty($recent['vaccinated']['note'])) {
            $lines[] = '  Note: ' . $recent['vaccinated']['note'];
        }
        $lines[] = '';
        $by = $recent['by_service'] ?? [];
        $lines[] = ($by['title'] ?? 'By service') . ' — total ' . $this->fmtNum($by['total'] ?? null);
        foreach ($by['rows'] ?? [] as $row) {
            $lines[] = '  - ' . $this->fmtNum($row['count'] ?? 0) . '  ' . ($row['name'] ?? 'Unknown');
        }
        if (($by['rows'] ?? []) === [] && ($by['total'] ?? null) === 0) {
            $lines[] = '  (none in this window)';
        }
        $lines[] = '';
        $topPharmacies = $recent['top_pharmacies'] ?? [];
        $lines[] = 'Top 5 pharmacies by appointments (' . ($topPharmacies['date_range'] ?? ($recent['from_label'] ?? '—') . ' – ' . ($recent['to_label'] ?? '—')) . ')';
        foreach ($topPharmacies['data'] ?? [] as $row) {
            $statusParts = [];
            foreach ($row['statuses'] ?? [] as $status => $count) {
                $statusParts[] = str_replace('_', ' ', (string) $status) . ' ' . $this->fmtNum($count);
            }
            $lines[] = '  #' . ($row['rank'] ?? '') . ' ' . ($row['pharmacy_name'] ?? 'Unknown')
                . ' — total ' . $this->fmtNum($row['total'] ?? 0)
                . ($statusParts !== [] ? ' (' . implode(', ', $statusParts) . ')' : '');
        }
        if (($topPharmacies['data'] ?? []) === []) {
            $lines[] = '  (none in this window)';
        }

        return implode("\n", $lines) . "\n";
    }

    /**
     * @param  array<string, mixed>  $snapshot
     */
    public function formatAllTimeCopyText(array $snapshot): string
    {
        $lines = [];
        $lines[] = 'Taskgo Platform Insights — All-time snapshot';
        $lines[] = 'Generated: ' . (string) ($snapshot['generated_at'] ?? now()->format('M j, Y g:i A'));
        $lines[] = '';
        $lines[] = 'CCS services booked: ' . $this->fmtNum($snapshot['ccs_bookings_total'] ?? null);
        $lines[] = 'Dispensing error logs: ' . $this->fmtNum($snapshot['dispensing_error_logs_total'] ?? null);
        foreach ($snapshot['dispensing_error_top_reasons'] ?? [] as $row) {
            $lines[] = '  - ' . ($row['name'] ?? '') . ': ' . $this->fmtNum($row['count'] ?? 0);
        }
        $lines[] = 'WhatsApp messages (tracked): ' . $this->fmtNum($snapshot['whatsapp']['total'] ?? null);
        foreach ($snapshot['whatsapp']['breakdown'] ?? [] as $row) {
            $lines[] = '  - ' . ($row['label'] ?? '') . ': ' . $this->fmtNum($row['count'] ?? 0);
        }
        $lines[] = 'MVP opt-ins total: ' . $this->fmtNum($snapshot['mvp_opt_ins']['total'] ?? null)
            . ' (schools ' . $this->fmtNum($snapshot['mvp_opt_ins']['schools'] ?? null)
            . ', corporates ' . $this->fmtNum($snapshot['mvp_opt_ins']['corporates'] ?? null) . ')';
        $lines[] = 'MVP registered participants total: ' . $this->fmtNum($snapshot['mvp_participants']['total'] ?? null);
        $lines[] = '  Children: ' . $this->fmtNum($snapshot['mvp_participants']['children'] ?? null);
        $lines[] = '  Teachers: ' . $this->fmtNum($snapshot['mvp_participants']['teachers'] ?? null);
        $lines[] = '  Students (18+): ' . $this->fmtNum($snapshot['mvp_participants']['students'] ?? null);
        $lines[] = '  Employees: ' . $this->fmtNum($snapshot['mvp_participants']['employees'] ?? null);
        $lines[] = '';
        $lines[] = 'Top medications:';
        foreach ($snapshot['top_medications'] ?? [] as $row) {
            $lines[] = '  #' . ($row['rank'] ?? '') . ' ' . ($row['name'] ?? '')
                . ' — lines ' . $this->fmtNum($row['order_lines'] ?? 0)
                . ', orders ' . $this->fmtNum($row['orders'] ?? 0);
        }
        $lines[] = 'Top services:';
        foreach ($snapshot['top_services'] ?? [] as $row) {
            $lines[] = '  #' . ($row['rank'] ?? '') . ' ' . ($row['name'] ?? '')
                . ' (' . ($row['type'] ?: '—') . ') — ' . $this->fmtNum($row['bookings'] ?? 0);
        }

        return implode("\n", $lines) . "\n";
    }

    /**
     * @param  array<string, mixed>  $snapshot
     * @deprecated Use formatRecentCopyText / formatAllTimeCopyText
     */
    public function formatCopyText(array $snapshot): string
    {
        return trim($this->formatRecentCopyText($snapshot))
            . "\n\n"
            . trim($this->formatAllTimeCopyText($snapshot))
            . "\n";
    }

    private function fmtNum(mixed $value): string
    {
        if ($value === null) {
            return 'N/A';
        }

        return number_format((int) $value);
    }

    /**
     * @param  array{period?: string, from?: string|null, to?: string|null, organization_id?: int|null, pharmacy_ids?: list<int>|int, pharmacy_id?: int|list<int>|null}  $filters
     * @return array<string, mixed>
     */
    public function snapshot(array $filters = []): array
    {
        $medications = $this->topMedications();
        $services = $this->topServices();
        $ccs = $this->ccsBookingsTotal();
        $dispensing = $this->dispensingErrorLogsTotal();
        $dispensingReasons = $this->topDispensingErrorReasons(3);
        $whatsapp = $this->whatsAppMessagesTotal();
        $mvpOptIns = $this->mvpOptIns();
        $mvpParticipants = $this->mvpParticipants();
        $requestedPharmacyIds = $this->normalizePharmacyIds($filters);
        $recent = $this->recentWindowMetrics($filters);

        $errors = array_values(array_filter([
            $medications['error'],
            $services['error'],
            $ccs['error'],
            $dispensing['error'],
            $dispensingReasons['error'],
            $whatsapp['error'],
            $mvpOptIns['error'],
            $mvpParticipants['error'],
            $recent['error'],
        ]));

        $snapshot = [
            'top_medications' => $medications['data'],
            'top_services' => $services['data'],
            'ccs_bookings_total' => $ccs['value'],
            'dispensing_error_logs_total' => $dispensing['value'],
            'dispensing_error_top_reasons' => $dispensingReasons['data'],
            'mvp_opt_ins' => [
                'schools' => $mvpOptIns['schools'],
                'corporates' => $mvpOptIns['corporates'],
                'total' => $mvpOptIns['total'],
            ],
            'mvp_participants' => [
                'children' => $mvpParticipants['children'],
                'teachers' => $mvpParticipants['teachers'],
                'students' => $mvpParticipants['students'],
                'employees' => $mvpParticipants['employees'],
                'total' => $mvpParticipants['total'],
            ],
            'whatsapp' => [
                'total' => $whatsapp['total'],
                'breakdown' => $whatsapp['breakdown'],
                'note' => $whatsapp['note'],
            ],
            'recent' => $recent,
            'filters' => [
                'period' => $recent['period'],
                'from' => $recent['from_input'],
                'to' => $recent['to_input'],
                'organization_id' => $recent['organization_id'] ?? null,
                // Keep user-selected pharmacy checkboxes (not org-expanded scope).
                'pharmacy_ids' => $requestedPharmacyIds,
            ],
            'organization_options' => $this->organizationOptions(),
            'pharmacy_options' => $this->pharmacyOptions(),
            'period_options' => self::PERIOD_OPTIONS,
            'errors' => $errors,
            'generated_at' => now()->format('M j, Y g:i A'),
        ];

        $snapshot['copy_text_recent'] = $this->formatRecentCopyText($snapshot);
        $snapshot['copy_text_all_time'] = $this->formatAllTimeCopyText($snapshot);
        $snapshot['copy_text'] = $this->formatCopyText($snapshot);

        return $snapshot;
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
