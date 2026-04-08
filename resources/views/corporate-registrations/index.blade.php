@extends('layouts.vertical', ['title' => $title ?? 'Corporate Registrations'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header justify-content-between align-items-center border-dashed">
                    <h4 class="card-title mb-0">Corporate Registrations</h4>
                </div>

                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success" role="alert">
                            <i class="ti ti-check me-1"></i> {{ session('success') }}
                        </div>
                    @endif
                    @if (session('warning'))
                        <div class="alert alert-warning" role="alert">
                            <i class="ti ti-alert-triangle me-1"></i> {{ session('warning') }}
                        </div>
                    @endif

                    <div class="table-responsive">
                        <table class="table table-centered table-custom table-sm table-nowrap table-hover mb-0">
                            <thead class="bg-light-subtle">
                                <tr>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Employees</th>
                                    <th>CRO</th>
                                    <th>Eircode</th>
                                    <th>Status</th>
                                    <th>Submitted</th>
                                    <th>Approved</th>
                                    <th>Email Sent</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($registrations as $r)
                                    <tr>
                                        <td class="fw-semibold">{{ $r->company_name }}</td>
                                        <td>{{ $r->email }}</td>
                                        <td>{{ $r->employee_count_on_site }}</td>
                                        <td>{{ $r->cro_number }}</td>
                                        <td>{{ $r->premises_eircode }}</td>
                                        <td>
                                            @php
                                                $badge = match ($r->status) {
                                                    'approved' => 'success',
                                                    'rejected' => 'danger',
                                                    default => 'warning',
                                                };
                                            @endphp
                                            <span class="badge text-bg-{{ $badge }}">{{ ucfirst($r->status ?? 'pending') }}</span>
                                        </td>
                                        <td>{{ optional($r->created_at)->format('Y-m-d H:i') }}</td>
                                        <td>{{ optional($r->approved_at)->format('Y-m-d H:i') }}</td>
                                        <td>{{ optional($r->set_password_email_sent_at)->format('Y-m-d H:i') }}</td>
                                        <td>
                                            @if (($r->status ?? 'pending') === 'pending')
                                                <form method="post" action="{{ route('admin.corporate-registrations.approve', $r->id) }}"
                                                    onsubmit="return confirm('Approve and email set-password link?');">
                                                    @csrf
                                                    <input type="hidden" name="send_email" value="1">
                                                    <button class="btn btn-sm btn-primary">
                                                        <i class="ti ti-check me-1"></i> Approve
                                                    </button>
                                                </form>
                                            @else
                                                <span class="text-muted">—</span>
                                            @endif
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="10" class="text-center text-muted py-4">No registrations found.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

