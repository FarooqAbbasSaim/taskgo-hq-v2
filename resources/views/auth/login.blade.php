@extends('layouts.base', ['title' => 'Taskgo HQ - Sign In'])

@section('content')
    <div class="auth-box overflow-hidden align-items-center d-flex">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-4 col-md-6 col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="auth-brand mb-4">
                                <a class="logo-dark" href="/">
                                    <span class="d-flex align-items-center gap-1">
                                        <span class="avatar avatar-xs rounded-circle text-bg-dark">
                                            <span class="avatar-title">
                                                <i class="fs-md" data-lucide="sparkles"></i>
                                            </span>
                                        </span>
                                        <span class="logo-text text-body fw-bold fs-xl">Taskgo HQ</span>
                                    </span>
                                </a>
                                <a class="logo-light" href="/">
                                    <span class="d-flex align-items-center gap-1">
                                        <span class="avatar avatar-xs rounded-circle text-bg-dark">
                                            <span class="avatar-title">
                                                <i class="fs-md" data-lucide="sparkles"></i>
                                            </span>
                                        </span>
                                        <span class="logo-text text-white fw-bold fs-xl">Taskgo HQ</span>
                                    </span>
                                </a>
                                <p class="text-muted w-lg-75 mt-3">Let's get you signed in. Enter your email and password to continue.</p>
                            </div>
                            <div class="">
                                <form action="{{ route('login') }}" method="post">
                                    @csrf
                                    <div class="mb-3">
                                        <label class="form-label" for="userEmail">Email address <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <input class="form-control @error('email') is-invalid @enderror" 
                                                   id="userEmail" 
                                                   name="email"
                                                   placeholder="you@example.com"
                                                   value="{{ old('email') }}"
                                                   required="" 
                                                   type="email" />
                                        </div>
                                        @error('email')
                                            <div class="invalid-feedback d-block">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="userPassword">Password <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <input class="form-control @error('password') is-invalid @enderror" 
                                                   id="userPassword" 
                                                   name="password"
                                                   placeholder="••••••••"
                                                   required="" 
                                                   type="password" />
                                        </div>
                                        @error('password')
                                            <div class="invalid-feedback d-block">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input form-check-input-light fs-14" 
                                                   id="rememberMe"
                                                   name="remember"
                                                   type="checkbox" 
                                                   {{ old('remember') ? 'checked' : '' }} />
                                            <label class="form-check-label" for="rememberMe">Keep me signed in</label>
                                        </div>
                                        <!-- Forgot Password link temporarily disabled -->
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary fw-semibold py-2" type="submit">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-muted mt-4 mb-0">
                        ©
                        <script>
                            document.write(new Date().getFullYear())
                        </script> Taskgo HQ — by <span class="fw-semibold">Taskgo Team</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- end auth-fluid-->
@endsection

@push('scripts')
<script>
    // Prevent back button from showing cached pages
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            // Page was loaded from cache, reload it
            window.location.reload();
        }
    });

    // Clear any cached data
    if ('caches' in window) {
        caches.keys().then(function(names) {
            names.forEach(function(name) {
                caches.delete(name);
            });
        });
    }
</script>
@endpush
