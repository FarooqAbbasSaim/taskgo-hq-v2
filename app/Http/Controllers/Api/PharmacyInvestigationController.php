<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class PharmacyInvestigationController extends Controller
{
    public function getPharmacy(int $customerId, int $pharmacyId)
    {
        abort_unless(config('features.support_investigation', true), 404);

        try {
            $customer = $this->findCustomer($customerId);
            if (!$customer) {
                return $this->notFound('Customer not found');
            }

            $pharmacy = DB::table('pharmacies')
                ->where('id', $pharmacyId)
                ->where('created_by', $customerId)
                ->first();

            if (!$pharmacy) {
                return $this->notFound('Pharmacy not found for this customer');
            }

            $workingHours = $this->decodeJsonList($pharmacy->working_hours ?? null);
            $staff = $this->staffForCustomer($customerId, $pharmacyId);
            $services = $this->servicesForPharmacy($pharmacyId);
            $patients = $this->patientsForPharmacy($pharmacyId);
            $stats = $this->pharmacyStats($pharmacyId, $staff, $services, $patients);
            $orders = $this->ordersForPharmacy($pharmacyId);
            $bookings = $this->bookingsForPharmacy($pharmacyId);
            $health = $this->healthChecks($customer, $pharmacy);
            $serviceGaps = $this->unassignedPublishedServices($customerId, $pharmacyId);

            return response()->json([
                'success' => true,
                'data' => [
                    'customer' => [
                        'id' => $customer->id,
                        'name' => $customer->name,
                        'email' => $customer->email,
                        'pharmacy_name' => $customer->pharmacy_name,
                    ],
                    'pharmacy' => [
                        'id' => $pharmacy->id,
                        'pharmacy_name' => $pharmacy->pharmacy_name,
                        'address' => $pharmacy->address,
                        'town' => $pharmacy->town,
                        'county' => $pharmacy->county,
                        'eir_code' => $pharmacy->eir_code,
                        'full_address' => $this->formatAddress($pharmacy),
                        'phone' => $pharmacy->simple_phone ?: $pharmacy->phone_number,
                        'email' => $pharmacy->email,
                        'website' => $pharmacy->website,
                        'gms_number' => $pharmacy->gms_number,
                        'status' => $pharmacy->status ?: 'active',
                        'embedded_booking_enabled' => (bool) ($pharmacy->embedded_booking_enabled ?? false),
                        'working_hours' => $this->normalizeWorkingHours($workingHours),
                        'created_at' => $pharmacy->created_at,
                    ],
                    'stats' => $stats,
                    'health' => $health,
                    'staff' => $staff,
                    'services' => $services,
                    'service_gaps' => $serviceGaps,
                    'patients' => $patients,
                    'orders' => $orders,
                    'bookings' => $bookings,
                    'recent_orders' => array_slice($orders, 0, 10),
                    'recent_bookings' => array_slice($bookings, 0, 10),
                ],
            ]);
        } catch (\Exception $e) {
            \Log::error('Error fetching pharmacy investigation data: ' . $e->getMessage(), [
                'customer_id' => $customerId,
                'pharmacy_id' => $pharmacyId,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch pharmacy data',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getStaff(int $customerId, int $userId)
    {
        abort_unless(config('features.support_investigation', true), 404);

        try {
            $customer = $this->findCustomer($customerId);
            if (!$customer) {
                return $this->notFound('Customer not found');
            }

            $staffList = $this->staffForCustomer($customerId);
            $member = collect($staffList)->firstWhere('id', $userId);

            if (!$member) {
                return $this->notFound('Staff user not found for this customer');
            }

            $user = DB::table('users')->where('id', $userId)->first();
            if (!$user) {
                return $this->notFound('Staff user not found');
            }

            $pharmacyNameMap = DB::table('pharmacies')
                ->where('created_by', $customerId)
                ->pluck('pharmacy_name', 'id');

            $sopStats = ['total' => 0, 'read' => 0, 'complete' => 0];
            if (Schema::hasTable('sops_users')) {
                $sopRows = DB::table('sops_users')->where('user_id', $userId)->get();
                $sopStats['total'] = $sopRows->count();
                $sopStats['read'] = $sopRows->whereIn('status', ['read', 'complete'])->count();
                $sopStats['complete'] = $sopRows->where('status', 'complete')->count();
            }

            $policyStats = ['total' => 0, 'read' => 0, 'complete' => 0];
            if (Schema::hasTable('policies_users')) {
                $policyRows = DB::table('policies_users')->where('user_id', $userId)->get();
                $policyStats['total'] = $policyRows->count();
                $policyStats['read'] = $policyRows->whereIn('status', ['read', 'complete'])->count();
                $policyStats['complete'] = $policyRows->where('status', 'complete')->count();
            }

            $authEvents = $this->authEventsForUser($userId);

            return response()->json([
                'success' => true,
                'data' => [
                    'customer' => [
                        'id' => $customer->id,
                        'name' => $customer->name,
                        'email' => $customer->email,
                    ],
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,
                        'phone' => $user->phone,
                        'psi_number' => $user->psi_number,
                        'role' => $member['role'],
                        'user_type' => $user->user_type,
                        'status' => $user->status,
                        'pharmacies_display' => $member['pharmacies_display'],
                        'pharmacy_ids' => $member['pharmacy_ids'],
                        'pharmacy_names' => $member['pharmacy_names'],
                        'uses_crm_relief_fallback' => (bool) ($member['uses_crm_relief_fallback'] ?? false),
                        'user_pharmacy' => $user->user_pharmacy,
                        'user_pharmacy_name' => $user->user_pharmacy
                            ? ($pharmacyNameMap[$user->user_pharmacy] ?? null)
                            : null,
                        'email_verified' => !is_null($user->email_verified_at),
                        'last_login_at' => $user->last_login_at,
                        'created_at' => $user->created_at,
                        'freeze_reason' => $user->freeze_reason,
                        'archive_reason' => $user->archive_reason,
                        'healthmail_enabled' => (bool) ($user->healthmail_enabled ?? false),
                    ],
                    'stats' => [
                        'sops' => $sopStats,
                        'policies' => $policyStats,
                        'sop_read_pct' => $sopStats['total'] > 0
                            ? round(($sopStats['read'] / $sopStats['total']) * 100)
                            : null,
                        'policy_read_pct' => $policyStats['total'] > 0
                            ? round(($policyStats['read'] / $policyStats['total']) * 100)
                            : null,
                    ],
                    'auth_events' => $authEvents,
                ],
            ]);
        } catch (\Exception $e) {
            \Log::error('Error fetching staff investigation data: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch staff data',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function exportPharmacy(int $customerId, int $pharmacyId, string $type)
    {
        abort_unless(config('features.support_investigation', true), 404);

        $customer = $this->findCustomer($customerId);
        if (!$customer) {
            return $this->notFound('Customer not found');
        }

        $pharmacy = DB::table('pharmacies')
            ->where('id', $pharmacyId)
            ->where('created_by', $customerId)
            ->first();

        if (!$pharmacy) {
            return $this->notFound('Pharmacy not found for this customer');
        }

        $filename = sprintf('%s-%s-%s.csv', $pharmacy->pharmacy_name, $type, now()->format('Y-m-d'));
        $filename = preg_replace('/[^a-zA-Z0-9._-]+/', '-', $filename);

        $rows = match ($type) {
            'staff' => $this->csvStaffRows($this->staffForCustomer($customerId, $pharmacyId)),
            'patients' => $this->csvPatientRows($this->patientsForPharmacy($pharmacyId)),
            'orders' => $this->csvOrderRows($this->ordersForPharmacy($pharmacyId)),
            'bookings' => $this->csvBookingRows($this->bookingsForPharmacy($pharmacyId)),
            default => null,
        };

        if ($rows === null) {
            return response()->json(['success' => false, 'message' => 'Invalid export type'], 422);
        }

        return response()->streamDownload(function () use ($rows) {
            $out = fopen('php://output', 'w');
            foreach ($rows as $row) {
                fputcsv($out, $row);
            }
            fclose($out);
        }, $filename, ['Content-Type' => 'text/csv']);
    }

    private function findCustomer(int $customerId): ?object
    {
        $select = [
            'users.id',
            'users.name',
            'users.email',
            'users.status',
            'users.email_verified_at',
            'pharmacy_subscriptions.pharmacy_name',
            'pharmacy_subscriptions.status as subscription_status',
        ];

        if (Schema::hasColumn('users', 'healthmail_enabled')) {
            $select[] = 'users.healthmail_enabled';
        }

        return DB::table('users')
            ->where('users.id', $customerId)
            ->where('users.user_type', 'admin')
            ->whereNotNull('users.pharmacy_subscription_id')
            ->leftJoin('pharmacy_subscriptions', 'users.pharmacy_subscription_id', '=', 'pharmacy_subscriptions.id')
            ->select($select)
            ->first();
    }

    private function staffForCustomer(int $customerId, ?int $filterPharmacyId = null): array
    {
        $pharmacies = DB::table('pharmacies')
            ->where('created_by', $customerId)
            ->select('id', 'pharmacy_name')
            ->get();

        $pharmacyIds = $pharmacies->pluck('id')->all();
        $pharmacyNameMap = $pharmacies->pluck('pharmacy_name', 'id');

        $childAdminIds = DB::table('users')
            ->where('created_by', $customerId)
            ->where('user_type', 'admin')
            ->pluck('id');

        $staffUsersQuery = DB::table('users')
            ->select(
                'id',
                'name',
                'email',
                'phone',
                'user_type',
                'status',
                'user_pharmacy',
                'last_login_at',
                'created_by',
                'created_at'
            )
            ->where(function ($query) use ($customerId) {
                $query->where('id', $customerId)
                    ->orWhere('created_by', $customerId);
            });

        if ($childAdminIds->isNotEmpty()) {
            $staffUsersQuery->orWhereIn('created_by', $childAdminIds);
        }

        $staffUsers = $staffUsersQuery
            ->orderByRaw("CASE WHEN user_type = 'admin' THEN 0 ELSE 1 END")
            ->orderBy('name')
            ->get();

        $reliefAssignments = collect();
        if (Schema::hasTable('relief_pharmacist_pharmacies') && $staffUsers->isNotEmpty()) {
            $reliefAssignments = DB::table('relief_pharmacist_pharmacies')
                ->join('pharmacies', 'relief_pharmacist_pharmacies.pharmacy_id', '=', 'pharmacies.id')
                ->select(
                    'relief_pharmacist_pharmacies.user_id',
                    'relief_pharmacist_pharmacies.pharmacy_id',
                    'pharmacies.pharmacy_name'
                )
                ->whereIn('relief_pharmacist_pharmacies.user_id', $staffUsers->pluck('id'))
                ->get()
                ->groupBy('user_id');
        }

        // Multi-pharmacy staff (dispensary / fos / locum) use user_pharmacies pivot.
        $staffPharmacyAssignments = collect();
        if (Schema::hasTable('user_pharmacies') && $staffUsers->isNotEmpty()) {
            $staffPharmacyAssignments = DB::table('user_pharmacies')
                ->join('pharmacies', 'user_pharmacies.pharmacy_id', '=', 'pharmacies.id')
                ->select(
                    'user_pharmacies.user_id',
                    'user_pharmacies.pharmacy_id',
                    'pharmacies.pharmacy_name'
                )
                ->whereIn('user_pharmacies.user_id', $staffUsers->pluck('id'))
                ->orderBy('pharmacies.pharmacy_name')
                ->get()
                ->groupBy('user_id');
        }

        $multiPharmacyTypes = ['dispensary', 'fos', 'locum_pharmacist'];

        $formatted = $staffUsers->map(function ($user) use ($pharmacyIds, $pharmacyNameMap, $reliefAssignments, $staffPharmacyAssignments, $multiPharmacyTypes) {
            $role = $this->formatUserRole($user->user_type);
            $isAdmin = $user->user_type === 'admin';
            $assignedPharmacyIds = [];
            $pharmacyNames = [];
            $pharmaciesDisplay = 'Not Assigned';

            $usesCrmReliefFallback = false;

            if ($isAdmin) {
                $assignedPharmacyIds = $pharmacyIds;
                $pharmacyNames = ['All'];
                $pharmaciesDisplay = 'All';
            } elseif ($user->user_type === 'relief_pharmacist') {
                $relief = \App\Support\StaffPharmacyAssignment::forReliefPharmacist(
                    $reliefAssignments->get($user->id, []),
                    $pharmacyIds,
                    $pharmacyNameMap
                );
                $assignedPharmacyIds = $relief['pharmacy_ids'];
                $pharmacyNames = $relief['pharmacy_names'];
                $pharmaciesDisplay = $relief['pharmacies_display'];
                $usesCrmReliefFallback = $relief['uses_crm_relief_fallback'];
            } elseif (in_array($user->user_type, $multiPharmacyTypes, true)) {
                $assigned = collect($staffPharmacyAssignments->get($user->id, []));
                $assignedPharmacyIds = $assigned->pluck('pharmacy_id')->map(fn ($id) => (int) $id)->values()->all();
                $pharmacyNames = $assigned->pluck('pharmacy_name')->values()->all();

                if (empty($assignedPharmacyIds) && !empty($user->user_pharmacy) && isset($pharmacyNameMap[$user->user_pharmacy])) {
                    $assignedPharmacyIds = [(int) $user->user_pharmacy];
                    $pharmacyNames = [$pharmacyNameMap[$user->user_pharmacy]];
                }

                $pharmaciesDisplay = !empty($pharmacyNames) ? implode(', ', $pharmacyNames) : 'Not Assigned';
            } elseif (!empty($user->user_pharmacy) && isset($pharmacyNameMap[$user->user_pharmacy])) {
                $assignedPharmacyIds = [(int) $user->user_pharmacy];
                $pharmacyNames = [$pharmacyNameMap[$user->user_pharmacy]];
                $pharmaciesDisplay = $pharmacyNameMap[$user->user_pharmacy];
            }

            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
                'role' => $role,
                'user_type' => $user->user_type,
                'status' => $user->status,
                'is_admin' => $isAdmin,
                'pharmacy_ids' => $assignedPharmacyIds,
                'pharmacy_names' => $pharmacyNames,
                'pharmacies_display' => $pharmaciesDisplay,
                'uses_crm_relief_fallback' => $usesCrmReliefFallback,
                'last_login_at' => $user->last_login_at,
                'created_at' => $user->created_at,
            ];
        })->values();

        if ($filterPharmacyId !== null) {
            $formatted = $formatted->filter(function ($member) use ($filterPharmacyId) {
                if ($member['is_admin']) {
                    return true;
                }

                return in_array((int) $filterPharmacyId, array_map('intval', $member['pharmacy_ids']), true);
            })->values();
        }

        return $formatted->all();
    }

    private function servicesForPharmacy(int $pharmacyId): array
    {
        if (!Schema::hasTable('pharmacy_services')) {
            return [];
        }

        $services = DB::table('pharmacy_services')
            ->join('services', 'services.id', '=', 'pharmacy_services.service_id')
            ->where('pharmacy_services.pharmacy_id', $pharmacyId)
            ->select(
                'services.id',
                'services.name',
                'services.description',
                'services.duration',
                'services.price',
                'services.mode',
                'services.week_chart',
                'services.is_published',
                'services.is_archived',
                'services.is_24_hour_service',
                'services.one_day_service',
                'services.one_day_service_date'
            )
            ->orderBy('services.name')
            ->get();

        return $services->map(function ($service) {
            $weekChart = $this->normalizeWorkingHours($this->decodeJsonList($service->week_chart ?? null));

            return [
                'id' => $service->id,
                'name' => $service->name,
                'description' => $service->description,
                'duration' => $service->duration,
                'price' => $service->price,
                'mode' => $service->mode,
                'is_published' => (bool) $service->is_published,
                'is_archived' => (bool) $service->is_archived,
                'is_24_hour_service' => (bool) $service->is_24_hour_service,
                'one_day_service' => (bool) $service->one_day_service,
                'one_day_service_date' => $service->one_day_service_date,
                'week_chart' => $weekChart,
                'timings_summary' => $this->summarizeHours($weekChart, (bool) $service->is_24_hour_service),
            ];
        })->all();
    }

    private function patientsForPharmacy(int $pharmacyId): array
    {
        if (!Schema::hasTable('rx_users')) {
            return [];
        }

        $patients = DB::table('rx_users')
            ->where('nominated_pharmacy_id', $pharmacyId)
            ->select(
                'id',
                'first_name',
                'last_name',
                'email',
                'mobile_number',
                'pps_number',
                'dob',
                'created_at'
            )
            ->orderBy('last_name')
            ->orderBy('first_name')
            ->limit(500)
            ->get();

        return $patients->map(function ($user) {
            $dob = null;
            if ($user->dob && $user->dob !== '0000-00-00') {
                try {
                    $dob = Carbon::parse($user->dob)->format('j F Y');
                } catch (\Exception $e) {
                    $dob = $user->dob;
                }
            }

            return [
                'id' => $user->id,
                'full_name' => trim($user->first_name . ' ' . $user->last_name),
                'email' => $user->email,
                'phone' => $user->mobile_number,
                'pps_number' => $user->pps_number,
                'dob' => $dob,
                'created_at' => $user->created_at,
            ];
        })->all();
    }

    private function pharmacyStats(int $pharmacyId, array $staff, array $services, array $patients): array
    {
        $ordersCount = 0;
        if (Schema::hasTable('rx_orders')) {
            $ordersCount = DB::table('rx_orders')
                ->where('nominated_pharmacy_id', $pharmacyId)
                ->count();
        }

        $bookingsCount = 0;
        if (Schema::hasTable('appointments') && Schema::hasTable('rx_users')) {
            $bookingsCount = DB::table('appointments')
                ->join('rx_users', 'rx_users.id', '=', 'appointments.user_id')
                ->where('rx_users.nominated_pharmacy_id', $pharmacyId)
                ->count();
        }

        $publishedServices = collect($services)->where('is_published', true)->where('is_archived', false)->count();

        return [
            'staff_count' => count($staff),
            'patient_count' => count($patients),
            'service_count' => count($services),
            'published_service_count' => $publishedServices,
            'orders_count' => $ordersCount,
            'bookings_count' => $bookingsCount,
        ];
    }

    private function ordersForPharmacy(int $pharmacyId, int $limit = 100): array
    {
        if (!Schema::hasTable('rx_orders')) {
            return [];
        }

        $orders = DB::table('rx_orders')
            ->leftJoin('rx_users', 'rx_users.id', '=', 'rx_orders.user_id')
            ->where('rx_orders.nominated_pharmacy_id', $pharmacyId)
            ->select(
                'rx_orders.id',
                'rx_orders.status',
                'rx_orders.created_at',
                'rx_users.first_name',
                'rx_users.last_name',
                'rx_users.id as user_id'
            )
            ->orderByDesc('rx_orders.created_at')
            ->limit($limit)
            ->get();

        $orderIds = $orders->pluck('id');
        $itemCounts = [];
        if ($orderIds->isNotEmpty() && Schema::hasTable('order_medicines')) {
            $itemCounts = DB::table('order_medicines')
                ->select('order_id', DB::raw('COUNT(*) as cnt'))
                ->whereIn('order_id', $orderIds)
                ->groupBy('order_id')
                ->pluck('cnt', 'order_id')
                ->toArray();
        }

        return $orders->map(function ($order) use ($itemCounts) {
            return [
                'id' => $order->id,
                'order_no' => 'RX-' . $order->id,
                'patient_name' => trim(($order->first_name ?? '') . ' ' . ($order->last_name ?? '')),
                'user_id' => $order->user_id,
                'status' => ucfirst($order->status ?? ''),
                'item_count' => $itemCounts[$order->id] ?? 0,
                'created_at' => $order->created_at
                    ? Carbon::parse($order->created_at)->format('j F Y g:i A')
                    : null,
            ];
        })->all();
    }

    private function bookingsForPharmacy(int $pharmacyId, int $limit = 100): array
    {
        if (!Schema::hasTable('appointments') || !Schema::hasTable('rx_users')) {
            return [];
        }

        $bookings = DB::table('appointments')
            ->join('rx_users', 'rx_users.id', '=', 'appointments.user_id')
            ->leftJoin('services', 'services.id', '=', 'appointments.service_id')
            ->where('rx_users.nominated_pharmacy_id', $pharmacyId)
            ->select(
                'appointments.id',
                'appointments.date',
                'appointments.start_time',
                'appointments.status',
                'appointments.user_id',
                'services.name as service_name',
                'rx_users.first_name',
                'rx_users.last_name'
            )
            ->orderByDesc('appointments.date')
            ->orderByDesc('appointments.start_time')
            ->limit($limit)
            ->get();

        return $bookings->map(function ($booking) {
            $startTime = $booking->start_time ? Carbon::parse($booking->start_time) : null;

            return [
                'id' => $booking->id,
                'service' => $booking->service_name ?: 'Unknown Service',
                'patient_name' => trim(($booking->first_name ?? '') . ' ' . ($booking->last_name ?? '')),
                'user_id' => $booking->user_id,
                'date' => $booking->date ? Carbon::parse($booking->date)->format('d-m-Y') : null,
                'time' => $startTime ? $startTime->format('g:i A') : null,
                'status' => ucfirst($booking->status ?? ''),
            ];
        })->all();
    }

    private function healthChecks(object $customer, object $pharmacy): array
    {
        $hasHours = !empty($pharmacy->working_hours) && $pharmacy->working_hours !== '[]';

        return [
            ['label' => 'Pharmacy status', 'ok' => in_array($pharmacy->status ?? 'active', ['active', null, ''], true), 'value' => $pharmacy->status ?: 'active'],
            ['label' => 'Org admin verified', 'ok' => !is_null($customer->email_verified_at ?? null), 'value' => !is_null($customer->email_verified_at ?? null) ? 'Yes' : 'No'],
            ['label' => 'Org admin status', 'ok' => ($customer->status ?? '') === 'active', 'value' => $customer->status ?? 'unknown'],
            ['label' => 'Subscription', 'ok' => ($customer->subscription_status ?? '') === 'active', 'value' => $customer->subscription_status ?? 'N/A'],
            ['label' => 'Opening hours set', 'ok' => $hasHours, 'value' => $hasHours ? 'Yes' : 'No'],
            ['label' => 'Embedded booking', 'ok' => (bool) ($pharmacy->embedded_booking_enabled ?? false), 'value' => ($pharmacy->embedded_booking_enabled ?? false) ? 'Enabled' : 'Disabled'],
            ['label' => 'Healthmail', 'ok' => (bool) ($customer->healthmail_enabled ?? false), 'value' => ($customer->healthmail_enabled ?? false) ? 'Enabled' : 'Disabled'],
            ['label' => 'Pharmacy email', 'ok' => !empty($pharmacy->email), 'value' => $pharmacy->email ?: 'Not set'],
        ];
    }

    private function unassignedPublishedServices(int $customerId, int $pharmacyId): array
    {
        if (!Schema::hasTable('services') || !Schema::hasTable('pharmacy_services')) {
            return [];
        }

        $assignedIds = DB::table('pharmacy_services')
            ->where('pharmacy_id', $pharmacyId)
            ->pluck('service_id');

        $query = DB::table('services')
            ->where('is_published', 1)
            ->where('is_archived', 0)
            ->whereNotIn('id', $assignedIds);

        if (Schema::hasColumn('services', 'customer_id')) {
            $query->where(function ($q) use ($customerId) {
                $q->where('customer_id', $customerId)->orWhere('user_id', $customerId);
            });
        } else {
            $query->where('user_id', $customerId);
        }

        return $query->select('id', 'name', 'mode', 'duration', 'price')
            ->orderBy('name')
            ->limit(50)
            ->get()
            ->map(fn ($s) => [
                'id' => $s->id,
                'name' => $s->name,
                'mode' => $s->mode,
                'duration' => $s->duration,
                'price' => $s->price,
            ])
            ->all();
    }

    private function authEventsForUser(int $userId): array
    {
        if (!Schema::hasTable('crm_auth_events')) {
            return [];
        }

        return DB::table('crm_auth_events')
            ->where('user_id', $userId)
            ->orderByDesc('created_at')
            ->limit(25)
            ->get()
            ->map(function ($event) {
                $meta = is_string($event->meta ?? null) ? json_decode($event->meta, true) : ($event->meta ?? []);

                return [
                    'action' => $event->action,
                    'result' => $event->result,
                    'ip' => $event->ip,
                    'channel' => is_array($meta) ? ($meta['channel'] ?? null) : null,
                    'created_at' => $event->created_at
                        ? Carbon::parse($event->created_at)->format('j M Y g:i A')
                        : null,
                ];
            })
            ->all();
    }

    private function csvStaffRows(array $staff): array
    {
        $rows = [['Name', 'Email', 'Phone', 'Role', 'Status', 'Pharmacies', 'Last login']];
        foreach ($staff as $member) {
            $rows[] = [
                $member['name'],
                $member['email'],
                $member['phone'] ?? '',
                $member['role'],
                $member['status'],
                $member['pharmacies_display'],
                $member['last_login_at'] ?? '',
            ];
        }

        return $rows;
    }

    private function csvPatientRows(array $patients): array
    {
        $rows = [['Name', 'Email', 'Phone', 'PPS', 'DOB', 'Created']];
        foreach ($patients as $patient) {
            $rows[] = [
                $patient['full_name'],
                $patient['email'] ?? '',
                $patient['phone'] ?? '',
                $patient['pps_number'] ?? '',
                $patient['dob'] ?? '',
                $patient['created_at'] ?? '',
            ];
        }

        return $rows;
    }

    private function csvOrderRows(array $orders): array
    {
        $rows = [['Order', 'Patient', 'Status', 'Items', 'Created']];
        foreach ($orders as $order) {
            $rows[] = [
                $order['order_no'],
                $order['patient_name'],
                $order['status'],
                $order['item_count'],
                $order['created_at'] ?? '',
            ];
        }

        return $rows;
    }

    private function csvBookingRows(array $bookings): array
    {
        $rows = [['Service', 'Patient', 'Date', 'Time', 'Status']];
        foreach ($bookings as $booking) {
            $rows[] = [
                $booking['service'],
                $booking['patient_name'],
                $booking['date'] ?? '',
                $booking['time'] ?? '',
                $booking['status'],
            ];
        }

        return $rows;
    }

    private function decodeJsonList($value): array
    {
        if (is_array($value)) {
            return $value;
        }

        if (!is_string($value) || trim($value) === '') {
            return [];
        }

        $decoded = json_decode($value, true);

        return is_array($decoded) ? $decoded : [];
    }

    private function normalizeWorkingHours(array $hours): array
    {
        $dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $byDay = [];

        foreach ($hours as $entry) {
            if (!is_array($entry) || empty($entry['day'])) {
                continue;
            }
            $byDay[$entry['day']] = [
                'day' => $entry['day'],
                'is_day_off' => (bool) ($entry['is_day_off'] ?? false),
                'time_slots' => collect($entry['time_slots'] ?? [])
                    ->filter(fn ($slot) => is_array($slot))
                    ->map(fn ($slot) => [
                        'start_time' => $slot['start_time'] ?? null,
                        'end_time' => $slot['end_time'] ?? null,
                    ])
                    ->values()
                    ->all(),
            ];
        }

        return collect($dayOrder)->map(function ($day) use ($byDay) {
            return $byDay[$day] ?? [
                'day' => $day,
                'is_day_off' => true,
                'time_slots' => [],
            ];
        })->all();
    }

    private function summarizeHours(array $hours, bool $is24Hour = false): string
    {
        if ($is24Hour) {
            return '24 hours';
        }

        $parts = [];
        foreach ($hours as $day) {
            if (!empty($day['is_day_off']) || empty($day['time_slots'])) {
                continue;
            }
            $slots = collect($day['time_slots'])
                ->map(fn ($slot) => trim(($slot['start_time'] ?? '') . '–' . ($slot['end_time'] ?? '')))
                ->filter()
                ->implode(', ');
            if ($slots !== '') {
                $parts[] = substr($day['day'], 0, 3) . ' ' . $slots;
            }
        }

        return !empty($parts) ? implode('; ', $parts) : 'No slots';
    }

    private function formatAddress(object $pharmacy): string
    {
        return collect([
            $pharmacy->address,
            $pharmacy->town,
            $pharmacy->county,
            $pharmacy->eir_code,
        ])->filter()->implode(', ');
    }

    private function formatUserRole(?string $role): string
    {
        if (!$role) {
            return 'Unknown';
        }

        if ($role === 'fos') {
            return 'FOS';
        }

        return collect(explode('_', $role))
            ->map(fn ($part) => ucfirst($part))
            ->implode(' ');
    }

    private function notFound(string $message)
    {
        return response()->json([
            'success' => false,
            'message' => $message,
        ], 404);
    }
}
