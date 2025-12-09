<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class RxUserController extends Controller
{
    public function getRxUsersData()
    {
        try {
            $users = DB::table('rx_users')
                ->select([
                    'id',
                    'first_name',
                    'last_name',
                    'email',
                    'mobile_number',
                    'pps_number',
                    'dob',
                    'nominated_pharmacy_id',
                    'created_at'
                ])
                ->orderBy('created_at', 'desc')
                ->get();

            // Get pharmacy names for nominated pharmacies
            $pharmacyIds = $users->pluck('nominated_pharmacy_id')->filter()->unique();
            $pharmacies = [];
            
            if ($pharmacyIds->isNotEmpty()) {
                $pharmacies = DB::table('pharmacies')
                    ->whereIn('id', $pharmacyIds)
                    ->pluck('pharmacy_name', 'id')
                    ->toArray();
            }

            $usersData = $users->map(function ($user) use ($pharmacies) {
                $fullName = trim($user->first_name . ' ' . $user->last_name);
                $nominatedPharmacy = $user->nominated_pharmacy_id ? 
                    ($pharmacies[$user->nominated_pharmacy_id] ?? 'Unknown Pharmacy') : 
                    'Not Set';
                
                $dobFormatted = null;
                if ($user->dob && $user->dob !== '0000-00-00') {
                    try {
                        $dobFormatted = Carbon::parse($user->dob)->format('j F Y');
                    } catch (\Exception $e) {
                        $dobFormatted = 'Invalid Date';
                    }
                }

                return [
                    'id' => $user->id,
                    'full_name' => $fullName,
                    'email' => $user->email,
                    'phone' => $user->mobile_number,
                    'pps_no' => $user->pps_number,
                    'dob' => $dobFormatted,
                    'nominated_pharmacy' => $nominatedPharmacy,
                    'created_at' => $user->created_at
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $usersData
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching Rx users data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch Rx users data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getRxUserData($id)
    {
        try {
            $user = DB::table('rx_users')
                ->select([
                    'id',
                    'first_name',
                    'last_name',
                    'email',
                    'mobile_number',
                    'pps_number',
                    'dob',
                    'nominated_pharmacy_id',
                    'created_at'
                ])
                ->where('id', $id)
                ->first();

            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'Rx user not found'
                ], 404);
            }

            // Get pharmacy name
            $nominatedPharmacy = null;
            if ($user->nominated_pharmacy_id) {
                $pharmacy = DB::table('pharmacies')
                    ->where('id', $user->nominated_pharmacy_id)
                    ->first();
                $nominatedPharmacy = $pharmacy ? $pharmacy->pharmacy_name : 'Unknown Pharmacy';
            }

            $fullName = trim($user->first_name . ' ' . $user->last_name);
            
            $dobFormatted = null;
            if ($user->dob && $user->dob !== '0000-00-00') {
                try {
                    $dobFormatted = Carbon::parse($user->dob)->format('j F Y');
                } catch (\Exception $e) {
                    $dobFormatted = 'Invalid Date';
                }
            }

            $userData = [
                'id' => $user->id,
                'full_name' => $fullName,
                'email' => $user->email,
                'phone' => $user->mobile_number,
                'pps_no' => $user->pps_number,
                'dob' => $dobFormatted,
                'nominated_pharmacy' => $nominatedPharmacy,
                'created_at' => $user->created_at
            ];

            return response()->json([
                'success' => true,
                'data' => $userData
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching Rx user data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch Rx user data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getRxUserOrders($id)
    {
        try {
            $orders = DB::table('rx_orders')
                ->select([
                    'id',
                    'created_at',
                    'status',
                    'collection_method',
                    'nominated_pharmacy'
                ])
                ->where('user_id', $id)
                ->orderBy('created_at', 'desc')
                ->get();

            // Preload item counts from order_medicines
            $orderIds = $orders->pluck('id');
            $itemCounts = [];
            if ($orderIds->isNotEmpty()) {
                $itemCounts = DB::table('order_medicines')
                    ->select('order_id', DB::raw('COUNT(*) as cnt'))
                    ->whereIn('order_id', $orderIds)
                    ->groupBy('order_id')
                    ->pluck('cnt', 'order_id')
                    ->toArray();
            }

            $ordersData = $orders->map(function ($order) use ($itemCounts) {
                return [
                    'id' => $order->id,
                    'order_no' => 'RX-' . $order->id, // Generate order number from ID (RX-<id>)
                    'date' => Carbon::parse($order->created_at)->format('j F Y'),
                    'item_count' => $itemCounts[$order->id] ?? 0,
                    'status' => ucfirst($order->status)
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $ordersData
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching Rx user orders: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch Rx user orders',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getRxUserBookings($id)
    {
        try {
            $bookings = DB::table('appointments')
                ->select([
                    'id',
                    'service_id',
                    'date',
                    'start_time',
                    'end_time',
                    'status'
                ])
                ->where('user_id', $id)
                ->orderBy('date', 'desc')
                ->orderBy('start_time', 'desc')
                ->get();

            // Get service names
            $serviceIds = $bookings->pluck('service_id')->filter()->unique();
            $services = [];
            
            if ($serviceIds->isNotEmpty()) {
                $services = DB::table('services')
                    ->whereIn('id', $serviceIds)
                    ->pluck('name', 'id')
                    ->toArray();
            }

            $bookingsData = $bookings->map(function ($booking) use ($services) {
                $serviceName = $services[$booking->service_id] ?? 'Unknown Service';
                $date = $booking->date ? Carbon::parse($booking->date) : null;
                $startTime = $booking->start_time ? Carbon::parse($booking->start_time) : null;
                $endTime = $booking->end_time ? Carbon::parse($booking->end_time) : null;
                
                return [
                    'id' => $booking->id,
                    'service' => $serviceName,
                    'date' => $date ? $date->format('d-m-Y') : null,
                    'time' => $startTime ? $startTime->format('g:i A') : null,
                    'start_time_raw' => $booking->start_time !== null ? (string) $booking->start_time : null,
                    'end_time_raw' => $booking->end_time !== null ? (string) $booking->end_time : null,
                    'status' => ucfirst($booking->status)
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $bookingsData
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching Rx user bookings: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch Rx user bookings',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getOrderDetails($orderId)
    {
        try {
            $order = DB::table('rx_orders')
                ->select([
                    'id',
                    'user_id',
                    'nominated_pharmacy_id',
                    'status',
                    'collection_method',
                    'nominated_pharmacy',
                    'additional_info',
                    'created_at',
                    'updated_at'
                ])
                ->where('id', $orderId)
                ->first();

            if (!$order) {
                return response()->json([
                    'success' => false,
                    'message' => 'Order not found'
                ], 404);
            }

            // Get order items from order_medicines
            $orderItems = DB::table('order_medicines')
                ->select(['id', 'name', 'quantity'])
                ->where('order_id', $orderId)
                ->get();

            // Get user name
            $user = DB::table('rx_users')
                ->select(['first_name', 'last_name'])
                ->where('id', $order->user_id)
                ->first();

            // Get pharmacy name
            $pharmacyName = $order->nominated_pharmacy;
            if ($order->nominated_pharmacy_id) {
                $pharmacy = DB::table('pharmacies')
                    ->select(['pharmacy_name'])
                    ->where('id', $order->nominated_pharmacy_id)
                    ->first();
                $pharmacyName = $pharmacy ? $pharmacy->pharmacy_name : $order->nominated_pharmacy;
            }

            $orderData = [
                'id' => $order->id,
                'order_no' => 'RX-' . $order->id,
                'user_name' => $user ? trim($user->first_name . ' ' . $user->last_name) : 'Unknown User',
                'pharmacy_name' => $pharmacyName ?: 'Not Specified',
                'status' => ucfirst($order->status),
                'collection_method' => $order->collection_method ?: 'Not Specified',
                'additional_info' => $order->additional_info ?: 'No additional information',
                'created_at' => Carbon::parse($order->created_at)->format('j F Y g:i A'),
                'updated_at' => Carbon::parse($order->updated_at)->format('j F Y g:i A'),
                'items' => $orderItems->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'medication_name' => $item->name,
                        'quantity' => $item->quantity,
                        'unit_price' => 'N/A',
                        'total_price' => 'N/A'
                    ];
                })
            ];

            return response()->json([
                'success' => true,
                'data' => $orderData
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching order details: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch order details',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getBookingDetails($bookingId)
    {
        try {
            $booking = DB::table('appointments')
                ->select([
                    'id',
                    'user_id',
                    'service_id',
                    'date',
                    'start_time',
                    'end_time',
                    'status',
                    'created_at'
                ])
                ->where('id', $bookingId)
                ->first();

            if (!$booking) {
                return response()->json([
                    'success' => false,
                    'message' => 'Booking not found'
                ], 404);
            }

            // Get service details
            $service = DB::table('services')
                ->select(['name', 'description', 'duration', 'price'])
                ->where('id', $booking->service_id)
                ->first();

            // Get user name
            $user = DB::table('rx_users')
                ->select(['first_name', 'last_name'])
                ->where('id', $booking->user_id)
                ->first();

            $date = $booking->date ? Carbon::parse($booking->date) : null;
            $startTime = $booking->start_time ? Carbon::parse($booking->start_time) : null;
            $endTime = $booking->end_time ? Carbon::parse($booking->end_time) : null;

            $bookingData = [
                'id' => $booking->id,
                'user_name' => $user ? trim($user->first_name . ' ' . $user->last_name) : 'Unknown User',
                'service_name' => $service ? $service->name : 'Unknown Service',
                'service_description' => $service ? $service->description : '',
                'service_duration' => $service ? $service->duration : 0,
                'service_price' => $service ? $service->price : 0,
                'date' => $date ? $date->format('d-m-Y') : null,
                'start_time' => $startTime ? $startTime->format('g:i A') : null,
                'end_time' => $endTime ? $endTime->format('g:i A') : null,
                'status' => ucfirst($booking->status),
                'created_at' => Carbon::parse($booking->created_at)->format('j F Y g:i A')
            ];

            return response()->json([
                'success' => true,
                'data' => $bookingData
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching booking details: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch booking details',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
