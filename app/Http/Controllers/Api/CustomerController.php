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
                ->where('users.status', 'active')
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
                    'pharmacy_subscriptions.registration_number',
                    'pharmacy_subscriptions.pharmacy_name',
                    'pharmacy_subscriptions.status as subscription_status',
                    'pharmacy_subscriptions.start_date',
                    'pharmacy_subscriptions.expiry_date'
                )
                ->orderBy('users.created_at', 'desc')
                ->get();

            // Format the data for the frontend
            $formattedCustomers = $customers->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'registration_number' => $customer->registration_number ?? null,
                    'name' => $customer->name,
                    'email' => $customer->email,
                    'phone' => $customer->phone,
                    'pharmacy_name' => $customer->pharmacy_name,
                    'credits' => $customer->total_credit ?? 0,
                    'openai_cost' => $customer->openai_cost ?? 0,
                    'sms_cost' => $customer->sms_cost ?? 0,
                    'subscription_status' => $customer->subscription_status ?? 'N/A',
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
            // Archived users should have status 'deactive' AND be email verified (meaning they were active before)
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
                    'pharmacy_subscriptions.registration_number',
                    'pharmacy_subscriptions.pharmacy_name',
                    'pharmacy_subscriptions.status as subscription_status',
                    'pharmacy_subscriptions.start_date',
                    'pharmacy_subscriptions.expiry_date'
                )
                ->orderBy('users.created_at', 'desc')
                ->get();

            // Format the data for the frontend
            $formattedCustomers = $customers->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'registration_number' => $customer->registration_number ?? null,
                    'name' => $customer->name,
                    'email' => $customer->email,
                    'phone' => $customer->phone,
                    'pharmacy_name' => $customer->pharmacy_name,
                    'credits' => $customer->total_credit ?? 0,
                    'openai_cost' => $customer->openai_cost ?? 0,
                    'sms_cost' => $customer->sms_cost ?? 0,
                    'subscription_status' => $customer->subscription_status ?? 'N/A',
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
     * Get inactive customers data
     */
    public function getInactiveCustomersData()
    {
        try {
            // Get inactive customers from the database
            // Inactive users should have status 'deactive' AND NOT be email verified (meaning they never activated)
            $customers = DB::table('users')
                ->where('users.user_type', 'admin')
                ->whereNotNull('users.pharmacy_subscription_id')
                ->whereNull('users.email_verified_at')
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
                    'pharmacy_subscriptions.registration_number',
                    'pharmacy_subscriptions.pharmacy_name',
                    'pharmacy_subscriptions.status as subscription_status',
                    'pharmacy_subscriptions.start_date',
                    'pharmacy_subscriptions.expiry_date'
                )
                ->orderBy('users.created_at', 'desc')
                ->get();

            // Format the data for the frontend
            $formattedCustomers = $customers->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'registration_number' => $customer->registration_number ?? null,
                    'name' => $customer->name,
                    'email' => $customer->email,
                    'phone' => $customer->phone,
                    'pharmacy_name' => $customer->pharmacy_name,
                    'credits' => $customer->total_credit ?? 0,
                    'openai_cost' => $customer->openai_cost ?? 0,
                    'sms_cost' => $customer->sms_cost ?? 0,
                    'subscription_status' => $customer->subscription_status ?? 'N/A',
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
            \Log::error('Error fetching inactive customers data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch inactive customers data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get frozen customers data
     */
    public function getFrozenCustomersData()
    {
        try {
            // Get frozen customers from the database
            $customers = DB::table('users')
                ->where('users.user_type', 'admin')
                ->whereNotNull('users.pharmacy_subscription_id')
                ->where('users.status', 'freeze')
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
                    'pharmacy_subscriptions.registration_number',
                    'pharmacy_subscriptions.pharmacy_name',
                    'pharmacy_subscriptions.status as subscription_status',
                    'pharmacy_subscriptions.start_date',
                    'pharmacy_subscriptions.expiry_date'
                )
                ->orderBy('users.created_at', 'desc')
                ->get();

            // Format the data for the frontend
            $formattedCustomers = $customers->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'registration_number' => $customer->registration_number ?? null,
                    'name' => $customer->name,
                    'email' => $customer->email,
                    'phone' => $customer->phone,
                    'pharmacy_name' => $customer->pharmacy_name,
                    'credits' => $customer->total_credit ?? 0,
                    'openai_cost' => $customer->openai_cost ?? 0,
                    'sms_cost' => $customer->sms_cost ?? 0,
                    'subscription_status' => $customer->subscription_status ?? 'N/A',
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
            \Log::error('Error fetching frozen customers data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch frozen customers data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get individual customer data
     */
    public function getCustomerData($id)
    {
        try {
            // Get customer from the database
            $customer = DB::table('users')
                ->where('users.id', $id)
                ->where('users.user_type', 'admin')
                ->whereNotNull('users.pharmacy_subscription_id')
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
                    'pharmacy_subscriptions.registration_number',
                    'pharmacy_subscriptions.pharmacy_name',
                    'pharmacy_subscriptions.status as subscription_status',
                    'pharmacy_subscriptions.start_date',
                    'pharmacy_subscriptions.expiry_date',
                    'pharmacy_subscriptions.superintendent_name',
                    'pharmacy_subscriptions.superintendent_email',
                    'pharmacy_subscriptions.superintendent_contact',
                    'pharmacy_subscriptions.pharmacy_address'
                )
                ->first();

            if (!$customer) {
                return response()->json([
                    'success' => false,
                    'message' => 'Customer not found'
                ], 404);
            }

            // Get pharmacies from taskgo-crm database
            $pharmacies = DB::connection('mysql_crm')
                ->table('pharmacies')
                ->leftJoin('users', 'pharmacies.id', '=', 'users.user_pharmacy')
                ->select(
                    'pharmacies.id',
                    'pharmacies.pharmacy_name',
                    'pharmacies.address',
                    'pharmacies.town',
                    'pharmacies.county',
                    'pharmacies.eir_code',
                    'pharmacies.simple_phone',
                    'pharmacies.website',
                    'pharmacies.email',
                    'pharmacies.status',
                    DB::raw('COUNT(users.id) as users_count')
                )
                ->where('pharmacies.created_by', $customer->id)
                ->groupBy('pharmacies.id', 'pharmacies.pharmacy_name', 'pharmacies.address', 'pharmacies.town', 'pharmacies.county', 'pharmacies.eir_code', 'pharmacies.simple_phone', 'pharmacies.website', 'pharmacies.email', 'pharmacies.status')
                ->orderBy('pharmacies.created_at', 'desc')
                ->get();

            // Format the data for the frontend
            $formattedCustomer = [
                'id' => $customer->id,
                'registration_number' => $customer->registration_number ?? null,
                'name' => $customer->name,
                'email' => $customer->email,
                'phone' => $customer->phone,
                'pharmacy_name' => $customer->pharmacy_name,
                'credits' => $customer->total_credit ?? 0,
                'openai_cost' => $customer->openai_cost ?? 0,
                'sms_cost' => $customer->sms_cost ?? 0,
                'subscription_status' => $customer->subscription_status ?? 'N/A',
                'status' => $customer->status,
                'email_verified' => !is_null($customer->email_verified_at),
                'last_login' => $customer->last_login_at,
                'start_date' => $customer->start_date,
                'expiry_date' => $customer->expiry_date,
                'created_at' => $customer->created_at,
                'superintendent_name' => $customer->superintendent_name ?? null,
                'superintendent_email' => $customer->superintendent_email ?? null,
                'superintendent_contact' => $customer->superintendent_contact ?? null,
                'pharmacy_address' => $customer->pharmacy_address ?? null,
                'pharmacies' => $pharmacies,
            ];

            return response()->json([
                'success' => true,
                'data' => $formattedCustomer
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching customer data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch customer data',
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
                'status' => 'required|string|in:active,deactive,freeze',
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

    /**
     * Add package plan to customer
     */
    public function addPackagePlan(Request $request, $customerId)
    {
        try {
            $request->validate([
                'total_credit' => 'required|numeric|min:0',
                'openai_cost' => 'required|numeric|min:0',
                'sms_cost' => 'required|numeric|min:0',
            ]);

            $customer = DB::table('users')
                ->where('id', $customerId)
                ->where('user_type', 'admin')
                ->first();

            if (!$customer) {
                return response()->json([
                    'success' => false,
                    'message' => 'Customer not found'
                ], 404);
            }

            DB::table('users')
                ->where('id', $customerId)
                ->update([
                    'total_credit' => $request->total_credit,
                    'openai_cost' => $request->openai_cost,
                    'sms_cost' => $request->sms_cost,
                    'updated_at' => now()
                ]);

            return response()->json([
                'success' => true,
                'message' => 'Package plan added successfully'
            ]);

        } catch (\Exception $e) {
            \Log::error('Error adding package plan: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to add package plan',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update package plan for customer
     */
    public function updatePackagePlan(Request $request, $customerId)
    {
        try {
            $request->validate([
                'total_credit' => 'required|numeric|min:0',
                'openai_cost' => 'required|numeric|min:0',
                'sms_cost' => 'required|numeric|min:0',
            ]);

            $customer = DB::table('users')
                ->where('id', $customerId)
                ->where('user_type', 'admin')
                ->first();

            if (!$customer) {
                return response()->json([
                    'success' => false,
                    'message' => 'Customer not found'
                ], 404);
            }

            DB::table('users')
                ->where('id', $customerId)
                ->update([
                    'total_credit' => $request->total_credit,
                    'openai_cost' => $request->openai_cost,
                    'sms_cost' => $request->sms_cost,
                    'updated_at' => now()
                ]);

            return response()->json([
                'success' => true,
                'message' => 'Package plan updated successfully'
            ]);

        } catch (\Exception $e) {
            \Log::error('Error updating package plan: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to update package plan',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Change subscription status
     */
    public function changeSubscriptionStatus(Request $request)
    {
        try {
            $request->validate([
                'customer_id' => 'required|integer',
                'status' => 'required|string|in:active,deactive,freeze',
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

            // Update the subscription status in pharmacy_subscriptions table
            DB::table('pharmacy_subscriptions')
                ->where('id', $customer->pharmacy_subscription_id)
                ->update([
                    'status' => $request->status,
                    'updated_at' => now()
                ]);

            return response()->json([
                'success' => true,
                'message' => 'Subscription status updated successfully'
            ]);

        } catch (\Exception $e) {
            \Log::error('Error updating subscription status: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to update subscription status',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
