@extends('layouts.vertical', ['title' => $title ?? 'Platform Insights'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                <div>
                    <h4 class="mb-0">Platform Insights</h4>
                    <div class="text-muted small">
                        Taskgo-wide metrics across all pharmacies. Snapshot as of {{ $insights['generated_at'] ?? 'now' }}.
                    </div>
                </div>
            </div>

            @if(!config('features.platform_insights'))
                <div class="alert alert-warning">This page is disabled.</div>
            @endif

            @if(!empty($error))
                <div class="alert alert-danger">{{ $error }}</div>
            @endif

            <div class="row g-3 mb-4">
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="text-muted small mb-1">CCS services booked (all time)</div>
                            <div class="fs-3 fw-semibold">
                                @if(($insights['ccs_bookings_total'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($insights['ccs_bookings_total']) }}
                                @endif
                            </div>
                            <div class="text-muted small mt-2">Non-cancelled appointments where service type is CCS.</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="text-muted small mb-1">Dispensing error logs (all time)</div>
                            <div class="fs-3 fw-semibold">
                                @if(($insights['dispensing_error_logs_total'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($insights['dispensing_error_logs_total']) }}
                                @endif
                            </div>
                            <div class="text-muted small mt-2">All records in dispensing_error_logs.</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="text-muted small mb-1">WhatsApp messages sent (tracked)</div>
                            <div class="fs-3 fw-semibold">
                                @if(($insights['whatsapp']['total'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($insights['whatsapp']['total']) }}
                                @endif
                            </div>
                            @if(!empty($insights['whatsapp']['breakdown']))
                                <ul class="small text-muted mb-0 mt-2 ps-3">
                                    @foreach($insights['whatsapp']['breakdown'] as $row)
                                        <li>{{ $row['label'] }}: {{ number_format($row['count']) }}</li>
                                    @endforeach
                                </ul>
                            @endif
                            @if(!empty($insights['whatsapp']['note']))
                                <div class="text-muted small mt-2">{{ $insights['whatsapp']['note'] }}</div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-3">
                <div class="col-lg-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Top 5 medications ordered</h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th style="width: 3rem;">#</th>
                                            <th>Medication</th>
                                            <th class="text-end">Line items</th>
                                            <th class="text-end">Orders</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse($insights['top_medications'] ?? [] as $row)
                                            <tr>
                                                <td>{{ $row['rank'] }}</td>
                                                <td>{{ $row['name'] }}</td>
                                                <td class="text-end">{{ number_format($row['order_lines']) }}</td>
                                                <td class="text-end">{{ number_format($row['orders']) }}</td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="4" class="text-muted text-center py-4">No medication order data found.</td>
                                            </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Top 5 services booked</h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th style="width: 3rem;">#</th>
                                            <th>Service</th>
                                            <th>Type</th>
                                            <th class="text-end">Bookings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse($insights['top_services'] ?? [] as $row)
                                            <tr>
                                                <td>{{ $row['rank'] }}</td>
                                                <td>{{ $row['name'] }}</td>
                                                <td>{{ $row['type'] ?: '—' }}</td>
                                                <td class="text-end">{{ number_format($row['bookings']) }}</td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="4" class="text-muted text-center py-4">No service booking data found.</td>
                                            </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
