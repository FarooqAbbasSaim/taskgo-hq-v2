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
                            <button class="nav-link active" id="stats-tab" data-bs-toggle="tab" data-bs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true">
                                <i class="ti ti-chart-bar me-1"></i> Stats
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="false">
                                <i class="ti ti-id me-1"></i> Details
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="medications-tab" data-bs-toggle="tab" data-bs-target="#medications" type="button" role="tab" aria-controls="medications" aria-selected="false">
                                <i class="ti ti-pill me-1"></i> Medications
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false">
                                <i class="ti ti-package me-1"></i> Medication Orders
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="dosage-reminders-tab" data-bs-toggle="tab" data-bs-target="#dosage-reminders" type="button" role="tab" aria-controls="dosage-reminders" aria-selected="false">
                                <i class="ti ti-bell me-1"></i> Dosage Reminders
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="bookings-tab" data-bs-toggle="tab" data-bs-target="#bookings" type="button" role="tab" aria-controls="bookings" aria-selected="false">
                                <i class="ti ti-calendar me-1"></i> Service Bookings
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="timeline-tab" data-bs-toggle="tab" data-bs-target="#timeline" type="button" role="tab" aria-controls="timeline" aria-selected="false">
                                <i class="ti ti-timeline me-1"></i> Timeline
                            </button>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content mt-3" id="userTabsContent">
                        <div class="tab-pane fade show active" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                            <div id="statsLoadingState" class="text-center py-4">
                                <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                                <p class="mt-2 text-muted">Loading stats...</p>
                            </div>
                            <div id="statsErrorState" class="text-center py-4" style="display: none;">
                                <h6 class="text-danger">Failed to load stats</h6>
                                <button type="button" class="btn btn-primary btn-sm" onclick="rxUserViewManager.loadStats()">Try Again</button>
                            </div>
                            <div id="statsContent" style="display: none;">
                                <div class="row g-3">
                                    <div class="col-6 col-md-3"><div class="border rounded p-3 text-center"><div class="fs-3 fw-semibold" id="statOrdersCount">0</div><div class="text-muted small">Orders</div></div></div>
                                    <div class="col-6 col-md-3"><div class="border rounded p-3 text-center"><div class="fs-3 fw-semibold" id="statMedsCount">0</div><div class="text-muted small">Medications</div></div></div>
                                    <div class="col-6 col-md-3"><div class="border rounded p-3 text-center"><div class="fs-3 fw-semibold" id="statBookingsCount">0</div><div class="text-muted small">Bookings</div></div></div>
                                    <div class="col-6 col-md-3"><div class="border rounded p-3 text-center"><div class="fs-3 fw-semibold" id="statServicesCount">0</div><div class="text-muted small">Services used</div></div></div>
                                </div>
                                <div class="row g-3 mt-1">
                                    <div class="col-md-4"><strong>Member since:</strong> <span id="statMemberSince">—</span></div>
                                    <div class="col-md-4"><strong>Last order:</strong> <span id="statLastOrder">—</span></div>
                                    <div class="col-md-4"><strong>Last booking:</strong> <span id="statLastBooking">—</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="details" role="tabpanel" aria-labelledby="details-tab">
                            <div class="row g-3" id="detailsContent">
                                <div class="col-md-4"><strong>Full name:</strong> <span id="detailFullName">—</span></div>
                                <div class="col-md-4"><strong>Email:</strong> <span id="detailEmail">—</span></div>
                                <div class="col-md-4"><strong>Phone:</strong> <span id="detailPhone">—</span></div>
                                <div class="col-md-4"><strong>PPS No:</strong> <span id="detailPps">—</span></div>
                                <div class="col-md-4"><strong>Date of birth:</strong> <span id="detailDob">—</span></div>
                                <div class="col-md-4"><strong>Gender:</strong> <span id="detailGender">—</span></div>
                                <div class="col-md-8"><strong>Home address:</strong> <span id="detailAddress">—</span></div>
                                <div class="col-md-4"><strong>Nominated pharmacy:</strong> <span id="detailPharmacy">—</span></div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="medications" role="tabpanel" aria-labelledby="medications-tab">
                            <div id="medsLoadingState" class="text-center py-4">
                                <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                                <p class="mt-2 text-muted">Loading medications...</p>
                            </div>
                            <div id="medsErrorState" class="text-center py-4" style="display: none;">
                                <h6 class="text-danger">Failed to load medications</h6>
                                <button type="button" class="btn btn-primary btn-sm" onclick="rxUserViewManager.loadMedications()">Try Again</button>
                            </div>
                            <div id="medsEmptyState" class="text-center py-4" style="display: none;">
                                <h6 class="text-muted">No Medications Found</h6>
                                <p class="text-muted">No medications from orders yet.</p>
                            </div>
                            <div id="medsTableContainer" style="display: none;">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Medication</th>
                                                <th>Times ordered</th>
                                                <th>Total qty</th>
                                                <th>Last ordered</th>
                                            </tr>
                                        </thead>
                                        <tbody id="medsTableBody"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Medication Orders Tab -->
                        <div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
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

                        <!-- Dosage Reminders Tab -->
                        <div class="tab-pane fade" id="dosage-reminders" role="tabpanel" aria-labelledby="dosage-reminders-tab">
                            <div id="remindersLoadingState" class="text-center py-4">
                                <div class="spinner-border text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <p class="mt-2 text-muted">Loading dosage reminders...</p>
                            </div>
                            <div id="remindersErrorState" class="text-center py-4" style="display: none;">
                                <h6 class="text-danger">Failed to load dosage reminders</h6>
                                <p class="text-muted" id="remindersErrorMessage">An error occurred while loading reminders.</p>
                                <button type="button" class="btn btn-primary btn-sm" onclick="rxUserViewManager.loadDosageReminders()">Try Again</button>
                            </div>
                            <div id="remindersContent" style="display: none;">
                                <p class="text-muted small mb-3" id="remindersScheduleNote"></p>
                                <div id="remindersDuplicateAlert" class="alert alert-warning py-2" style="display: none;"></div>

                                <h6 class="mb-2">Orders with dosage reminders enabled</h6>
                                <div id="remindersEnabledEmpty" class="text-muted small mb-3" style="display: none;">No orders currently have dosage reminders enabled.</div>
                                <div class="table-responsive mb-4" id="remindersEnabledTableWrap" style="display: none;">
                                    <table class="table table-sm table-striped">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Order</th>
                                                <th>Status</th>
                                                <th>Expected schedule</th>
                                                <th>Order created</th>
                                            </tr>
                                        </thead>
                                        <tbody id="remindersEnabledBody"></tbody>
                                    </table>
                                </div>

                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h6 class="mb-0">Send history</h6>
                                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="rxUserViewManager.loadDosageReminders(true)">
                                        <i class="ti ti-refresh me-1"></i> Refresh
                                    </button>
                                </div>
                                <div id="remindersHistoryEmpty" class="text-muted small" style="display: none;">No reminder sends recorded for this patient.</div>
                                <div class="table-responsive" id="remindersHistoryTableWrap" style="display: none;">
                                    <table class="table table-striped table-hover">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Order</th>
                                                <th>Reminder date</th>
                                                <th>Slot</th>
                                                <th>Sent at</th>
                                                <th>Confirmed</th>
                                                <th>Flags</th>
                                            </tr>
                                        </thead>
                                        <tbody id="remindersHistoryBody"></tbody>
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

                        <div class="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                            <div id="timelineLoadingState" class="text-center py-4">
                                <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                            </div>
                            <div id="timelineContent" class="list-group list-group-flush" style="display:none;"></div>
                            <div id="timelineEmpty" class="text-center text-muted py-4" style="display:none;">No activity yet.</div>
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
        this.medications = [];
        this.dosageReminders = null;
        this.stats = null;
        this.ordersLoaded = false;
        this.bookingsLoaded = false;
        this.medicationsLoaded = false;
        this.dosageRemindersLoaded = false;
        this.timelineLoaded = false;
        this.init();
    }

    init() {
        this.loadUserData();
        this.loadStats();
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

        document.getElementById('detailFullName').textContent = this.userData.full_name || '—';
        document.getElementById('detailEmail').textContent = this.userData.email || '—';
        document.getElementById('detailPhone').textContent = this.userData.phone || '—';
        document.getElementById('detailPps').textContent = this.userData.pps_no || '—';
        document.getElementById('detailDob').textContent = this.userData.dob || '—';
        document.getElementById('detailGender').textContent = this.userData.gender || '—';
        document.getElementById('detailAddress').textContent = this.userData.home_address || '—';
        document.getElementById('detailPharmacy').textContent = this.userData.nominated_pharmacy || '—';
    }

    formatDateTime(value) {
        if (!value) return '—';
        const date = new Date(value);
        if (isNaN(date.getTime())) return value;
        return date.toLocaleString();
    }

    async loadStats() {
        document.getElementById('statsLoadingState').style.display = 'block';
        document.getElementById('statsErrorState').style.display = 'none';
        document.getElementById('statsContent').style.display = 'none';

        try {
            const response = await fetch(`/api/rx-users/${this.userId}/stats`, {
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                }
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message || 'Failed to load stats');
            this.stats = result.data;
            document.getElementById('statOrdersCount').textContent = this.stats.orders_count;
            document.getElementById('statMedsCount').textContent = this.stats.medications_count;
            document.getElementById('statBookingsCount').textContent = this.stats.bookings_count;
            document.getElementById('statServicesCount').textContent = this.stats.services_used_count;
            document.getElementById('statMemberSince').textContent = this.formatDateTime(this.stats.member_since);
            document.getElementById('statLastOrder').textContent = this.formatDateTime(this.stats.last_order_at);
            document.getElementById('statLastBooking').textContent = this.formatDateTime(this.stats.last_booking_at);
            document.getElementById('statsContent').style.display = 'block';
        } catch (error) {
            console.error(error);
            document.getElementById('statsErrorState').style.display = 'block';
        } finally {
            document.getElementById('statsLoadingState').style.display = 'none';
        }
    }

    async loadMedications() {
        document.getElementById('medsLoadingState').style.display = 'block';
        document.getElementById('medsErrorState').style.display = 'none';
        document.getElementById('medsEmptyState').style.display = 'none';
        document.getElementById('medsTableContainer').style.display = 'none';

        try {
            const response = await fetch(`/api/rx-users/${this.userId}/medications`, {
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                }
            });
            const result = await response.json();
            if (!result.success) throw new Error(result.message || 'Failed to load medications');
            this.medications = result.data || [];
            this.medicationsLoaded = true;

            if (this.medications.length === 0) {
                document.getElementById('medsEmptyState').style.display = 'block';
                return;
            }

            document.getElementById('medsTableBody').innerHTML = this.medications.map(med => `
                <tr>
                    <td>${med.name || '—'}</td>
                    <td>${med.times_ordered}</td>
                    <td>${med.total_quantity}</td>
                    <td>${med.last_ordered_at || '—'}</td>
                </tr>
            `).join('');
            document.getElementById('medsTableContainer').style.display = 'block';
        } catch (error) {
            console.error(error);
            document.getElementById('medsErrorState').style.display = 'block';
        } finally {
            document.getElementById('medsLoadingState').style.display = 'none';
        }
    }

    async loadDosageReminders(force = false) {
        if (this.dosageRemindersLoaded && !force) {
            return;
        }

        document.getElementById('remindersLoadingState').style.display = 'block';
        document.getElementById('remindersErrorState').style.display = 'none';
        document.getElementById('remindersContent').style.display = 'none';

        try {
            const response = await fetch(`/api/rx-users/${this.userId}/dosage-reminders`, {
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                }
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.message || result.error || 'Failed to load dosage reminders');
            }

            this.dosageReminders = result.data || {};
            this.dosageRemindersLoaded = true;
            this.renderDosageReminders();
            document.getElementById('remindersContent').style.display = 'block';
        } catch (error) {
            console.error(error);
            document.getElementById('remindersErrorMessage').textContent = error.message || 'An error occurred while loading reminders.';
            document.getElementById('remindersErrorState').style.display = 'block';
        } finally {
            document.getElementById('remindersLoadingState').style.display = 'none';
        }
    }

    renderDosageReminders() {
        const data = this.dosageReminders || {};
        const enabled = data.enabled_orders || [];
        const history = data.history || [];

        document.getElementById('remindersScheduleNote').textContent = data.schedule_note || '';

        const dupAlert = document.getElementById('remindersDuplicateAlert');
        if (data.duplicate_same_slot_count > 0) {
            dupAlert.style.display = 'block';
            dupAlert.textContent = `Possible duplicate sends detected: ${data.duplicate_same_slot_count} rows share the same order + date + slot. That should not happen if the unique index is present.`;
        } else {
            dupAlert.style.display = 'none';
        }

        if (enabled.length === 0) {
            document.getElementById('remindersEnabledEmpty').style.display = 'block';
            document.getElementById('remindersEnabledTableWrap').style.display = 'none';
        } else {
            document.getElementById('remindersEnabledEmpty').style.display = 'none';
            document.getElementById('remindersEnabledTableWrap').style.display = 'block';
            document.getElementById('remindersEnabledBody').innerHTML = enabled.map(order => `
                <tr>
                    <td><a href="#" class="text-primary fw-semibold" onclick="showOrderDetails(${order.id}); return false;">${order.order_no}</a></td>
                    <td><span class="badge ${this.getStatusBadgeClass(order.status)}">${order.status}</span></td>
                    <td>${order.dosage_schedule || '—'}</td>
                    <td>${order.created_at || '—'}</td>
                </tr>
            `).join('');
        }

        if (history.length === 0) {
            document.getElementById('remindersHistoryEmpty').style.display = 'block';
            document.getElementById('remindersHistoryTableWrap').style.display = 'none';
            return;
        }

        document.getElementById('remindersHistoryEmpty').style.display = 'none';
        document.getElementById('remindersHistoryTableWrap').style.display = 'block';
        document.getElementById('remindersHistoryBody').innerHTML = history.map(row => {
            const flags = [];
            if (row.possible_duplicate_slot) flags.push('<span class="badge bg-danger">Duplicate slot</span>');
            if (row.service_disabled) flags.push('<span class="badge bg-dark">Service disabled</span>');
            if (row.escalation_3) flags.push('<span class="badge bg-warning text-dark">Esc 3d</span>');
            if (row.escalation_6) flags.push('<span class="badge bg-warning text-dark">Esc 6d</span>');
            if (row.escalation_9) flags.push('<span class="badge bg-danger">Esc 9d</span>');
            if (row.consecutive_missed_days > 0) flags.push(`<span class="badge bg-secondary">Missed ${row.consecutive_missed_days}d</span>`);

            const rowClass = row.possible_duplicate_slot ? 'table-danger' : '';
            return `
                <tr class="${rowClass}">
                    <td><a href="#" class="text-primary fw-semibold" onclick="showOrderDetails(${row.order_id}); return false;">${row.order_no}</a></td>
                    <td>${row.reminder_date || '—'}</td>
                    <td><code>${row.reminder_time || '—'}</code></td>
                    <td>${row.sent_at || '—'}</td>
                    <td>${row.confirmed ? `<span class="badge bg-success">Yes</span><div class="small text-muted">${row.confirmed_at || ''}</div>` : '<span class="badge bg-secondary">No</span>'}</td>
                    <td>${flags.join(' ') || '—'}</td>
                </tr>
            `;
        }).join('');
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
                this.ordersLoaded = true;
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
                this.bookingsLoaded = true;
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

    async loadTimeline() {
        document.getElementById('timelineLoadingState').style.display = 'block';
        document.getElementById('timelineContent').style.display = 'none';
        document.getElementById('timelineEmpty').style.display = 'none';
        try {
            const response = await fetch(`/api/rx-users/${this.userId}/timeline`, { headers: { Accept: 'application/json' } });
            const result = await response.json();
            if (!result.success) throw new Error(result.message || 'Failed');
            this.timelineLoaded = true;
            const items = result.data || [];
            if (!items.length) {
                document.getElementById('timelineEmpty').style.display = 'block';
                return;
            }
            document.getElementById('timelineContent').innerHTML = items.map(item => `
                <div class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <span class="badge bg-light text-dark text-capitalize">${item.type}</span>
                        <span class="text-muted small">${item.occurred_at}</span>
                    </div>
                    <div class="fw-semibold mt-1">${item.title}</div>
                    <div class="text-muted small">${item.subtitle || ''}</div>
                </div>`).join('');
            document.getElementById('timelineContent').style.display = 'block';
        } catch (e) {
            document.getElementById('timelineEmpty').textContent = e.message;
            document.getElementById('timelineEmpty').style.display = 'block';
        } finally {
            document.getElementById('timelineLoadingState').style.display = 'none';
        }
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
                            <tr><td><strong>Dosage reminder:</strong></td><td>${order.dosage_reminder === true ? 'Enabled' : (order.dosage_reminder === false ? 'Disabled' : '—')}</td></tr>
                            <tr><td><strong>Dosage schedule:</strong></td><td>${order.dosage_schedule || '—'}</td></tr>
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

    document.getElementById('orders-tab').addEventListener('click', function() {
        if (window.rxUserViewManager && !window.rxUserViewManager.ordersLoaded) {
            window.rxUserViewManager.loadOrders();
        }
    });

    document.getElementById('bookings-tab').addEventListener('click', function() {
        if (window.rxUserViewManager && !window.rxUserViewManager.bookingsLoaded) {
            window.rxUserViewManager.loadBookings();
        }
    });

    document.getElementById('medications-tab').addEventListener('click', function() {
        if (window.rxUserViewManager && !window.rxUserViewManager.medicationsLoaded) {
            window.rxUserViewManager.loadMedications();
        }
    });

    document.getElementById('dosage-reminders-tab').addEventListener('click', function() {
        if (window.rxUserViewManager && !window.rxUserViewManager.dosageRemindersLoaded) {
            window.rxUserViewManager.loadDosageReminders();
        }
    });

    document.getElementById('timeline-tab').addEventListener('click', function() {
        if (window.rxUserViewManager && !window.rxUserViewManager.timelineLoaded) {
            window.rxUserViewManager.loadTimeline();
        }
    });
});
</script>
@endsection
