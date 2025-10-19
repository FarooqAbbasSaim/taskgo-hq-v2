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
            // Get last 12 months of appointment data with revenue
            $startDate = Carbon::now()->subMonths(11)->startOfMonth();
            $endDate = Carbon::now()->endOfMonth();
            
            // Get monthly appointment data with revenue from services using CRM database
            $monthlyData = DB::connection('mysql_crm')->table('appointments')
                ->join('services', 'appointments.service_id', '=', 'services.id')
                ->select(
                    DB::raw('YEAR(appointments.date) as year'),
                    DB::raw('MONTH(appointments.date) as month'),
                    DB::raw('COUNT(*) as appointment_count'),
                    DB::raw('SUM(services.revenue) as total_revenue')
                )
                ->whereIn('appointments.status', ['confirmed', 'attended'])
                ->whereBetween('appointments.date', [$startDate, $endDate])
                ->groupBy('year', 'month')
                ->orderBy('year', 'asc')
                ->orderBy('month', 'asc')
                ->get();

            // Get last month and this month appointment counts
            $lastMonth = Carbon::now()->subMonth();
            $thisMonth = Carbon::now();
            
            $lastMonthCount = DB::connection('mysql_crm')->table('appointments')
                ->whereIn('status', ['confirmed', 'attended'])
                ->whereYear('date', $lastMonth->year)
                ->whereMonth('date', $lastMonth->month)
                ->count();

            $thisMonthCount = DB::connection('mysql_crm')->table('appointments')
                ->whereIn('status', ['confirmed', 'attended'])
                ->whereYear('date', $thisMonth->year)
                ->whereMonth('date', $thisMonth->month)
                ->count();

            // Get last month and this month revenue for percentage calculation
            $lastMonthRevenue = DB::connection('mysql_crm')->table('appointments')
                ->join('services', 'appointments.service_id', '=', 'services.id')
                ->whereIn('appointments.status', ['confirmed', 'attended'])
                ->whereYear('appointments.date', $lastMonth->year)
                ->whereMonth('appointments.date', $lastMonth->month)
                ->sum('services.revenue');

            $thisMonthRevenue = DB::connection('mysql_crm')->table('appointments')
                ->join('services', 'appointments.service_id', '=', 'services.id')
                ->whereIn('appointments.status', ['confirmed', 'attended'])
                ->whereYear('appointments.date', $thisMonth->year)
                ->whereMonth('appointments.date', $thisMonth->month)
                ->sum('services.revenue');

            // Calculate revenue percentage change
            $revenueChangePercentage = 0;
            if ($lastMonthRevenue > 0) {
                $revenueChangePercentage = round((($thisMonthRevenue - $lastMonthRevenue) / $lastMonthRevenue) * 100, 1);
            } elseif ($thisMonthRevenue > 0) {
                $revenueChangePercentage = 100; // If last month was 0 but this month has revenue
            }

            // Format data for chart (last 12 months)
            $chartData = [];
            $labels = [];
            $tooltipData = [];
            
            // If no data found, generate some sample data for demonstration
            $hasData = $monthlyData->count() > 0;
            
            for ($i = 11; $i >= 0; $i--) {
                $date = Carbon::now()->subMonths($i);
                $year = $date->year;
                $month = $date->month;
                $monthName = $date->format('M');
                
                $labels[] = $monthName;
                
                // Find data for this month
                $monthData = $monthlyData->where('year', $year)->where('month', $month)->first();
                
                if ($monthData) {
                    $chartData[] = $monthData->total_revenue;
                    $tooltipData[] = [
                        'month' => $date->format('F Y'),
                        'revenue' => '€' . number_format($monthData->total_revenue, 0)
                    ];
                } else {
                    // No data for this month - use 0
                    $chartData[] = 0;
                    $tooltipData[] = [
                        'month' => $date->format('F Y'),
                        'revenue' => '€0'
                    ];
                }
            }
            
            // Use actual data only - no sample data generation

            // Debug: Log the data we're getting
            \Log::info('Appointments API Data', [
                'monthly_data' => $monthlyData->toArray(),
                'last_month_count' => $lastMonthCount,
                'this_month_count' => $thisMonthCount,
                'last_month_revenue' => $lastMonthRevenue,
                'this_month_revenue' => $thisMonthRevenue,
                'revenue_change_percentage' => $revenueChangePercentage,
                'chart_data' => $chartData,
                'tooltip_data' => $tooltipData
            ]);

            return response()->json([
                'success' => true,
                'data' => [
                    'chart' => [
                        'labels' => $labels,
                        'data' => $chartData,
                        'tooltips' => $tooltipData
                    ],
                    'last_month' => $lastMonthCount,
                    'this_month' => $thisMonthCount,
                    'revenue_change_percentage' => $revenueChangePercentage
                ]
            ]);

        } catch (\Exception $e) {
            \Log::error('Error fetching appointments data: ' . $e->getMessage());
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
            // Get the most recent month that has data
            $latestOrder = DB::connection('mysql_crm')->table('rx_orders')
                ->orderBy('created_at', 'desc')
                ->first();
            
            if (!$latestOrder) {
                return response()->json([
                    'success' => true,
                    'data' => [
                        'processed' => 0,
                        'pending' => 0,
                        'total_orders_this_month' => 0,
                        'processed_percentage' => 0,
                        'pending_percentage' => 0
                    ]
                ]);
            }
            
            // Use the month of the latest order
            $latestDate = Carbon::parse($latestOrder->created_at);
            $startOfMonth = $latestDate->copy()->startOfMonth();
            $endOfMonth = $latestDate->copy()->endOfMonth();
            
            // Get processed orders (completed + rejected) for this month
            $processedOrders = DB::connection('mysql_crm')->table('rx_orders')
                ->whereIn('status', ['complete', 'reject'])
                ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
                ->count();
            
            // Get pending orders for this month
            $pendingOrders = DB::connection('mysql_crm')->table('rx_orders')
                ->where('status', 'pending')
                ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
                ->count();
            
            // Get total orders for this month
            $totalOrdersThisMonth = DB::connection('mysql_crm')->table('rx_orders')
                ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
                ->count();
            
            // Calculate percentages
            $totalOrders = $processedOrders + $pendingOrders;
            $processedPercentage = $totalOrders > 0 ? round(($processedOrders / $totalOrders) * 100) : 0;
            $pendingPercentage = $totalOrders > 0 ? round(($pendingOrders / $totalOrders) * 100) : 0;

            \Log::info('Rx Orders API Data (Monthly)', [
                'processed_orders' => $processedOrders,
                'pending_orders' => $pendingOrders,
                'total_orders_this_month' => $totalOrdersThisMonth,
                'processed_percentage' => $processedPercentage,
                'pending_percentage' => $pendingPercentage,
                'month_range' => [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')],
                'latest_order_date' => $latestOrder->created_at
            ]);

            return response()->json([
                'success' => true,
                'data' => [
                    'processed' => $processedOrders,
                    'pending' => $pendingOrders,
                    'total_orders_this_month' => $totalOrdersThisMonth,
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
     * Get Rx Users age group data for the dashboard
     */
    public function getRxUsersData()
    {
        try {
            // Get all users with valid DOB data
            $users = DB::connection('mysql_crm')->table('rx_users')
                ->select('dob')
                ->whereNotNull('dob')
                ->where('dob', '!=', '0000-00-00')
                ->where('dob', '>', '1900-01-01') // Filter out invalid dates
                ->get();

            // Initialize age group counters
            $ageGroups = [
                '70+' => 0,
                '50-69' => 0,
                '25-49' => 0,
                '<25' => 0
            ];

            $currentDate = Carbon::now();

            // Calculate age groups
            foreach ($users as $user) {
                try {
                    $dob = Carbon::parse($user->dob);
                    $age = $dob->diffInYears($currentDate); // Fixed: dob->diffInYears(currentDate)
                    
                    if ($age >= 70) {
                        $ageGroups['70+']++;
                    } elseif ($age >= 50) {
                        $ageGroups['50-69']++;
                    } elseif ($age >= 25) {
                        $ageGroups['25-49']++;
                    } else {
                        $ageGroups['<25']++;
                    }
                } catch (\Exception $e) {
                    // Skip invalid dates
                    continue;
                }
            }

            $total = array_sum($ageGroups);

            // Calculate percentages
            $percentages = [];
            foreach ($ageGroups as $group => $count) {
                $percentages[$group] = $total > 0 ? round(($count / $total) * 100) : 0;
            }

            // Get total user count (including those without DOB)
            $totalUsers = DB::connection('mysql_crm')->table('rx_users')->count();

            // Get gender data for footnote
            $genderData = DB::connection('mysql_crm')->table('rx_users')
                ->select('gender', DB::raw('COUNT(*) as count'))
                ->whereNotNull('gender')
                ->groupBy('gender')
                ->get();

            $maleCount = $genderData->where('gender', 'Male')->first() ?? $genderData->where('gender', 'male')->first();
            $femaleCount = $genderData->where('gender', 'Female')->first() ?? $genderData->where('gender', 'female')->first();

            $male = $maleCount ? $maleCount->count : 0;
            $female = $femaleCount ? $femaleCount->count : 0;
            $genderTotal = $male + $female;
            $malePercentage = $genderTotal > 0 ? round(($male / $genderTotal) * 100) : 0;
            $femalePercentage = $genderTotal > 0 ? round(($female / $genderTotal) * 100) : 0;

            \Log::info('Rx Users API Data (Age Groups)', [
                'age_groups' => $ageGroups,
                'percentages' => $percentages,
                'total_with_dob' => $total,
                'total_users' => $totalUsers,
                'gender_data' => ['male' => $male, 'female' => $female, 'male_percentage' => $malePercentage, 'female_percentage' => $femalePercentage]
            ]);

            return response()->json([
                'success' => true,
                'data' => [
                    'age_groups' => $ageGroups,
                    'percentages' => $percentages,
                    'total_with_dob' => $total,
                    'total_users' => $totalUsers,
                    'male_percentage' => $malePercentage,
                    'female_percentage' => $femalePercentage
                ]
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