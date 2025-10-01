<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\HqUser;

class LoginController extends Controller
{

    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Get the post-login redirect path.
     *
     * @return string
     */
    public function redirectPath()
    {
        if (method_exists($this, 'redirectTo')) {
            return $this->redirectTo();
        }

        return property_exists($this, 'redirectTo') ? $this->redirectTo : '/admin/dashboard';
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('hq');
    }

    public function __construct()
    {
        // Middleware will be handled in routes
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\View\View
     */
    public function showLoginForm()
    {
        // If user is already authenticated, redirect to dashboard
        if (Auth::guard('hq')->check()) {
            return redirect($this->redirectPath());
        }

        $response = response()->view('auth.login');
        $response->headers->set('Cache-Control', 'no-cache, no-store, must-revalidate');
        $response->headers->set('Pragma', 'no-cache');
        $response->headers->set('Expires', '0');
        
        return $response;
    }

    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');
        $remember = $request->boolean('remember');

        if (Auth::guard('hq')->attempt($credentials, $remember)) {
            $request->session()->regenerate();
            return $this->authenticated($request, Auth::guard('hq')->user());
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        Auth::guard('hq')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        // Add cache control headers to prevent back button issues
        $response = redirect('/login');
        $response->headers->set('Cache-Control', 'no-cache, no-store, must-revalidate');
        $response->headers->set('Pragma', 'no-cache');
        $response->headers->set('Expires', '0');
        
        return $response;
    }

//     protected function authenticated(Request $request, $user)
//     {
//           // Check if the user has the 'hq_admin' role
//           if ($user->user_type !== 'hq_admin') {
//               Auth::logout();
//               return redirect()->route('login')->withErrors(['email' => 'You do not have permission to access this area.']);
//           }
//
//           return redirect()->intended($this->redirectPath());
//     }

    protected function authenticated(Request $request, $user)
    {
        // Check if the user has the 'hq_admin' role
        if ($user->user_type !== 'hq_admin') {
            Auth::guard('hq')->logout();
            return redirect()->route('login')->withErrors(['email' => 'You do not have permission to access this area.']);
        }

        // Update last login time
        $user->last_login_at = now();
        $user->save();

        // Check if 2FA is required for the user
        if ($user->requiresTwoFactor()) {
            // Generate and store a new 2FA code
            $twoFactorCode = rand(100000, 999999);
            $user->two_factor_code = $twoFactorCode;
            $user->two_factor_expires_at = now()->addMinutes(10);
            $user->save();

            // Send the 2FA code to the user via email
            $this->send2FACode($user, $twoFactorCode);

            // Log out the user and redirect to 2FA form
            Auth::guard('hq')->logout();
            return redirect()->route('2fa.form')->with('user_id', $user->id);
        }

        return redirect()->intended($this->redirectPath());
    }

    public function show2faForm()
    {
        // If user is already authenticated, redirect to dashboard
        if (Auth::guard('hq')->check()) {
            return redirect($this->redirectPath());
        }
        
        return view('auth.two_factor');
    }

    public function verify2fa(Request $request)
    {
        $request->validate([
            'two_factor_code' => 'required|integer',
        ]);

        $user = HqUser::where('two_factor_code', $request->input('two_factor_code'))
            ->where('two_factor_expires_at', '>', now())
            ->first();

        if ($user) {
            // Clear the 2FA code and update last login
            $user->clearTwoFactorCode();
            $user->last_login_at = now();
            $user->save();

            // Log in the user using HQ guard
            Auth::guard('hq')->login($user);

            return redirect()->intended($this->redirectPath());
        }

        return redirect()->route('2fa.form')->withErrors(['two_factor_code' => 'The provided two-factor code is invalid.']);
    }

    private function send2FACode($user, $code)
    {
        try {
            // Send 2FA code via email using HTML template
            Mail::send('emails.two_factor_auth', [
                'user' => $user,
                'code' => $code
            ], function ($message) use ($user) {
                $message->to($user->email)
                        ->subject('Taskgo HQ - Two-Factor Authentication Code');
            });

            // Log success
            \Log::info("2FA code sent to user {$user->email}");
        } catch (\Exception $e) {
            \Log::error("Failed to send 2FA code to {$user->email}: " . $e->getMessage());
            
            // For development environment, show the code as fallback
            if (app()->environment('local')) {
                session()->flash('warning', "Email delivery failed. Please check your email configuration.");
            }
        }
    }

}
