@extends('layouts.vertical', ['title' => 'MyVaccinePortal'])

@section('content')
<div class="container-fluid">
    @include('partials.support-breadcrumbs', ['breadcrumbs' => [
        ['label' => 'Customers', 'url' => '/admin/customers'],
        ['label' => 'Customer', 'url' => '/admin/customers/' . $customerId],
        ['label' => 'MyVaccinePortal'],
    ]])

    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div>
            <h4 class="mb-1">MyVaccinePortal</h4>
            <p class="text-muted mb-0">Open a school or company to view and edit its participants, with confirm + audit history.</p>
        </div>
        <div class="d-flex flex-wrap gap-2">
            <a href="/admin/customers/{{ $customerId }}/mvp/schedule/activity-logs" class="btn btn-outline-primary">
                <i class="ti ti-history me-1"></i> Schedule activity
            </a>
            <a href="/admin/customers/{{ $customerId }}" class="btn btn-light"><i class="ti ti-arrow-left me-1"></i> Back to customer</a>
        </div>
    </div>

    <div id="mvpLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-3 text-muted">Loading vaccine portal data…</p>
    </div>
    <div id="mvpError" class="alert alert-danger d-none"></div>

    <div id="mvpContent" class="d-none">
        <div class="row g-3 mb-4" id="mvpStats"></div>

        <ul class="nav nav-tabs mb-3" role="tablist">
            <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tabSchools" type="button">Schools</button></li>
            <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#tabCompanies" type="button">Companies</button></li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade show active" id="tabSchools">
                <div class="card">
                    <div class="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between">
                        <h5 class="card-title mb-0">Schools</h5>
                        <input type="search" class="form-control form-control-sm" id="schoolSearch" placeholder="Search school…" style="min-width: 220px;">
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-sm align-middle">
                                <thead><tr><th>School</th><th>Roll</th><th>Contact</th><th>Pharmacy</th><th>Participants</th><th>Status</th><th></th></tr></thead>
                                <tbody id="schoolsTable"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="tabCompanies">
                <div class="card">
                    <div class="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between">
                        <h5 class="card-title mb-0">Companies</h5>
                        <input type="search" class="form-control form-control-sm" id="companySearch" placeholder="Search company…" style="min-width: 220px;">
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-sm align-middle">
                                <thead><tr><th>Company</th><th>CRO</th><th>Contact</th><th>Pharmacy</th><th>Participants</th><th>Status</th><th></th></tr></thead>
                                <tbody id="companiesTable"></tbody>
                            </table>
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
class CustomerMvpHub {
    constructor(customerId) {
        this.customerId = customerId;
        this.init();
    }

    async init() {
        document.getElementById('schoolSearch').addEventListener('input', this.debounce(() => this.loadSchools(), 300));
        document.getElementById('companySearch').addEventListener('input', this.debounce(() => this.loadCompanies(), 300));

        try {
            await this.loadOverview();
            await Promise.all([this.loadSchools(), this.loadCompanies()]);
            document.getElementById('mvpLoading').classList.add('d-none');
            document.getElementById('mvpContent').classList.remove('d-none');
        } catch (error) {
            document.getElementById('mvpLoading').classList.add('d-none');
            const err = document.getElementById('mvpError');
            err.textContent = error.message || 'Failed to load MyVaccinePortal data.';
            err.classList.remove('d-none');
        }
    }

    debounce(fn, wait) {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn(...args), wait);
        };
    }

    async fetchJson(url) {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.message || `Request failed (${response.status})`);
        return result;
    }

    async loadOverview() {
        const result = await this.fetchJson(`/api/customers/${this.customerId}/mvp/overview`);
        const d = result.data || {};
        document.getElementById('mvpStats').innerHTML = [
            ['Schools', d.schools],
            ['Companies', d.companies],
            ['School participants', d.school_participants],
            ['Corporate participants', d.corporate_participants]
        ].map(([label, value]) => `
            <div class="col-md-3"><div class="card mb-0"><div class="card-body py-3">
                <div class="text-muted small">${label}</div>
                <div class="fs-4 fw-semibold">${value ?? 0}</div>
            </div></div></div>
        `).join('');
    }

    async loadSchools() {
        const q = encodeURIComponent(document.getElementById('schoolSearch').value.trim());
        const result = await this.fetchJson(`/api/customers/${this.customerId}/mvp/schools?q=${q}`);
        const rows = result.data || [];
        const tbody = document.getElementById('schoolsTable');
        if (!rows.length) {
            tbody.innerHTML = '<tr><td colspan="7" class="text-muted">No schools found.</td></tr>';
            return;
        }
        tbody.innerHTML = rows.map((row) => `
            <tr>
                <td>${this.esc(row.school_name || '—')}</td>
                <td>${this.esc(row.roll_number || '—')}</td>
                <td>${this.esc(row.contact_name || '—')}<div class="text-muted small">${this.esc(row.email || '')}</div></td>
                <td>${this.esc(row.pharmacy_name || '—')}</td>
                <td><span class="badge bg-secondary">${Number(row.participant_count || 0)}</span></td>
                <td>${this.esc(row.status || '—')}</td>
                <td class="text-end text-nowrap">
                    <a class="btn btn-sm btn-primary" href="/admin/customers/${this.customerId}/mvp/schools/${row.id}">Open</a>
                    <a class="btn btn-sm btn-outline-secondary" href="/admin/customers/${this.customerId}/mvp/schools/${row.id}/edit">Edit school</a>
                </td>
            </tr>
        `).join('');
    }

    async loadCompanies() {
        const q = encodeURIComponent(document.getElementById('companySearch').value.trim());
        const result = await this.fetchJson(`/api/customers/${this.customerId}/mvp/companies?q=${q}`);
        const rows = result.data || [];
        const tbody = document.getElementById('companiesTable');
        if (!rows.length) {
            tbody.innerHTML = '<tr><td colspan="7" class="text-muted">No companies found.</td></tr>';
            return;
        }
        tbody.innerHTML = rows.map((row) => `
            <tr>
                <td>${this.esc(row.company_name || '—')}</td>
                <td>${this.esc(row.cro_number || '—')}</td>
                <td>${this.esc(row.contact_name || '—')}<div class="text-muted small">${this.esc(row.email || '')}</div></td>
                <td>${this.esc(row.pharmacy_name || '—')}</td>
                <td><span class="badge bg-secondary">${Number(row.participant_count || 0)}</span></td>
                <td>${this.esc(row.status || '—')}</td>
                <td class="text-end text-nowrap">
                    <a class="btn btn-sm btn-primary" href="/admin/customers/${this.customerId}/mvp/companies/${row.id}">Open</a>
                    <a class="btn btn-sm btn-outline-secondary" href="/admin/customers/${this.customerId}/mvp/companies/${row.id}/edit">Edit company</a>
                </td>
            </tr>
        `).join('');
    }

    esc(value) {
        return String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }
}

document.addEventListener('DOMContentLoaded', () => new CustomerMvpHub({{ (int) $customerId }}));
</script>
@endsection
