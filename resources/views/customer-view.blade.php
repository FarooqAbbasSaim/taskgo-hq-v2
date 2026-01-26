@extends('layouts.vertical', ['title' => 'Customer Details'])

@section('content')
<div class="container-fluid">
    <!-- Header -->
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
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="fullName" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Organisation Name</label>
                                    <input type="text" class="form-control" id="organisationName" readonly>
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
                    <div class="card-header">
                        <h5 class="card-title mb-0">Pharmacies</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="pharmaciesTable">
                                    <!-- Pharmacies will be populated by JavaScript -->
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
                        <button class="btn btn-outline-primary btn-sm" onclick="impersonateUser()">
                            <i class="ti ti-user-check me-2"></i>Impersonate User
                        </button>
                        <button class="btn btn-outline-warning btn-sm" onclick="changePassword()">
                            <i class="ti ti-key me-2"></i>Change Password
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
        document.getElementById('fullName').value = this.customer.name;
        document.getElementById('organisationName').value = this.customer.pharmacy_name || 'N/A';
        // document.getElementById('emailAddress').value = this.customer.email;
        document.getElementById('pharmacyAddress').value = this.customer.pharmacy_address || 'N/A';
        
        // Superintendent Information
        document.getElementById('psiNumber').value = this.customer.registration_number || 'N/A';
        document.getElementById('superintendentName').value = this.customer.superintendent_name || 'N/A';
        document.getElementById('superintendentEmail').value = this.customer.superintendent_email || 'N/A';
        document.getElementById('superintendentContact').value = this.customer.superintendent_contact || 'N/A';
        
        // Pharmacies
        this.populatePharmaciesTable();
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

        if (this.customer.pharmacies && this.customer.pharmacies.length > 0) {
            this.customer.pharmacies.forEach(pharmacy => {
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

                row.innerHTML = `
                    <td>${pharmacy.pharmacy_name}</td>
                    <td>${statusBadge}</td>
                `;
                
                pharmaciesTable.appendChild(row);
            });
        } else {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="2" class="text-center text-muted">No pharmacies found</td>';
            pharmaciesTable.appendChild(row);
        }
    }
}

// Global functions for button actions
function copyRxLink() {
    const rxLinkInput = document.getElementById('rxLink');
    rxLinkInput.select();
    document.execCommand('copy');
    customerViewManager.showSuccess('Rx link copied successfully.');
}

function impersonateUser() {
    customerViewManager.showSuccess('Impersonate user functionality coming soon.');
}

function changePassword() {
    customerViewManager.showSuccess('Change password functionality coming soon.');
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
