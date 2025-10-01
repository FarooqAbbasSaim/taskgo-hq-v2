@extends('layouts.base', ['title' => 'Page Not Found'])

@section('content')
<div class="auth-box overflow-hidden align-items-center d-flex">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xxl-6 col-md-8 col-sm-10">
                <div class="card">
                    <div class="card-body text-center">
                        <!-- 404 Icon -->
                        <div class="mb-4">
                            <div class="avatar avatar-xl mx-auto mb-3">
                                <span class="avatar-title bg-primary-subtle text-primary rounded-circle fs-2xl">
                                    <i data-lucide="search-x" class="fs-xxl"></i>
                                </span>
                            </div>
                        </div>

                        <!-- Error Message -->
                        <div class="mb-4">
                            <h1 class="display-1 fw-bold text-primary">404</h1>
                            <h4 class="mb-3">Oops! Page Not Found</h4>
                            <p class="text-muted fs-lg">
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
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
                                If you believe this is an error, please contact support.
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
