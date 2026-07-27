@extends('layouts.vertical', ['title' => 'Staff Details'])

@section('content')
<div class="container-fluid">
    @include('partials.support-breadcrumbs', ['breadcrumbs' => [
        ['label' => 'Customers', 'url' => '/admin/customers'],
        ['label' => 'Customer', 'url' => '/admin/customers/' . $customerId],
        ['label' => 'Staff'],
    ]])

    <div id="loadingSpinner" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Loading staff details...</p>
    </div>

    <div id="errorMessage" class="alert alert-danger" style="display: none;">
        <i class="ti ti-alert-circle me-2"></i>
        <span id="errorText"></span>
    </div>

    <div id="staffDetails" style="display: none;">
        <div class="card mb-4">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                        <h4 class="mb-1" id="staffName">—</h4>
                        <p class="text-muted mb-0" id="staffEmail">—</p>
                    </div>
                    <div class="text-end">
                        <span class="badge bg-primary me-1" id="staffRole">—</span>
                        <span class="badge bg-success" id="staffStatus">—</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statSopRead">—</div>
                    <div class="text-muted small">SOPs read</div>
                </div></div>
            </div>
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statSopPct">—</div>
                    <div class="text-muted small">SOP completion</div>
                </div></div>
            </div>
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statPolicyRead">—</div>
                    <div class="text-muted small">Policies read</div>
                </div></div>
            </div>
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body py-3">
                    <div class="fs-3 fw-semibold" id="statPolicyPct">—</div>
                    <div class="text-muted small">Policy completion</div>
                </div></div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h5 class="card-title mb-0">Details</h5>
            </div>
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-md-4">
                        <label class="form-label">Phone</label>
                        <input type="text" class="form-control" id="staffPhone" readonly>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">PSI Number</label>
                        <input type="text" class="form-control" id="staffPsi" readonly>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Email verified</label>
                        <input type="text" class="form-control" id="staffVerified" readonly>
                    </div>
                    <div class="col-12">
                        <label class="form-label">Assigned pharmacies</label>
                        <div id="staffPharmacies" class="d-flex flex-wrap gap-2 align-items-center min-vh-0 border rounded px-3 py-2 bg-light" style="min-height: 2.75rem;"></div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Last login</label>
                        <input type="text" class="form-control" id="staffLastLogin" readonly>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Created</label>
                        <input type="text" class="form-control" id="staffCreated" readonly>
                    </div>
                    <div class="col-md-8" id="reasonRow" style="display: none;">
                        <label class="form-label" id="reasonLabel">Reason</label>
                        <input type="text" class="form-control" id="staffReason" readonly>
                    </div>
                </div>

                <div class="alert alert-info mt-4 mb-0">
                    <i class="ti ti-info-circle me-1"></i>
                    Medications, orders, and service bookings belong to <strong>patients</strong> (Rx users).
                    Open a patient from the pharmacy Patients tab to see those records.
                </div>
            </div>
        </div>

        <div class="card mt-4">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="card-title mb-0">CRM auth history</h5>
                <a id="authLogLink" href="/admin/crm-auth-events" class="btn btn-sm btn-outline-secondary">Open full log</a>
            </div>
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-sm mb-0">
                        <thead class="table-light"><tr><th>When</th><th>Action</th><th>Result</th><th>IP</th><th>Channel</th></tr></thead>
                        <tbody id="authEventsTable"><tr><td colspan="5" class="text-muted text-center">Loading...</td></tr></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
class StaffViewManager {
    constructor(customerId, userId) {
        this.customerId = customerId;
        this.userId = userId;
        this.load();
    }

    async load() {
        try {
            const response = await fetch(`/api/customers/${this.customerId}/staff/${this.userId}`, {
                headers: { 'Accept': 'application/json' }
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.message || 'Failed to load staff');
            }
            this.render(result.data);
            document.getElementById('loadingSpinner').style.display = 'none';
            document.getElementById('staffDetails').style.display = 'block';
        } catch (error) {
            console.error(error);
            document.getElementById('loadingSpinner').style.display = 'none';
            document.getElementById('errorText').textContent = error.message;
            document.getElementById('errorMessage').style.display = 'block';
        }
    }

