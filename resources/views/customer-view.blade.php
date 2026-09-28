@extends('layouts.vertical', ['title' => 'Customer Details'])

@section('content')
<div class="container-fluid">
    @include('partials.support-breadcrumbs', ['breadcrumbs' => [
        ['label' => 'Customers', 'url' => '/admin/customers'],
        ['label' => 'Customer details'],
    ]])
    <div class="row mb-4">
        <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <!-- <h1 class="h3 mb-0">Customer Details</h1>
                    <p class="text-muted mb-0">View and manage customer information</p> -->
                </div>
                <div>
                    <a href="/admin/customers" class="btn btn-outline-secondary">
                        <i class="ti ti-arrow-left me-2"></i>Back to Customers
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Loading Spinner -->
    <div id="loadingSpinner" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Loading customer details...</p>
    </div>

    <!-- Error Message -->
    <div id="errorMessage" class="alert alert-danger" style="display: none;">
        <i class="ti ti-alert-circle me-2"></i>
        <span id="errorText"></span>
    </div>

    <!-- Customer Details -->
    <div id="customerDetails" style="display: none;">
        <div class="row">        
            <!-- Right Column - All Other Cards (8 columns, 1 card per row) -->
            <div class="col-lg-12">
                <!-- Customer Information Card -->
                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Customer Information</h5>
                    </div>
                    <div class="card-body">
                        <!-- Personal Information -->
                        <div class="mb-4">
                            <!-- <h6 class="text-muted mb-3">Personal Information</h6> -->
                            <div class="row g-3">
                                <div class="col-6">
                                    <label class="form-label">Customer ID</label>
                                    <input type="text" class="form-control" id="customerIdField" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Account created</label>
                                    <input type="text" class="form-control" id="accountCreated" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="fullName" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Organisation Name</label>
                                    <input type="text" class="form-control" id="organisationName" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Account updated</label>
                                    <input type="text" class="form-control" id="accountUpdated" readonly>
                                </div>
                            </div>
                        </div>

                        <!-- Organisation Address -->
                        <div class="mb-4">
                            <div class="row g-3">                                
                                <div class="col-12">
                                    <label class="form-label">Organisation Address</label>
                                    <input class="form-control" id="pharmacyAddress" readonly></input>
                                </div>
                            </div>
                        </div>

                        <!-- Superintendent Details -->
                        <div>
                            <div class="row g-3">
                                <div class="col-6">
                                    <label class="form-label">PSI Number</label>
                                    <input type="text" class="form-control" id="psiNumber" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Superintendent Name</label>
                                    <input type="text" class="form-control" id="superintendentName" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Superintendent Email</label>
                                    <input type="email" class="form-control" id="superintendentEmail" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Superintendent Contact</label>
                                    <input type="tel" class="form-control" id="superintendentContact" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Pharmacies Card -->
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title mb-0">CRM pharmacies owned by this customer</h5>
                        <span class="badge bg-secondary" id="pharmacyCountBadge">0</span>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-warning mb-3" id="isolationNote" role="alert">
                            Loading isolation details…
                        </div>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>CD registers</th>
                                        <th>CD activity logs</th>
                                        <th>Last CD activity</th>
                                        <th>Pharmacy created</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="pharmaciesTable">
                                    <!-- Pharmacies will be populated by JavaScript -->
                                </tbody>
                            </table>
                        </div>
                        <p class="text-muted small mb-0 mt-2">These are the pharmacies CD Register Full Log History can show for this login. Open Investigate for full pharmacy detail.</p>
                    </div>
                </div>

                @if(config('features.customer_mvp'))
                <!-- MyVaccinePortal Card -->
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <h5 class="card-title mb-0">MyVaccinePortal</h5>
                        <div class="d-flex flex-wrap gap-2">
                            <a href="/admin/customers/{{ $id }}/mvp/schedule/activity-logs" class="btn btn-sm btn-outline-primary">
                                Schedule activity
                            </a>
                            <a href="/admin/customers/{{ $id }}/mvp" class="btn btn-sm btn-primary" id="mvpModuleLink">
                                Open MVP module
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-0">
                            Open schools or companies for this customer, edit organisation or participant details with confirmation popups and audit history, and review CRM schedule actions (who changed what).
                        </p>
                    </div>
                </div>
                @endif

                <!-- Organisation users Card -->
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title mb-0">Organisation users</h5>
                        <span class="badge bg-secondary" id="staffCountBadge">0</span>
                    </div>
                    <div class="card-body">
                        <p class="text-muted small mb-3">
                            Super-admin plus every user with <code>created_by</code> under this customer. Unexpected familiar staff names (Wilsons / Tobin’s) usually mean the email was applied to the wrong org account.
                        </p>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Pharmacies</th>
                                        <th>Created</th>
                                        <th>Last login</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="staffTable">
                                    <!-- Staff will be populated by JavaScript -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <!-- Left Column - Customer Profile (4 columns, no background) -->
            <div class="col-lg-4 mb-4">
                <div>
                    <!-- Profile Picture -->
                    <div class="mb-3">
                        <div class="avatar-xxl bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center">
                            <span class="text-primary fw-bold fs-2" id="customerInitial">J</span>
                        </div>
                    </div>
                    
                    <!-- Customer Info -->
                    <p class="mb-1 fw-semibold fs-4" id="customerEmail">johndoe@email.com</p>
                    
                    <!-- Last Sign In -->
                    <p class="text-muted mb-3 fs-5">
                        <i class="ti ti-clock"></i>
                        Last sign in <span id="lastSignIn">4 minutes ago</span>
                    </p>
                    
                    <!-- Rx Link -->
                    <div class="mb-5">
                        <label class="form-label">Rx Link</label>
                        <div class="input-group" style="max-width: 400px;">
                            <input type="text" class="form-control form-control-sm" id="rxLink" readonly>
                            <button class="btn btn-outline-secondary btn-sm" type="button" onclick="copyRxLink()">
                                <i class="ti ti-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="d-grid gap-2 justify-content-start">
                        <button class="btn btn-outline-primary btn-sm" onclick="startSupportView()">
                            <i class="ti ti-user-check me-2"></i>Support View
                        </button>
                        <button class="btn btn-outline-warning btn-sm" id="resetPasswordBtn" onclick="changePassword()">
                            <i class="ti ti-key me-2"></i>Reset password
                        </button>
                        <button class="btn btn-outline-danger btn-sm" onclick="freezeUser()">
                            <i class="ti ti-lock me-2"></i>Freeze User
                        </button>
                        <button class="btn btn-outline-danger btn-sm" onclick="archiveUser()">
                            <i class="ti ti-ban me-2"></i>Archive User
                        </button>
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
            <i class="ti ti-check-circle me-2"></i>
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

