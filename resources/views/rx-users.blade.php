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
                        <p class="text-muted">There are no Rx users in the system yet.</p>
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
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadRxUsers();
    }

    bindEvents() {
        // Any additional event bindings can go here
    }

    async loadRxUsers() {
        this.showLoading(true);
        this.hideError();
        this.hideEmpty();
        this.hideTable();

        try {
            const response = await fetch('/api/rx-users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            
            if (result.success) {
                this.rxUsers = result.data;
                this.renderTable();
            } else {
                throw new Error(result.message || 'Failed to load Rx users');
            }
        } catch (error) {
            console.error('Error loading Rx users:', error);
            this.showError(error.message);
        } finally {
            this.showLoading(false);
        }
    }

    renderTable() {
        const tbody = document.getElementById('rxUsersTableBody');
        
        if (this.rxUsers.length === 0) {
            this.showEmpty();
            return;
        }

        tbody.innerHTML = this.rxUsers.map(user => `
            <tr>
                <td>
                    <a href="/admin/rx-users/${user.id}" class="text-primary fw-semibold">
                        ${user.full_name}
                    </a>
                </td>
                <td>${user.email || '-'}</td>
                <td>${user.phone || '-'}</td>
                <td>${user.pps_no || '-'}</td>
                <td>${user.dob || '-'}</td>
                <td>${user.nominated_pharmacy || '-'}</td>
                <td>
                    <div class="btn-group" role="group">
                        <a href="/admin/rx-users/${user.id}" class="btn btn-sm btn-outline-primary">
                            <i class="ti ti-eye"></i> View
                        </a>
                    </div>
                </td>
            </tr>
        `).join('');

        this.showTable();
    }

    showLoading(show) {
        const loadingState = document.getElementById('loadingState');
        loadingState.style.display = show ? 'block' : 'none';
    }

    showError(message) {
        const errorState = document.getElementById('errorState');
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = message;
        errorState.style.display = 'block';
    }

    hideError() {
        const errorState = document.getElementById('errorState');
        errorState.style.display = 'none';
    }

    showEmpty() {
        const emptyState = document.getElementById('emptyState');
        emptyState.style.display = 'block';
    }

    hideEmpty() {
        const emptyState = document.getElementById('emptyState');
        emptyState.style.display = 'none';
    }

    showTable() {
        const tableContainer = document.getElementById('tableContainer');
        tableContainer.style.display = 'block';
    }

    hideTable() {
        const tableContainer = document.getElementById('tableContainer');
        tableContainer.style.display = 'none';
    }

    showSuccess(message) {
        const toast = document.getElementById('successToast');
        const toastBody = document.getElementById('successToastBody');
        toastBody.textContent = message;
        
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }

    showErrorToast(message) {
        const toast = document.getElementById('errorToast');
        const toastBody = document.getElementById('errorToastBody');
        toastBody.textContent = message;
        
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }
}

// Global functions
function refreshTable() {
    if (window.rxUsersManager) {
        window.rxUsersManager.loadRxUsers();
    }
}

function loadRxUsers() {
    if (window.rxUsersManager) {
        window.rxUsersManager.loadRxUsers();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.rxUsersManager = new RxUsersManager();
});
</script>
@endsection
