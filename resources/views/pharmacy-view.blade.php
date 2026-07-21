@extends('layouts.vertical', ['title' => 'Pharmacy Details'])

@section('content')
<div class="container-fluid">
    <div class="row mb-3">
        <div class="col-12 d-flex justify-content-between align-items-center">
            <div>
                <a href="/admin/customers/{{ $customerId }}" class="btn btn-outline-secondary btn-sm">
                    <i class="ti ti-arrow-left me-1"></i>Back to Customer
                </a>
            </div>
        </div>
    </div>

    <div id="loadingSpinner" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Loading pharmacy details...</p>
    </div>

    <div id="errorMessage" class="alert alert-danger" style="display: none;">
        <i class="ti ti-alert-circle me-2"></i>
        <span id="errorText"></span>
    </div>

    <div id="pharmacyDetails" style="display: none;">
        <div class="row">
            <div class="col-12">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
                            <div>
                                <h4 class="mb-1" id="pharmacyName">—</h4>
                                <p class="text-muted mb-0" id="pharmacyOrg">—</p>
                            </div>
                            <span class="badge bg-success" id="pharmacyStatus">Active</span>
                        </div>
                        <div class="row mt-3 g-3">
                            <div class="col-md-4">
                                <strong>Address:</strong> <span id="pharmacyAddress">—</span>
                            </div>
                            <div class="col-md-3">
                                <strong>Phone:</strong> <span id="pharmacyPhone">—</span>
                            </div>
                            <div class="col-md-3">
                                <strong>Email:</strong> <span id="pharmacyEmail">—</span>
                            </div>
                            <div class="col-md-2">
                                <strong>GMS:</strong> <span id="pharmacyGms">—</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4" id="statsRow">
            <div class="col-6 col-md-2">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statStaff">0</div>
                    <div class="text-muted small">Staff</div>
                </div></div>
            </div>
            <div class="col-6 col-md-2">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statPatients">0</div>
                    <div class="text-muted small">Patients</div>
                </div></div>
            </div>
            <div class="col-6 col-md-2">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statServices">0</div>
                    <div class="text-muted small">Services</div>
                </div></div>
            </div>
            <div class="col-6 col-md-2">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statPublished">0</div>
                    <div class="text-muted small">Published</div>
                </div></div>
            </div>
            <div class="col-6 col-md-2">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statOrders">0</div>
                    <div class="text-muted small">Orders</div>
                </div></div>
            </div>
            <div class="col-6 col-md-2">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statBookings">0</div>
                    <div class="text-muted small">Bookings</div>
                </div></div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs nav-bordered" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#hoursTab" type="button" role="tab">
                                    <i class="ti ti-clock me-1"></i> Opening Hours
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#staffTab" type="button" role="tab">
                                    <i class="ti ti-users me-1"></i> Staff
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#patientsTab" type="button" role="tab">
                                    <i class="ti ti-user-heart me-1"></i> Patients
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#servicesTab" type="button" role="tab">
                                    <i class="ti ti-stethoscope me-1"></i> Services &amp; Timings
                                </button>
                            </li>
                        </ul>

                        <div class="tab-content mt-3">
                            <div class="tab-pane fade show active" id="hoursTab" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-sm table-striped mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Day</th>
                                                <th>Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody id="hoursTableBody"></tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="staffTab" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <th>Pharmacies</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody id="staffTableBody"></tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="patientsTab" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>PPS</th>
                                                <th>DOB</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody id="patientsTableBody"></tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="servicesTab" role="tabpanel">
                                <div id="servicesEmpty" class="text-center text-muted py-4" style="display: none;">
                                    No services linked to this pharmacy.
                                </div>
                                <div id="servicesList"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
class PharmacyViewManager {
    constructor(customerId, pharmacyId) {
        this.customerId = customerId;
        this.pharmacyId = pharmacyId;
        this.data = null;
        this.load();
    }

    async load() {
        try {
            const response = await fetch(`/api/customers/${this.customerId}/pharmacies/${this.pharmacyId}`, {
                headers: { 'Accept': 'application/json' }
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.message || 'Failed to load pharmacy');
            }
            this.data = result.data;
            this.render();
            document.getElementById('loadingSpinner').style.display = 'none';
            document.getElementById('pharmacyDetails').style.display = 'block';
        } catch (error) {
            console.error(error);
            document.getElementById('loadingSpinner').style.display = 'none';
            document.getElementById('errorText').textContent = error.message;
            document.getElementById('errorMessage').style.display = 'block';
        }
    }

    render() {
        const p = this.data.pharmacy;
        const s = this.data.stats;
        document.getElementById('pharmacyName').textContent = p.pharmacy_name;
        document.getElementById('pharmacyOrg').textContent = this.data.customer.pharmacy_name || this.data.customer.name;
        document.getElementById('pharmacyAddress').textContent = p.full_address || '—';
        document.getElementById('pharmacyPhone').textContent = p.phone || '—';
        document.getElementById('pharmacyEmail').textContent = p.email || '—';
        document.getElementById('pharmacyGms').textContent = p.gms_number || '—';

        const statusEl = document.getElementById('pharmacyStatus');
        const status = (p.status || 'active').toLowerCase();
        statusEl.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        statusEl.className = 'badge ' + (status === 'active' ? 'bg-success' : status === 'archived' ? 'bg-warning' : 'bg-danger');

        document.getElementById('statStaff').textContent = s.staff_count;
        document.getElementById('statPatients').textContent = s.patient_count;
        document.getElementById('statServices').textContent = s.service_count;
        document.getElementById('statPublished').textContent = s.published_service_count;
        document.getElementById('statOrders').textContent = s.orders_count;
        document.getElementById('statBookings').textContent = s.bookings_count;

        this.renderHours(p.working_hours || []);
        this.renderStaff(this.data.staff || []);
        this.renderPatients(this.data.patients || []);
        this.renderServices(this.data.services || []);
    }

