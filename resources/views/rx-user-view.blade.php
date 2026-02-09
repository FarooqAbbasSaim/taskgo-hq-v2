@extends('layouts.vertical', ['title' => 'Rx User Details'])

@section('content')
<div class="container-fluid">

    <!-- User Info Card -->
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h4 class="mb-1" id="userFullName">Loading...</h4>
                            <p class="text-muted mb-0" id="userEmail">Loading...</p>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-primary" id="userStatus">Active</span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-3">
                            <div class="mb-2">
                                <strong>Phone:</strong> <span id="userPhone">-</span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-2">
                                <strong>PPS No:</strong> <span id="userPpsNo">-</span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-2">
                                <strong>Date of Birth:</strong> <span id="userDob">-</span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-2">
                                <strong>Nominated Pharmacy:</strong> <span id="userPharmacy">-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Tabs -->
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs nav-bordered" id="userTabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="true">
                                <i class="ti ti-package me-1"></i> Medication Orders
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="bookings-tab" data-bs-toggle="tab" data-bs-target="#bookings" type="button" role="tab" aria-controls="bookings" aria-selected="false">
                                <i class="ti ti-calendar me-1"></i> Service Bookings
                            </button>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content mt-3" id="userTabsContent">
                        <!-- Medication Orders Tab -->
                        <div class="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                            <!-- <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="mb-0">Medication Orders</h5>
                                <button type="button" class="btn btn-primary btn-sm" onclick="refreshOrders()">
                                    <i class="ti ti-refresh me-1"></i> Refresh
                                </button>
                            </div> -->

                            <!-- Orders Loading State -->
                            <div id="ordersLoadingState" class="text-center py-4">
                                <div class="spinner-border text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <p class="mt-2 text-muted">Loading orders...</p>
                            </div>

                            <!-- Orders Error State -->
                            <div id="ordersErrorState" class="text-center py-4" style="display: none;">
                                <div class="text-danger mb-3">
                                    <i class="ti ti-alert-circle" style="font-size: 2rem;"></i>
                                </div>
                                <h6 class="text-danger">Failed to load orders</h6>
                                <p class="text-muted" id="ordersErrorMessage">An error occurred while loading the orders.</p>
                                <button type="button" class="btn btn-primary btn-sm" onclick="loadOrders()">
                                    <i class="ti ti-refresh me-1"></i> Try Again
                                </button>
                            </div>

                            <!-- Orders Empty State -->
                            <div id="ordersEmptyState" class="text-center py-4" style="display: none;">
                                <div class="text-muted mb-3">
                                    <i class="ti ti-package" style="font-size: 2rem;"></i>
                                </div>
                                <h6 class="text-muted">No Orders Found</h6>
                                <p class="text-muted">This user has no medication orders yet.</p>
                            </div>

                            <!-- Orders Table -->
                            <div id="ordersTableContainer" style="display: none;">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Order No</th>
                                                <th>Date</th>
                                                <th>Item Count</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="ordersTableBody">
                                            <!-- Orders data will be loaded here -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Service Bookings Tab -->
                        <div class="tab-pane fade" id="bookings" role="tabpanel" aria-labelledby="bookings-tab">
                            <!-- <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="mb-0">Service Bookings</h5>
                                <button type="button" class="btn btn-primary btn-sm" onclick="refreshBookings()">
                                    <i class="ti ti-refresh me-1"></i> Refresh
                                </button>
                            </div> -->

                            <!-- Bookings Loading State -->
                            <div id="bookingsLoadingState" class="text-center py-4">
                                <div class="spinner-border text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <p class="mt-2 text-muted">Loading bookings...</p>
                            </div>

                            <!-- Bookings Error State -->
                            <div id="bookingsErrorState" class="text-center py-4" style="display: none;">
                                <div class="text-danger mb-3">
                                    <i class="ti ti-alert-circle" style="font-size: 2rem;"></i>
                                </div>
                                <h6 class="text-danger">Failed to load bookings</h6>
                                <p class="text-muted" id="bookingsErrorMessage">An error occurred while loading the bookings.</p>
                                <button type="button" class="btn btn-primary btn-sm" onclick="loadBookings()">
                                    <i class="ti ti-refresh me-1"></i> Try Again
                                </button>
                            </div>

                            <!-- Bookings Empty State -->
                            <div id="bookingsEmptyState" class="text-center py-4" style="display: none;">
                                <div class="text-muted mb-3">
                                    <i class="ti ti-calendar" style="font-size: 2rem;"></i>
                                </div>
                                <h6 class="text-muted">No Bookings Found</h6>
                                <p class="text-muted">This user has no service bookings yet.</p>
                            </div>

                            <!-- Bookings Table -->
                            <div id="bookingsTableContainer" style="display: none;">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Service</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="bookingsTableBody">
                                            <!-- Bookings data will be loaded here -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Order Details Modal -->