    formatDate(value) {
        if (!value) return 'Never';
        const date = new Date(value);
        if (isNaN(date.getTime())) return value;
        return date.toLocaleString();
    }

    render(data) {
        const user = data.user;
        const stats = data.stats;

        const ref = document.referrer || '';
        // breadcrumb navigation handles back path

        document.getElementById('staffName').textContent = user.name;
        document.getElementById('staffEmail').textContent = user.email || '—';
        document.getElementById('staffRole').textContent = user.role;

        const status = (user.status || 'active').toLowerCase();
        const statusEl = document.getElementById('staffStatus');
        statusEl.textContent = status;
        statusEl.className = 'badge ' + (status === 'active' ? 'bg-success' : status === 'freeze' ? 'bg-warning' : 'bg-secondary');

        document.getElementById('staffPhone').value = user.phone || '—';
        document.getElementById('staffPsi').value = user.psi_number || '—';
        document.getElementById('staffVerified').value = user.email_verified ? 'Yes' : 'No';
        this.renderAssignedPharmacies(user);
        document.getElementById('staffLastLogin').value = this.formatDate(user.last_login_at);
        document.getElementById('staffCreated').value = this.formatDate(user.created_at);

        if (user.freeze_reason || user.archive_reason) {
            document.getElementById('reasonRow').style.display = 'block';
            document.getElementById('reasonLabel').textContent = user.freeze_reason ? 'Freeze reason' : 'Archive reason';
            document.getElementById('staffReason').value = user.freeze_reason || user.archive_reason;
        }

        const sop = stats.sops || {};
        const pol = stats.policies || {};
        document.getElementById('statSopRead').textContent = `${sop.read || 0}/${sop.total || 0}`;
        document.getElementById('statSopPct').textContent = stats.sop_read_pct !== null ? `${stats.sop_read_pct}%` : '—';
        document.getElementById('statPolicyRead').textContent = `${pol.read || 0}/${pol.total || 0}`;
        document.getElementById('statPolicyPct').textContent = stats.policy_read_pct !== null ? `${stats.policy_read_pct}%` : '—';

        const authLink = document.getElementById('authLogLink');
        if (authLink) authLink.href = `/admin/crm-auth-events?user_id=${user.id}`;

        const events = data.auth_events || [];
        const tbody = document.getElementById('authEventsTable');
        tbody.innerHTML = events.length ? events.map(e => `<tr>
            <td>${e.created_at || '—'}</td><td>${e.action}</td><td>${e.result}</td><td>${e.ip || '—'}</td><td>${e.channel || '—'}</td>
        </tr>`).join('') : '<tr><td colspan="5" class="text-muted text-center">No auth events recorded</td></tr>';
    }

    renderAssignedPharmacies(user) {
        const container = document.getElementById('staffPharmacies');
        let names = Array.isArray(user.pharmacy_names) ? user.pharmacy_names.filter(Boolean) : [];

        if (!names.length && user.pharmacies_display && user.pharmacies_display !== 'Not Assigned') {
            names = user.pharmacies_display.split(',').map((name) => name.trim()).filter(Boolean);
        }

        if (!names.length) {
            container.innerHTML = '<span class="text-muted">Not assigned</span>';
            return;
        }

        if (names.length === 1 && names[0] === 'All') {
            container.innerHTML = '<span class="badge rounded-pill text-bg-primary">All pharmacies</span>';
            return;
        }

        const chips = names.map((name) =>
            `<span class="badge rounded-pill text-bg-secondary">${this.esc(name)}</span>`
        ).join('');

        if (user.uses_crm_relief_fallback) {
            container.innerHTML =
                '<span class="badge rounded-pill text-bg-info me-1">CRM fallback: all org pharmacies</span>' +
                '<span class="text-muted small me-2">(no explicit relief assignment)</span>' +
                chips;
            return;
        }

        container.innerHTML = chips;
    }

    esc(value) {
        const div = document.createElement('div');
        div.textContent = value == null ? '' : String(value);
        return div.innerHTML;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new StaffViewManager({{ (int) $customerId }}, {{ (int) $userId }});
});
</script>
@endsection
