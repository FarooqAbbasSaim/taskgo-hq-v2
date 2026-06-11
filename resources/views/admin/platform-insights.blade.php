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

    let currentMedication = '';
    let currentPage = 1;
    let lastPage = 1;

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
