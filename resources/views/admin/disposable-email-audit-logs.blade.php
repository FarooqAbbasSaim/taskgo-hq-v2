@extends('layouts.vertical', ['title' => $title ?? 'Disposable Email Audit Logs'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <h4 class="mb-0">Disposable Email Audit Logs</h4>
                    <div class="text-muted small">Blocked disposable email attempts across CRM (login/signup/staff/HQ).</div>
                </div>
            </div>

            @if(!config('features.disposable_email_audit_logs'))
                <div class="alert alert-warning">This page is disabled.</div>
            @endif

            @if(!empty($error))
                <div class="alert alert-danger">{{ $error }}</div>
            @endif

            <div class="card">
                <div class="card-body">
                    <form method="GET" action="{{ route('admin.disposable-email-audit-logs') }}" class="row g-2 align-items-end mb-3">
                        <div class="col-12 col-md-3">
                            <label class="form-label">Action</label>
                            <select name="action" class="form-select">
                                <option value="">All</option>
                                @php $action = $filters['action'] ?? '' @endphp
                                <option value="login" {{ $action === 'login' ? 'selected' : '' }}>login</option>
                                <option value="signup" {{ $action === 'signup' ? 'selected' : '' }}>signup</option>
                                <option value="staff_account" {{ $action === 'staff_account' ? 'selected' : '' }}>staff_account</option>
                                <option value="hq_onboarding" {{ $action === 'hq_onboarding' ? 'selected' : '' }}>hq_onboarding</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-5">
                            <label class="form-label">Email contains</label>
                            <input type="text" class="form-control" name="email" value="{{ $filters['email'] ?? '' }}" placeholder="e.g. hidingmail.net">
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Per page</label>
                            <input type="number" min="1" max="200" class="form-control" name="per_page" value="{{ $filters['per_page'] ?? 50 }}">
                        </div>
                        <div class="col-12 col-md-2 d-flex gap-2">
                            <button type="submit" class="btn btn-primary w-100">Filter</button>
                            <a href="{{ route('admin.disposable-email-audit-logs') }}" class="btn btn-light w-100">Reset</a>
                        </div>
                    </form>

                    @php
                        $data = is_array($logs) ? ($logs['data'] ?? []) : [];
                        $meta = is_array($logs) ? $logs : null;
                    @endphp

                    <div class="table-responsive">
                        <table class="table table-striped align-middle mb-0">
                            <thead>
                                <tr>
                                    <th style="white-space:nowrap;">Time</th>
                                    <th>Email</th>
                                    <th>Domain</th>
                                    <th>Action</th>
                                    <th>Location</th>
                                    <th style="white-space:nowrap;">IP</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($data as $row)
                                    <tr>
                                        <td style="white-space:nowrap;">{{ $row['created_at'] ?? '' }}</td>
                                        <td>{{ $row['email'] ?? '' }}</td>
                                        <td>{{ $row['domain'] ?? '' }}</td>
                                        <td><span class="badge bg-secondary">{{ $row['action'] ?? '' }}</span></td>
                                        <td class="text-muted small">{{ $row['location'] ?? '' }}</td>
                                        <td style="white-space:nowrap;">{{ $row['ip_address'] ?? '' }}</td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="6" class="text-center text-muted py-4">No audit logs found.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>

                    @if(is_array($meta) && isset($meta['current_page'], $meta['last_page']) && $meta['last_page'] > 1)
                        @php
                            $current = (int) $meta['current_page'];
                            $last = (int) $meta['last_page'];
                            $baseParams = $filters;
                            unset($baseParams['page']);
                        @endphp
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div class="text-muted small">
                                Showing {{ $meta['from'] ?? 0 }}–{{ $meta['to'] ?? 0 }} of {{ $meta['total'] ?? 0 }}
                            </div>
                            <div class="btn-group">
                                <a class="btn btn-light {{ $current <= 1 ? 'disabled' : '' }}"
                                   href="{{ $current <= 1 ? '#' : route('admin.disposable-email-audit-logs', array_merge($baseParams, ['page' => $current - 1])) }}">
                                    Prev
                                </a>
                                <a class="btn btn-light {{ $current >= $last ? 'disabled' : '' }}"
                                   href="{{ $current >= $last ? '#' : route('admin.disposable-email-audit-logs', array_merge($baseParams, ['page' => $current + 1])) }}">
                                    Next
                                </a>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection

