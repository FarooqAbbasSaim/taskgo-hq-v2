@extends('layouts.vertical', ['title' => 'MVP Schedule Activity Log'])

@section('content')
<div class="container-fluid">
    @include('partials.support-breadcrumbs', ['breadcrumbs' => [
        ['label' => 'Customers', 'url' => '/admin/customers'],
        ['label' => 'Customer', 'url' => '/admin/customers/' . $customerId],
        ['label' => 'MyVaccinePortal', 'url' => '/admin/customers/' . $customerId . '/mvp'],
        ['label' => 'Schedule activity'],
    ]])

    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div>
            <h4 class="mb-1">Schedule activity log</h4>
            <p class="text-muted mb-0">CRM schedule actions for this customer’s pharmacies (who changed what, and when).</p>
        </div>
        <div class="d-flex flex-wrap gap-2">
            <a href="/admin/customers/{{ $customerId }}/mvp" class="btn btn-light"><i class="ti ti-arrow-left me-1"></i> Back to MVP</a>
            <a href="/admin/customers/{{ $customerId }}" class="btn btn-outline-secondary">Customer</a>
        </div>
    </div>

    <div class="card mb-3">
        <div class="card-body">
            <form id="activityFilters" class="row g-2 align-items-end">
                <div class="col-12 col-md-2">
                    <label class="form-label" for="filterScheduleId">Schedule ID</label>
                    <input type="number" min="1" class="form-control" id="filterScheduleId" placeholder="Any">
                </div>
                <div class="col-12 col-md-2">
                    <label class="form-label" for="filterUserId">User ID</label>
                    <input type="number" min="1" class="form-control" id="filterUserId" placeholder="CRM user">
                </div>
                <div class="col-12 col-md-2">
                    <label class="form-label" for="filterPharmacyId">Pharmacy ID</label>
                    <input type="number" min="1" class="form-control" id="filterPharmacyId" placeholder="Any">
                </div>
                <div class="col-12 col-md-2">
                    <label class="form-label" for="filterAction">Action</label>
                    <select class="form-select" id="filterAction">
                        <option value="">All</option>
                        <option value="updated">updated</option>
                        <option value="cleared">cleared</option>
                        <option value="row_added">row_added</option>
                        <option value="row_removed">row_removed</option>
                    </select>
                </div>
                <div class="col-12 col-md-2">
                    <label class="form-label" for="filterPerPage">Per page</label>
                    <input type="number" min="1" max="200" class="form-control" id="filterPerPage" value="50">
                </div>
                <div class="col-12 col-md-2 d-flex gap-2">
                    <button type="submit" class="btn btn-primary flex-grow-1">Filter</button>
                    <button type="button" class="btn btn-light" id="resetFilters">Reset</button>
                </div>
            </form>
        </div>
    </div>

    <div id="activityLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-3 text-muted">Loading schedule activity…</p>
    </div>
    <div id="activityError" class="alert alert-danger d-none"></div>
    <div id="activityEmpty" class="alert alert-info d-none">No schedule actions logged yet for this customer.</div>

    <div id="activityContent" class="card d-none">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">Activity</h5>
            <span class="badge bg-secondary" id="activityTotalBadge">0</span>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-sm table-striped align-middle mb-0">
                    <thead>
                        <tr>
                            <th>When</th>
                            <th>User</th>
                            <th>Pharmacy</th>
                            <th>Action</th>
                            <th>Schedule</th>
                            <th>Clinic date</th>
                            <th>Summary</th>
                            <th>Changed</th>
                        </tr>
                    </thead>
                    <tbody id="activityTableBody"></tbody>
                </table>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3" id="activityPagination">
                <button type="button" class="btn btn-sm btn-light" id="pagePrev" disabled>Previous</button>
                <span class="text-muted small" id="pageLabel"></span>
                <button type="button" class="btn btn-sm btn-light" id="pageNext" disabled>Next</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
class CustomerMvpScheduleActivity {
    constructor(customerId) {
        this.customerId = customerId;
        this.page = 1;
        this.lastPage = 1;
        this.bind();
        this.load();
    }

    bind() {
        document.getElementById('activityFilters').addEventListener('submit', (e) => {
            e.preventDefault();
            this.page = 1;
            this.load();
        });
        document.getElementById('resetFilters').addEventListener('click', () => {
            document.getElementById('filterScheduleId').value = '';
            document.getElementById('filterUserId').value = '';
            document.getElementById('filterPharmacyId').value = '';
            document.getElementById('filterAction').value = '';
            document.getElementById('filterPerPage').value = '50';
            this.page = 1;
            this.load();
        });
        document.getElementById('pagePrev').addEventListener('click', () => {
            if (this.page > 1) {
                this.page -= 1;
                this.load();
            }
        });
        document.getElementById('pageNext').addEventListener('click', () => {
            if (this.page < this.lastPage) {
                this.page += 1;
                this.load();
            }
        });
    }

