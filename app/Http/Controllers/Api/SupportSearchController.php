<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Schema;

class SupportSearchController extends Controller
{
    public function search(Request $request)
    {
        abort_unless(config('features.support_search', true), 404);

        $query = trim((string) $request->get('q', ''));
        if (mb_strlen($query) < 2) {
            return response()->json([
                'success' => true,
                'data' => [],
            ]);
        }

        $like = '%' . str_replace(['%', '_'], ['\\%', '\\_'], $query) . '%';
        $results = [];

        if (Schema::hasTable('users')) {
            $customers = DB::table('users')
                ->leftJoin('pharmacy_subscriptions', 'users.pharmacy_subscription_id', '=', 'pharmacy_subscriptions.id')
                ->where('users.user_type', 'admin')
                ->whereNotNull('users.pharmacy_subscription_id')
                ->where(function ($q) use ($like) {
                    $q->where('users.name', 'like', $like)
                        ->orWhere('users.email', 'like', $like)
                        ->orWhere('users.phone', 'like', $like)
                        ->orWhere('pharmacy_subscriptions.pharmacy_name', 'like', $like)
                        ->orWhere('pharmacy_subscriptions.registration_number', 'like', $like);
                })
                ->select('users.id', 'users.name', 'users.email', 'pharmacy_subscriptions.pharmacy_name')
                ->limit(8)
                ->get();

            foreach ($customers as $row) {
                $results[] = [
                    'type' => 'customer',
                    'label' => $row->name,
                    'meta' => $row->pharmacy_name ?: $row->email,
                    'url' => '/admin/customers/' . $row->id,
                ];
            }
        }

        if (Schema::hasTable('pharmacies')) {
            $pharmacies = DB::table('pharmacies')
                ->where(function ($q) use ($like) {
                    $q->where('pharmacy_name', 'like', $like)
                        ->orWhere('email', 'like', $like)
                        ->orWhere('simple_phone', 'like', $like)
                        ->orWhere('address', 'like', $like);
                })
                ->select('id', 'pharmacy_name', 'created_by', 'email')
                ->limit(8)
                ->get();

            foreach ($pharmacies as $row) {
                $results[] = [
                    'type' => 'pharmacy',
                    'label' => $row->pharmacy_name,
                    'meta' => $row->email ?: 'Pharmacy',
                    'url' => '/admin/customers/' . $row->created_by . '/pharmacies/' . $row->id,
                ];
            }
        }

        if (Schema::hasTable('users')) {
            $staff = DB::table('users')
                ->where('user_type', '!=', 'admin')
                ->where(function ($q) use ($like) {
                    $q->where('name', 'like', $like)
                        ->orWhere('email', 'like', $like)
                        ->orWhere('phone', 'like', $like);
                })
                ->select('id', 'name', 'email', 'created_by', 'user_type')
                ->limit(8)
                ->get();

            foreach ($staff as $row) {
                $orgAdmin = $this->resolveOrgAdminId((int) ($row->created_by ?: $row->id));
                $results[] = [
                    'type' => 'staff',
                    'label' => $row->name,
                    'meta' => $row->email,
                    'url' => '/admin/customers/' . $orgAdmin . '/staff/' . $row->id,
                ];
            }
        }

        if (Schema::hasTable('rx_users')) {
            $patients = DB::table('rx_users')
                ->where(function ($q) use ($like) {
                    $q->where('first_name', 'like', $like)
                        ->orWhere('last_name', 'like', $like)
                        ->orWhere('email', 'like', $like)
                        ->orWhere('mobile_number', 'like', $like)
                        ->orWhere('pps_number', 'like', $like);
                })
                ->select('id', 'first_name', 'last_name', 'email')
                ->limit(8)
                ->get();

            foreach ($patients as $row) {
                $results[] = [
                    'type' => 'patient',
                    'label' => trim($row->first_name . ' ' . $row->last_name),
                    'meta' => $row->email,
                    'url' => '/admin/rx-users/' . $row->id,
                ];
            }
        }

        if (Schema::hasTable('rx_orders') && preg_match('/^(?:rx-?)?(\d+)$/i', $query, $matches)) {
            $orderId = (int) $matches[1];
            $order = DB::table('rx_orders')
                ->join('rx_users', 'rx_users.id', '=', 'rx_orders.user_id')
                ->where('rx_orders.id', $orderId)
                ->select(
                    'rx_orders.id',
                    'rx_orders.status',
                    'rx_users.first_name',
                    'rx_users.last_name',
                    'rx_users.id as user_id'
                )
                ->first();

            if ($order) {
                array_unshift($results, [
                    'type' => 'order',
                    'label' => 'Order RX-' . $order->id,
                    'meta' => trim($order->first_name . ' ' . $order->last_name) . ' · ' . ucfirst($order->status),
                    'url' => '/admin/rx-users/' . $order->user_id,
                ]);
            }
        }

        return response()->json([
            'success' => true,
            'data' => array_slice($results, 0, 20),
        ]);
    }

    private function resolveOrgAdminId(int $userId): int
    {
        $user = DB::table('users')->where('id', $userId)->first();
        if (!$user) {
            return $userId;
        }

        if ($user->user_type === 'admin' && $user->pharmacy_subscription_id) {
            return (int) $user->id;
        }

        if ($user->created_by) {
            return $this->resolveOrgAdminId((int) $user->created_by);
        }

        return $userId;
    }
}
