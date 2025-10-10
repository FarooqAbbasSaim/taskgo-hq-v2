<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class CustomerController extends Controller
{
    /**
     * Get customers data for the customers page
     */
    public function getCustomersData()
    {
        try {
            // First, let's check what columns actually exist in the users table
            $userColumns = DB::select('DESCRIBE users');
            \Log::info('MySQL Users table columns:', $userColumns);
            
            // Check pharmacy_subscriptions table columns
            $pharmacyColumns = DB::select('DESCRIBE pharmacy_subscriptions');
            \Log::info('MySQL Pharmacy subscriptions table columns:', $pharmacyColumns);
            
            // Get customers from the database using correct column names
            $customers = DB::table('users')
                ->where('users.user_type', 'admin')
                ->whereNotNull('users.pharmacy_subscription_id')
                ->where(function ($query) {
                    $query->where('users.status', '!=', 'deactive')
                        ->orWhereNull('users.email_verified_at');
                })
                ->leftJoin('pharmacy_subscriptions', 'users.pharmacy_subscription_id', '=', 'pharmacy_subscriptions.id')
                ->select(
                    'users.id',
                    'users.name',
                    'users.email',
                    'users.phone',
                    'users.status',
                    'users.email_verified_at',
                    'users.last_login_at',
                    'users.created_at',
                    'users.total_credit',
                    'users.openai_cost',
                    'users.sms_cost',
                    'pharmacy_subscriptions.pharmacy_name',
                    'pharmacy_subscriptions.start_date',
                    'pharmacy_subscriptions.expiry_date'
                )
                ->orderBy('users.created_at', 'desc')
                ->get();

            // Format the data for the frontend
            $formattedCustomers = $customers->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'name' => $customer->name,
                    'email' => $customer->email,
                    'phone' => $customer->phone,
                    'pharmacy_name' => $customer->pharmacy_name,
                    'credits' => $customer->total_credit ?? 0,
                    'openai_cost' => $customer->openai_cost ?? 0,
                    'sms_cost' => $customer->sms_cost ?? 0,
                    'status' => $customer->status,
                    'email_verified' => !is_null($customer->email_verified_at),
                    'last_login' => $customer->last_login_at,
                    'start_date' => $customer->start_date,
                    'expiry_date' => $customer->expiry_date,
                    'created_at' => $customer->created_at,
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $formattedCustomers
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching customers data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch customers data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get archived customers data
     */
    public function getArchivedCustomersData()
    {
        try {
            // Get archived customers from the database
            $customers = DB::table('users')
                ->where('users.user_type', 'admin')
                ->whereNotNull('users.pharmacy_subscription_id')
                ->whereNotNull('users.email_verified_at')
                ->where('users.status', 'deactive')
                ->leftJoin('pharmacy_subscriptions', 'users.pharmacy_subscription_id', '=', 'pharmacy_subscriptions.id')
                ->select(
                    'users.id',
                    'users.name',
                    'users.email',
                    'users.phone',
                    'users.status',
                    'users.email_verified_at',
                    'users.last_login_at',
                    'users.created_at',
                    'users.total_credit',
                    'users.openai_cost',
                    'users.sms_cost',
                    'pharmacy_subscriptions.pharmacy_name',
                    'pharmacy_subscriptions.start_date',
                    'pharmacy_subscriptions.expiry_date'
                )
                ->orderBy('users.created_at', 'desc')
                ->get();

            // Format the data for the frontend
            $formattedCustomers = $customers->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'name' => $customer->name,
                    'email' => $customer->email,
                    'phone' => $customer->phone,
                    'pharmacy_name' => $customer->pharmacy_name,
                    'credits' => $customer->total_credit ?? 0,
                    'openai_cost' => $customer->openai_cost ?? 0,
                    'sms_cost' => $customer->sms_cost ?? 0,
                    'status' => $customer->status,
                    'email_verified' => !is_null($customer->email_verified_at),
                    'last_login' => $customer->last_login_at,
                    'start_date' => $customer->start_date,
                    'expiry_date' => $customer->expiry_date,
                    'created_at' => $customer->created_at,
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $formattedCustomers
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching archived customers data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch archived customers data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Change customer status
     */
    public function changeCustomerStatus(Request $request)
    {
        try {
            $request->validate([
                'customer_id' => 'required|integer',
                'status' => 'required|string|in:active,deactive',
            ]);

            $customer = DB::table('users')
                ->where('id', $request->customer_id)
                ->where('user_type', 'admin')
                ->first();

            if (!$customer) {
                return response()->json([
                    'success' => false,
                    'message' => 'Customer not found'
                ], 404);
            }

            DB::table('users')
                ->where('id', $request->customer_id)
                ->update(['status' => $request->status]);

            return response()->json([
                'success' => true,
                'message' => 'Customer status updated successfully'
            ]);

        } catch (\Exception $e) {
            \Log::error('Error updating customer status: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to update customer status',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
