@extends('layouts.base', ['title' => 'Taskgo HQ - Two-Factor Authentication'])

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
                                <p class="text-muted w-lg-75 mt-3">Enter the verification code sent to your email to complete the login process.</p>
                            </div>
                            
                            @if(session('info'))
                                <div class="alert alert-info" role="alert">
                                    <i class="ti ti-info-circle me-2"></i>
                                    {{ session('info') }}
                                </div>
                            @endif

                            @if(session('warning'))
                                <div class="alert alert-warning" role="alert">
                                    <i class="ti ti-alert-triangle me-2"></i>
                                    {{ session('warning') }}
                                </div>
                            @endif

                            <div class="">
                                <form action="{{ route('2fa.verify') }}" method="post">
                                    @csrf
                                    
                                    @error('two_factor_code')
                                        <div class="alert alert-danger" role="alert">
                                            <i class="ti ti-alert-circle me-2"></i>
                                            {{ $message }}
                                        </div>
                                    @enderror

                                    <div class="mb-3">
                                        <label class="form-label" for="two_factor_code">Verification Code <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <input class="form-control @error('two_factor_code') is-invalid @enderror" 
                                                   id="two_factor_code" 
                                                   name="two_factor_code"
                                                   placeholder="Enter 6-digit code"
                                                   required="" 
                                                   type="text"
                                                   inputmode="numeric"
                                                   pattern="[0-9]*"
                                                   maxlength="6" />
                                        </div>
                                        <small class="text-muted">Check your email for the verification code</small>
                                    </div>
                                    
                                    <div class="d-grid">
                                        <x-loading-button 
                                            text="Verify Code" 
                                            variant="primary" 
                                            type="submit" 
                                            loading-text="Please wait..." 
                                            class="fw-semibold py-2"
                                            id="verifyCodeBtn"
                                        />
                                    </div>
                                </form>
                                
                                <div class="text-center mt-3">
                                    <a href="{{ route('login') }}" class="text-decoration-underline link-offset-3 text-muted">
                                        <i class="ti ti-arrow-left me-1"></i>
                                        Back to Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-muted mt-4 mb-0">
                        © 2025 Taskgo HQ
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- end auth-fluid-->
@endsection

@push('scripts')
<script>
    // Handle 2FA form validation and loading button
    document.addEventListener('DOMContentLoaded', function() {
        const verifyForm = document.querySelector('form');
        const verifyCodeBtn = document.getElementById('verifyCodeBtn');
        
        if (verifyForm && verifyCodeBtn) {
            // Initialize loading button
            const loadingButton = new LoadingButton(verifyCodeBtn);
            
            // Handle form submission
            verifyForm.addEventListener('submit', function(e) {
                // Check client-side validation first
                if (!verifyForm.checkValidity()) {
                    e.preventDefault();
                    e.stopPropagation();
                    loadingButton.handleValidationError();
                    verifyForm.classList.add('was-validated');
                    return;
                }
                
                // If client-side validation passes, show loading and let form submit
                loadingButton.showLoadingImmediately();
                
                // Form will submit normally, loading state will be visible
                // until the page redirects or reloads with validation errors
            });
        }
    });
</script>
@endpush