<!-- Password reset confirm modal -->
<div class="modal fade" id="passwordResetModal" tabindex="-1" aria-labelledby="passwordResetModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="passwordResetModalLabel">Confirm Action</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="text-center">
                    <div class="mb-3">
                        <i class="ti ti-key text-warning" style="font-size: 3rem;"></i>
                    </div>
                    <h3 class="mb-1" id="passwordResetModalTitle">Reset password?</h3>
                    <p class="text-muted mb-0" id="passwordResetModalMessage">A password reset email will be sent to this user.</p>
                </div>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-warning" id="confirmPasswordResetAction">
                    <span class="btn-label">Send reset email</span>
                    <span class="spinner-border spinner-border-sm d-none ms-1" role="status" aria-hidden="true" id="confirmPasswordResetSpinner"></span>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Support View reason modal -->
<div class="modal fade" id="supportViewModal" tabindex="-1" aria-labelledby="supportViewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="supportViewModalLabel">Start Support View</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-2" id="supportViewModalIntro">Open CRM as this user for a short audited support session (read-only by default).</p>
                <label for="supportViewReason" class="form-label">Reason <span class="text-danger">*</span></label>
                <textarea class="form-control" id="supportViewReason" rows="3" maxlength="1000" placeholder="e.g. Investigating reported CD Register issue"></textarea>
                <div class="form-text">Minimum 5 characters. Session expires after about 30 minutes.</div>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" id="confirmSupportViewAction">
                    <span class="btn-label">Open Support View</span>
                    <span class="spinner-border spinner-border-sm d-none ms-1" role="status" aria-hidden="true" id="confirmSupportViewSpinner"></span>
                </button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
