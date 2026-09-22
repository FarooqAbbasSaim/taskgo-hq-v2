@extends('layouts.vertical', ['title' => 'MyVaccinePortal organisation'])

@section('content')
<div class="container-fluid">
    @include('partials.support-breadcrumbs', ['breadcrumbs' => [
        ['label' => 'Customers', 'url' => '/admin/customers'],
        ['label' => 'Customer', 'url' => '/admin/customers/' . $customerId],
        ['label' => 'MyVaccinePortal', 'url' => '/admin/customers/' . $customerId . '/mvp'],
        ['label' => ucfirst($orgKind)],
    ]])

    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div>
            <h4 class="mb-1" id="pageTitle">Loading…</h4>
            <p class="text-muted mb-0" id="pageSubtitle">Participants for this {{ $orgKind }}.</p>
        </div>
        <div class="d-flex gap-2">
            <a href="/admin/customers/{{ $customerId }}/mvp" class="btn btn-light"><i class="ti ti-arrow-left me-1"></i> Back</a>
            <a href="#" class="btn btn-outline-primary" id="editOrgLink">Edit {{ $orgKind }} details</a>
        </div>
    </div>

    <div id="orgLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
    </div>
    <div id="orgError" class="alert alert-danger d-none"></div>

    <div id="orgContent" class="d-none">
        <div class="card mb-4">
            <div class="card-body" id="orgSummary"></div>
        </div>

        <div class="card">
            <div class="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <h5 class="card-title mb-0">Participants</h5>
                <input type="search" class="form-control form-control-sm" id="participantSearch" placeholder="Search participants…" style="min-width: 220px;">
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-sm align-middle">
                        <thead><tr><th>Name</th><th>DOB</th><th>Status</th><th></th></tr></thead>
                        <tbody id="participantsTable"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
class CustomerMvpOrgView {
    constructor(customerId, orgKind, orgId) {
        this.customerId = customerId;
        this.orgKind = orgKind;
        this.orgId = orgId;
        this.participants = [];
        this.init();
    }

    async init() {
        document.getElementById('participantSearch').addEventListener('input', () => this.renderParticipants());
        document.getElementById('editOrgLink').href = `/admin/customers/${this.customerId}/mvp/${this.orgKind === 'school' ? 'schools' : 'companies'}/${this.orgId}/edit`;

        try {
            const path = this.orgKind === 'school'
                ? `/api/customers/${this.customerId}/mvp/schools/${this.orgId}`
                : `/api/customers/${this.customerId}/mvp/companies/${this.orgId}`;
            const result = await this.fetchJson(path);
            const data = result.data || {};
            this.participants = result.participants || [];

            const title = this.orgKind === 'school' ? (data.school_name || 'School') : (data.company_name || 'Company');
            document.getElementById('pageTitle').textContent = title;
            document.getElementById('orgSummary').innerHTML = this.orgKind === 'school'
                ? `<div class="row g-2">
                    <div class="col-md-3"><div class="text-muted small">Roll number</div><div>${this.esc(data.roll_number || '—')}</div></div>
                    <div class="col-md-3"><div class="text-muted small">Contact</div><div>${this.esc(data.contact_name || '—')}</div></div>
                    <div class="col-md-3"><div class="text-muted small">Email</div><div>${this.esc(data.email || '—')}</div></div>
                    <div class="col-md-3"><div class="text-muted small">Pharmacy</div><div>${this.esc(data.pharmacy_name || '—')}</div></div>
                   </div>`
                : `<div class="row g-2">
                    <div class="col-md-3"><div class="text-muted small">CRO</div><div>${this.esc(data.cro_number || '—')}</div></div>
                    <div class="col-md-3"><div class="text-muted small">Contact</div><div>${this.esc(data.contact_name || '—')}</div></div>
                    <div class="col-md-3"><div class="text-muted small">Email</div><div>${this.esc(data.email || '—')}</div></div>
                    <div class="col-md-3"><div class="text-muted small">Pharmacy</div><div>${this.esc(data.pharmacy_name || '—')}</div></div>
                   </div>`;

            this.renderParticipants();
            document.getElementById('orgLoading').classList.add('d-none');
            document.getElementById('orgContent').classList.remove('d-none');
        } catch (error) {
            document.getElementById('orgLoading').classList.add('d-none');
            const err = document.getElementById('orgError');
            err.textContent = error.message || 'Failed to load organisation.';
            err.classList.remove('d-none');
        }
    }

    renderParticipants() {
        const q = document.getElementById('participantSearch').value.trim().toLowerCase();
        const rows = this.participants.filter((row) => {
            if (!q) return true;
            return `${row.participant_name || ''} ${row.dob || ''} ${row.suitability || ''}`.toLowerCase().includes(q);
        });
        const tbody = document.getElementById('participantsTable');
        if (!rows.length) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-muted">No participants found for this organisation.</td></tr>';
            return;
        }
        tbody.innerHTML = rows.map((row) => `
            <tr>
                <td>${this.esc(row.participant_name || '—')}</td>
                <td>${this.esc(row.dob || '—')}</td>
                <td><span class="badge bg-light text-dark">${this.esc(row.suitability || row.status || '—')}</span></td>
                <td class="text-end">
                    <a class="btn btn-sm btn-outline-primary" href="/admin/customers/${this.customerId}/mvp/participants/${row.type}/${row.id}/edit">Edit participant</a>
                </td>
            </tr>
        `).join('');
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

    esc(value) {
        return String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CustomerMvpOrgView({{ (int) $customerId }}, @json($orgKind), {{ (int) $orgId }});
});
</script>
@endsection
