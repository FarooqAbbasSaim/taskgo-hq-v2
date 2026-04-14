@extends('layouts.vertical', ['title' => 'Edit Rx User'])

@section('content')
<div class="container-fluid">
    <div class="row mt-4">
        <div class="col-12">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                <div>
                    <h4 class="mb-1">Edit Patient Details</h4>
                    <p class="text-muted mb-0">Update the patient profile and review all changes before saving.</p>
                </div>
                <a href="{{ route('admin.rx-user.view', $id) }}" class="btn btn-light"><i class="ti ti-arrow-left me-1"></i> Back to Patient View</a>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <div>
                        <h4 class="card-title mb-1">Patient Profile Form</h4>
                        <p class="text-muted mb-0">All profile details can be updated in one session.</p>
                    </div>
                    <button type="button" class="btn btn-primary" id="saveChangesButton">Save Changes</button>
                </div>
                <div class="card-body">
                    <form id="patientProfileForm" class="needs-validation" novalidate>
                        <div class="row">
                            <div class="col-md-6"><div class="mb-3"><label for="firstName" class="form-label">First Name</label><input type="text" class="form-control" id="firstName" required maxlength="50"><div class="invalid-feedback"></div></div></div>
                            <div class="col-md-6"><div class="mb-3"><label for="lastName" class="form-label">Last Name</label><input type="text" class="form-control" id="lastName" required maxlength="50"><div class="invalid-feedback"></div></div></div>
                            <div class="col-md-6"><div class="mb-3"><label for="gender" class="form-label">Gender</label><select class="form-select" id="gender" required><option value="">Select gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select><div class="invalid-feedback"></div></div></div>
                            <div class="col-md-6"><div class="mb-3"><label for="dob" class="form-label">Date of Birth</label><input type="date" class="form-control" id="dob" required><div class="invalid-feedback"></div></div></div>
                            <div class="col-md-6"><div class="mb-3"><label for="email" class="form-label">Email Address</label><input type="email" class="form-control" id="email" required maxlength="100"><div class="invalid-feedback"></div></div></div>
                            <div class="col-md-6"><div class="mb-3"><label for="mobileNumber" class="form-label">Phone Number</label><input type="text" class="form-control" id="mobileNumber" required maxlength="20"><div class="invalid-feedback"></div></div></div>
                            <div class="col-md-6"><div class="mb-3"><label for="ppsNumber" class="form-label">PPS Number</label><input type="text" class="form-control" id="ppsNumber" maxlength="255"><div class="invalid-feedback"></div></div></div>
                            <div class="col-md-6"><div class="mb-3"><label for="nominatedPharmacyId" class="form-label">Nominated Pharmacy</label><select class="form-select" id="nominatedPharmacyId"><option value="">Select a pharmacy</option></select><div class="form-text">Only active pharmacies are available to select.</div><div class="form-text text-warning d-none" id="archivedPharmacyNotice">The current nominated pharmacy is archived. Choose an active pharmacy only if you want to replace it.</div><div class="invalid-feedback"></div></div></div>
                            <div class="col-12"><div class="mb-4"><label for="homeAddress" class="form-label">Home Address</label><textarea class="form-control" id="homeAddress" rows="3" required></textarea><div class="invalid-feedback"></div></div></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-xl-3"><div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" id="notResidingInIreland"><label class="form-check-label" for="notResidingInIreland">Not residing in Ireland</label></div></div>
                            <div class="col-md-6 col-xl-3"><div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" id="consentToTransferPrescriptions"><label class="form-check-label" for="consentToTransferPrescriptions">Consent to transfer prescriptions</label></div></div>
                            <div class="col-md-6 col-xl-3"><div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" id="updatesOffers"><label class="form-check-label" for="updatesOffers">Marketing updates and offers</label></div></div>
                            <div class="col-md-6 col-xl-3"><div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" id="privacyPolicy"><label class="form-check-label" for="privacyPolicy">Privacy policy accepted</label></div></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="confirmChangesModal" tabindex="-1" aria-labelledby="confirmChangesModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="confirmChangesModalLabel">Confirm Profile Changes</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p class="text-muted mb-3">Please review the changes below before saving this patient profile.</p><div class="table-responsive"><table class="table table-sm align-middle mb-0"><thead class="table-light"><tr><th>Field</th><th>Current Value</th><th>Updated Value</th></tr></thead><tbody id="confirmationChangesBody"></tbody></table></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button type="button" class="btn btn-primary" id="confirmSaveButton">Confirm and Save</button></div></div></div>