class CustomerViewManager {
    constructor() {
        this.customerId = {{ $id }};
        this.customer = null;
        this.init();
    }

    init() {
        this.loadCustomerData();
        const staffTable = document.getElementById('staffTable');
        if (staffTable) {
            staffTable.addEventListener('click', (e) => {
                const resetBtn = e.target.closest('[data-action="send-password-reset"]');
                if (resetBtn) {
                    const userId = Number(resetBtn.getAttribute('data-user-id'));
                    const member = (this.customer?.staff || []).find((row) => Number(row.id) === userId);
                    const displayName = member?.name || member?.email || `user #${userId}`;
                    this.openPasswordResetModal(userId, displayName);
                    return;
                }

                const supportBtn = e.target.closest('[data-action="support-view"]');
                if (supportBtn) {
                    const userId = Number(supportBtn.getAttribute('data-user-id'));
                    const member = (this.customer?.staff || []).find((row) => Number(row.id) === userId);
                    const displayName = member?.name || member?.email || `user #${userId}`;
                    this.openSupportViewModal(userId, displayName);
                }
            });
        }

        document.getElementById('confirmPasswordResetAction')?.addEventListener('click', () => {
            this.executeSendPasswordReset();
        });

        document.getElementById('passwordResetModal')?.addEventListener('hidden.bs.modal', () => {
            this.pendingPasswordReset = null;
            this.setPasswordResetLoading(false);
        });

        document.getElementById('confirmSupportViewAction')?.addEventListener('click', () => {
            this.executeSupportView();
        });

        document.getElementById('supportViewModal')?.addEventListener('hidden.bs.modal', () => {
            this.pendingSupportView = null;
            this.setSupportViewLoading(false);
            const reason = document.getElementById('supportViewReason');
            if (reason) {
                reason.value = '';
            }
        });
    }

    async loadCustomerData() {
        try {
            const response = await fetch(`/api/customers/${this.customerId}`);
            const data = await response.json();
            
            if (data.success) {
                this.customer = data.data;
                this.populateCustomerData();
                this.showCustomerDetails();
            } else {
                this.showError(data.message || 'Failed to load customer data');
            }
        } catch (error) {
            console.error('Error loading customer data:', error);
            this.showError('Failed to load customer data. Please try again.');
        }
    }

