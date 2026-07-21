@extends('layouts.vertical', ['title' => 'Pharmacy Details'])

@section('content')
<div class="container-fluid">
    @include('partials.support-breadcrumbs', ['breadcrumbs' => [
        ['label' => 'Customers', 'url' => '/admin/customers'],
        ['label' => 'Customer', 'url' => '/admin/customers/' . $customerId],
        ['label' => 'Pharmacy'],
    ]])

    <div id="loadingSpinner" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
        <p class="mt-3 text-muted">Loading pharmacy details...</p>
    </div>

    <div id="errorMessage" class="alert alert-danger" style="display:none;"><span id="errorText"></span></div>

    <div id="pharmacyDetails" style="display:none;">
        <div class="card mb-4">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                        <h4 class="mb-1" id="pharmacyName">—</h4>
                        <p class="text-muted mb-0" id="pharmacyOrg">—</p>
                    </div>
                    <span class="badge bg-success" id="pharmacyStatus">Active</span>
                </div>
                <div class="row mt-3 g-3 small">
                    <div class="col-md-4"><strong>Address:</strong> <span id="pharmacyAddress">—</span></div>
                    <div class="col-md-3"><strong>Phone:</strong> <span id="pharmacyPhone">—</span> <button type="button" class="btn btn-sm btn-link p-0" id="copyPhoneBtn"><i class="ti ti-copy"></i></button></div>
                    <div class="col-md-3"><strong>Email:</strong> <span id="pharmacyEmail">—</span> <button type="button" class="btn btn-sm btn-link p-0" id="copyEmailBtn"><i class="ti ti-copy"></i></button></div>
                    <div class="col-md-2"><strong>GMS:</strong> <span id="pharmacyGms">—</span></div>
                </div>
            </div>
        </div>

        <div class="row mb-3" id="statsRow"></div>

        <div class="card mb-4">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Health checks</h5>
            </div>
            <div class="card-body" id="healthChecks"></div>
        </div>

        <div class="row mb-4">
            <div class="col-md-6">
                <div class="card h-100"><div class="card-header"><h6 class="mb-0">Recent orders</h6></div><div class="card-body p-0"><div id="recentOrders" class="list-group list-group-flush small"></div></div></div>
            </div>
            <div class="col-md-6">
                <div class="card h-100"><div class="card-header"><h6 class="mb-0">Recent bookings</h6></div><div class="card-body p-0"><div id="recentBookings" class="list-group list-group-flush small"></div></div></div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-wrap gap-2 mb-3">
                    <div class="btn-group btn-group-sm" role="group" id="exportButtons"></div>
                </div>
                <ul class="nav nav-tabs nav-bordered" role="tablist">
                    <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#hoursTab">Opening Hours</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#staffTab">Staff</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#patientsTab">Patients</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#ordersTab">Orders</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#bookingsTab">Bookings</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#servicesTab">Services</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#gapsTab">Unassigned services</button></li>
                </ul>
                <div class="tab-content mt-3">
                    <div class="tab-pane fade show active" id="hoursTab"><table class="table table-sm"><tbody id="hoursTableBody"></tbody></table></div>
                    <div class="tab-pane fade" id="staffTab">
                        <input type="text" class="form-control form-control-sm mb-2" id="staffSearch" placeholder="Search staff...">
                        <div class="table-responsive"><table class="table table-sm table-hover"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th></th></tr></thead><tbody id="staffTableBody"></tbody></table></div>
                    </div>
                    <div class="tab-pane fade" id="patientsTab">
                        <input type="text" class="form-control form-control-sm mb-2" id="patientsSearch" placeholder="Search patients...">
                        <div class="table-responsive"><table class="table table-sm table-hover"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th></th></tr></thead><tbody id="patientsTableBody"></tbody></table></div>
                    </div>
                    <div class="tab-pane fade" id="ordersTab"><div class="table-responsive"><table class="table table-sm table-hover"><thead><tr><th>Order</th><th>Patient</th><th>Status</th><th>Items</th><th>Created</th><th></th></tr></thead><tbody id="ordersTableBody"></tbody></table></div></div>
                    <div class="tab-pane fade" id="bookingsTab"><div class="table-responsive"><table class="table table-sm table-hover"><thead><tr><th>Service</th><th>Patient</th><th>Date</th><th>Status</th></tr></thead><tbody id="bookingsTableBody"></tbody></table></div></div>
                    <div class="tab-pane fade" id="servicesTab"><div id="servicesList"></div></div>
                    <div class="tab-pane fade" id="gapsTab"><div id="serviceGapsList" class="small text-muted">Loading...</div></div>
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
        document.getElementById('staffSearch')?.addEventListener('input', () => this.renderStaff());
        document.getElementById('patientsSearch')?.addEventListener('input', () => this.renderPatients());
    }

    async load() {
        try {
            const response = await fetch(`/api/customers/${this.customerId}/pharmacies/${this.pharmacyId}`, { headers: { Accept: 'application/json' } });
            const result = await response.json();
            if (!result.success) throw new Error(result.message || 'Failed to load pharmacy');
            this.data = result.data;
            this.render();
            document.getElementById('loadingSpinner').style.display = 'none';
            document.getElementById('pharmacyDetails').style.display = 'block';
        } catch (e) {
            document.getElementById('loadingSpinner').style.display = 'none';
            document.getElementById('errorText').textContent = e.message;
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
        document.getElementById('copyPhoneBtn').onclick = () => SupportTools.copyText(p.phone || '');
        document.getElementById('copyEmailBtn').onclick = () => SupportTools.copyText(p.email || '');

        const status = (p.status || 'active').toLowerCase();
        const statusEl = document.getElementById('pharmacyStatus');
        statusEl.textContent = status;
        statusEl.className = 'badge ' + (status === 'active' ? 'bg-success' : 'bg-warning');

        document.getElementById('statsRow').innerHTML = [
            ['Staff', s.staff_count], ['Patients', s.patient_count], ['Services', s.service_count],
            ['Published', s.published_service_count], ['Orders', s.orders_count], ['Bookings', s.bookings_count],
        ].map(([label, val]) => `<div class="col-6 col-md-2"><div class="card text-center"><div class="card-body py-2"><div class="fs-4 fw-semibold">${val}</div><div class="text-muted small">${label}</div></div></div></div>`).join('');

        document.getElementById('healthChecks').innerHTML = (this.data.health || []).map(h => `
            <div class="d-flex justify-content-between border-bottom py-2">
                <span>${h.label}</span>
                <span><span class="badge ${h.ok ? 'bg-success' : 'bg-warning'} me-2">${h.ok ? 'OK' : 'Check'}</span>${this.esc(h.value)}</span>
            </div>`).join('');

        this.renderRecent('recentOrders', this.data.recent_orders || [], 'order');
        this.renderRecent('recentBookings', this.data.recent_bookings || [], 'booking');

        document.getElementById('exportButtons').innerHTML = ['staff','patients','orders','bookings'].map(t =>
            `<a class="btn btn-outline-secondary" href="/api/customers/${this.customerId}/pharmacies/${this.pharmacyId}/export/${t}">Export ${t}</a>`).join('');

        this.renderHours(p.working_hours || []);
        this.renderStaff();
        this.renderPatients();
        this.renderOrders(this.data.orders || []);
        this.renderBookings(this.data.bookings || []);
        this.renderServices(this.data.services || []);
        this.renderServiceGaps(this.data.service_gaps || []);
    }

    renderRecent(id, items, type) {
        const el = document.getElementById(id);
        if (!items.length) { el.innerHTML = '<div class="list-group-item text-muted">None yet</div>'; return; }
        el.innerHTML = items.map(item => {
            const label = type === 'order' ? item.order_no : item.service;
            const sub = type === 'order' ? `${item.patient_name} · ${item.status}` : `${item.patient_name} · ${item.date || ''}`;
            const link = item.user_id ? `/admin/rx-users/${item.user_id}` : '#';
            return `<a href="${link}" class="list-group-item list-group-item-action"><div class="fw-semibold">${this.esc(label)}</div><div class="text-muted">${this.esc(sub)}</div></a>`;
        }).join('');
    }

    formatSlots(day) {
        if (day.is_day_off || !day.time_slots?.length) return '<span class="text-muted">Closed</span>';
        return day.time_slots.map(s => `${s.start_time} – ${s.end_time}`).join(', ');
    }

    renderHours(hours) {
        document.getElementById('hoursTableBody').innerHTML = hours.map(d => `<tr><td>${d.day}</td><td>${this.formatSlots(d)}</td></tr>`).join('') || '<tr><td colspan="2" class="text-muted">No hours set</td></tr>';
    }

    filterList(list, term, fields) {
        term = (term || '').trim().toLowerCase();
        if (!term) return list;
        return list.filter(row => fields.some(f => String(row[f] || '').toLowerCase().includes(term)));
    }

    renderStaff() {
        const term = document.getElementById('staffSearch')?.value;
        const staff = this.filterList(this.data.staff || [], term, ['name','email','role','pharmacies_display']);
        document.getElementById('staffTableBody').innerHTML = staff.map(m => `<tr>
            <td><a href="/admin/customers/${this.customerId}/staff/${m.id}">${this.esc(m.name)}</a></td>
            <td>${this.esc(m.email)}</td><td>${this.esc(m.role)}</td><td>${this.esc(m.status)}</td>
            <td><a class="btn btn-sm btn-outline-primary" href="/admin/customers/${this.customerId}/staff/${m.id}">View</a></td></tr>`).join('') || '<tr><td colspan="5" class="text-muted text-center">No staff</td></tr>';
    }

    renderPatients() {
        const term = document.getElementById('patientsSearch')?.value;
        const patients = this.filterList(this.data.patients || [], term, ['full_name','email','phone','pps_number']);
        document.getElementById('patientsTableBody').innerHTML = patients.map(p => `<tr>
            <td><a href="/admin/rx-users/${p.id}">${this.esc(p.full_name)}</a></td>
            <td>${this.esc(p.email)}</td><td>${this.esc(p.phone)}</td>
            <td><a class="btn btn-sm btn-outline-primary" href="/admin/rx-users/${p.id}">View</a></td></tr>`).join('') || '<tr><td colspan="4" class="text-muted text-center">No patients</td></tr>';
    }

    renderOrders(orders) {
        document.getElementById('ordersTableBody').innerHTML = orders.map(o => `<tr>
            <td><a href="#" onclick="showPharmacyOrder(${o.id}); return false;">${this.esc(o.order_no)}</a></td>
            <td><a href="/admin/rx-users/${o.user_id}">${this.esc(o.patient_name)}</a></td>
            <td>${this.esc(o.status)}</td><td>${o.item_count}</td><td>${this.esc(o.created_at)}</td>
            <td><button class="btn btn-sm btn-outline-primary" onclick="showPharmacyOrder(${o.id})">Details</button></td></tr>`).join('') || '<tr><td colspan="6" class="text-muted text-center">No orders</td></tr>';
    }

    renderBookings(bookings) {
        document.getElementById('bookingsTableBody').innerHTML = bookings.map(b => `<tr>
            <td>${this.esc(b.service)}</td><td><a href="/admin/rx-users/${b.user_id}">${this.esc(b.patient_name)}</a></td>
            <td>${this.esc(b.date)} ${this.esc(b.time || '')}</td><td>${this.esc(b.status)}</td></tr>`).join('') || '<tr><td colspan="4" class="text-muted text-center">No bookings</td></tr>';
    }

    renderServices(services) {
        document.getElementById('servicesList').innerHTML = services.length ? services.map(s => `
            <div class="border rounded p-3 mb-2"><div class="fw-semibold">${this.esc(s.name)}</div>
            <div class="text-muted small">${s.duration || ''} min · ${s.timings_summary || ''}</div></div>`).join('') : '<p class="text-muted">No services linked</p>';
    }

    renderServiceGaps(gaps) {
        document.getElementById('serviceGapsList').innerHTML = gaps.length ? `<ul class="mb-0">${gaps.map(g => `<li>${this.esc(g.name)} <span class="text-muted">(${g.mode || '—'})</span></li>`).join('')}</ul>` : '<p class="mb-0">All published org services are assigned to this pharmacy.</p>';
    }

    esc(v) { return SupportTools.escapeHtml(v); }
}

async function showPharmacyOrder(orderId) {
    const response = await fetch(`/api/rx-users/orders/${orderId}`, { headers: { Accept: 'application/json' } });
    const result = await response.json();
    if (!result.success) { alert(result.message || 'Failed'); return; }
    const order = result.data;
    alert(`Order ${order.order_no}\nPatient: ${order.user_name}\nStatus: ${order.status}\nItems: ${(order.items || []).length}`);
}

document.addEventListener('DOMContentLoaded', () => new PharmacyViewManager({{ (int) $customerId }}, {{ (int) $pharmacyId }}));
</script>
@endsection
