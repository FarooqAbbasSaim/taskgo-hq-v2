@extends('layouts.base', ['title' => $title])

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center min-vh-100 align-items-center">
        <div class="col-md-8 col-lg-5">
            <div class="card">
                <div class="card-body text-center p-4">
                    <div class="mb-3">
                        @if ($status === 'success')
                            <i class="ti ti-check text-success" style="font-size: 3rem;"></i>
                        @elseif ($status === 'expired')
                            <i class="ti ti-clock-x text-warning" style="font-size: 3rem;"></i>
                        @else
                            <i class="ti ti-alert-circle text-danger" style="font-size: 3rem;"></i>
                        @endif
                    </div>
                    <h3 class="mb-2">{{ $heading }}</h3>
                    <p class="text-muted mb-0">{{ $message }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
