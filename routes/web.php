<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\RoutingController;
use App\Http\Controllers\Auth\LoginController;

// Test route
Route::get('/test', function () {
    return 'Application is working!';
});

// Debug session route
Route::get('/debug-session', function () {
    return response()->json([
        'session_id' => session()->getId(),
        'is_loading' => session('is_loading', false),
        'all_session' => session()->all(),
        'config_debug' => config('app.debug')
    ]);
});

// Test loading state route
Route::get('/test-loading', function () {
    session(['is_loading' => true]);
    return redirect('/login');
});

// Clear loading state route
Route::get('/clear-loading', function () {
    session()->forget('is_loading');
    return redirect('/login');
});

// Test loading with delay route
Route::get('/test-loading-delay', function () {
    session(['is_loading' => true]);
    
    // Show loading state for 5 seconds then clear it
    return response()->view('auth.login')->withHeaders([
        'Refresh' => '5; url=/clear-loading'
    ]);
});

// Force clear all session data
Route::get('/force-clear-session', function () {
    session()->flush();
    return redirect('/login')->with('info', 'Session cleared completely');
});

// Test session save
Route::get('/test-session-save', function () {
    session(['test_value' => 'saved_at_' . now()]);
    session()->save(); // Force save
    return response()->json([
        'message' => 'Session saved',
        'test_value' => session('test_value'),
        'session_id' => session()->getId()
    ]);
});

// Test 404 route (for testing custom error pages)
Route::get('/test-404', function () {
    abort(404);
});

// Dashboard API routes (no authentication required for now)
Route::prefix('api/dashboard')->group(function () {
    Route::get('/appointments', [\App\Http\Controllers\Api\DashboardController::class, 'getAppointmentsData']);
    Route::get('/rx-orders', [\App\Http\Controllers\Api\DashboardController::class, 'getRxOrdersData']);
    Route::get('/rx-users', [\App\Http\Controllers\Api\DashboardController::class, 'getRxUsersData']);
    Route::get('/openai-usage', [\App\Http\Controllers\Api\DashboardController::class, 'getOpenAIUsageData']);
});

// Customers API routes
Route::prefix('api/customers')->group(function () {
    Route::get('/', [\App\Http\Controllers\Api\CustomerController::class, 'getCustomersData']);
    Route::get('/inactive', [\App\Http\Controllers\Api\CustomerController::class, 'getInactiveCustomersData']);
    Route::get('/archived', [\App\Http\Controllers\Api\CustomerController::class, 'getArchivedCustomersData']);
    Route::get('/frozen', [\App\Http\Controllers\Api\CustomerController::class, 'getFrozenCustomersData']);
    Route::post('/change-status', [\App\Http\Controllers\Api\CustomerController::class, 'changeCustomerStatus']);
    Route::post('/add-package/{customer}', [\App\Http\Controllers\Api\CustomerController::class, 'addPackagePlan']);
    Route::post('/update-package/{customer}', [\App\Http\Controllers\Api\CustomerController::class, 'updatePackagePlan']);
    Route::post('/change-subscription-status', [\App\Http\Controllers\Api\CustomerController::class, 'changeSubscriptionStatus']);
    Route::get('/{id}', [\App\Http\Controllers\Api\CustomerController::class, 'getCustomerData']);
});

// Customer permission routes
Route::prefix('api/customer-permissions')->group(function () {
    Route::post('/access-change', [\App\Http\Controllers\Api\CustomerPermissionController::class, 'assignAllPermissionsToCustomer']);
});

// Root route - redirect based on authentication status
Route::get('/', function () {
    if (Auth::guard('hq')->check()) {
        return redirect('/admin/dashboard');
    }
    return redirect('/login');
})->name('root');

// Authentication routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

// Two-factor authentication routes
Route::get('2fa', [LoginController::class, 'show2faForm'])->name('2fa.form');
Route::post('2fa', [LoginController::class, 'verify2fa'])->name('2fa.verify');

// Protected admin routes
Route::middleware(['auth:hq'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [RoutingController::class, 'index'])->name('admin.dashboard');
    Route::get('/customers', function() {
        return view('customers');
    })->name('admin.customers');
    
    Route::get('/customers/active', function() {
        return view('customers', ['status' => 'active']);
    })->name('admin.customers.active');
    
    Route::get('/customers/inactive', function() {
        return view('customers', ['status' => 'inactive']);
    })->name('admin.customers.inactive');
    
    Route::get('/customers/frozen', function() {
        return view('customers', ['status' => 'frozen']);
    })->name('admin.customers.frozen');
    
    Route::get('/customers/archived', function() {
        return view('customers', ['status' => 'archived']);
    })->name('admin.customers.archived');
    
    Route::get('/customers/{id}', function($id) {
        return view('customer-view', compact('id'));
    })->name('admin.customer.view');
});

// Protected dynamic routes for new UI pages (fallback)
Route::middleware(['auth:hq'])->group(function () {
    Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('third');
    Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
    Route::get('{any}', [RoutingController::class, 'root'])->name('any');
});
