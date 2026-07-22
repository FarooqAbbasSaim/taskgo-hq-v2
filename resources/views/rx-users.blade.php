@extends('layouts.vertical', ['title' => 'Rx Users'])

@section('content')
<div class="container-fluid">
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header justify-content-between align-items-center border-dashed">
                <h4 class="card-title mb-0">Rx Users Management</h4>
                    <div class="d-flex gap-2">
                        <button type="button" class="btn btn-primary" onclick="refreshTable()">
                            <i class="ti ti-refresh me-1"></i> Refresh
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row mb-3 g-2 align-items-end">
                        <div class="col-md-4">
                            <div class="input-group">
                                <span class="input-group-text"><i class="ti ti-search"></i></span>
                                <input type="text" class="form-control" id="searchRxUsers" placeholder="Search name, email, phone, PPS...">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select" id="filterPharmacy"><option value="">All pharmacies</option></select>
                        </div>
                        <div class="col-md-3">
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="filterHasOrders"><label class="form-check-label" for="filterHasOrders">Has orders</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="filterHasBookings"><label class="form-check-label" for="filterHasBookings">Has bookings</label></div>
                        </div>
                    </div>

                    <!-- Loading State -->
                    <div id="loadingState" class="text-center py-5">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p class="mt-2 text-muted">Loading Rx Users...</p>
                    </div>

                    <!-- Error State -->
                    <div id="errorState" class="text-center py-5" style="display: none;">
                        <div class="text-danger mb-3">
                            <i class="ti ti-alert-circle" style="font-size: 3rem;"></i>
                        </div>
                        <h5 class="text-danger">Failed to load Rx Users</h5>
                        <p class="text-muted" id="errorMessage">An error occurred while loading the data.</p>
                        <button type="button" class="btn btn-primary" onclick="loadRxUsers()">
                            <i class="ti ti-refresh me-1"></i> Try Again
                        </button>
                    </div>

                    <!-- Empty State -->
                    <div id="emptyState" class="text-center py-5" style="display: none;">
                        <div class="text-muted mb-3">
                            <i class="ti ti-users" style="font-size: 3rem;"></i>
                        </div>
                        <h5 class="text-muted">No Rx Users Found</h5>
                        <p class="text-muted" id="emptyStateMessage">There are no Rx users in the system yet.</p>
                    </div>

                    <!-- Table -->
                    <div id="tableContainer" style="display: none;">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover" id="rxUsersTable">
                                <thead class="table-light">
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>PPS No</th>
                                        <th>Date of Birth</th>
                                        <th>Nominated Pharmacy</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="rxUsersTableBody">
                                    <!-- Data will be loaded here -->
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div class="text-muted small">Showing <span id="showingCount">0</span> of <span id="totalCount">0</span></div>
                            <div class="btn-group btn-group-sm" id="paginationControls"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Toast Container -->
<div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 9999;">
    <div id="successToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-success text-white">
            <i class="ti ti-check me-2"></i>
            <strong class="me-auto">Success</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body" id="successToastBody">
            <!-- Success message will be inserted here -->
        </div>
    </div>

    <div id="errorToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-danger text-white">
            <i class="ti ti-alert-circle me-2"></i>
            <strong class="me-auto">Error</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body" id="errorToastBody">
            <!-- Error message will be inserted here -->
        </div>
    </div>
</div>

@endsection

@section('scripts')
<script>
class RxUsersManager {
    constructor() {
        this.rxUsers = [];
        this.meta = { page: 1, per_page: 25, total: 0, last_page: 1 };
        this.searchTimer = null;
        this.init();
    }

    init() {
        this.loadPharmacies();
        document.getElementById('searchRxUsers')?.addEventListener('input', () => {
            clearTimeout(this.searchTimer);
            this.searchTimer = setTimeout(() => { this.meta.page = 1; this.loadRxUsers(); }, 300);
        });
        ['filterPharmacy','filterHasOrders','filterHasBookings'].forEach(id => {
            document.getElementById(id)?.addEventListener('change', () => { this.meta.page = 1; this.loadRxUsers(); });
        });
        this.loadRxUsers();
    }

    async loadPharmacies() {
        try {
            const response = await fetch('/api/rx-users/pharmacies/active', { headers: { Accept: 'application/json' } });
            const result = await response.json();
            const select = document.getElementById('filterPharmacy');
            if (select && result.success) {
                result.data.forEach(p => {
                    const opt = document.createElement('option');
                    opt.value = p.id;
                    opt.textContent = p.pharmacy_name;
                    select.appendChild(opt);
                });
            }
        } catch (e) { /* optional */ }
    }

    buildQuery() {
        const params = new URLSearchParams();
        params.set('page', this.meta.page);
        params.set('per_page', this.meta.per_page);
        const search = document.getElementById('searchRxUsers')?.value.trim();
        if (search) params.set('search', search);
        const pharmacyId = document.getElementById('filterPharmacy')?.value;
        if (pharmacyId) params.set('pharmacy_id', pharmacyId);
        if (document.getElementById('filterHasOrders')?.checked) params.set('has_orders', '1');
        if (document.getElementById('filterHasBookings')?.checked) params.set('has_bookings', '1');
        return params.toString();
    }

    async loadRxUsers() {
        this.showLoading(true);
        this.hideError(); this.hideEmpty(); this.hideTable();
        try {
            const response = await fetch('/api/rx-users?' + this.buildQuery(), {
                headers: { Accept: 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content },
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message || 'Failed to load');
            this.rxUsers = result.data || [];
            this.meta = { ...this.meta, ...(result.meta || {}) };
            this.renderTable();
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.showLoading(false);
        }
    }

    renderTable() {
        const tbody = document.getElementById('rxUsersTableBody');
        if (!this.rxUsers.length) {
            document.getElementById('emptyStateMessage').textContent = 'Try adjusting your search or filters.';
            this.showEmpty();
            return;
        }
        this.hideEmpty();
        tbody.innerHTML = this.rxUsers.map(user => `<tr>
            <td><a href="/admin/rx-users/${user.id}" class="text-primary fw-semibold">${user.full_name}</a></td>
            <td>${user.email || '-'}</td><td>${user.phone || '-'}</td><td>${user.pps_no || '-'}</td>
            <td>${user.dob || '-'}</td><td>${user.nominated_pharmacy || '-'}</td>
            <td><a href="/admin/rx-users/${user.id}" class="btn btn-sm btn-outline-primary">View</a>
            <a href="/admin/rx-users/${user.id}/edit" class="btn btn-sm btn-primary">Edit</a></td></tr>`).join('');
        document.getElementById('showingCount').textContent = this.rxUsers.length;
        document.getElementById('totalCount').textContent = this.meta.total || 0;
        this.renderPagination();
        this.showTable();
    }

    renderPagination() {
        const controls = document.getElementById('paginationControls');
        const page = this.meta.page || 1;
        const last = this.meta.last_page || 1;
        controls.innerHTML = `
            <button class="btn btn-outline-secondary" ${page <= 1 ? 'disabled' : ''} onclick="rxUsersManager.goPage(${page - 1})">Prev</button>
            <button class="btn btn-outline-secondary disabled">${page} / ${last}</button>
            <button class="btn btn-outline-secondary" ${page >= last ? 'disabled' : ''} onclick="rxUsersManager.goPage(${page + 1})">Next</button>`;
    }

    goPage(page) {
        this.meta.page = page;
        this.loadRxUsers();
    }

    showLoading(show) { document.getElementById('loadingState').style.display = show ? 'block' : 'none'; }
    showError(message) { document.getElementById('errorMessage').textContent = message; document.getElementById('errorState').style.display = 'block'; }
    hideError() { document.getElementById('errorState').style.display = 'none'; }
    showEmpty() { document.getElementById('emptyState').style.display = 'block'; document.getElementById('tableContainer').style.display = 'none'; }
    hideEmpty() { document.getElementById('emptyState').style.display = 'none'; }
    showTable() { document.getElementById('tableContainer').style.display = 'block'; }
    hideTable() { document.getElementById('tableContainer').style.display = 'none'; }
}

function refreshTable() { window.rxUsersManager?.loadRxUsers(); }
function loadRxUsers() { window.rxUsersManager?.loadRxUsers(); }

document.addEventListener('DOMContentLoaded', function() {
    window.rxUsersManager = new RxUsersManager();
});
</script>
@endsection
