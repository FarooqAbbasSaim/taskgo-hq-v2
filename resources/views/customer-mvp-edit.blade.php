@extends('layouts.vertical', ['title' => 'Edit MyVaccinePortal record'])

@section('content')
<div class="container-fluid">
    @include('partials.support-breadcrumbs', ['breadcrumbs' => [
        ['label' => 'Customers', 'url' => '/admin/customers'],
        ['label' => 'Customer', 'url' => '/admin/customers/' . $customerId],
        ['label' => 'MyVaccinePortal', 'url' => '/admin/customers/' . $customerId . '/mvp'],
        ['label' => 'Edit'],
    ]])

    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div>
            <h4 class="mb-1" id="pageTitle">Edit details</h4>
            <p class="text-muted mb-0">Review before/after values in the confirmation popup, then save. Changes are audited.</p>
        </div>
        <a href="/admin/customers/{{ $customerId }}/mvp" class="btn btn-light"><i class="ti ti-arrow-left me-1"></i> Back</a>
    </div>

    <div id="editLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
    </div>
    <div id="editError" class="alert alert-danger d-none"></div>

    <div id="editContent" class="d-none">
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title mb-0">Details</h5>
                        <button type="button" class="btn btn-primary" id="saveChangesButton">Save Changes</button>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-light border mb-3" id="contextBanner"></div>
                        <form id="mvpEditForm" class="needs-validation" novalidate>
                            <div class="row g-3" id="formFields"></div>
                            <div class="mt-3">
                                <label for="editReason" class="form-label">Edit reason <span class="text-danger">*</span></label>
                                <textarea class="form-control" id="editReason" rows="2" required maxlength="1000" placeholder="Why is this being changed?"></textarea>
                                <div class="invalid-feedback">Please provide a reason for this edit.</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header"><h5 class="card-title mb-0">Edit history</h5></div>
                    <div class="card-body" id="historyPanel">
                        <p class="text-muted mb-0">No history yet.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="confirmChangesModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Confirm changes</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="text-muted mb-3">Please review the changed values before saving.</p>
                <div class="table-responsive">
                    <table class="table table-sm align-middle mb-0">
                        <thead class="table-light"><tr><th>Field</th><th>Current Value</th><th>Updated Value</th></tr></thead>
                        <tbody id="confirmationChangesBody"></tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" id="confirmSaveButton">Confirm and Save</button>
            </div>
        </div>
    </div>
</div>

<div class="toast-container position-fixed top-0 end-0 p-3">
    <div id="successToast" class="toast" role="alert"><div class="toast-header bg-success text-white"><strong class="me-auto">Success</strong><button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button></div><div class="toast-body" id="successToastBody"></div></div>
    <div id="infoToast" class="toast" role="alert"><div class="toast-header bg-info text-white"><strong class="me-auto">Info</strong><button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button></div><div class="toast-body" id="infoToastBody"></div></div>
    <div id="errorToast" class="toast" role="alert"><div class="toast-header bg-danger text-white"><strong class="me-auto">Error</strong><button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button></div><div class="toast-body" id="errorToastBody"></div></div>
</div>
@endsection

@section('scripts')
<script>
class CustomerMvpEditor {
    constructor(customerId, entityKind, entityType, entityId) {
        this.customerId = customerId;
        this.entityKind = entityKind; // school | company | participant
        this.entityType = entityType; // school_parent | corporate_employee | null
        this.entityId = entityId;
        this.initial = {};
        this.pendingPayload = null;
        this.fieldDefs = [];
        this.confirmModal = new bootstrap.Modal(document.getElementById('confirmChangesModal'));
        this.init();
    }

    async init() {
        document.getElementById('saveChangesButton').addEventListener('click', () => this.handleSaveRequest());
        document.getElementById('confirmSaveButton').addEventListener('click', () => this.submitUpdates());
        try {
            await this.load();
            document.getElementById('editLoading').classList.add('d-none');
            document.getElementById('editContent').classList.remove('d-none');
        } catch (error) {
            document.getElementById('editLoading').classList.add('d-none');
            const err = document.getElementById('editError');
            err.textContent = error.message || 'Failed to load record.';
            err.classList.remove('d-none');
        }
    }