<div class="modal fade" id="orderDetailsModal" tabindex="-1" aria-labelledby="orderDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="orderDetailsModalLabel">Order Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="orderDetailsModalBody">
                <!-- Order details will be loaded here -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Booking Details Modal -->
<div class="modal fade" id="bookingDetailsModal" tabindex="-1" aria-labelledby="bookingDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="bookingDetailsModalLabel">Booking Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="bookingDetailsModalBody">
                <!-- Booking details will be loaded here -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
class RxUserViewManager {
    constructor(userId) {
        this.userId = userId;
        this.userData = null;
        this.orders = [];
        this.bookings = [];
        this.init();
    }

    init() {
        this.loadUserData();
        this.loadOrders();
    }

    async loadUserData() {
        try {
            const response = await fetch(`/api/rx-users/${this.userId}`, {
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
                this.userData = result.data;
                this.renderUserInfo();
            } else {
                throw new Error(result.message || 'Failed to load user data');
            }
        } catch (error) {
            console.error('Error loading user data:', error);
            this.showErrorToast('Failed to load user information');
        }
    }

    renderUserInfo() {
        if (!this.userData) return;

        document.getElementById('userFullName').textContent = this.userData.full_name;
        document.getElementById('userEmail').textContent = this.userData.email;
        document.getElementById('userPhone').textContent = this.userData.phone || '-';
        document.getElementById('userPpsNo').textContent = this.userData.pps_no || '-';
        document.getElementById('userDob').textContent = this.userData.dob || '-';
        document.getElementById('userPharmacy').textContent = this.userData.nominated_pharmacy || '-';
    }

    async loadOrders() {
        this.showOrdersLoading(true);
        this.hideOrdersError();
        this.hideOrdersEmpty();
        this.hideOrdersTable();

        try {
            const response = await fetch(`/api/rx-users/${this.userId}/orders`, {
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
                this.orders = result.data;
                this.renderOrders();
            } else {
                throw new Error(result.message || 'Failed to load orders');
            }
        } catch (error) {
            console.error('Error loading orders:', error);
            this.showOrdersError(error.message);
        } finally {
            this.showOrdersLoading(false);
        }
    }

    renderOrders() {
        const tbody = document.getElementById('ordersTableBody');
        
        if (this.orders.length === 0) {
            this.showOrdersEmpty();
            return;
        }

        tbody.innerHTML = this.orders.map(order => `
            <tr>
                <td>
                    <a href="#" class="text-primary fw-semibold" onclick="showOrderDetails(${order.id})">
                        ${order.order_no}
                    </a>
                </td>
                <td>${order.date}</td>
                <td>${order.item_count}</td>
                <td>
                    <span class="badge ${this.getStatusBadgeClass(order.status)}">
                        ${order.status}
                    </span>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-primary" onclick="showOrderDetails(${order.id})">
                        <i class="ti ti-eye"></i> View Details
                    </button>
                </td>
            </tr>
        `).join('');

        this.showOrdersTable();
    }

    async loadBookings() {
        this.showBookingsLoading(true);
        this.hideBookingsError();
        this.hideBookingsEmpty();
        this.hideBookingsTable();

        try {
            const response = await fetch(`/api/rx-users/${this.userId}/bookings`, {
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
                this.bookings = result.data;
                this.renderBookings();
            } else {
                throw new Error(result.message || 'Failed to load bookings');
            }
        } catch (error) {
            console.error('Error loading bookings:', error);
            this.showBookingsError(error.message);
        } finally {
            this.showBookingsLoading(false);
        }
    }

    renderBookings() {
        const tbody = document.getElementById('bookingsTableBody');
        
        if (this.bookings.length === 0) {
            this.showBookingsEmpty();
            return;
        }

        tbody.innerHTML = this.bookings.map(booking => `
            <tr>
                <td>
                    <a href="#" class="text-primary fw-semibold" onclick="showBookingDetails(${booking.id})">
                        ${booking.service}
                    </a>
                </td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td>
                    <span class="badge ${this.getStatusBadgeClass(booking.status)}">
                        ${booking.status}
                    </span>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-primary" onclick="showBookingDetails(${booking.id})">
                        <i class="ti ti-eye"></i> View Details
                    </button>
                </td>
            </tr>
        `).join('');

        this.showBookingsTable();
    }

    getStatusBadgeClass(status) {
        const statusLower = status.toLowerCase();
        switch (statusLower) {
            case 'complete':
            case 'completed':
                return 'bg-success';
            case 'pending':
                return 'bg-warning';
            case 'reject':
            case 'rejected':
            case 'cancelled':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }

    // Orders UI Methods
    showOrdersLoading(show) {
        const loadingState = document.getElementById('ordersLoadingState');
        loadingState.style.display = show ? 'block' : 'none';
    }

    showOrdersError(message) {
        const errorState = document.getElementById('ordersErrorState');
        const errorMessage = document.getElementById('ordersErrorMessage');
        errorMessage.textContent = message;
        errorState.style.display = 'block';
    }

    hideOrdersError() {
        const errorState = document.getElementById('ordersErrorState');
        errorState.style.display = 'none';
    }

    showOrdersEmpty() {
        const emptyState = document.getElementById('ordersEmptyState');
        emptyState.style.display = 'block';
    }

    hideOrdersEmpty() {
        const emptyState = document.getElementById('ordersEmptyState');
        emptyState.style.display = 'none';
    }

    showOrdersTable() {
        const tableContainer = document.getElementById('ordersTableContainer');
        tableContainer.style.display = 'block';
    }

    hideOrdersTable() {
        const tableContainer = document.getElementById('ordersTableContainer');
        tableContainer.style.display = 'none';
    }

    // Bookings UI Methods
    showBookingsLoading(show) {
        const loadingState = document.getElementById('bookingsLoadingState');
        loadingState.style.display = show ? 'block' : 'none';
    }

    showBookingsError(message) {
        const errorState = document.getElementById('bookingsErrorState');
        const errorMessage = document.getElementById('bookingsErrorMessage');
        errorMessage.textContent = message;
        errorState.style.display = 'block';
    }

    hideBookingsError() {
        const errorState = document.getElementById('bookingsErrorState');
        errorState.style.display = 'none';
    }

    showBookingsEmpty() {
        const emptyState = document.getElementById('bookingsEmptyState');
        emptyState.style.display = 'block';
    }

    hideBookingsEmpty() {
        const emptyState = document.getElementById('bookingsEmptyState');
        emptyState.style.display = 'none';
    }

    showBookingsTable() {
        const tableContainer = document.getElementById('bookingsTableContainer');
        tableContainer.style.display = 'block';
    }

    hideBookingsTable() {
        const tableContainer = document.getElementById('bookingsTableContainer');
        tableContainer.style.display = 'none';
    }

    showSuccessToast(message) {
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
function refreshOrders() {
    if (window.rxUserViewManager) {
        window.rxUserViewManager.loadOrders();
    }
}

function refreshBookings() {
    if (window.rxUserViewManager) {
        window.rxUserViewManager.loadBookings();
    }
}

function loadOrders() {
    if (window.rxUserViewManager) {
        window.rxUserViewManager.loadOrders();
    }
}

function loadBookings() {
    if (window.rxUserViewManager) {
        window.rxUserViewManager.loadBookings();
    }
}

async function showOrderDetails(orderId) {
    try {
        const response = await fetch(`/api/rx-users/orders/${orderId}`, {
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
            const order = result.data;
            const modalBody = document.getElementById('orderDetailsModalBody');
            
            const totalItems = Array.isArray(order.items) ? order.items.length : (order.total_items ?? (order.item_count ?? 'N/A'));
            const totalAmountDisplay = (order.total_amount === null || order.total_amount === undefined || order.total_amount === 'N/A')
                ? 'N/A'
                : `€${order.total_amount}`;

            const hasPrescriptionImage = order.has_prescription_image === true && order.prescription_image_url;
            const items = Array.isArray(order.items) ? order.items : [];

            const rightColumnContent = hasPrescriptionImage
                ? `
                <h6>Prescription Image</h6>
                <div class="border rounded p-2 bg-light text-center">
                    <img src="${order.prescription_image_url}" alt="Prescription Image" class="img-fluid" style="max-height: 400px; object-fit: contain;" />
                </div>
                `
                : `
                <h6>Order Items</h6>
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>Medication</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${items.length ? items.map(item => `
                                <tr>
                                    <td>${item.medication_name || 'N/A'}</td>
                                    <td>${item.quantity ?? 'N/A'}</td>
                                </tr>`).join('') : '<tr><td colspan="2" class="text-muted">No medications listed</td></tr>'}
                        </tbody>
                    </table>
                </div>
                `;

            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <h6>Order Information</h6>
                        <table class="table table-sm">
                            <tr><td><strong>Order No:</strong></td><td>${order.order_no}</td></tr>
                            <tr><td><strong>User:</strong></td><td>${order.user_name}</td></tr>
                            <tr><td><strong>Pharmacy:</strong></td><td>${order.pharmacy_name}</td></tr>
                            <tr><td><strong>Status:</strong></td><td><span class="badge ${window.rxUserViewManager.getStatusBadgeClass(order.status)}">${order.status}</span></td></tr>
                            <tr><td><strong>Total Items:</strong></td><td>${totalItems}</td></tr>
                            <tr><td><strong>Created:</strong></td><td>${order.created_at}</td></tr>
                            <tr><td><strong>Updated:</strong></td><td>${order.updated_at}</td></tr>
                        </table>
                    </div>
                    <div class="col-md-6">
                        ${rightColumnContent}
                    </div>
                </div>
            `;
            
            const modal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
            modal.show();
        } else {
            throw new Error(result.message || 'Failed to load order details');
        }
    } catch (error) {
        console.error('Error loading order details:', error);
        if (window.rxUserViewManager) {
            window.rxUserViewManager.showErrorToast('Failed to load order details');
        }
    }
}

async function showBookingDetails(bookingId) {
    try {
        const response = await fetch(`/api/rx-users/bookings/${bookingId}`, {
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
            const booking = result.data;
            const modalBody = document.getElementById('bookingDetailsModalBody');
            
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <h6>Booking Information</h6>
                        <table class="table table-sm">
                            <tr><td><strong>User:</strong></td><td>${booking.user_name}</td></tr>
                            <tr><td><strong>Service:</strong></td><td>${booking.service_name}</td></tr>
                            <tr><td><strong>Status:</strong></td><td><span class="badge ${window.rxUserViewManager.getStatusBadgeClass(booking.status)}">${booking.status}</span></td></tr>
                            <tr><td><strong>Date:</strong></td><td>${booking.date}</td></tr>
                            <tr><td><strong>Time:</strong></td><td>${booking.start_time} - ${booking.end_time}</td></tr>
                            <tr><td><strong>Duration:</strong></td><td>${booking.service_duration} minutes</td></tr>
                            <tr><td><strong>Price:</strong></td><td>€${booking.service_price}</td></tr>
                            <tr><td><strong>Created:</strong></td><td>${booking.created_at}</td></tr>
                        </table>
                    </div>
                    <div class="col-md-6">
                        <h6>Service Description</h6>
                        <p class="text-muted">${booking.service_description || 'No description available.'}</p>
                    </div>
                </div>
            `;
            
            const modal = new bootstrap.Modal(document.getElementById('bookingDetailsModal'));
            modal.show();
        } else {
            throw new Error(result.message || 'Failed to load booking details');
        }
    } catch (error) {
        console.error('Error loading booking details:', error);
        if (window.rxUserViewManager) {
            window.rxUserViewManager.showErrorToast('Failed to load booking details');
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const userId = {{ $id }};
    window.rxUserViewManager = new RxUserViewManager(userId);
    
    // Load bookings when bookings tab is clicked
    document.getElementById('bookings-tab').addEventListener('click', function() {
        if (window.rxUserViewManager && window.rxUserViewManager.bookings.length === 0) {
            window.rxUserViewManager.loadBookings();
        }
    });
});
</script>
@endsection