</div>

<div class="toast-container position-fixed top-0 end-0 p-3">
    <div id="successToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header bg-success text-white"><i class="ti ti-check me-2"></i><strong class="me-auto">Success</strong><button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body" id="successToastBody"></div></div>
    <div id="infoToast" class="toast" role="alert" aria-live="polite" aria-atomic="true"><div class="toast-header bg-info text-white"><i class="ti ti-info-circle me-2"></i><strong class="me-auto">Info</strong><button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body" id="infoToastBody"></div></div>
    <div id="errorToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header bg-danger text-white"><i class="ti ti-alert-circle me-2"></i><strong class="me-auto">Error</strong><button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body" id="errorToastBody"></div></div>
</div>
@endsection

@section('scripts')
<script>
class RxUserEditManager {
    constructor(userId) {
        this.userId = userId;
        this.userData = null;
        this.initialFormData = null;
        this.pharmacies = [];
        this.pharmacyChoices = null;
        this.pendingPayload = null;
        this.confirmModal = new bootstrap.Modal(document.getElementById('confirmChangesModal'));
        this.form = document.getElementById('patientProfileForm');
        this.saveChangesButton = document.getElementById('saveChangesButton');
        this.confirmSaveButton = document.getElementById('confirmSaveButton');
        this.fieldLabels = {
            first_name: 'First Name',
            last_name: 'Last Name',
            gender: 'Gender',
            dob: 'Date of Birth',
            email: 'Email Address',
            mobile_number: 'Phone Number',
            pps_number: 'PPS Number',
            home_address: 'Home Address',
            nominated_pharmacy_id: 'Nominated Pharmacy',
            not_residing_in_ireland: 'Not residing in Ireland',
            consent_to_transfer_prescriptions: 'Consent to transfer prescriptions',
            updates_offers: 'Marketing updates and offers',
            privacy_policy: 'Privacy policy accepted'
        };
        this.init();
    }

    async init() {
        this.saveChangesButton.addEventListener('click', () => this.handleSaveRequest());
        this.confirmSaveButton.addEventListener('click', () => this.submitProfileUpdates());
        await Promise.all([this.loadPharmacies(), this.loadUserData()]);
    }

