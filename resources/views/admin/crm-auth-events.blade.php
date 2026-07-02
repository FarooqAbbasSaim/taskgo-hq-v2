@extends('layouts.vertical', ['title' => $title ?? 'CRM Auth Logs'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <h4 class="mb-0">CRM Auth Logs</h4>
                    <div class="text-muted small">Taskgo CRM staff login and 2FA events (password, OTP, session expiry).</div>
                </div>
            </div>

            @if(!config('features.crm_auth_events_log'))
                <div class="alert alert-warning">This page is disabled.</div>
            @endif

            @if(!empty($error))
                <div class="alert alert-danger">{{ $error }}</div>
            @endif

            <div class="card">
                <div class="card-body">
                    <form method="GET" action="{{ route('admin.crm-auth-events') }}" class="row g-2 align-items-end mb-3">
                        <div class="col-12 col-md-2">
                            <label class="form-label">Action</label>
                            <select name="action" class="form-select">
                                <option value="">All</option>
                                @php $action = $filters['action'] ?? '' @endphp
                                @foreach(['login_password_ok', 'login_failed', 'otp_sent', 'otp_resent', 'otp_verified', 'otp_verify_failed', 'otp_session_expired', 'verify_access_denied'] as $opt)
                                    <option value="{{ $opt }}" {{ $action === $opt ? 'selected' : '' }}>{{ $opt }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Result</label>
                            <select name="result" class="form-select">
                                <option value="">All</option>
                                @php $result = $filters['result'] ?? '' @endphp
                                <option value="success" {{ $result === 'success' ? 'selected' : '' }}>success</option>
                                <option value="failure" {{ $result === 'failure' ? 'selected' : '' }}>failure</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Channel</label>
                            <select name="channel" class="form-select">
                                <option value="">All</option>
                                @php $channel = $filters['channel'] ?? '' @endphp
                                <option value="email" {{ $channel === 'email' ? 'selected' : '' }}>email</option>
                                <option value="whatsapp" {{ $channel === 'whatsapp' ? 'selected' : '' }}>whatsapp</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">User ID</label>
                            <input type="number" min="1" class="form-control" name="user_id" value="{{ $filters['user_id'] ?? '' }}" placeholder="CRM user ID">
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Email contains</label>
                            <input type="text" class="form-control" name="email" value="{{ $filters['email'] ?? '' }}" placeholder="staff@example.com">
                        </div>
                        <div class="col-12 col-md-1">
                            <label class="form-label">Per page</label>
                            <input type="number" min="1" max="200" class="form-control" name="per_page" value="{{ $filters['per_page'] ?? 50 }}">
                        </div>
                        <div class="col-12 col-md-1 d-flex gap-2">
                            <button type="submit" class="btn btn-primary w-100">Filter</button>
                        </div>
                        <div class="col-12 col-md-12">
                            <a href="{{ route('admin.crm-auth-events') }}" class="btn btn-light btn-sm">Reset filters</a>
                        </div>
                    </form>

                    <div class="table-responsive">
                        <table class="table table-striped align-middle mb-0">
                            <thead>
                                <tr>
                                    <th style="white-space:nowrap;">Time</th>
                                    <th>User</th>
                                    <th>Action</th>
                                    <th>Channel</th>
                                    <th>Result</th>
                                    <th style="white-space:nowrap;">IP</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse(($events ?? collect()) as $row)
                                    <tr>
                                        <td style="white-space:nowrap;">{{ $row['created_at'] ?? '' }}</td>
                                        <td>
                                            @if(!empty($row['user_id']))
                                                <div>ID: {{ $row['user_id'] }}</div>
                                                @if(!empty($row['user_email']))
                                                    <div class="text-muted small">{{ $row['user_email'] }}</div>
                                                @endif
                                                @if(!empty($row['user_name']))
                                                    <div class="text-muted small">{{ $row['user_name'] }}</div>
                                                @endif
                                                @if(!empty($row['user_type']))
                                                    <div class="text-muted small">{{ $row['user_type'] }}</div>
                                                @endif
                                            @else
                                                <span class="text-muted">—</span>
                                            @endif
                                        </td>
                                        <td><span class="badge bg-secondary">{{ $row['action'] ?? '' }}</span></td>
                                        <td>{{ $row['channel'] ?? '—' }}</td>
                                        <td>
                                            @php $resRaw = $row['result_raw'] ?? strtolower((string) ($row['result'] ?? '')); @endphp
                                            <span class="badge {{ $resRaw === 'success' ? 'bg-success' : ($resRaw === 'failure' ? 'bg-danger' : 'bg-secondary') }}">
                                                {{ $row['result'] ?? '' }}
                                            </span>
                                        </td>
                                        <td style="white-space:nowrap;">{{ $row['ip_address'] ?? '' }}</td>
                                        <td class="text-muted small" style="max-width: 280px;">
                                            @if(!empty($row['meta_summary']))
                                                {{ $row['meta_summary'] }}
                                            @else
                                                —
                                            @endif
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="7" class="text-center text-muted py-4">No auth events found.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>

                    @if($events instanceof \Illuminate\Contracts\Pagination\LengthAwarePaginator && $events->hasPages())
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div class="text-muted small">
                                Showing {{ $events->firstItem() ?? 0 }}–{{ $events->lastItem() ?? 0 }} of {{ $events->total() }}
                            </div>
                            <div>
                                {{ $events->links() }}
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
