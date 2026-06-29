<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class RxUserController extends Controller
{
    private function normalizeGender(?string $gender): ?string
    {
        if ($gender === null || trim($gender) === '') {
            return null;
        }

        $normalized = strtolower(trim($gender));

        return in_array($normalized, ['male', 'female', 'other'], true) ? $normalized : null;
    }

    private function formatRxUserData(object $user, ?object $pharmacy = null): array
    {
        $fullName = trim($user->first_name . ' ' . $user->last_name);
        $gender = property_exists($user, 'gender') ? $this->normalizeGender($user->gender) : null;
        $homeAddress = property_exists($user, 'home_address') ? $user->home_address : null;
        $notResidingInIreland = property_exists($user, 'not_residing_in_ireland') ? (bool) $user->not_residing_in_ireland : false;
        $consentToTransfer = property_exists($user, 'consent_to_transfer_prescriptions') ? (bool) $user->consent_to_transfer_prescriptions : false;
        $updatesOffers = property_exists($user, 'updates_offers') ? (bool) $user->updates_offers : false;
        $privacyPolicy = property_exists($user, 'privacy_policy') ? (bool) $user->privacy_policy : false;

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
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'gender' => $gender,
            'email' => $user->email,
            'pending_email' => property_exists($user, 'pending_email') ? $user->pending_email : null,
            'pending_email_verification_expires_at' => property_exists($user, 'pending_email_verification_expires_at') && $user->pending_email_verification_expires_at
                ? Carbon::parse($user->pending_email_verification_expires_at)->toIso8601String()
                : null,
            'phone' => $user->mobile_number,
            'phone_raw' => $user->mobile_number,
            'pps_no' => $user->pps_number,
            'pps_number' => $user->pps_number,
            'dob' => $dobFormatted,
            'dob_raw' => $user->dob && $user->dob !== '0000-00-00' ? $user->dob : null,
            'home_address' => $homeAddress,
            'not_residing_in_ireland' => $notResidingInIreland,
            'nominated_pharmacy' => $pharmacy ? $pharmacy->pharmacy_name : null,
            'nominated_pharmacy_id' => $user->nominated_pharmacy_id,
            'consent_to_transfer_prescriptions' => $consentToTransfer,
            'updates_offers' => $updatesOffers,
            'privacy_policy' => $privacyPolicy,
            'created_at' => $user->created_at,
        ];
    }

    public function getActivePharmacies()
    {
        try {
            $pharmacies = DB::table('pharmacies')
                ->select(['id', 'pharmacy_name'])
                ->where(function ($query) {
                    $query->whereNull('status')
                        ->orWhere('status', '!=', 'archived');
                })
                ->orderBy('pharmacy_name')
                ->get();

            return response()->json([
                'success' => true,
                'data' => $pharmacies,
            ]);
        } catch (\Exception $e) {
            \Log::error('Error fetching active pharmacies: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch active pharmacies',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

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
                    'full_name' => trim($user->first_name . ' ' . $user->last_name),
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
                    'gender',
                    'email',
                    'pending_email',
                    'pending_email_verification_expires_at',
                    'mobile_number',
                    'pps_number',
                    'dob',
                    'home_address',
                    'not_residing_in_ireland',
                    'nominated_pharmacy_id',
                    'consent_to_transfer_prescriptions',
                    'updates_offers',
                    'privacy_policy',
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

            $pharmacy = null;
            if ($user->nominated_pharmacy_id) {
                $pharmacy = DB::table('pharmacies')
                    ->select(['id', 'pharmacy_name', 'status'])
                    ->where('id', $user->nominated_pharmacy_id)
                    ->first();
            }

            return response()->json([
                'success' => true,
                'data' => $this->formatRxUserData($user, $pharmacy)
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

    public function updateRxUser(Request $request, $id)
    {
        try {
            $user = DB::table('rx_users')
                ->where('id', $id)
                ->first();

            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'Rx user not found'
                ], 404);
            }

            $validated = $request->validate([
                'first_name' => ['required', 'string', 'max:50'],
                'last_name' => ['required', 'string', 'max:50'],
                'gender' => ['required', 'string', Rule::in(['male', 'female', 'other'])],
                'dob' => ['required', 'date', 'before_or_equal:today'],
                'email' => ['required', 'email', 'max:100', Rule::unique('rx_users', 'email')->ignore($id)],
                'mobile_number' => ['required', 'string', 'max:20'],
                'pps_number' => ['nullable', 'string', 'max:255'],
                'home_address' => ['required', 'string'],
                'not_residing_in_ireland' => ['required', 'boolean'],
                'nominated_pharmacy_id' => ['nullable', 'integer'],
                'consent_to_transfer_prescriptions' => ['required', 'boolean'],
                'updates_offers' => ['required', 'boolean'],
                'privacy_policy' => ['required', 'boolean'],
            ]);

            $selectedPharmacy = null;
            if (!empty($validated['nominated_pharmacy_id'])) {
                $selectedPharmacy = DB::table('pharmacies')
                    ->select(['id', 'pharmacy_name', 'status'])
                    ->where('id', $validated['nominated_pharmacy_id'])
                    ->where(function ($query) {
                        $query->whereNull('status')
                            ->orWhere('status', '!=', 'archived');
                    })
                    ->first();

                if (!$selectedPharmacy) {
                    if ((string) $validated['nominated_pharmacy_id'] === (string) $user->nominated_pharmacy_id) {
                        $selectedPharmacy = DB::table('pharmacies')
                            ->select(['id', 'pharmacy_name', 'status'])
                            ->where('id', $validated['nominated_pharmacy_id'])
                            ->first();
                    } else {
                        throw ValidationException::withMessages([
                            'nominated_pharmacy_id' => ['Please select an active nominated pharmacy.'],
                        ]);
                    }
                }
            }

            $currentEmail = strtolower(trim((string) $user->email));
            $requestedEmail = strtolower(trim($validated['email']));
            $emailChanged = $requestedEmail !== $currentEmail;

            $emailPayload = [
                'email' => $currentEmail ?: $user->email,
            ];

            $responseMessage = 'Patient profile updated successfully.';

            if ($emailChanged) {
                $plainToken = Str::random(64);
                $emailPayload['pending_email'] = $requestedEmail;
                $emailPayload['pending_email_verification_token'] = hash('sha256', $plainToken);
                $emailPayload['pending_email_verification_expires_at'] = now()->addHours(24);
                $responseMessage = 'Patient profile updated. A verification link has been sent to the new email address and must be confirmed within 24 hours.';
            }

            $payload = [
                'first_name' => trim($validated['first_name']),
                'last_name' => trim($validated['last_name']),
                'gender' => $this->normalizeGender($validated['gender']),
                'dob' => $validated['dob'],
                'mobile_number' => trim($validated['mobile_number']),
                'pps_number' => filled($validated['pps_number'] ?? null) ? trim($validated['pps_number']) : null,
                'home_address' => trim($validated['home_address']),
                'not_residing_in_ireland' => (int) $validated['not_residing_in_ireland'],
                'nominated_pharmacy_id' => $selectedPharmacy?->id,
                'nominated_pharmacy' => $selectedPharmacy?->pharmacy_name,
                'consent_to_transfer_prescriptions' => (int) $validated['consent_to_transfer_prescriptions'],
                'updates_offers' => (int) $validated['updates_offers'],
                'privacy_policy' => (int) $validated['privacy_policy'],
                'updated_at' => now(),
            ];

            $payload = array_merge($payload, $emailPayload);

            DB::table('rx_users')
                ->where('id', $id)
                ->update($payload);

            if ($emailChanged) {
                $emailSent = $this->sendPendingEmailVerification(
                    userId: (int) $id,
                    firstName: trim($validated['first_name']),
                    currentEmail: $currentEmail,
                    newEmail: $requestedEmail,
                    plainToken: $plainToken
                );

                if (!$emailSent) {
                    DB::table('rx_users')
                        ->where('id', $id)
                        ->update([
                            'pending_email' => null,
                            'pending_email_verification_token' => null,
                            'pending_email_verification_expires_at' => null,
                        ]);

                    return response()->json([
                        'success' => false,
                        'message' => 'The profile was updated, but the verification email could not be sent. Please edit the email again to retry.',
                        'data' => null,
                    ], 500);
                }
            }

            $updatedUser = DB::table('rx_users')
                ->select([
                    'id',
                    'first_name',
                    'last_name',
                    'gender',
                    'email',
                    'pending_email',
                    'pending_email_verification_expires_at',
                    'mobile_number',
                    'pps_number',
                    'dob',
                    'home_address',
                    'not_residing_in_ireland',
                    'nominated_pharmacy_id',
                    'consent_to_transfer_prescriptions',
                    'updates_offers',
                    'privacy_policy',
                    'created_at',
                ])
                ->where('id', $id)
                ->first();

            return response()->json([
                'success' => true,
                'message' => $responseMessage,
                'data' => $this->formatRxUserData($updatedUser, $selectedPharmacy),
            ]);
        } catch (ValidationException $e) {
            throw $e;
        } catch (\Exception $e) {
            \Log::error('Error updating Rx user: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to update patient profile',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function verifyPendingEmailChange($id, $token)
    {
        try {
            $user = DB::table('rx_users')
                ->select([
                    'id',
                    'first_name',
                    'last_name',
                    'email',
                    'pending_email',
                    'pending_email_verification_token',
                    'pending_email_verification_expires_at',
                ])
                ->where('id', $id)
                ->first();

            if (!$user || !$user->pending_email || !$user->pending_email_verification_token) {
                return response()->view('rx-user-email-change-status', [
                    'title' => 'Email Change Link Invalid',
                    'status' => 'invalid',
                    'heading' => 'This verification link is not valid.',
                    'message' => 'No pending email change was found for this patient.',
                ], 404);
            }

            $hashedToken = hash('sha256', $token);
            $isExpired = !$user->pending_email_verification_expires_at || Carbon::parse($user->pending_email_verification_expires_at)->isPast();

            if (!hash_equals($user->pending_email_verification_token, $hashedToken)) {
                return response()->view('rx-user-email-change-status', [
                    'title' => 'Email Change Link Invalid',
                    'status' => 'invalid',
                    'heading' => 'This verification link is not valid.',
                    'message' => 'Please request a new email change from Taskgo HQ.',
                ], 404);
            }

            if ($isExpired) {
                DB::table('rx_users')
                    ->where('id', $id)
                    ->update([
                        'pending_email' => null,
                        'pending_email_verification_token' => null,
                        'pending_email_verification_expires_at' => null,
                    ]);

                return response()->view('rx-user-email-change-status', [
                    'title' => 'Email Change Link Expired',
                    'status' => 'expired',
                    'heading' => 'This verification link has expired.',
                    'message' => 'The patient email remains unchanged. Please ask Taskgo HQ to submit the email change again.',
                ], 410);
            }

            DB::table('rx_users')
                ->where('id', $id)
                ->update([
                    'email' => $user->pending_email,
                    'pending_email' => null,
                    'pending_email_verification_token' => null,
                    'pending_email_verification_expires_at' => null,
                    'updated_at' => now(),
                ]);

            return response()->view('rx-user-email-change-status', [
                'title' => 'Email Address Verified',
                'status' => 'success',
                'heading' => 'The email address has been verified.',
                'message' => 'The patient profile now uses the new email address.',
            ]);
        } catch (\Exception $e) {
            \Log::error('Error verifying pending Rx user email change: ' . $e->getMessage());

            return response()->view('rx-user-email-change-status', [
                'title' => 'Email Verification Failed',
                'status' => 'invalid',
                'heading' => 'We could not verify this email change.',
                'message' => 'Please request a new email change from Taskgo HQ.',
            ], 500);
        }
    }

    private function sendPendingEmailVerification(int $userId, string $firstName, string $currentEmail, string $newEmail, string $plainToken): bool
    {
        $verificationUrl = route('rx-users.email-change.verify', [
            'id' => $userId,
            'token' => $plainToken,
        ]);

        try {
            Mail::send('emails.rx_user_email_change_verification', [
                'firstName' => $firstName ?: 'there',
                'currentEmail' => $currentEmail,
                'newEmail' => $newEmail,
                'verificationUrl' => $verificationUrl,
                'expiresAt' => now()->addHours(24),
            ], function ($message) use ($newEmail) {
                $message->to($newEmail)
                    ->subject('Verify your new email address for Taskgo');
            });

            return true;
        } catch (\Exception $e) {
            \Log::error("Failed to send pending email verification to {$newEmail}: " . $e->getMessage());
            return false;
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

            // Check if order has prescription image (without loading the blob)
            $prescriptionImageLength = (int) DB::table('rx_orders')->where('id', $orderId)->value(DB::raw('LENGTH(prescription_image)'));
            $hasPrescriptionImage = $prescriptionImageLength > 0;

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
                'has_prescription_image' => $hasPrescriptionImage,
                'prescription_image_url' => $hasPrescriptionImage ? url("/api/rx-users/orders/{$orderId}/prescription-image") : null,
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

    /**
     * Stream the prescription image for an order (from rx_orders.prescription_image LONGTEXT).
     */
    public function getOrderPrescriptionImage($orderId)
    {
        $totalLen = (int) DB::table('rx_orders')->where('id', $orderId)->value(DB::raw('LENGTH(prescription_image)'));
        if ($totalLen === 0) {
            abort(404);
        }

        $chunkSize = 1048576; // 1MB
        $dataUri = '';
        for ($offset = 1; $offset <= $totalLen; $offset += $chunkSize) {
            $chunk = DB::table('rx_orders')->where('id', $orderId)->value(DB::raw("SUBSTRING(prescription_image, {$offset}, {$chunkSize})"));
            $dataUri .= $chunk ?? '';
        }

        if (strpos($dataUri, 'base64,') === false) {
            abort(404);
        }

        $base64 = substr($dataUri, strpos($dataUri, 'base64,') + 7);
        $base64 = preg_replace('/\s+/', '', $base64);
        $binary = base64_decode($base64, true);
        if ($binary === false) {
            $binary = base64_decode($base64, false);
            if ($binary === false || $binary === '') {
                abort(404);
            }
        }

        $mime = 'image/jpeg';
        if (preg_match('#^data:([^;]+);#', $dataUri, $m)) {
            $mime = trim($m[1]);
        }

        $headers = [
            'Content-Type' => $mime,
            'Cache-Control' => 'private, max-age=3600',
            'Content-Length' => strlen($binary),
        ];

        while (ob_get_level()) {
            ob_end_clean();
        }

        return response()->stream(function () use ($binary) {
            $chunkSize = 8192;
            $len = strlen($binary);
            for ($i = 0; $i < $len; $i += $chunkSize) {
                echo substr($binary, $i, $chunkSize);
                if (function_exists('flush')) {
                    flush();
                }
            }
        }, 200, $headers);
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