    populateCustomerData() {
        try {
            // Customer Profile
            document.getElementById('customerInitial').textContent = this.customer.name.charAt(0).toUpperCase();
            document.getElementById('customerEmail').textContent = this.customer.email;
        
        // Last Sign In
        const lastSignIn = this.customer.last_login && this.customer.last_login !== 'null' ? this.formatDateTime(this.customer.last_login) : 'Never';
        document.getElementById('lastSignIn').textContent = lastSignIn;
        
        // Rx Link
        const rxLink = `{{ env('APP_URL') }}/?reg_no=${this.customer.registration_number || this.customer.id}`;
        document.getElementById('rxLink').value = rxLink;
        
        // Customer Information
        document.getElementById('customerIdField').value = this.customer.id;
        document.getElementById('fullName').value = this.customer.name;
        document.getElementById('organisationName').value = this.customer.pharmacy_name || 'N/A';
        // document.getElementById('emailAddress').value = this.customer.email;
        document.getElementById('pharmacyAddress').value = this.customer.pharmacy_address || 'N/A';
        document.getElementById('accountCreated').value = this.customer.created_at
            ? this.formatDateTime(this.customer.created_at)
            : 'N/A';
        document.getElementById('accountUpdated').value = this.customer.updated_at
            ? this.formatDateTime(this.customer.updated_at)
            : 'N/A';

        const isolationNote = document.getElementById('isolationNote');
        if (isolationNote) {
            isolationNote.textContent = (this.customer.isolation && this.customer.isolation.note)
                ? this.customer.isolation.note
                : `CD Register data for this login is scoped to pharmacies owned by customer #${this.customer.id}.`;
        }
        
        // Superintendent Information
        document.getElementById('psiNumber').value = this.customer.registration_number || 'N/A';
        document.getElementById('superintendentName').value = this.customer.superintendent_name || 'N/A';
        document.getElementById('superintendentEmail').value = this.customer.superintendent_email || 'N/A';
        document.getElementById('superintendentContact').value = this.customer.superintendent_contact || 'N/A';
        
        // Pharmacies + org users
        this.populatePharmaciesTable();
        this.populateStaffTable();
        } catch (error) {
            console.error('Error populating customer data:', error);
            this.showError('Error displaying customer data. Please try again.');
        }
    }

    showCustomerDetails() {
        document.getElementById('loadingSpinner').style.display = 'none';
        document.getElementById('customerDetails').style.display = 'block';
    }

    showError(message) {
        document.getElementById('loadingSpinner').style.display = 'none';
        document.getElementById('errorText').textContent = message;
        document.getElementById('errorMessage').style.display = 'block';
    }

    formatDateTime(dateString) {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return 'Invalid date';
            }
            const day = date.getDate();
            const month = date.toLocaleDateString('en-US', { month: 'long' });
            const year = date.getFullYear();
            const hour = date.getHours();
            const minute = date.getMinutes().toString().padStart(2, '0');
            const ampm = hour >= 12 ? 'pm' : 'am';
            const displayHour = hour % 12 || 12;
            