    formatSlots(day) {
        if (day.is_day_off || !day.time_slots || day.time_slots.length === 0) {
            return '<span class="text-muted">Closed</span>';
        }
        return day.time_slots
            .map(slot => `${slot.start_time || '?'} – ${slot.end_time || '?'}`)
            .join(', ');
    }

    renderHours(hours) {
        const body = document.getElementById('hoursTableBody');
        if (!hours.length) {
            body.innerHTML = '<tr><td colspan="2" class="text-muted text-center">No opening hours set</td></tr>';
            return;
        }
        body.innerHTML = hours.map(day => `
            <tr>
                <td class="fw-semibold">${day.day}</td>
                <td>${this.formatSlots(day)}</td>
            </tr>
        `).join('');
    }

    statusBadge(status) {
        const s = (status || 'active').toLowerCase();
        const cls = s === 'active' ? 'bg-success' : (s === 'freeze' ? 'bg-warning' : 'bg-secondary');
        return `<span class="badge ${cls}">${s}</span>`;
    }

    renderStaff(staff) {
        const body = document.getElementById('staffTableBody');
        if (!staff.length) {
            body.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No staff for this pharmacy</td></tr>';
            return;
        }
        body.innerHTML = staff.map(member => `
            <tr>
                <td>
                    <a href="/admin/customers/${this.customerId}/staff/${member.id}" class="fw-semibold text-primary text-decoration-none">
                        ${this.escape(member.name)}
                    </a>
                </td>
                <td>${this.escape(member.email || '—')}</td>
                <td>${this.escape(member.role)}</td>
                <td>${this.statusBadge(member.status)}</td>
                <td>${this.escape(member.pharmacies_display)}</td>
                <td>
                    <a href="/admin/customers/${this.customerId}/staff/${member.id}" class="btn btn-sm btn-outline-primary">View</a>
                </td>
            </tr>
        `).join('');
    }

    renderPatients(patients) {
        const body = document.getElementById('patientsTableBody');
        if (!patients.length) {
            body.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No nominated patients for this pharmacy</td></tr>';
            return;
        }
        body.innerHTML = patients.map(patient => `
            <tr>
                <td>
                    <a href="/admin/rx-users/${patient.id}" class="fw-semibold text-primary text-decoration-none">
                        ${this.escape(patient.full_name)}
                    </a>
                </td>
                <td>${this.escape(patient.email || '—')}</td>
                <td>${this.escape(patient.phone || '—')}</td>
                <td>${this.escape(patient.pps_number || '—')}</td>
                <td>${this.escape(patient.dob || '—')}</td>
                <td>
                    <a href="/admin/rx-users/${patient.id}" class="btn btn-sm btn-outline-primary">View</a>
                </td>
            </tr>
        `).join('');
    }

    renderServices(services) {
        const list = document.getElementById('servicesList');
        const empty = document.getElementById('servicesEmpty');
        if (!services.length) {
            list.innerHTML = '';
            empty.style.display = 'block';
            return;
        }
        empty.style.display = 'none';
        list.innerHTML = services.map(service => {
            const badges = [
                service.is_published ? '<span class="badge bg-success">Published</span>' : '<span class="badge bg-secondary">Unpublished</span>',
                service.is_archived ? '<span class="badge bg-warning">Archived</span>' : '',
                service.is_24_hour_service ? '<span class="badge bg-info">24h</span>' : '',
            ].filter(Boolean).join(' ');

            const hoursRows = (service.week_chart || []).map(day => `
                <tr>
                    <td style="width: 120px;">${day.day}</td>
                    <td>${this.formatSlots(day)}</td>
                </tr>
            `).join('');

            return `
                <div class="border rounded p-3 mb-3">
                    <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                        <div>
                            <h5 class="mb-1">${this.escape(service.name)}</h5>
                            <div class="text-muted small">
                                ${service.duration ? service.duration + ' min' : ''}
                                ${service.price !== null && service.price !== undefined ? ' · €' + service.price : ''}
                                ${service.mode ? ' · ' + this.escape(service.mode) : ''}
                            </div>
                        </div>
                        <div>${badges}</div>
                    </div>
                    ${service.description ? `<p class="text-muted small mb-2">${this.escape(service.description)}</p>` : ''}
                    <div class="table-responsive">
                        <table class="table table-sm mb-0">
                            <tbody>${hoursRows || '<tr><td class="text-muted">No service timings</td></tr>'}</tbody>
                        </table>
                    </div>
                </div>
            `;
        }).join('');
    }

    escape(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new PharmacyViewManager({{ (int) $customerId }}, {{ (int) $pharmacyId }});
});
</script>
@endsection
