<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardController extends Controller
{
    /**
     * Get appointments data for the dashboard chart
     */
    public function getAppointmentsData()
    {
        try {
            // Use default database connection (same as taskgo-crm)
            // For now, let's get all appointments without customer_id filter for testing
            $appointments = DB::table('appointments')
                ->select(
                    DB::raw('DATE(date) as appointment_date'),
                    DB::raw('COUNT(*) as count')
                )
                ->whereIn('status', ['confirmed', 'attended'])
                ->where('date', '>=', Carbon::now()->subDays(7))
                ->where('date', '<=', Carbon::now())
                ->groupBy('appointment_date')
                ->orderBy('appointment_date')
                ->get();

            // Get today's and yesterday's counts
            $today = Carbon::now()->format('Y-m-d');
            $yesterday = Carbon::now()->subDay()->format('Y-m-d');
            
            $todayCount = DB::table('appointments')
                ->whereIn('status', ['confirmed', 'attended'])
                ->whereDate('date', $today)
                ->count();

            $yesterdayCount = DB::table('appointments')
                ->whereIn('status', ['confirmed', 'attended'])
                ->whereDate('date', $yesterday)
                ->count();

            // Debug: Log the data we're getting
            \Log::info('Appointments API Data', [
                'appointments' => $appointments->toArray(),
                'today_count' => $todayCount,
                'yesterday_count' => $yesterdayCount,
                'today_date' => $today,
                'yesterday_date' => $yesterday
            ]);

            // Format data for chart (last 7 days)
            $chartData = [];
            $labels = [];
            
            for ($i = 6; $i >= 0; $i--) {
                $date = Carbon::now()->subDays($i);
                $dateStr = $date->format('Y-m-d');
                $dayName = $date->format('D');
                
                $labels[] = $dayName;
                
                $count = $appointments->where('appointment_date', $dateStr)->first();
                $chartData[] = $count ? $count->count : 0;
            }

            return response()->json([
                'success' => true,
                'data' => [
                    'chart' => [
                        'labels' => $labels,
                        'data' => $chartData
                    ],
                    'today' => $todayCount,
                    'yesterday' => $yesterdayCount
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch appointments data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get Rx Orders data for the dashboard
     */
    public function getRxOrdersData()
    {
        try {
            // Get this week's orders (Monday to Saturday)
            $startOfWeek = Carbon::now()->startOfWeek(Carbon::MONDAY);
            $endOfWeek = Carbon::now()->endOfWeek(Carbon::SATURDAY);
            
            // Get processed orders (completed + rejected)
            $processedOrders = DB::table('rx_orders')
                ->whereIn('status', ['complete', 'reject'])
                ->whereBetween('created_at', [$startOfWeek, $endOfWeek])
                ->count();
            
            // Get pending orders
            $pendingOrders = DB::table('rx_orders')
                ->where('status', 'pending')
                ->whereBetween('created_at', [$startOfWeek, $endOfWeek])
                ->count();
            
            // Get today's orders
            $todayOrders = DB::table('rx_orders')
                ->whereDate('created_at', Carbon::now()->format('Y-m-d'))
                ->count();
            
            // Calculate percentages
            $totalOrders = $processedOrders + $pendingOrders;
            $processedPercentage = $totalOrders > 0 ? round(($processedOrders / $totalOrders) * 100) : 0;
            $pendingPercentage = $totalOrders > 0 ? round(($pendingOrders / $totalOrders) * 100) : 0;

            \Log::info('Rx Orders API Data', [
                'processed_orders' => $processedOrders,
                'pending_orders' => $pendingOrders,
                'today_orders' => $todayOrders,
                'processed_percentage' => $processedPercentage,
                'pending_percentage' => $pendingPercentage,
                'week_range' => [$startOfWeek->format('Y-m-d'), $endOfWeek->format('Y-m-d')]
            ]);

            return response()->json([
                'success' => true,
                'data' => [
                    'processed' => $processedOrders,
                    'pending' => $pendingOrders,
                    'today_orders' => $todayOrders,
                    'processed_percentage' => $processedPercentage,
                    'pending_percentage' => $pendingPercentage
                ]
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching Rx orders data: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch Rx orders data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get Rx Users gender data for the dashboard
     */
    public function getRxUsersData()
    {
        try {
            // Use default database connection for user gender data
            $genderData = DB::table('rx_users')
                ->select('gender', DB::raw('COUNT(*) as count'))
                ->whereNotNull('gender')
                ->groupBy('gender')
                ->get();

            $maleCount = $genderData->where('gender', 'Male')->first() ?? $genderData->where('gender', 'male')->first();
            $femaleCount = $genderData->where('gender', 'Female')->first() ?? $genderData->where('gender', 'female')->first();

            $male = $maleCount ? $maleCount->count : 0;
            $female = $femaleCount ? $femaleCount->count : 0;
            $total = $male + $female;

            return response()->json([
                'success' => true,
                'data' => [
                    'male' => $male,
                    'female' => $female,
                    'male_percentage' => $total > 0 ? round(($male / $total) * 100) : 0,
                    'female_percentage' => $total > 0 ? round(($female / $total) * 100) : 0
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch Rx users data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get OpenAI API usage data for the dashboard
     */
    public function getOpenAIUsageData()
    {
        try {
            // This would connect to your OpenAI usage tracking system
            // For now, returning sample data structure
            return response()->json([
                'success' => true,
                'data' => [
                    'today' => 2847,
                    'yesterday' => 2634,
                    'increase_percentage' => 8.1
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch OpenAI usage data',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}