    apiPath() {
        if (this.entityKind === 'school') return `/api/customers/${this.customerId}/mvp/schools/${this.entityId}`;
        if (this.entityKind === 'company') return `/api/customers/${this.customerId}/mvp/companies/${this.entityId}`;
        return `/api/customers/${this.customerId}/mvp/participants/${this.entityType}/${this.entityId}`;
    }

    async fetchJson(url, options = {}) {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                ...(options.headers || {})
            },
            ...options
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
            const error = new Error(result.message || `Request failed (${response.status})`);
            error.status = response.status;
            error.result = result;
            throw error;
        }
        return result;
    }

    async load() {
        const result = await this.fetchJson(this.apiPath());
        const data = result.data || {};
        this.configureFields(data);
        this.renderFields(data);
        this.renderHistory(result.history || []);
        this.initial = this.getFormData();
        delete this.initial.edit_reason;
    }

    configureFields(data) {
        if (this.entityKind === 'school') {
            document.getElementById('pageTitle').textContent = 'Edit school details';
            document.getElementById('contextBanner').innerHTML = `<strong>${this.esc(data.school_name || '')}</strong> · Pharmacy: ${this.esc(data.pharmacy_name || '—')} · Status: ${this.esc(data.status || '—')}`;
            this.fieldDefs = [
                { key: 'school_name', label: 'School name', type: 'text', required: true },
                { key: 'roll_number', label: 'Roll number', type: 'text' },
                { key: 'contact_name', label: 'Contact name', type: 'text', required: true },
                { key: 'email', label: 'Email', type: 'email', required: true },
                { key: 'phone', label: 'Phone', type: 'text', required: true },
                { key: 'premises_eircode', label: 'Eircode', type: 'text', required: true }
            ];
            return;
        }
        if (this.entityKind === 'company') {
            document.getElementById('pageTitle').textContent = 'Edit company details';
            document.getElementById('contextBanner').innerHTML = `<strong>${this.esc(data.company_name || '')}</strong> · Pharmacy: ${this.esc(data.pharmacy_name || '—')} · Status: ${this.esc(data.status || '—')}`;
            this.fieldDefs = [
                { key: 'company_name', label: 'Company name', type: 'text', required: true },
                { key: 'cro_number', label: 'CRO number', type: 'text' },
                { key: 'contact_name', label: 'Contact name', type: 'text', required: true },
                { key: 'email', label: 'Email', type: 'email', required: true },
                { key: 'phone', label: 'Phone', type: 'text', required: true },
                { key: 'premises_eircode', label: 'Eircode', type: 'text', required: true }
            ];
            return;
        }
        if (this.entityType === 'school_parent') {
            document.getElementById('pageTitle').textContent = 'Edit school participant';
            document.getElementById('contextBanner').innerHTML = `<strong>${this.esc((data.child_first_name || '') + ' ' + (data.child_last_name || ''))}</strong> · ${this.esc(data.org_name || '—')} · Pharmacy: ${this.esc(data.pharmacy_name || '—')}`;
            this.fieldDefs = [
                { key: 'child_first_name', label: 'Child first name', type: 'text', required: true },
                { key: 'child_last_name', label: 'Child last name', type: 'text', required: true },
                { key: 'child_dob', label: 'Child date of birth', type: 'date', required: true },
                { key: 'parent_full_name', label: 'Parent full name', type: 'text' },
                { key: 'parent_email', label: 'Parent email', type: 'email' },
                { key: 'parent_contact_number', label: 'Parent contact number', type: 'text' }
            ];
            return;
        }
        document.getElementById('pageTitle').textContent = 'Edit corporate participant';
        document.getElementById('contextBanner').innerHTML = `<strong>${this.esc((data.employee_first_name || '') + ' ' + (data.employee_last_name || ''))}</strong> · ${this.esc(data.org_name || '—')} · Pharmacy: ${this.esc(data.pharmacy_name || '—')}`;
        this.fieldDefs = [
            { key: 'employee_first_name', label: 'First name', type: 'text', required: true },
            { key: 'employee_last_name', label: 'Last name', type: 'text', required: true },
            { key: 'employee_dob', label: 'Date of birth', type: 'date' },
            { key: 'email', label: 'Email', type: 'email' },
            { key: 'phone', label: 'Phone', type: 'text' }
        ];
    }

    renderFields(data) {
        document.getElementById('formFields').innerHTML = this.fieldDefs.map((field) => `
            <div class="col-md-6">
                <label class="form-label" for="field_${field.key}">${this.esc(field.label)}${field.required ? ' <span class="text-danger">*</span>' : ''}</label>
                <input class="form-control" id="field_${field.key}" type="${field.type}" value="${this.esc(data[field.key] ?? '')}" ${field.required ? 'required' : ''}>
                <div class="invalid-feedback"></div>
            </div>
        `).join('');
    }

    getFormData() {
        const payload = { edit_reason: document.getElementById('editReason').value.trim() };
        this.fieldDefs.forEach((field) => {
            payload[field.key] = document.getElementById(`field_${field.key}`).value.trim();
        });
        return payload;
    }

    handleSaveRequest() {
        const form = document.getElementById('mvpEditForm');
        form.classList.add('was-validated');
        if (!form.checkValidity()) {
            this.showToast('error', 'Please correct the highlighted fields before saving.');
            return;
        }
        const payload = this.getFormData();
        if (!payload.edit_reason) {
            this.showToast('error', 'Please provide an edit reason.');
            return;
        }
        const changes = this.fieldDefs
            .filter((field) => String(this.initial[field.key] ?? '') !== String(payload[field.key] ?? ''))
            .map((field) => ({
                label: field.label,
                oldValue: this.initial[field.key] || 'Not Set',
                newValue: payload[field.key] || 'Not Set'
            }));
        if (!changes.length) {
            this.showToast('info', 'No changes detected to save.');
            return;
        }
        this.pendingPayload = payload;
        document.getElementById('confirmationChangesBody').innerHTML = changes.map((change) => `
            <tr>
                <td class="fw-semibold">${this.esc(change.label)}</td>
                <td>${this.esc(change.oldValue)}</td>
                <td>${this.esc(change.newValue)}</td>
            </tr>
        `).join('');
        this.confirmModal.show();
    }

    async submitUpdates() {
        if (!this.pendingPayload) return;
        const button = document.getElementById('confirmSaveButton');
        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Saving...';
        try {
            const result = await this.fetchJson(this.apiPath(), {
                method: 'PUT',
                body: JSON.stringify(this.pendingPayload)
            });
            this.confirmModal.hide();
            this.showToast('success', result.message || 'Updated successfully.');
            document.getElementById('editReason').value = '';
            await this.load();
        } catch (error) {
            this.confirmModal.hide();
            this.showToast('error', error.message || 'Failed to save changes.');
        } finally {
            button.disabled = false;
            button.innerHTML = 'Confirm and Save';
            this.pendingPayload = null;
        }
    }

    renderHistory(history) {
        const panel = document.getElementById('historyPanel');
        if (!history.length) {
            panel.innerHTML = '<p class="text-muted mb-0">No history yet.</p>';
            return;
        }
        panel.innerHTML = history.map((entry) => {
            const changes = (entry.changes || []).map((c) => `
                <div class="small"><span class="fw-semibold">${this.esc(c.field)}</span>: ${this.esc(c.before ?? '—')} → ${this.esc(c.after ?? '—')}</div>
            `).join('');
            const actor = entry.hq_actor
                ? `<div class="small text-muted mb-1">HQ: ${this.esc(entry.hq_actor)}</div>`
                : '';
            return `
                <div class="border rounded p-2 mb-2">
                    <div class="small text-muted">${this.esc(entry.created_at || '')}</div>
                    ${actor}
                    <div class="mb-1">${this.esc(entry.edit_reason || '')}</div>
                    ${changes || '<div class="small text-muted">No field diff stored.</div>'}
                </div>
            `;
        }).join('');
    }

    showToast(type, message) {
        const map = { success: 'successToast', info: 'infoToast', error: 'errorToast' };
        const bodyMap = { success: 'successToastBody', info: 'infoToastBody', error: 'errorToastBody' };
        document.getElementById(bodyMap[type]).textContent = message;
        bootstrap.Toast.getOrCreateInstance(document.getElementById(map[type])).show();
    }

    esc(value) {
        return String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CustomerMvpEditor(
        {{ (int) $customerId }},
        @json($entityKind),
        @json($entityType ?? null),
        {{ (int) $entityId }}
    );
});
</script>
@endsection
