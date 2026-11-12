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
            
            // Get monthly appointment data with revenue from services
            $monthlyData = DB::table('appointments')
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
            
            $lastMonthCount = DB::table('appointments')
                ->whereIn('status', ['confirmed', 'attended'])
                ->whereYear('date', $lastMonth->year)
                ->whereMonth('date', $lastMonth->month)
                ->count();

            $thisMonthCount = DB::table('appointments')
                ->whereIn('status', ['confirmed', 'attended'])
                ->whereYear('date', $thisMonth->year)
                ->whereMonth('date', $thisMonth->month)
                ->count();

            // Get last month and this month revenue for percentage calculation
            $lastMonthRevenue = DB::table('appointments')
                ->join('services', 'appointments.service_id', '=', 'services.id')
                ->whereIn('appointments.status', ['confirmed', 'attended'])
                ->whereYear('appointments.date', $lastMonth->year)
                ->whereMonth('appointments.date', $lastMonth->month)
                ->sum('services.revenue');

            $thisMonthRevenue = DB::table('appointments')
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
            return response()->json([
                'success' => true,
                'data' => cache()->remember('hq.dashboard.rx_orders', 300, function () {
                    $latestCreatedAt = DB::table('rx_orders')->max('created_at');

                    if (! $latestCreatedAt) {
                        return [
                            'processed' => 0,
                            'pending' => 0,
                            'total_orders_this_month' => 0,
                            'processed_percentage' => 0,
                            'pending_percentage' => 0,
                        ];
                    }

                    $latestDate = Carbon::parse($latestCreatedAt);
                    $startOfMonth = $latestDate->copy()->startOfMonth();
                    $endOfMonth = $latestDate->copy()->endOfMonth();

                    $stats = DB::table('rx_orders')
                        ->selectRaw("
                            SUM(CASE WHEN status IN ('complete', 'reject') THEN 1 ELSE 0 END) as processed,
                            SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
                            COUNT(*) as total
                        ")
                        ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
                        ->first();

                    $processedOrders = (int) ($stats->processed ?? 0);
                    $pendingOrders = (int) ($stats->pending ?? 0);
                    $totalOrdersThisMonth = (int) ($stats->total ?? 0);
                    $totalOrders = $processedOrders + $pendingOrders;

                    return [
                        'processed' => $processedOrders,
                        'pending' => $pendingOrders,
                        'total_orders_this_month' => $totalOrdersThisMonth,
                        'processed_percentage' => $totalOrders > 0 ? round(($processedOrders / $totalOrders) * 100) : 0,
                        'pending_percentage' => $totalOrders > 0 ? round(($pendingOrders / $totalOrders) * 100) : 0,
                    ];
                }),
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
            return response()->json([
                'success' => true,
                'data' => cache()->remember('hq.dashboard.rx_users', 300, function () {
                    $ageRow = DB::table('rx_users')
                        ->selectRaw("
                            SUM(CASE WHEN TIMESTAMPDIFF(YEAR, dob, CURDATE()) >= 70 THEN 1 ELSE 0 END) as age_70_plus,
                            SUM(CASE WHEN TIMESTAMPDIFF(YEAR, dob, CURDATE()) BETWEEN 50 AND 69 THEN 1 ELSE 0 END) as age_50_69,
                            SUM(CASE WHEN TIMESTAMPDIFF(YEAR, dob, CURDATE()) BETWEEN 25 AND 49 THEN 1 ELSE 0 END) as age_25_49,
                            SUM(CASE WHEN TIMESTAMPDIFF(YEAR, dob, CURDATE()) < 25 THEN 1 ELSE 0 END) as age_under_25
                        ")
                        ->whereNotNull('dob')
                        ->where('dob', '!=', '0000-00-00')
                        ->where('dob', '>', '1900-01-01')
                        ->first();

                    $ageGroups = [
                        '70+' => (int) ($ageRow->age_70_plus ?? 0),
                        '50-69' => (int) ($ageRow->age_50_69 ?? 0),
                        '25-49' => (int) ($ageRow->age_25_49 ?? 0),
                        '<25' => (int) ($ageRow->age_under_25 ?? 0),
                    ];
                    $total = array_sum($ageGroups);
                    $percentages = [];
                    foreach ($ageGroups as $group => $count) {
                        $percentages[$group] = $total > 0 ? round(($count / $total) * 100) : 0;
                    }

                    $totalUsers = (int) DB::table('rx_users')->count();
                    $genderData = DB::table('rx_users')
                        ->select('gender', DB::raw('COUNT(*) as count'))
                        ->whereNotNull('gender')
                        ->groupBy('gender')
                        ->get();

                    $male = (int) optional(
                        $genderData->first(fn ($row) => strcasecmp((string) $row->gender, 'Male') === 0)
                    )->count;
                    $female = (int) optional(
                        $genderData->first(fn ($row) => strcasecmp((string) $row->gender, 'Female') === 0)
                    )->count;
                    $genderTotal = $male + $female;

                    return [
                        'age_groups' => $ageGroups,
                        'percentages' => $percentages,
                        'total_with_dob' => $total,
                        'total_users' => $totalUsers,
                        'male_percentage' => $genderTotal > 0 ? round(($male / $genderTotal) * 100) : 0,
                        'female_percentage' => $genderTotal > 0 ? round(($female / $genderTotal) * 100) : 0,
                    ];
                }),
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
     * Get total pharmacies data for the dashboard.
     */
    public function getTotalPharmaciesData()
    {
        try {
            return response()->json([
                'success' => true,
                'data' => cache()->remember('hq.dashboard.total_pharmacies', 300, function () {
                    $now = Carbon::now();
                    $startMonth = $now->copy()->subMonths(11)->startOfMonth();
                    $labels = [];
                    $chartData = [];
                    $tooltipData = [];

                    for ($i = 11; $i >= 0; $i--) {
                        $monthDate = $now->copy()->subMonths($i);
                        $periodEnd = $i === 0
                            ? $now->copy()
                            : $monthDate->copy()->endOfMonth();

                        $totalCount = (int) DB::table('pharmacies')
                            ->whereNotNull('created_at')
                            ->where('created_at', '<=', $periodEnd)
                            ->count();

                        $labels[] = $monthDate->format('M');
                        $chartData[] = $totalCount;
                        $tooltipData[] = [
                            'month' => $monthDate->format('F Y'),
                            'total' => $totalCount,
                            'as_of' => $i === 0
                                ? $now->format('j F Y')
                                : $monthDate->copy()->endOfMonth()->format('j F Y'),
                        ];
                    }

                    $latestMonthCount = (int) DB::table('pharmacies')
                        ->whereBetween('created_at', [$now->copy()->startOfMonth(), $now->copy()])
                        ->count();

                    $previousMonthTotal = (int) DB::table('pharmacies')
                        ->where('created_at', '<=', $now->copy()->subMonth()->endOfMonth())
                        ->count();

                    return [
                        'chart' => [
                            'labels' => $labels,
                            'data' => $chartData,
                            'tooltips' => $tooltipData,
                        ],
                        'current_total' => end($chartData) ?: 0,
                        'current_month_new' => $latestMonthCount,
                        'previous_month_total' => $previousMonthTotal,
                        'updated_at' => $now->toIso8601String(),
                        'range_start' => $startMonth->toDateString(),
                    ];
                }),
            ]);
        } catch (\Exception $e) {
            \Log::error('Error fetching total pharmacies data: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch total pharmacies data',
                'error' => $e->getMessage(),
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
