<?php

namespace App\Http\Middleware;

use App\Support\SessionFingerprint;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class ValidateSessionFingerprint
{
    /**
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! SessionFingerprint::enabled()) {
            return $next($request);
        }

        if (! $this->isAuthenticated()) {
            return $next($request);
        }

        if (! SessionFingerprint::has($request)) {
            SessionFingerprint::bind($request);

            return $next($request);
        }

        if (SessionFingerprint::matches($request)) {
            return $next($request);
        }

        $this->invalidateAuthenticatedSession($request);

        if ($request->expectsJson()) {
            return response()->json([
                'message' => 'Your session is no longer valid. Please sign in again.',
            ], 401);
        }

        return redirect()
            ->guest($this->loginPath())
            ->with('session_expired', true)
            ->withErrors([
                'email' => 'Your session could not be verified. Please sign in again.',
            ]);
    }

    protected function isAuthenticated(): bool
    {
        foreach ($this->guards() as $guard) {
            if (Auth::guard($guard)->check()) {
                return true;
            }
        }

        return false;
    }

    protected function invalidateAuthenticatedSession(Request $request): void
    {
        foreach ($this->guards() as $guard) {
            if (Auth::guard($guard)->check()) {
                Auth::guard($guard)->logout();
            }
        }

        SessionFingerprint::clear($request);
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }

    /**
     * @return list<string>
     */
    protected function guards(): array
    {
        return ['hq'];
    }

    protected function loginPath(): string
    {
        return route('login');
    }
}
