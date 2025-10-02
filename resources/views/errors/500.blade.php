@extends('layouts.base', ['title' => 'Server Error'])

@section('content')
<div class="auth-box overflow-hidden align-items-center d-flex">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xxl-6 col-md-8 col-sm-10">
                <div class="card">
                    <div class="card-body text-center">
                        <!-- 500 Icon -->
                        <div class="mb-4">
                            <div class="avatar avatar-xl mx-auto mb-3">
                                <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-2xl">
                                    <i data-lucide="alert-triangle" class="fs-xxl"></i>
                                </span>
                            </div>
                        </div>

                        <!-- Error Message -->
                        <div class="mb-4">
                            <h1 class="display-1 fw-bold text-danger">500</h1>
                            <h4 class="mb-3">Internal Server Error</h4>
                            <p class="text-muted fs-lg">
                                Something went wrong on our end. We're working to fix this issue. Please try again later.
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="d-flex gap-2 justify-content-center flex-wrap">
                            <a href="{{ url()->previous() }}" class="btn btn-outline-primary">
                                <i data-lucide="arrow-left" class="fs-15 me-1"></i>
                                Go Back
                            </a>
                            <a href="{{ route('admin.dashboard') }}" class="btn btn-primary">
                                <i data-lucide="home" class="fs-15 me-1"></i>
                                Go to Dashboard
                            </a>
                        </div>

                        <!-- Additional Help -->
                        <div class="mt-4 pt-3 border-top">
                            <p class="text-muted mb-0">
                                If this problem persists, please contact our support team.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
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
@endsection

