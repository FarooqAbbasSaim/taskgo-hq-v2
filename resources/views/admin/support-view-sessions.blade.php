@extends('layouts.vertical', ['title' => $title ?? 'Support View Sessions'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <h4 class="mb-0">Support View Sessions</h4>
                    <div class="text-muted small">Audited HQ → CRM Support View sessions (reason, actor, target, TTL, mode).</div>
                </div>
            </div>

            @if(!config('features.support_view_sessions_log'))
                <div class="alert alert-warning">This page is disabled.</div>
            @endif

            @if(!empty($error))
                <div class="alert alert-danger">{{ $error }}</div>
            @endif

            <div class="card">
                <div class="card-body">
                    <form method="GET" action="{{ route('admin.support-view-sessions') }}" class="row g-2 align-items-end mb-3">
                        <div class="col-12 col-md-2">
                            <label class="form-label">Status</label>
                            @php $status = $filters['status'] ?? '' @endphp
                            <select name="status" class="form-select">
                                <option value="">All</option>
                                <option value="created" {{ $status === 'created' ? 'selected' : '' }}>created</option>
                                <option value="started" {{ $status === 'started' ? 'selected' : '' }}>started</option>
                                <option value="ended" {{ $status === 'ended' ? 'selected' : '' }}>ended</option>
                                <option value="expired" {{ $status === 'expired' ? 'selected' : '' }}>expired</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Mode</label>
                            @php $mode = $filters['mode'] ?? '' @endphp
                            <select name="mode" class="form-select">
                                <option value="">All</option>
                                <option value="read_only" {{ $mode === 'read_only' ? 'selected' : '' }}>read_only</option>
                                <option value="write" {{ $mode === 'write' ? 'selected' : '' }}>write</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Customer ID</label>
                            <input type="number" class="form-control" name="customer_id" value="{{ $filters['customer_id'] ?? '' }}" placeholder="e.g. 42">
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Target user ID</label>
                            <input type="number" class="form-control" name="target_user_id" value="{{ $filters['target_user_id'] ?? '' }}" placeholder="e.g. 101">
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">HQ actor email</label>
                            <input type="text" class="form-control" name="hq_actor_email" value="{{ $filters['hq_actor_email'] ?? '' }}" placeholder="support@...">
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Target email</label>
                            <input type="text" class="form-control" name="target_email" value="{{ $filters['target_email'] ?? '' }}" placeholder="pharmacy@...">
                        </div>
                        <div class="col-12 col-md-2">
                            <label class="form-label">Per page</label>
                            <input type="number" min="1" max="200" class="form-control" name="per_page" value="{{ $filters['per_page'] ?? 50 }}">
                        </div>
                        <div class="col-12 col-md-2 d-flex gap-2">
                            <button type="submit" class="btn btn-primary w-100">Filter</button>
                            <a href="{{ route('admin.support-view-sessions') }}" class="btn btn-light w-100">Reset</a>
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
                                    <th style="white-space:nowrap;">ID</th>
                                    <th style="white-space:nowrap;">Created</th>
                                    <th>Status</th>
                                    <th>Mode</th>
                                    <th>HQ actor</th>
                                    <th>Target</th>
                                    <th>Customer</th>
                                    <th>Reason</th>
                                    <th style="white-space:nowrap;">Started</th>
                                    <th style="white-space:nowrap;">Ended</th>
                                    <th style="white-space:nowrap;">Expires</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($data as $row)
                                    @php
                                        $statusBadge = match ($row['status'] ?? '') {
                                            'started' => 'bg-success',
                                            'created' => 'bg-info',
                                            'ended' => 'bg-secondary',
                                            'expired' => 'bg-warning text-dark',
                                            default => 'bg-secondary',
                                        };
                                        $modeBadge = ($row['mode'] ?? '') === 'write' ? 'bg-danger' : 'bg-primary';
                                    @endphp
                                    <tr>
                                        <td>{{ $row['id'] ?? '' }}</td>
                                        <td style="white-space:nowrap;">{{ $row['created_at'] ?? '' }}</td>
                                        <td>
                                            <span class="badge {{ $statusBadge }}">{{ $row['status'] ?? '' }}</span>
                                            @if(!empty($row['ended_reason']))
                                                <div class="text-muted small">{{ $row['ended_reason'] }}</div>
                                            @endif
                                        </td>
                                        <td><span class="badge {{ $modeBadge }}">{{ $row['mode'] ?? '' }}</span></td>
                                        <td>
                                            <div>{{ $row['hq_actor_name'] ?? '—' }}</div>
                                            <div class="text-muted small">{{ $row['hq_actor_email'] ?? '' }}</div>
                                        </td>
                                        <td>
                                            <div>{{ $row['target_name'] ?? '—' }}</div>
                                            <div class="text-muted small">
                                                #{{ $row['target_user_id'] ?? '' }}
                                                @if(!empty($row['target_email']))
                                                    · {{ $row['target_email'] }}
                                                @endif
                                            </div>
                                        </td>
                                        <td>
                                            @if(!empty($row['customer_id']))
                                                <a href="/admin/customers/{{ $row['customer_id'] }}">#{{ $row['customer_id'] }}</a>
                                            @else
                                                —
                                            @endif
                                        </td>
                                        <td class="small" style="max-width: 240px;">{{ $row['reason'] ?? '' }}</td>
                                        <td style="white-space:nowrap;">{{ $row['started_at'] ?? '—' }}</td>
                                        <td style="white-space:nowrap;">{{ $row['ended_at'] ?? '—' }}</td>
                                        <td style="white-space:nowrap;">{{ $row['expires_at'] ?? '—' }}</td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="11" class="text-center text-muted py-4">No Support View sessions found.</td>
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
                                   href="{{ $current <= 1 ? '#' : route('admin.support-view-sessions', array_merge($baseParams, ['page' => $current - 1])) }}">
                                    Prev
                                </a>
                                <a class="btn btn-light {{ $current >= $last ? 'disabled' : '' }}"
                                   href="{{ $current >= $last ? '#' : route('admin.support-view-sessions', array_merge($baseParams, ['page' => $current + 1])) }}">
                                    Next
                                </a>
                            </div>
                        </div>
                    @elseif(is_array($meta) && isset($meta['total']))
                        <div class="text-muted small mt-3">
                            Showing {{ $meta['from'] ?? 0 }}–{{ $meta['to'] ?? 0 }} of {{ $meta['total'] ?? 0 }}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
