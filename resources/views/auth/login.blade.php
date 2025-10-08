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
                                    <span class="d-flex align-items-center gap-2">
                                        <img src="/images/taskgo_logo_favicon.png" alt="Taskgo Logo" class="avatar avatar-sm rounded">
                                        <span class="logo-text text-body fw-bold fs-xl">Taskgo HQ</span>
                                    </span>
                                </a>
                                <a class="logo-light" href="/">
                                    <span class="d-flex align-items-center gap-2">
                                        <img src="/images/taskgo_logo_favicon.png" alt="Taskgo Logo" class="avatar avatar-sm rounded">
                                        <span class="logo-text text-white fw-bold fs-xl">Taskgo HQ</span>
                                    </span>
                                </a>
                                <p class="text-muted w-lg-75 mt-3">Let's get you signed in. Enter your email and password to continue.</p>
                            </div>

                            <form action="{{ route('login') }}" method="post" id="loginForm">
                                @csrf
                                <div class="mb-3">
                                    <label class="form-label" for="userEmail">Email address <span class="text-danger">*</span></label>
                                    <div class="input-group">
                                        <input class="form-control @error('email') is-invalid @enderror"
                                            id="userEmail"
                                            name="email"
                                            placeholder="you@example.com"
                                            value="{{ old('email') }}"
                                            required
                                            type="email" />
                                    </div>
                                    @error('email')
                                        <div class="invalid-feedback d-block">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="userPassword">Password <span class="text-danger">*</span></label>
                                    <div class="input-group">
                                        <input class="form-control @error('password') is-invalid @enderror"
                                            id="userPassword"
                                            name="password"
                                            placeholder="••••••••"
                                            required
                                            type="password" />
                                    </div>
                                    @error('password')
                                        <div class="invalid-feedback d-block">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="d-grid">
                                    <x-loading-button 
                                        text="Sign In" 
                                        variant="primary" 
                                        type="submit" 
                                        loading-text="Please wait..." 
                                        class="fw-semibold py-2"
                                        id="signInBtn"
                                    />
                                </div>
                            </form>

                            <p class="text-center text-muted mt-4 mb-0">
                                © 2025 Taskgo HQ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('styles')
<style>
    /* Ensure button doesn't disappear during loading */
    .btn.loading {
        opacity: 1 !important;
        visibility: visible !important;
        display: inline-block !important;
    }
    
    /* Loading button styles */
    .btn.loading .spinner-border {
        width: 1rem;
        height: 1rem;
        border-width: 0.1em;
    }
    
    /* Prevent button from being hidden during form submission */
    #signInBtn {
        transition: none !important;
    }
</style>
@endpush

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

    // Handle form validation and loading button
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('loginForm');
        const signInBtn = document.getElementById('signInBtn');
        
        if (loginForm && signInBtn) {
            // Initialize loading button with error handling
            let loadingButton;
            try {
                loadingButton = new LoadingButton(signInBtn);
                console.log('LoadingButton initialized successfully');
            } catch (error) {
                console.error('Failed to initialize LoadingButton:', error);
                // Fallback: manual loading state
                loadingButton = {
                    showLoadingImmediately: function() {
                        signInBtn.disabled = true;
                        signInBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Please wait...';
                        signInBtn.classList.add('loading');
                    },
                    handleValidationError: function() {
                        signInBtn.disabled = false;
                        signInBtn.innerHTML = 'Sign In';
                        signInBtn.classList.remove('loading');
                    }
                };
            }
            
            // Handle form submission
            loginForm.addEventListener('submit', function(e) {
                // Check client-side validation first
                if (!loginForm.checkValidity()) {
                    e.preventDefault();
                    e.stopPropagation();
                    loadingButton.handleValidationError();
                    loginForm.classList.add('was-validated');
                    return;
                }
                
                // If client-side validation passes, show loading and let form submit
                loadingButton.showLoadingImmediately();
                
                // Form will submit normally, loading state will be visible
                // until the page redirects or reloads with server validation errors
            });
            
            // Also handle button click directly as a fallback
            signInBtn.addEventListener('click', function(e) {
                // Small delay to ensure the loading state is visible
                setTimeout(() => {
                    if (loginForm.checkValidity()) {
                        loadingButton.showLoadingImmediately();
                    }
                }, 10);
            });
        }
    });
</script>
@endpush
