@extends('layouts.vertical', ['title' => 'System Settings'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header justify-content-between align-items-center border-dashed">
                    <h4 class="card-title mb-0">System Settings</h4>
                </div>

                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success">{{ session('success') }}</div>
                    @endif

                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul class="mb-0">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <form method="POST" action="{{ route('admin.system-settings.update') }}" class="mt-2">
                        @csrf
                        @method('POST')

                        <div class="mb-3">
                            <h5 class="mb-1">Phone call billing</h5>
                            <div class="text-muted">Controls how many credits are deducted for Telnyx phone calls.</div>
                        </div>

                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">Rate per minute (credits)</label>
                                <input type="number" step="0.01" min="0" class="form-control" name="rate_per_minute"
                                       value="{{ old('rate_per_minute', $settings['rate_per_minute'] ?? '') }}" required>
                                <div class="form-text">
                                    Fixed policy: minimum 1 minute billed, rounded up to the next minute.
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 d-flex justify-content-end">
                            <button class="btn btn-primary" type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

