<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CustomerPermissionController extends Controller
{
    public function assignAllPermissionsToCustomer(Request $request)
    {
        try {
            $request->validate([
                'customer_id' => 'required|integer',
                'status' => 'required|string|in:active,trial',
            ]);

            $user = User::find($request->customer_id);

            if (!$user) {
                return response()->json(['success' => false, 'message' => 'User not found'], 404);
            }

            if (!$user->subscription) {
                return response()->json(['success' => false, 'message' => 'User subscription not found'], 404);
            }

            $permissions = [];

            if ($user->subscription->status != 'active') {
                // Give all permissions when activating
                $permissions = Permission::all()->pluck('id')->toArray();
                
                // Update subscription to active
                $user->subscription->status = 'active';
                $user->subscription->start_date = date('Y-m-d');
                $newDate = date('Y-m-d', strtotime(date('Y-m-d') . ' + 1 years'));
                $user->subscription->expiry_date = $newDate;
                $user->subscription->save();

            } elseif ($user->subscription->status == 'active') {
                // Give limited permissions when deactivating
                $permissions = Permission::whereIn('category', ['sops_policies', 'users', 'profile'])
                    ->orWhereIn('name', ['view_pharmacist_duty_log', 'view_fridge_temperature', 'view_bookmarks', 'view_pharmacies'])
                    ->get()->pluck('id')->toArray();
                
                // Update subscription to trial
                $user->subscription->status = 'trial';
                $user->subscription->save();

                // Get all users created by this user (if created_by field exists)
                if (Schema::hasColumn('users', 'created_by')) {
                    $createdUsers = User::where('created_by', $user->id)->get();

                    // Sync permissions for all created users
                    foreach ($createdUsers as $createdUser) {
                        $createdUser->permissions()->sync($permissions);
                    }
                }
            }

            // Sync permissions for the main user
            $user->permissions()->sync($permissions);

            return response()->json(['success' => true, 'message' => 'Permissions updated successfully']);

        } catch (\Exception $e) {
            \Log::error('Error updating permissions: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'Failed to update permissions', 'error' => $e->getMessage()], 500);
        }
    }
}