    queryString() {
        const params = new URLSearchParams();
        params.set('page', String(this.page));
        params.set('per_page', document.getElementById('filterPerPage').value || '50');
        const scheduleId = document.getElementById('filterScheduleId').value.trim();
        const userId = document.getElementById('filterUserId').value.trim();
        const pharmacyId = document.getElementById('filterPharmacyId').value.trim();
        const action = document.getElementById('filterAction').value;
        if (scheduleId) params.set('schedule_id', scheduleId);
        if (userId) params.set('user_id', userId);
        if (pharmacyId) params.set('pharmacy_id', pharmacyId);
        if (action) params.set('action', action);
        return params.toString();
    }

    async load() {
        const loading = document.getElementById('activityLoading');
        const error = document.getElementById('activityError');
        const empty = document.getElementById('activityEmpty');
        const content = document.getElementById('activityContent');

        loading.classList.remove('d-none');
        error.classList.add('d-none');
        empty.classList.add('d-none');
        content.classList.add('d-none');

        try {
            const response = await fetch(`/api/customers/${this.customerId}/mvp/schedule/activity-logs?${this.queryString()}`, {
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(result.message || `Request failed (${response.status})`);
            }

            const data = result.data || {};
            if (data.table_ready === false) {
                throw new Error('Schedule activity table is not available yet. Deploy the CRM migration first.');
            }

            const items = data.items || [];
            const meta = data.meta || {};
            this.page = Number(meta.current_page || 1);
            this.lastPage = Number(meta.last_page || 1);

            document.getElementById('activityTotalBadge').textContent = String(meta.total ?? items.length);
            document.getElementById('pageLabel').textContent = `Page ${this.page} of ${this.lastPage}`;
            document.getElementById('pagePrev').disabled = this.page <= 1;
            document.getElementById('pageNext').disabled = this.page >= this.lastPage;

            loading.classList.add('d-none');

            if (!items.length) {
                empty.classList.remove('d-none');
                return;
            }

            const tbody = document.getElementById('activityTableBody');
            tbody.innerHTML = items.map((row) => {
                const userLabel = this.esc(row.performer_name || (row.performed_by ? `User #${row.performed_by}` : '—'));
                const userSub = row.performer_email ? `<div class="text-muted small">${this.esc(row.performer_email)}</div>` : '';
                const pharmacy = row.pharmacy_name
                    ? `${this.esc(row.pharmacy_name)} <span class="text-muted">#${row.pharmacy_id || ''}</span>`
                    : (row.pharmacy_id ? `#${row.pharmacy_id}` : '—');
                const changed = (row.changed_fields || []).join(', ') || '—';
                const details = (row.change_details || []).map((d) => {
                    const before = d.before === null || d.before === '' ? '—' : d.before;
                    const after = d.after === null || d.after === '' ? '—' : d.after;
                    return `<li><strong>${this.esc(d.label || d.field)}:</strong> <span class="text-muted">${this.esc(before)}</span> → ${this.esc(after)}</li>`;
                }).join('');
                const detailsHtml = details
                    ? `<details class="mt-1"><summary class="text-muted" style="cursor:pointer;">Details</summary><ul class="mb-0 ps-3 mt-1">${details}</ul></details>`
                    : '';

                return `<tr>
                    <td class="text-nowrap small">${this.esc(row.created_at_label || '—')}</td>
                    <td class="small">${userLabel}${userSub}</td>
                    <td class="small">${pharmacy}</td>
                    <td class="small"><span class="badge bg-secondary">${this.esc(String(row.action || '').replace(/_/g, ' '))}</span></td>
                    <td class="small">${row.schedule_id ? '#' + row.schedule_id : '—'}</td>
                    <td class="small text-nowrap">${this.esc(row.clinic_date_label || '—')}</td>
                    <td class="small">${this.esc(row.summary || '—')}</td>
                    <td class="small">${this.esc(changed)}${detailsHtml}</td>
                </tr>`;
            }).join('');

            content.classList.remove('d-none');
        } catch (err) {
            loading.classList.add('d-none');
            error.textContent = err.message || 'Failed to load schedule activity.';
            error.classList.remove('d-none');
        }
    }

    esc(value) {
        return String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }
}

document.addEventListener('DOMContentLoaded', () => new CustomerMvpScheduleActivity({{ (int) $customerId }}));
</script>
@endsection
