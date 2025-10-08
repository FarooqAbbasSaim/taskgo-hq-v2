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
});

// Protected dynamic routes for new UI pages (fallback)
Route::middleware(['auth:hq'])->group(function () {
    Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('third');
    Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
    Route::get('{any}', [RoutingController::class, 'root'])->name('any');
});