    async fetchJson(url, options = {}) {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Accept': 'application/json',
                ...(options.headers || {})
            },
            ...options
        });
        let result = {};
        try { result = await response.json(); } catch (error) {}
        if (!response.ok) {
            const requestError = new Error(result.message || `HTTP error! status: ${response.status}`);
            requestError.status = response.status;
            requestError.result = result;
            throw requestError;
        }
        return result;
    }

    async loadPharmacies() {
        const result = await this.fetchJson('/api/rx-users/pharmacies/active');
        this.pharmacies = result.success ? result.data : [];
        this.renderPharmacyOptions();
    }

    async loadUserData() {
        const result = await this.fetchJson(`/api/rx-users/${this.userId}`);
        this.userData = result.data;
        this.renderUserInfo();
        this.populateForm();
    }

    renderUserInfo() {
        return;
    }

    renderPharmacyOptions() {
        const select = document.getElementById('nominatedPharmacyId');
        const archivedNotice = document.getElementById('archivedPharmacyNotice');
        const currentValue = this.userData?.nominated_pharmacy_id ? String(this.userData.nominated_pharmacy_id) : '';
        const currentPharmacyIsActive = this.pharmacies.some((item) => String(item.id) === currentValue);
        select.innerHTML = ['<option value="">Select a pharmacy</option>'].concat(
            this.pharmacies.map((pharmacy) => `<option value="${pharmacy.id}" ${currentValue === String(pharmacy.id) ? 'selected' : ''}>${this.escapeHtml(pharmacy.pharmacy_name)}</option>`)
        ).join('');
        archivedNotice.classList.toggle('d-none', !currentValue || currentPharmacyIsActive);
        if (this.pharmacyChoices) this.pharmacyChoices.destroy();
        if (window.Choices) {
            this.pharmacyChoices = new window.Choices(select, { searchEnabled: true, shouldSort: false, itemSelectText: '', allowHTML: false, placeholder: true, placeholderValue: 'Search active pharmacies' });
        }
    }

    populateForm() {
        document.getElementById('firstName').value = this.userData.first_name || '';
        document.getElementById('lastName').value = this.userData.last_name || '';
        document.getElementById('gender').value = this.userData.gender || '';
        document.getElementById('dob').value = this.userData.dob_raw || '';
        document.getElementById('email').value = this.userData.email || '';
        document.getElementById('mobileNumber').value = this.userData.phone_raw || '';
        document.getElementById('ppsNumber').value = this.userData.pps_number || '';
        document.getElementById('homeAddress').value = this.userData.home_address || '';
        document.getElementById('notResidingInIreland').checked = Boolean(this.userData.not_residing_in_ireland);
        document.getElementById('consentToTransferPrescriptions').checked = Boolean(this.userData.consent_to_transfer_prescriptions);
        document.getElementById('updatesOffers').checked = Boolean(this.userData.updates_offers);
        document.getElementById('privacyPolicy').checked = Boolean(this.userData.privacy_policy);
        this.renderPharmacyOptions();
        this.initialFormData = this.getFormData();
    }

    getFormData() {
        const selectedPharmacyValue = document.getElementById('nominatedPharmacyId').value;
        const currentPharmacyIsActive = this.pharmacies.some((item) => String(item.id) === String(this.userData?.nominated_pharmacy_id));
        return {
            first_name: document.getElementById('firstName').value.trim(),
            last_name: document.getElementById('lastName').value.trim(),
            gender: document.getElementById('gender').value,
            dob: document.getElementById('dob').value || null,
            email: document.getElementById('email').value.trim(),
            mobile_number: document.getElementById('mobileNumber').value.trim(),
            pps_number: document.getElementById('ppsNumber').value.trim() || null,
            home_address: document.getElementById('homeAddress').value.trim(),
            nominated_pharmacy_id: selectedPharmacyValue || (!currentPharmacyIsActive && this.userData?.nominated_pharmacy_id ? String(this.userData.nominated_pharmacy_id) : null),
            not_residing_in_ireland: document.getElementById('notResidingInIreland').checked,
            consent_to_transfer_prescriptions: document.getElementById('consentToTransferPrescriptions').checked,
            updates_offers: document.getElementById('updatesOffers').checked,
            privacy_policy: document.getElementById('privacyPolicy').checked
        };
    }

    handleSaveRequest() {
        this.clearValidationErrors();
        if (!this.form.checkValidity()) {
            this.form.classList.add('was-validated');
            this.showErrorToast('Please correct the highlighted fields before saving.');
            return;
        }
        const payload = this.getFormData();
        const changes = Object.keys(payload).filter((key) => String(this.initialFormData[key] ?? '') !== String(payload[key] ?? '')).map((key) => ({
            label: this.fieldLabels[key] || key,
            oldValue: this.formatFieldValue(key, this.initialFormData[key]),
            newValue: this.formatFieldValue(key, payload[key])
        }));
        if (!changes.length) {
            this.showInfoToast('No changes detected to save.');
            return;
        }
        this.pendingPayload = payload;
        document.getElementById('confirmationChangesBody').innerHTML = changes.map((change) => `<tr><td class="fw-semibold">${this.escapeHtml(change.label)}</td><td>${this.escapeHtml(change.oldValue)}</td><td>${this.escapeHtml(change.newValue)}</td></tr>`).join('');
        this.confirmModal.show();
    }

    async submitProfileUpdates() {
        if (!this.pendingPayload) return;
        this.confirmSaveButton.disabled = true;
        this.confirmSaveButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Saving...';
        try {
            const result = await this.fetchJson(`/api/rx-users/${this.userId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ...this.pendingPayload,
                    not_residing_in_ireland: this.pendingPayload.not_residing_in_ireland ? 1 : 0,
                    consent_to_transfer_prescriptions: this.pendingPayload.consent_to_transfer_prescriptions ? 1 : 0,
                    updates_offers: this.pendingPayload.updates_offers ? 1 : 0,
                    privacy_policy: this.pendingPayload.privacy_policy ? 1 : 0
                })
            });
            this.userData = result.data;
            this.renderUserInfo();
            this.populateForm();
            this.pendingPayload = null;
            this.confirmModal.hide();
            this.showSuccessToast(result.message || 'Patient profile updated successfully.');
        } catch (error) {
            if (error.status === 422 && error.result?.errors) {
                this.applyValidationErrors(error.result.errors);
                this.confirmModal.hide();
                this.showErrorToast('Some fields need attention before the profile can be saved.');
            } else {
                this.showErrorToast(error.message || 'Failed to update patient profile');
            }
        } finally {
            this.confirmSaveButton.disabled = false;
            this.confirmSaveButton.innerHTML = 'Confirm and Save';
        }
    }

    formatFieldValue(field, value) {
        if (value === null || value === '') return 'Not Set';
        if (['not_residing_in_ireland', 'consent_to_transfer_prescriptions', 'updates_offers', 'privacy_policy'].includes(field)) return value ? 'Yes' : 'No';
        if (field === 'nominated_pharmacy_id') {
            const pharmacy = this.pharmacies.find((item) => String(item.id) === String(value));
            return pharmacy ? pharmacy.pharmacy_name : 'Not Set';
        }
        if (field === 'dob') {
            const date = new Date(`${value}T00:00:00`);
            return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        }
        return value;
    }

    applyValidationErrors(errors) {
        this.form.classList.add('was-validated');
        const map = { first_name: 'firstName', last_name: 'lastName', gender: 'gender', dob: 'dob', email: 'email', mobile_number: 'mobileNumber', pps_number: 'ppsNumber', home_address: 'homeAddress', nominated_pharmacy_id: 'nominatedPharmacyId' };
        Object.entries(errors).forEach(([field, messages]) => {
            const element = document.getElementById(map[field] || '');
            if (!element) return;
            element.classList.add('is-invalid');
            const feedback = element.parentElement.querySelector('.invalid-feedback');
            if (feedback) feedback.textContent = messages[0];
        });
    }

    clearValidationErrors() {
        this.form.querySelectorAll('.is-invalid').forEach((element) => element.classList.remove('is-invalid'));
        this.form.querySelectorAll('.invalid-feedback').forEach((feedback) => feedback.textContent = '');
    }

    showSuccessToast(message) { document.getElementById('successToastBody').textContent = message; new bootstrap.Toast(document.getElementById('successToast')).show(); }
    showInfoToast(message) { document.getElementById('infoToastBody').textContent = message; new bootstrap.Toast(document.getElementById('infoToast')).show(); }
    showErrorToast(message) { document.getElementById('errorToastBody').textContent = message; new bootstrap.Toast(document.getElementById('errorToast')).show(); }
    escapeHtml(value) { return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;'); }
}

document.addEventListener('DOMContentLoaded', function() {
    window.rxUserEditManager = new RxUserEditManager({{ $id }});
});
</script>
@endsection
