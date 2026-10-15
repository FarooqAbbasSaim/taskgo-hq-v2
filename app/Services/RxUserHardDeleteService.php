<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use RuntimeException;

class RxUserHardDeleteService
{
    /**
     * Preview everything that would be permanently deleted for an rx_user.
     *
     * @return array{
     *   user: array{id:int,email:?string,full_name:string,phone:?string,pps_no:?string},
     *   counts: array{orders:int,order_medicines:int,appointments:int,reminder_confirmations:int},
     *   orders: list<array{id:int,status:?string,created_at:?string,item_count:int,nominated_pharmacy:?string}>,
     *   appointments: list<array{id:int,service:?string,date:?string,start_time:?string,status:?string}>
     * }
     */
    public function preview(int $userId): array
    {
        if (! Schema::hasTable('rx_users')) {
            throw new RuntimeException('rx_users table is not available.');
        }

        $user = DB::table('rx_users')->where('id', $userId)->first();
        if (! $user) {
            throw new RuntimeException('Patient not found.');
        }

        $orderIds = [];
        $orders = collect();
        if (Schema::hasTable('rx_orders')) {
            $orders = DB::table('rx_orders')
                ->where('user_id', $userId)
                ->orderByDesc('created_at')
                ->get(['id', 'status', 'created_at', 'nominated_pharmacy']);
            $orderIds = $orders->pluck('id')->map(fn ($id) => (int) $id)->all();
        }

        $itemCounts = [];
        $orderMedicinesCount = 0;
        if ($orderIds !== [] && Schema::hasTable('order_medicines')) {
            $itemCounts = DB::table('order_medicines')
                ->select('order_id', DB::raw('COUNT(*) as cnt'))
                ->whereIn('order_id', $orderIds)
                ->groupBy('order_id')
                ->pluck('cnt', 'order_id')
                ->toArray();
            $orderMedicinesCount = (int) array_sum($itemCounts);
        }

        $reminderConfirmationsCount = 0;
        if ($orderIds !== [] && Schema::hasTable('reminder_confirmations')
            && Schema::hasColumn('reminder_confirmations', 'order_id')) {
            $reminderConfirmationsCount = (int) DB::table('reminder_confirmations')
                ->whereIn('order_id', $orderIds)
                ->count();
        }

        $appointments = collect();
        if (Schema::hasTable('appointments')) {
            $hasServices = Schema::hasTable('services') && Schema::hasColumn('appointments', 'service_id');
            $query = DB::table('appointments')->where('appointments.user_id', $userId);

            if ($hasServices) {
                $query->leftJoin('services', 'services.id', '=', 'appointments.service_id')
                    ->select([
                        'appointments.id',
                        'appointments.status',
                        'appointments.date',
                        'appointments.start_time',
                        'services.name as service_name',
                    ]);
            } else {
                $query->select([
                    'appointments.id',
                    'appointments.status',
                    'appointments.date',
                    'appointments.start_time',
                ]);
            }

            $appointments = $query
                ->orderByDesc('appointments.date')
                ->orderByDesc('appointments.start_time')
                ->get();
        }

        $firstName = $user->first_name ?? '';
        $lastName = $user->last_name ?? '';

        return [
            'user' => [
                'id' => (int) $user->id,
                'email' => $user->email ?? null,
                'full_name' => trim($firstName . ' ' . $lastName) ?: 'Unknown',
                'phone' => $user->phone ?? null,
                'pps_no' => $user->pps_no ?? null,
            ],
            'counts' => [
                'orders' => $orders->count(),
                'order_medicines' => $orderMedicinesCount,
                'appointments' => $appointments->count(),
                'reminder_confirmations' => $reminderConfirmationsCount,
            ],
            'orders' => $orders->map(function ($order) use ($itemCounts) {
                return [
                    'id' => (int) $order->id,
                    'status' => $order->status ?? null,
                    'created_at' => $order->created_at ?? null,
                    'item_count' => (int) ($itemCounts[$order->id] ?? 0),
                    'nominated_pharmacy' => $order->nominated_pharmacy ?? null,
                ];
            })->values()->all(),
            'appointments' => $appointments->map(function ($appointment) {
                return [
                    'id' => (int) $appointment->id,
                    'service' => $appointment->service_name ?? null,
                    'date' => $appointment->date ?? null,
                    'start_time' => $appointment->start_time ?? null,
                    'status' => $appointment->status ?? null,
                ];
            })->values()->all(),
        ];
    }

    /**
     * Permanently delete an rx_user and related orders / appointments.
     *
     * @return array{user_id:int,email:?string,orders_deleted:int,order_medicines_deleted:int,appointments_deleted:int}
     */
    public function delete(int $userId): array
    {
        if (! Schema::hasTable('rx_users')) {
            throw new RuntimeException('rx_users table is not available.');
        }

        $user = DB::table('rx_users')->where('id', $userId)->first();
        if (! $user) {
            throw new RuntimeException('Patient not found.');
        }

        return DB::transaction(function () use ($userId, $user) {
            $ordersDeleted = 0;
            $orderMedicinesDeleted = 0;
            $appointmentsDeleted = 0;

            $orderIds = [];
            if (Schema::hasTable('rx_orders')) {
                $orderIds = DB::table('rx_orders')
                    ->where('user_id', $userId)
                    ->pluck('id')
                    ->map(fn ($id) => (int) $id)
                    ->all();
            }

            if ($orderIds !== [] && Schema::hasTable('order_medicines')) {
                $orderMedicinesDeleted = DB::table('order_medicines')
                    ->whereIn('order_id', $orderIds)
                    ->delete();
            }

            if ($orderIds !== [] && Schema::hasTable('reminder_confirmations')) {
                if (Schema::hasColumn('reminder_confirmations', 'order_id')) {
                    DB::table('reminder_confirmations')->whereIn('order_id', $orderIds)->delete();
                }
            }

            if (Schema::hasTable('rx_orders')) {
                $ordersDeleted = DB::table('rx_orders')->where('user_id', $userId)->delete();
            }

            if (Schema::hasTable('appointments')) {
                $appointmentsDeleted = DB::table('appointments')->where('user_id', $userId)->delete();
            }

            DB::table('rx_users')->where('id', $userId)->delete();

            $summary = [
                'user_id' => $userId,
                'email' => $user->email ?? null,
                'orders_deleted' => (int) $ordersDeleted,
                'order_medicines_deleted' => (int) $orderMedicinesDeleted,
                'appointments_deleted' => (int) $appointmentsDeleted,
            ];

            Log::info('HQ hard-deleted rx_user profile', $summary);

            return $summary;
        });
    }
}