            return `${day} ${month} ${year}, ${displayHour}:${minute} ${ampm}`;
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid date';
        }
    }

    showSuccess(message) {
        const toastBody = document.getElementById('successToastBody');
        const toast = document.getElementById('successToast');
        
        toastBody.textContent = message;
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }

    showErrorToast(message) {
        const toastBody = document.getElementById('errorToastBody');
        const toast = document.getElementById('errorToast');
        
        toastBody.textContent = message;
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }

    populatePharmaciesTable() {
        const pharmaciesTable = document.getElementById('pharmaciesTable');
        pharmaciesTable.innerHTML = '';
        const pharmacyCountBadge = document.getElementById('pharmacyCountBadge');
        const pharmacies = this.customer.pharmacies || [];
        if (pharmacyCountBadge) {
            pharmacyCountBadge.textContent = String(pharmacies.length);
        }

        if (pharmacies.length > 0) {
            pharmacies.forEach(pharmacy => {
                const row = document.createElement('tr');
                
                // Status badge
                let statusBadge = '';
                if (pharmacy.status === 'active' || !pharmacy.status) {
                    statusBadge = '<span class="badge bg-success">Active</span>';
                } else if (pharmacy.status === 'archived') {
                    statusBadge = '<span class="badge bg-warning">Archived</span>';
                } else {
                    statusBadge = '<span class="badge bg-danger">Inactive</span>';
                }

                const lastActivity = pharmacy.last_cd_activity_at
                    ? this.formatDateTime(pharmacy.last_cd_activity_at)
                    : '—';
                const createdAt = pharmacy.created_at
                    ? this.formatDateTime(pharmacy.created_at)
                    : '—';

                row.innerHTML = `
                    <td>${pharmacy.id}</td>
                    <td>
                        <a href="/admin/customers/${this.customerId}/pharmacies/${pharmacy.id}" class="text-primary fw-semibold text-decoration-none">
                            ${this.escapeHtml(pharmacy.pharmacy_name)}
                        </a>
                    </td>
                    <td>${statusBadge}</td>
                    <td>${pharmacy.cd_register_count ?? 0}</td>
                    <td>${pharmacy.cd_activity_count ?? 0}</td>
                    <td>${lastActivity}</td>
                    <td>${createdAt}</td>
                    <td>
                        <a href="/admin/customers/${this.customerId}/pharmacies/${pharmacy.id}" class="btn btn-sm btn-outline-primary">
                            Investigate
                        </a>
                    </td>
                `;
                
                pharmaciesTable.appendChild(row);
            });
        } else {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="8" class="text-center text-muted">No pharmacies found with created_by set to this customer</td>';
            pharmaciesTable.appendChild(row);
        }
    }

    populateStaffTable() {
        const staffTable = document.getElementById('staffTable');
        if (!staffTable) {
            return;
        }
        staffTable.innerHTML = '';
        const staff = this.customer.staff || [];
        const staffCountBadge = document.getElementById('staffCountBadge');
        if (staffCountBadge) {
            staffCountBadge.textContent = String(staff.length);
        }

        if (staff.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="8" class="text-center text-muted">No organisation users found</td>';
            staffTable.appendChild(row);
            return;
        }

        staff.forEach(member => {
            const row = document.createElement('tr');
            if (member.is_super_admin) {
                row.classList.add('table-info');
            }
            const createdAt = member.created_at ? this.formatDateTime(member.created_at) : '—';
            const lastLogin = member.last_login_at ? this.formatDateTime(member.last_login_at) : 'Never';
            const badge = member.is_super_admin
                ? ' <span class="badge bg-primary">Super admin</span>'
                : '';

            row.innerHTML = `
                <td>${member.id}</td>
                <td>${this.escapeHtml(member.name || '')}${badge}</td>
                <td>${this.escapeHtml(member.email || '')}</td>
                <td>${this.escapeHtml(member.role || member.user_type || '')}</td>
                <td>${this.escapeHtml(member.pharmacies_display || '—')}</td>
                <td>${createdAt}</td>
                <td>${lastLogin}</td>
                <td>
                    <div class="d-flex flex-wrap gap-1">
                        <a href="/admin/customers/${this.customerId}/staff/${member.id}" class="btn btn-sm btn-outline-primary">
                            View
                        </a>
                        ${member.email ? `
                        <button type="button" class="btn btn-sm btn-outline-warning"
                            data-action="send-password-reset"
                            data-user-id="${member.id}">
                            Reset password
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-primary"
                            data-action="support-view"
                            data-user-id="${member.id}">
                            Support View
                        </button>` : ''}
                    </div>
                </td>
            `;
            staffTable.appendChild(row);
        });
    }

    openPasswordResetModal(userId, displayName) {
        this.pendingPasswordReset = { userId, displayName };
        document.getElementById('passwordResetModalTitle').innerHTML =
            `Reset password for <strong>${this.escapeHtml(displayName)}</strong>?`;
        document.getElementById('passwordResetModalMessage').textContent =
            'A password reset email will be sent to this user.';
        this.setPasswordResetLoading(false);
        bootstrap.Modal.getOrCreateInstance(document.getElementById('passwordResetModal')).show();
    }

    async executeSendPasswordReset() {
        if (!this.pendingPasswordReset) {
            return;
        }

        const { userId } = this.pendingPasswordReset;
        this.setPasswordResetLoading(true);

        try {
            const response = await fetch(`/api/customers/${this.customerId}/users/${userId}/send-password-reset`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok && data.success) {
                bootstrap.Modal.getInstance(document.getElementById('passwordResetModal'))?.hide();
                this.pendingPasswordReset = null;
                this.showSuccess(data.message || 'Password reset email sent.');
                return;
            }

            this.showErrorToast(data.message || `Failed to send password reset email (${response.status}).`);
        } catch (error) {
            console.error('Error sending password reset email:', error);
            this.showErrorToast('Failed to send password reset email. Please try again.');
        } finally {
            this.setPasswordResetLoading(false);
        }
    }

    setPasswordResetLoading(isLoading) {
        const button = document.getElementById('confirmPasswordResetAction');
        const spinner = document.getElementById('confirmPasswordResetSpinner');
        if (!button || !spinner) {
            return;
        }
        button.disabled = isLoading;
        spinner.classList.toggle('d-none', !isLoading);
    }

    openSupportViewModal(userId, displayName) {
        this.pendingSupportView = { userId, displayName };
        document.getElementById('supportViewModalIntro').innerHTML =
            `Open CRM as <strong>${this.escapeHtml(displayName)}</strong> for a short audited support session (read-only by default).`;
        const reason = document.getElementById('supportViewReason');
        if (reason) {
            reason.value = '';
            reason.focus();
        }
        this.setSupportViewLoading(false);
        bootstrap.Modal.getOrCreateInstance(document.getElementById('supportViewModal')).show();
    }

    async executeSupportView() {
        if (!this.pendingSupportView) {
            return;
        }

        const reason = (document.getElementById('supportViewReason')?.value || '').trim();
        if (reason.length < 5) {
            this.showErrorToast('Please enter a reason (at least 5 characters).');
            return;
        }

        const { userId } = this.pendingSupportView;
        this.setSupportViewLoading(true);

        try {
            const response = await fetch(`/api/customers/${this.customerId}/users/${userId}/support-view`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({ reason }),
            });

            const data = await response.json().catch(() => ({}));
            const url = data?.data?.url;

            if (response.ok && data.success && url) {
                bootstrap.Modal.getInstance(document.getElementById('supportViewModal'))?.hide();
                this.pendingSupportView = null;
                window.open(url, '_blank', 'noopener');
                this.showSuccess(data.message || 'Support View opened in a new tab.');
                return;
            }

            this.showErrorToast(data.message || `Failed to start Support View (${response.status}).`);
        } catch (error) {
            console.error('Error starting Support View:', error);
            this.showErrorToast('Failed to start Support View. Please try again.');
        } finally {
            this.setSupportViewLoading(false);
        }
    }

    setSupportViewLoading(isLoading) {
        const button = document.getElementById('confirmSupportViewAction');
        const spinner = document.getElementById('confirmSupportViewSpinner');
        if (!button || !spinner) {
            return;
        }
        button.disabled = isLoading;
        spinner.classList.toggle('d-none', !isLoading);
    }

    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

