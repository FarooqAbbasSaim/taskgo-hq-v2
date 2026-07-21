@extends('layouts.vertical', ['title' => 'Staff Details'])

@section('content')
<div class="container-fluid">
    <div class="row mb-3">
        <div class="col-12">
            <a id="backLink" href="/admin/customers/{{ $customerId }}" class="btn btn-outline-secondary btn-sm">
                <i class="ti ti-arrow-left me-1"></i>Back
            </a>
        </div>
    </div>

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
                    <div class="col-md-4">
                        <label class="form-label">Primary pharmacy</label>
                        <input type="text" class="form-control" id="staffPrimaryPharmacy" readonly>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Assigned pharmacies</label>
                        <input type="text" class="form-control" id="staffPharmacies" readonly>
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
        if (ref.includes('/pharmacies/')) {
            document.getElementById('backLink').href = ref;
            document.getElementById('backLink').innerHTML = '<i class="ti ti-arrow-left me-1"></i>Back to Pharmacy';
        }

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
        document.getElementById('staffPrimaryPharmacy').value = user.user_pharmacy_name || '—';
        document.getElementById('staffPharmacies').value = user.pharmacies_display || '—';
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
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new StaffViewManager({{ (int) $customerId }}, {{ (int) $userId }});
});
</script>
@endsection
