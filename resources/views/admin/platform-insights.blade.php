@extends('layouts.vertical', ['title' => $title ?? 'Platform Insights'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            @php
                $recent = $insights['recent'] ?? [];
                $filters = $insights['filters'] ?? [];
                $periodOptions = $insights['period_options'] ?? [];
                $organizationOptions = $insights['organization_options'] ?? [];
                $pharmacyOptions = $insights['pharmacy_options'] ?? [];
                $selectedPeriod = $filters['period'] ?? ($recent['period'] ?? '2m');
                $selectedOrganizationId = $filters['organization_id'] ?? ($recent['organization_id'] ?? null);
                $selectedPharmacyIds = array_map('intval', $filters['pharmacy_ids'] ?? ($recent['pharmacy_ids'] ?? []));
            @endphp

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

            <div class="card mb-4 border-primary-subtle">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                        <h5 class="card-title mb-0">{{ $recent['period_label'] ?? 'Last 2 months' }}</h5>
                        <div class="text-muted small">
                            {{ $recent['from_label'] ?? '—' }} – {{ $recent['to_label'] ?? '—' }}
                            · {{ $recent['organization_name'] ?? 'All organizations' }}
                            · {{ $recent['pharmacy_name'] ?? 'All pharmacies' }}
                        </div>
                    </div>
                    <button type="button"
                        class="btn btn-outline-secondary btn-sm"
                        id="platformInsightsCopyRecentBtn">
                        <i class="ti ti-copy me-1"></i>
                        <span class="platform-insights-copy-recent-label">Copy period as text</span>
                    </button>
                </div>
                <div class="card-body">
                    <form method="get" action="{{ route('admin.platform-insights') }}" class="mb-4" id="platformInsightsFilterForm">
                        <div class="row g-3 align-items-start">
                            <div class="col-lg-3 col-md-6">
                                <label for="insightsOrganization" class="form-label small text-muted mb-1 insights-filter-label">Organization</label>
                                <select name="organization_id" id="insightsOrganization" class="form-select form-select-sm">
                                    <option value="">All organizations</option>
                                    @foreach($organizationOptions as $organization)
                                        <option value="{{ $organization['id'] }}" @selected((int) $selectedOrganizationId === (int) $organization['id'])>
                                            {{ $organization['name'] }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="form-label small text-muted mb-1 insights-filter-label d-flex align-items-center justify-content-between gap-2">
                                    <span>Pharmacies</span>
                                    <span class="fw-normal text-nowrap">
                                        <button type="button" class="btn btn-link btn-sm p-0 align-baseline" id="insightsPharmacySelectAll">Select all</button>
                                        <span class="text-muted">·</span>
                                        <button type="button" class="btn btn-link btn-sm p-0 align-baseline" id="insightsPharmacyClear">Clear</button>
                                    </span>
                                </div>
                                <div class="border rounded bg-body-tertiary px-2 py-1 insights-pharmacy-list" id="insightsPharmacyList">
                                    @forelse($pharmacyOptions as $pharmacy)
                                        <div class="form-check mb-1 insights-pharmacy-item"
                                            data-organization-id="{{ $pharmacy['organization_id'] ?? '' }}">
                                            <input class="form-check-input insights-pharmacy-check"
                                                type="checkbox"
                                                name="pharmacy_ids[]"
                                                id="insightsPharmacy{{ $pharmacy['id'] }}"
                                                value="{{ $pharmacy['id'] }}"
                                                @checked(in_array((int) $pharmacy['id'], $selectedPharmacyIds, true))>
                                            <label class="form-check-label small" for="insightsPharmacy{{ $pharmacy['id'] }}">
                                                {{ $pharmacy['name'] }}
                                            </label>
                                        </div>
                                    @empty
                                        <div class="text-muted small py-1">No pharmacies found.</div>
                                    @endforelse
                                    <div class="text-muted small d-none py-1" id="insightsPharmacyEmptyOrg">No pharmacies for this organization.</div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4">
                                <label for="insightsPeriod" class="form-label small text-muted mb-1 insights-filter-label">Time period</label>
                                <select name="period" id="insightsPeriod" class="form-select form-select-sm">
                                    @foreach($periodOptions as $value => $label)
                                        <option value="{{ $value }}" @selected($selectedPeriod === $value)>{{ $label }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-lg-2 col-md-4 insights-custom-dates {{ $selectedPeriod === 'custom' ? '' : 'd-none' }}">
                                <label for="insightsFrom" class="form-label small text-muted mb-1 insights-filter-label">From</label>
                                <input type="date" name="from" id="insightsFrom" class="form-control form-control-sm"
                                    value="{{ $filters['from'] ?? ($recent['from_input'] ?? '') }}">
                            </div>
                            <div class="col-lg-2 col-md-4 insights-custom-dates {{ $selectedPeriod === 'custom' ? '' : 'd-none' }}">
                                <label for="insightsTo" class="form-label small text-muted mb-1 insights-filter-label">To</label>
                                <input type="date" name="to" id="insightsTo" class="form-control form-control-sm"
                                    value="{{ $filters['to'] ?? ($recent['to_input'] ?? '') }}">
                            </div>
                            <div class="col-lg-auto col-md-4">
                                <label class="form-label small text-muted mb-1 insights-filter-label d-block">&nbsp;</label>
                                <button type="submit" class="btn btn-primary btn-sm">Apply</button>
                            </div>
                        </div>
                        <div class="text-muted small mt-2">
                            Pick an organization to narrow pharmacies. Leave pharmacies empty for all in scope.
                        </div>
                    </form>

                    <style>
                        #platformInsightsFilterForm .insights-filter-label {
                            min-height: 1.25rem;
                            line-height: 1.25rem;
                            margin-bottom: 0.25rem;
                        }
                        #platformInsightsFilterForm .insights-pharmacy-list {
                            min-height: calc(1.5em + 0.5rem + 2px); /* match form-select-sm */
                            max-height: 8.5rem;
                            overflow: auto;
                        }
                        #platformInsightsFilterForm .form-select-sm,
                        #platformInsightsFilterForm .form-control-sm,
                        #platformInsightsFilterForm .btn-sm {
                            min-height: calc(1.5em + 0.5rem + 2px);
                        }
                    </style>

                    <div class="row g-3 mb-3">
                        <div class="col-md-4">
                            <div class="text-muted small mb-1">Appointments booked</div>
                            <div class="fs-3 fw-semibold">
                                @if(($recent['appointments']['booked'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($recent['appointments']['booked']) }}
                                @endif
                            </div>
                            <ul class="small text-muted mb-0 mt-2 ps-3">
                                <li>Attended only:
                                    @if(($recent['appointments']['attended'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($recent['appointments']['attended']) }}
                                    @endif
                                </li>
                                <li>Non-cancelled (incl. waitlist):
                                    @if(($recent['appointments']['non_cancelled'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($recent['appointments']['non_cancelled']) }}
                                    @endif
                                </li>
                                <li>All statuses:
                                    @if(($recent['appointments']['total'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($recent['appointments']['total']) }}
                                    @endif
                                </li>
                            </ul>
                            @if(!empty($recent['appointments']['note']))
                                <div class="text-muted small mt-2">{{ $recent['appointments']['note'] }}</div>
                            @endif
                        </div>
                        <div class="col-md-4">
                            <div class="text-muted small mb-1">School / corporate opt-ins</div>
                            <div class="fs-3 fw-semibold">
                                @if(($recent['mvp_opt_ins']['total'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($recent['mvp_opt_ins']['total']) }}
                                @endif
                            </div>
                            <ul class="small text-muted mb-0 mt-2 ps-3">
                                <li>Schools:
                                    @if(($recent['mvp_opt_ins']['schools'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($recent['mvp_opt_ins']['schools']) }}
                                    @endif
                                </li>
                                <li>Corporates:
                                    @if(($recent['mvp_opt_ins']['corporates'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($recent['mvp_opt_ins']['corporates']) }}
                                    @endif
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <div class="text-muted small mb-1">Participants vaccinated</div>
                            <div class="fs-3 fw-semibold">
                                @if(($recent['vaccinated']['total'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($recent['vaccinated']['total']) }}
                                @endif
                            </div>
                            <ul class="small text-muted mb-0 mt-2 ps-3">
                                <li>Schools:
                                    @if(($recent['vaccinated']['schools'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($recent['vaccinated']['schools']) }}
                                    @endif
                                </li>
                                <li>Corporates:
                                    @if(($recent['vaccinated']['corporates'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($recent['vaccinated']['corporates']) }}
                                    @endif
                                </li>
                            </ul>
                            @if(!empty($recent['vaccinated']['note']))
                                <div class="text-muted small mt-2">{{ $recent['vaccinated']['note'] }}</div>
                            @endif
                        </div>
                    </div>

                    @php $byService = $recent['by_service'] ?? []; @endphp
                    <div class="border-top pt-3">
                        <div class="d-flex align-items-baseline justify-content-between flex-wrap gap-2 mb-2">
                            <div>
                                <div class="fw-semibold">{{ $byService['title'] ?? 'By service' }}</div>
                                <div class="text-muted small">
                                    Total booked:
                                    @if(($byService['total'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($byService['total']) }}
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-sm table-striped align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th class="text-end" style="width: 8rem;">Bookings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($byService['rows'] ?? [] as $row)
                                        <tr>
                                            <td>{{ $row['name'] }}</td>
                                            <td class="text-end">{{ number_format($row['count']) }}</td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="2" class="text-muted text-center py-3">No bookings in this window for the selected scope.</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                        @if(!empty($byService['note']))
                            <div class="text-muted small mt-2">{{ $byService['note'] }}</div>
                        @endif
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <h5 class="mb-0">All-time snapshot</h5>
                <button type="button"
                    class="btn btn-outline-secondary btn-sm"
                    id="platformInsightsCopyAllTimeBtn">
                    <i class="ti ti-copy me-1"></i>
                    <span class="platform-insights-copy-all-time-label">Copy all-time as text</span>
                </button>
            </div>

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
                            @if(!empty($insights['dispensing_error_top_reasons']))
                                <div class="text-muted small mt-2 mb-1">Top 3 reasons (dropdown type)</div>
                                <ul class="small text-muted mb-0 ps-3">
                                    @foreach($insights['dispensing_error_top_reasons'] as $row)
                                        <li>{{ $row['name'] }}: {{ number_format((int) ($row['count'] ?? 0)) }}</li>
                                    @endforeach
                                </ul>
                            @else
                                <div class="text-muted small mt-2">All records in dispensing_error_logs.</div>
                            @endif
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

            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="text-muted small mb-1">MVP opt-ins (all time)</div>
                            <div class="fs-3 fw-semibold">
                                @if(($insights['mvp_opt_ins']['total'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($insights['mvp_opt_ins']['total']) }}
                                @endif
                            </div>
                            <ul class="small text-muted mb-0 mt-2 ps-3">
                                <li>
                                    Schools:
                                    @if(($insights['mvp_opt_ins']['schools'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($insights['mvp_opt_ins']['schools']) }}
                                    @endif
                                </li>
                                <li>
                                    Corporates:
                                    @if(($insights['mvp_opt_ins']['corporates'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($insights['mvp_opt_ins']['corporates']) }}
                                    @endif
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="text-muted small mb-1">MVP registered participants (all time)</div>
                            <div class="fs-3 fw-semibold">
                                @if(($insights['mvp_participants']['total'] ?? null) === null)
                                    <span class="text-muted">N/A</span>
                                @else
                                    {{ number_format($insights['mvp_participants']['total']) }}
                                @endif
                            </div>
                            <ul class="small text-muted mb-0 mt-2 ps-3">
                                <li>
                                    Children:
                                    @if(($insights['mvp_participants']['children'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($insights['mvp_participants']['children']) }}
                                    @endif
                                </li>
                                <li>
                                    Teachers:
                                    @if(($insights['mvp_participants']['teachers'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($insights['mvp_participants']['teachers']) }}
                                    @endif
                                </li>
                                <li>
                                    Students (18+):
                                    @if(($insights['mvp_participants']['students'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($insights['mvp_participants']['students']) }}
                                    @endif
                                </li>
                                <li>
                                    Employees:
                                    @if(($insights['mvp_participants']['employees'] ?? null) === null)
                                        N/A
                                    @else
                                        {{ number_format($insights['mvp_participants']['employees']) }}
                                    @endif
                                </li>
                            </ul>
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
                                                <td>
                                                    <button type="button"
                                                        class="btn btn-link p-0 text-start text-primary text-decoration-underline medication-orders-link"
                                                        data-medication="{{ e($row['name']) }}">
                                                        {{ $row['name'] }}
                                                    </button>
                                                </td>
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

    <div class="modal fade" id="medicationOrdersModal" tabindex="-1" aria-labelledby="medicationOrdersModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content border border-secondary-subtle shadow-sm">
                <div class="modal-header">
                    <div>
                        <h5 class="modal-title mb-0" id="medicationOrdersModalLabel">Orders</h5>
                        <div class="text-muted small" id="medicationOrdersModalSubtitle"></div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <div id="medicationOrdersLoading" class="text-center py-5 text-muted d-none">
                        <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                        Loading orders…
                    </div>
                    <div id="medicationOrdersError" class="alert alert-danger m-3 d-none"></div>
                    <div class="table-responsive">
                        <table class="table table-hover align-middle mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Patient</th>
                                    <th>Pharmacy</th>
                                    <th>Status</th>
                                    <th class="text-end">Qty</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="medicationOrdersTableBody"></tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <div class="text-muted small" id="medicationOrdersPaginationInfo"></div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-secondary btn-sm" id="medicationOrdersPrevBtn" disabled>Previous</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" id="medicationOrdersNextBtn" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="platformInsightOrderModal" tabindex="-1" aria-labelledby="platformInsightOrderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content border border-secondary-subtle shadow-sm">
                <div class="modal-header">
                    <h5 class="modal-title" id="platformInsightOrderModalLabel">Order Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="platformInsightOrderModalBody">
                    <div class="text-center py-4 text-muted">
                        <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                        Loading…
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
<script>
(function () {
    const ordersUrl = @json(route('admin.platform-insights.medication-orders'));
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    const insightsCopyRecent = @json($insights['copy_text_recent'] ?? '');
    const insightsCopyAllTime = @json($insights['copy_text_all_time'] ?? '');
    const periodSelect = document.getElementById('insightsPeriod');
    const customDateFields = document.querySelectorAll('.insights-custom-dates');

    let currentMedication = '';
    let currentPage = 1;
    let lastPage = 1;

    function toggleCustomDates() {
        const isCustom = periodSelect && periodSelect.value === 'custom';
        customDateFields.forEach((el) => {
            el.classList.toggle('d-none', !isCustom);
        });
    }

    if (periodSelect) {
        periodSelect.addEventListener('change', toggleCustomDates);
        toggleCustomDates();
    }

    const organizationSelect = document.getElementById('insightsOrganization');
    const pharmacyItems = () => Array.from(document.querySelectorAll('.insights-pharmacy-item'));
    const visiblePharmacyChecks = () => pharmacyItems()
        .filter((item) => !item.classList.contains('d-none'))
        .map((item) => item.querySelector('.insights-pharmacy-check'))
        .filter(Boolean);
    const pharmacyEmptyOrg = document.getElementById('insightsPharmacyEmptyOrg');

    function filterPharmaciesByOrganization() {
        const orgId = organizationSelect ? String(organizationSelect.value || '') : '';
        let visibleCount = 0;

        pharmacyItems().forEach((item) => {
            const itemOrg = String(item.getAttribute('data-organization-id') || '');
            const matches = orgId === '' || itemOrg === orgId;
            item.classList.toggle('d-none', !matches);
            const check = item.querySelector('.insights-pharmacy-check');
            if (!matches && check) {
                check.checked = false;
            }
            if (matches) {
                visibleCount += 1;
            }
        });

        if (pharmacyEmptyOrg) {
            pharmacyEmptyOrg.classList.toggle('d-none', orgId === '' || visibleCount > 0);
        }
    }

    organizationSelect?.addEventListener('change', filterPharmaciesByOrganization);
    filterPharmaciesByOrganization();

    document.getElementById('insightsPharmacySelectAll')?.addEventListener('click', () => {
        visiblePharmacyChecks().forEach((el) => { el.checked = true; });
    });
    document.getElementById('insightsPharmacyClear')?.addEventListener('click', () => {
        visiblePharmacyChecks().forEach((el) => { el.checked = false; });
    });

    document.getElementById('platformInsightsFilterForm')?.addEventListener('submit', () => {
        // Don't submit hidden (out-of-org) pharmacy checkboxes.
        pharmacyItems().forEach((item) => {
            if (item.classList.contains('d-none')) {
                const check = item.querySelector('.insights-pharmacy-check');
                if (check) {
                    check.disabled = true;
                }
            }
        });
    });

    async function copyTextToClipboard(text, labelEl, idleLabel) {
        if (!String(text || '').trim()) {
            return;
        }

        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'absolute';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            if (labelEl) {
                labelEl.textContent = 'Copied';
                setTimeout(() => {
                    if (labelEl) labelEl.textContent = idleLabel;
                }, 1500);
            }
        } catch (err) {
            console.error('Copy platform insights failed:', err);
            if (labelEl) {
                labelEl.textContent = 'Copy failed';
                setTimeout(() => {
                    if (labelEl) labelEl.textContent = idleLabel;
                }, 2000);
            }
        }
    }

    const copyRecentBtn = document.getElementById('platformInsightsCopyRecentBtn');
    const copyAllTimeBtn = document.getElementById('platformInsightsCopyAllTimeBtn');
    if (copyRecentBtn) {
        copyRecentBtn.addEventListener('click', () => {
            copyTextToClipboard(
                insightsCopyRecent,
                copyRecentBtn.querySelector('.platform-insights-copy-recent-label'),
                'Copy period as text'
            );
        });
    }
    if (copyAllTimeBtn) {
        copyAllTimeBtn.addEventListener('click', () => {
            copyTextToClipboard(
                insightsCopyAllTime,
                copyAllTimeBtn.querySelector('.platform-insights-copy-all-time-label'),
                'Copy all-time as text'
            );
        });
    }

    function getModal(id) {
        if (typeof window.bootstrap === 'undefined') {
            return null;
        }
        const el = document.getElementById(id);
        return el ? window.bootstrap.Modal.getOrCreateInstance(el) : null;
    }

    function showOrdersModal() {
        getModal('medicationOrdersModal')?.show();
    }

    function showOrderModal() {
        getModal('platformInsightOrderModal')?.show();
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function formatDate(iso) {
        if (!iso) return '—';
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return iso;
        return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
    }

    function statusBadgeClass(status) {
        const s = String(status || '').toLowerCase();
        if (['complete', 'completed'].includes(s)) return 'bg-success';
        if (s === 'pending') return 'bg-warning';
        if (['reject', 'rejected', 'cancelled'].includes(s)) return 'bg-danger';
        return 'bg-secondary';
    }

    async function loadMedicationOrders(page = 1) {
        if (!currentMedication) return;

        currentPage = page;
        const loading = document.getElementById('medicationOrdersLoading');
        const errorBox = document.getElementById('medicationOrdersError');
        const tbody = document.getElementById('medicationOrdersTableBody');

        loading?.classList.remove('d-none');
        errorBox?.classList.add('d-none');
        if (tbody) tbody.innerHTML = '';

        try {
            const params = new URLSearchParams({
                medication: currentMedication,
                page: String(page),
                per_page: '25',
            });
            const response = await fetch(`${ordersUrl}?${params.toString()}`, {
                headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Failed to load orders');
            }

            lastPage = result.meta?.last_page || 1;
            const rows = result.data || [];

            document.getElementById('medicationOrdersModalLabel').textContent = currentMedication;
            document.getElementById('medicationOrdersModalSubtitle').textContent =
                `${result.meta.total.toLocaleString()} order(s) — page ${result.meta.page} of ${lastPage}`;

            if (tbody) {
                if (!rows.length) {
                    tbody.innerHTML = '<tr><td colspan="7" class="text-muted text-center py-4">No orders found.</td></tr>';
                } else {
                    tbody.innerHTML = rows.map((order) => `
                        <tr>
                            <td><strong>${escapeHtml(order.order_no)}</strong></td>
                            <td>${escapeHtml(formatDate(order.created_at))}</td>
                            <td>
                                <div>${escapeHtml(order.patient_name)}</div>
                                <div class="small text-muted">${escapeHtml(order.patient_email)}</div>
                            </td>
                            <td>${escapeHtml(order.pharmacy_name)}</td>
                            <td><span class="badge ${statusBadgeClass(order.status)}">${escapeHtml(order.status)}</span></td>
                            <td class="text-end">${escapeHtml(order.quantity)}</td>
                            <td class="text-end">
                                <button type="button" class="btn btn-sm btn-outline-primary platform-insight-order-btn" data-order-id="${order.id}">
                                    View
                                </button>
                            </td>
                        </tr>
                    `).join('');
                }
            }

            document.getElementById('medicationOrdersPrevBtn').disabled = currentPage <= 1;
            document.getElementById('medicationOrdersNextBtn').disabled = currentPage >= lastPage;
            document.getElementById('medicationOrdersPaginationInfo').textContent =
                `Showing page ${currentPage} of ${lastPage}`;
        } catch (err) {
            if (errorBox) {
                errorBox.textContent = err.message || 'Could not load orders.';
                errorBox.classList.remove('d-none');
            }
        } finally {
            loading?.classList.add('d-none');
        }
    }

    async function showOrderDetails(orderId) {
        const body = document.getElementById('platformInsightOrderModalBody');
        if (!body) return;

        body.innerHTML = '<div class="text-center py-4 text-muted"><div class="spinner-border spinner-border-sm me-2"></div>Loading…</div>';
        showOrderModal();

        try {
            const response = await fetch(`/api/rx-users/orders/${orderId}`, {
                headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Failed to load order details');
            }

            const order = result.data;
            const items = Array.isArray(order.items) ? order.items : [];
            const hasPrescriptionImage = order.has_prescription_image === true && order.prescription_image_url;

            const rightColumn = hasPrescriptionImage
                ? `<h6>Prescription Image</h6>
                   <div class="border rounded p-2 bg-light text-center">
                       <img src="${escapeHtml(order.prescription_image_url)}" alt="Prescription" class="img-fluid" style="max-height: 400px; object-fit: contain;" />
                   </div>`
                : `<h6>Order Items</h6>
                   <div class="table-responsive">
                       <table class="table table-sm">
                           <thead><tr><th>Medication</th><th>Quantity</th></tr></thead>
                           <tbody>
                               ${items.length ? items.map((item) => `
                                   <tr>
                                       <td>${escapeHtml(item.medication_name)}</td>
                                       <td>${escapeHtml(item.quantity ?? '—')}</td>
                                   </tr>`).join('') : '<tr><td colspan="2" class="text-muted">No medications listed</td></tr>'}
                           </tbody>
                       </table>
                   </div>`;

            body.innerHTML = `
                <div class="row g-3">
                    <div class="col-md-6">
                        <h6>Order Information</h6>
                        <table class="table table-sm">
                            <tr><td><strong>Order No:</strong></td><td>${escapeHtml(order.order_no)}</td></tr>
                            <tr><td><strong>Patient:</strong></td><td>${escapeHtml(order.user_name)}</td></tr>
                            <tr><td><strong>Pharmacy:</strong></td><td>${escapeHtml(order.pharmacy_name)}</td></tr>
                            <tr><td><strong>Status:</strong></td><td><span class="badge ${statusBadgeClass(order.status)}">${escapeHtml(order.status)}</span></td></tr>
                            <tr><td><strong>Collection:</strong></td><td>${escapeHtml(order.collection_method)}</td></tr>
                            <tr><td><strong>Additional info:</strong></td><td>${escapeHtml(order.additional_info)}</td></tr>
                            <tr><td><strong>Created:</strong></td><td>${escapeHtml(order.created_at)}</td></tr>
                            <tr><td><strong>Updated:</strong></td><td>${escapeHtml(order.updated_at)}</td></tr>
                        </table>
                    </div>
                    <div class="col-md-6">${rightColumn}</div>
                </div>
            `;
            document.getElementById('platformInsightOrderModalLabel').textContent = order.order_no || 'Order Details';
        } catch (err) {
            body.innerHTML = `<div class="alert alert-danger mb-0">${escapeHtml(err.message || 'Failed to load order details')}</div>`;
        }
    }

    function bindHandlers() {
        document.addEventListener('click', (event) => {
            const medicationBtn = event.target.closest('.medication-orders-link');
            if (medicationBtn) {
                event.preventDefault();
                currentMedication = medicationBtn.getAttribute('data-medication') || '';
                currentPage = 1;
                showOrdersModal();
                loadMedicationOrders(1);
                return;
            }

            const orderBtn = event.target.closest('.platform-insight-order-btn');
            if (orderBtn) {
                const orderId = orderBtn.getAttribute('data-order-id');
                if (orderId) showOrderDetails(orderId);
            }
        });

        document.getElementById('medicationOrdersPrevBtn')?.addEventListener('click', () => {
            if (currentPage > 1) loadMedicationOrders(currentPage - 1);
        });

        document.getElementById('medicationOrdersNextBtn')?.addEventListener('click', () => {
            if (currentPage < lastPage) loadMedicationOrders(currentPage + 1);
        });
    }

    function initWhenReady() {
        if (typeof window.bootstrap === 'undefined') {
            window.setTimeout(initWhenReady, 50);
            return;
        }
        bindHandlers();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWhenReady);
    } else {
        initWhenReady();
    }
})();
</script>
@endsection