// Global functions for button actions
function copyRxLink() {
    const rxLinkInput = document.getElementById('rxLink');
    rxLinkInput.select();
    document.execCommand('copy');
    customerViewManager.showSuccess('Rx link copied successfully.');
}

function startSupportView() {
    if (!customerViewManager?.customer) {
        if (customerViewManager?.showErrorToast) {
            customerViewManager.showErrorToast('Customer data is still loading. Please try again in a moment.');
        }
        return;
    }
    const customer = customerViewManager.customer;
    customerViewManager.openSupportViewModal(customer.id, customer.name || customer.email);
}

function changePassword() {
    if (!customerViewManager?.customer) {
        if (customerViewManager?.showErrorToast) {
            customerViewManager.showErrorToast('Customer data is still loading. Please try again in a moment.');
        }
        return;
    }
    const customer = customerViewManager.customer;
    customerViewManager.openPasswordResetModal(customer.id, customer.name || customer.email);
}

function sendStaffPasswordReset(userId, displayName) {
    customerViewManager.openPasswordResetModal(userId, displayName);
}

function freezeUser() {
    customerViewManager.showSuccess('Freeze user functionality coming soon.');
}

function archiveUser() {
    customerViewManager.showSuccess('Archive user functionality coming soon.');
}


// Initialize the customer view manager when the page loads
let customerViewManager;
document.addEventListener('DOMContentLoaded', function() {
    customerViewManager = new CustomerViewManager();
});
</script>
@endsection
