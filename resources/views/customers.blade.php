@extends('layouts.vertical', ['title' => 'Customers'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header justify-content-between align-items-center border-dashed">
                    <h4 class="card-title mb-0">Customers Management</h4>
                    <div class="d-flex gap-2">
                        <button class="btn btn-sm btn-light" id="refreshCustomers">
                            <i class="ti ti-refresh me-1"></i> Refresh
                        </button>
                        <button class="btn btn-sm btn-primary" id="exportCustomers">
                            <i class="ti ti-file-export me-1"></i> Export
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <!-- Filter and Search -->
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="input-group">
                                <span class="input-group-text"><i class="ti ti-search"></i></span>
                                <input type="text" class="form-control" id="searchCustomers" placeholder="Search customers...">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select" id="statusFilter">
                                <option value="">All Status</option>
                                <option value="active">Active</option>
                                <option value="deactive">Inactive</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <div class="btn-group w-100" role="group">
                                <input type="radio" class="btn-check" name="viewType" id="activeView" value="active" checked>
                                <label class="btn btn-outline-primary" for="activeView">Active</label>
                                
                                <input type="radio" class="btn-check" name="viewType" id="archivedView" value="archived">
                                <label class="btn btn-outline-primary" for="archivedView">Archived</label>
                            </div>
                        </div>
                    </div>

                    <!-- Loading Spinner -->
                    <div id="loadingSpinner" class="text-center py-4" style="display: none;">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p class="mt-2 text-muted">Loading customers...</p>
                    </div>

                    <!-- Customers Table -->
                    <div class="table-responsive" id="customersTableContainer">
                        <table class="table table-centered table-custom table-sm table-nowrap table-hover mb-0" id="customersTable">
                            <thead class="bg-light-subtle">
                                <tr>
                                    <th>Reg #</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Pharmacy</th>
                                    <th>Credits</th>
                                    <th>OpenAI Cost</th>
                                    <th>SMS Cost</th>
                                    <th>Subscription</th>
                                    <th>Status</th>
                                    <th>Last Login</th>
                                    <th>Start Date</th>
                                    <th>Expiry Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="customersTableBody">
                                <!-- Data will be loaded here via JavaScript -->
                            </tbody>
                        </table>
                    </div>

                    <!-- No Data Message -->
                    <div id="noDataMessage" class="text-center py-5" style="display: none;">
                        <i class="ti ti-users fs-48 text-muted mb-3"></i>
                        <h5 class="text-muted">No customers found</h5>
                        <p class="text-muted">Try adjusting your search or filter criteria.</p>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <div class="align-items-center justify-content-between row text-center text-sm-start">
                        <div class="col-sm">
                            <div class="text-muted">Showing <span class="fw-semibold" id="showingCount">0</span> customers</div>
                        </div>
                        <div class="col-sm-auto mt-3 mt-sm-0">
                            <div class="pagination-container">
                                <!-- Pagination will be added here if needed -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Freeze/Unfreeze Center Modal -->
    <div class="modal fade" id="freezeModal" tabindex="-1" aria-labelledby="freezeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="freezeModalLabel">Confirm Action</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <div class="mb-3">
                            <i class="ti ti-alert-triangle text-warning" style="font-size: 3rem;"></i>
                        </div>
                        <h5 class="mb-3" id="freezeModalTitle">Are you sure?</h5>
                        <p class="text-muted mb-0" id="freezeModalMessage">This action will change the customer status.</p>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirmFreezeAction">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Archive/Unarchive Center Modal -->
    <div class="modal fade" id="archiveModal" tabindex="-1" aria-labelledby="archiveModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="archiveModalLabel">Confirm Action</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <div class="mb-3">
                            <i class="ti ti-alert-triangle text-warning" style="font-size: 3rem;"></i>
                        </div>
                        <h5 class="mb-3" id="archiveModalTitle">Are you sure?</h5>
                        <p class="text-muted mb-0" id="archiveModalMessage">This action will change the customer status.</p>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirmArchiveAction">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Toast Container -->
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 9999;">
        <div id="successToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-success text-white">
                <i class="ti ti-check-circle me-2"></i>
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
class CustomersManager {
    constructor() {
        this.customers = [];
        this.filteredCustomers = [];
        this.currentView = 'active';
        this.currentCustomerId = null;
        this.pendingAction = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadCustomers();
    }

    bindEvents() {
        // View type toggle
        document.querySelectorAll('input[name="viewType"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.currentView = e.target.value;
                this.loadCustomers();
            });
        });

        // Search functionality
        document.getElementById('searchCustomers').addEventListener('input', (e) => {
            this.filterCustomers();
        });

        // Status filter
        document.getElementById('statusFilter').addEventListener('change', (e) => {
            this.filterCustomers();
        });

        // Refresh button
        document.getElementById('refreshCustomers').addEventListener('click', () => {
            this.loadCustomers();
        });

        // Export button
        document.getElementById('exportCustomers').addEventListener('click', () => {
            this.exportCustomers();
        });

        // Modal confirm buttons
        document.getElementById('confirmFreezeAction').addEventListener('click', () => {
            if (this.pendingAction) {
                this.changeCustomerStatus(this.pendingAction.customerId, this.pendingAction.newStatus);
                bootstrap.Modal.getInstance(document.getElementById('freezeModal')).hide();
                this.pendingAction = null;
            }
        });

        document.getElementById('confirmArchiveAction').addEventListener('click', () => {
            if (this.pendingAction) {
                this.changeCustomerStatus(this.pendingAction.customerId, this.pendingAction.newStatus);
                bootstrap.Modal.getInstance(document.getElementById('archiveModal')).hide();
                this.pendingAction = null;
            }
        });

    }

    async loadCustomers() {
        this.showLoading(true);
        
        try {
            const endpoint = this.currentView === 'archived' ? '/api/customers/archived' : '/api/customers';
            const response = await fetch(endpoint);
            const data = await response.json();
            
            if (data.success) {
                this.customers = data.data;
                this.filterCustomers();
            } else {
                this.showError('Failed to load customers: ' + data.message);
            }
        } catch (error) {
            console.error('Error loading customers:', error);
            this.showError('Failed to load customers. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    filterCustomers() {
        const searchTerm = document.getElementById('searchCustomers').value.toLowerCase();
        const statusFilter = document.getElementById('statusFilter').value;
        
        this.filteredCustomers = this.customers.filter(customer => {
            const matchesSearch = !searchTerm || 
                customer.name.toLowerCase().includes(searchTerm) ||
                customer.email.toLowerCase().includes(searchTerm) ||
                customer.phone?.toLowerCase().includes(searchTerm) ||
                customer.pharmacy_name?.toLowerCase().includes(searchTerm);
            
            const matchesStatus = !statusFilter || customer.status === statusFilter;
            
            return matchesSearch && matchesStatus;
        });
        
        this.renderCustomers();
    }

    renderCustomers() {
        const tbody = document.getElementById('customersTableBody');
        const noDataMessage = document.getElementById('noDataMessage');
        const showingCount = document.getElementById('showingCount');
        
        if (this.filteredCustomers.length === 0) {
            tbody.innerHTML = '';
            noDataMessage.style.display = 'block';
            showingCount.textContent = '0';
            return;
        }
        
        noDataMessage.style.display = 'none';
        showingCount.textContent = this.filteredCustomers.length;
        
        tbody.innerHTML = this.filteredCustomers.map(customer => `
            <tr>
                <td>${customer.registration_number || customer.id}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="avatar-sm bg-primary-subtle rounded-circle me-2 d-flex align-items-center justify-content-center">
                            <span class="text-primary fw-semibold">${customer.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <div>
                            <h6 class="mb-0">${customer.name}</h6>
                            <small class="text-muted">Reg #: ${customer.registration_number || customer.id}</small>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="text-body">${customer.email}</span>
                    ${customer.email_verified ? '<i class="ti ti-check-circle text-success ms-1" title="Email Verified"></i>' : '<i class="ti ti-alert-circle text-warning ms-1" title="Email Not Verified"></i>'}
                </td>
                <td>${customer.phone || 'N/A'}</td>
                <td>${customer.pharmacy_name || 'N/A'}</td>
                <td><span class="badge bg-info-subtle text-info">${customer.credits}</span></td>
                <td><span class="text-success">$${customer.openai_cost}</span></td>
                <td><span class="text-warning">$${customer.sms_cost}</span></td>
                <td>
                    <span class="badge ${customer.subscription_status === 'active' ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}">
                        ${customer.subscription_status === 'active' ? 'Active' : (customer.subscription_status || 'N/A')}
                    </span>
                </td>
                <td>
                    <span class="badge ${customer.status === 'active' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}">
                        ${customer.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                </td>
                <td>
                    ${customer.last_login ? new Date(customer.last_login).toLocaleString() : 'Never'}
                </td>
                <td>${customer.start_date ? new Date(customer.start_date).toLocaleDateString() : 'N/A'}</td>
                <td>${customer.expiry_date ? new Date(customer.expiry_date).toLocaleDateString() : 'N/A'}</td>
                <td>
                    <div class="d-flex flex-wrap gap-1">
                        ${this.getActionButtons(customer)}
                    </div>
                    
                    <div class="mt-2">
                        <div class="form-check form-switch">
                            <input class="form-check-input status-toggle" type="checkbox" id="statusToggle${customer.id}" 
                                data-customer-id="${customer.id}" ${customer.subscription_status === 'active' ? 'checked' : ''}
                                onchange="customersManager.handleSubscriptionToggle(${customer.id}, this.checked)">
                            <label class="form-check-label" for="statusToggle${customer.id}"></label>
                        </div>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Get action buttons based on current view and customer status
    getActionButtons(customer) {
        // If viewing archived customers, only show unarchive button
        if (this.currentView === 'archived') {
            return `
                <button class="btn btn-sm btn-success text-white archive-btn" onclick="customersManager.handleArchiveAction(${customer.id}, '${customer.status}')" title="Unarchive">
                    <i class="fas fa-undo"></i> Unarchive
                </button>
            `;
        }
        
        // For active customers, show all buttons based on status
        let buttons = '';
        
        // Freeze/Unfreeze button
        if (customer.status === 'freeze') {
            buttons += `
                <button class="btn btn-sm btn-success text-white freeze-btn" onclick="customersManager.handleFreezeAction(${customer.id}, '${customer.status}')" title="Unfreeze">
                    <i class="fas fa-lock-open"></i> Unfreeze
                </button>
            `;
        } else {
            buttons += `
                <button class="btn btn-sm btn-info text-white freeze-btn" onclick="customersManager.handleFreezeAction(${customer.id}, '${customer.status}')" title="Freeze">
                    <i class="fas fa-lock"></i> Freeze
                </button>
            `;
        }
        
        // Archive button (only for non-archived customers)
        if (customer.status !== 'deactive') {
            buttons += `
                <button class="btn btn-sm btn-danger text-white archive-btn" onclick="customersManager.handleArchiveAction(${customer.id}, '${customer.status}')" title="Archive">
                    <i class="fas fa-ban"></i> Archive
                </button>
            `;
        }
        
        // Credit buttons (only for active customers)
        if (customer.status === 'active') {
            buttons += `
                <button class="btn btn-sm btn-success text-white credit-btn" onclick="customersManager.handleAddCredits(${customer.id})" title="Add Credits">
                    <i class="fas fa-dollar-sign"></i> Add Credits
                </button>
                
                <button class="btn btn-sm btn-warning text-white update-credit-btn" onclick="customersManager.handleUpdateCredits(${customer.id}, ${customer.credits}, ${customer.sms_cost}, ${customer.openai_cost})" title="Update Credits">
                    <i class="fas fa-dollar-sign"></i> Update Credits
                </button>
            `;
        }
        
        return buttons;
    }

    // Handle freeze/unfreeze button click
    handleFreezeAction(customerId, currentStatus) {
        const action = currentStatus === 'freeze' ? 'unfreeze' : 'freeze';
        const newStatus = currentStatus === 'freeze' ? 'active' : 'freeze';
        
        // Store the action data for the modal
        this.pendingAction = {
            customerId: customerId,
            newStatus: newStatus,
            action: action
        };
        
        // Update modal content
        document.getElementById('freezeModalTitle').textContent = `Are you sure you want to ${action} this customer?`;
        document.getElementById('freezeModalMessage').textContent = `This will ${action} the customer and change their status.`;
        
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('freezeModal'));
        modal.show();
    }

    // Handle archive/unarchive button click
    handleArchiveAction(customerId, currentStatus) {
        const action = currentStatus === 'deactive' ? 'unarchive' : 'archive';
        const newStatus = currentStatus === 'deactive' ? 'active' : 'deactive';
        
        // Store the action data for the modal
        this.pendingAction = {
            customerId: customerId,
            newStatus: newStatus,
            action: action
        };
        
        // Update modal content
        document.getElementById('archiveModalTitle').textContent = `Are you sure you want to ${action} this customer?`;
        document.getElementById('archiveModalMessage').textContent = `This will ${action} the customer and change their status.`;
        
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('archiveModal'));
        modal.show();
    }

    // Handle add credits button click
    handleAddCredits(customerId) {
        Swal.fire({
            title: 'Credits',
            html: `
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="total_credit" class="form-label text-left d-block">Add Credits</label>
                            <input id="total_credit" type="number" class="form-control" placeholder="Enter total credits">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="openai_cost" class="form-label text-left d-block">OpenAI Cost Per Request</label>
                            <input id="openai_cost" type="number" class="form-control" placeholder="Enter OpenAI cost">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="sms_cost" class="form-label text-left d-block">SMS Cost Per Request</label>
                            <input id="sms_cost" type="number" class="form-control" placeholder="Enter SMS cost">
                        </div>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Submit',
            preConfirm: () => {
                const totalCredit = document.getElementById('total_credit').value;
                const openaiCost = document.getElementById('openai_cost').value;
                const smsCost = document.getElementById('sms_cost').value;

                if (!totalCredit || !openaiCost || !smsCost) {
                    Swal.showValidationMessage('All fields are required');
                    return false;
                }

                return {
                    totalCredit,
                    openaiCost,
                    smsCost
                };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.addCreditsToCustomer(customerId, result.value);
            }
        });
    }

    // Handle update credits button click
    handleUpdateCredits(customerId, currentCredits, smsCost, openaiCost) {
        Swal.fire({
            title: 'Update Credit',
            html: `
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="total_credit" class="form-label text-left d-block">Credit</label>
                            <input id="total_credit" type="number" class="form-control" placeholder="Enter total credit" value="${currentCredits}">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="openai_cost" class="form-label text-left d-block">OpenAI Cost Per Request</label>
                            <input id="openai_cost" type="number" class="form-control" placeholder="Enter OpenAI API cost" value="${openaiCost}">
                        </div>
                        <div class="col-12 mb-3">
                            <label for="sms_cost" class="form-label text-left d-block">SMS Cost Per Request</label>
                            <input id="sms_cost" type="number" class="form-control" placeholder="Enter SMS API cost" value="${smsCost}">
                        </div>
                    </div>
                </div>
            `,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Submit',
            preConfirm: () => {
                const totalCredit = document.getElementById('total_credit').value;
                const openaiCost = document.getElementById('openai_cost').value;
                const smsCost = document.getElementById('sms_cost').value;

                if (!totalCredit || !openaiCost || !smsCost) {
                    Swal.showValidationMessage('All fields are required and must be valid numbers');
                    return false;
                }

                return {
                    totalCredit,
                    openaiCost,
                    smsCost
                };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                this.updateCreditsForCustomer(customerId, result.value);
            }
        });
    }

    // Handle subscription toggle
    handleSubscriptionToggle(customerId, isActive) {
        const newStatus = isActive ? 'active' : 'trial';
        const action = isActive ? 'give full access' : 'remove full access';
        const $toggle = document.getElementById(`statusToggle${customerId}`);
        
        Swal.fire({
            title: 'Confirm Access Change',
            text: `Are you sure you want to ${action} to this customer?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, ${action}`,
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this.changeCustomerAccess(customerId, newStatus);
            } else {
                // Revert the toggle if the user cancels
                $toggle.checked = !$toggle.checked;
            }
        });
    }

    async changeCustomerAccess(customerId, newStatus) {
        try {
            const response = await fetch('/api/customer-permissions/access-change', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    customer_id: customerId,
                    status: newStatus
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                const action = newStatus === 'active' ? 'given full access' : 'removed full access';
                Swal.fire(
                    'Success!',
                    `The customer has been ${action}.`,
                    'success'
                ).then((result) => {
                    if (result.value) {
                        this.loadCustomers();
                    }
                });
            } else {
                Swal.fire(
                    'Error!',
                    'There was an error changing the access.',
                    'error'
                );
            }
        } catch (error) {
            console.error('Error changing customer access:', error);
            Swal.fire(
                'Error!',
                'There was an error changing the access.',
                'error'
            );
        }
    }

    async changeCustomerStatus(customerId, newStatus) {
        try {
            const response = await fetch('/api/customers/change-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    customer_id: customerId,
                    status: newStatus
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess('Customer status updated successfully');
                this.loadCustomers(); // Reload data
            } else {
                this.showError('Failed to update customer status: ' + data.message);
            }
        } catch (error) {
            console.error('Error updating customer status:', error);
            this.showError('Failed to update customer status. Please try again.');
        }
    }

    async addCreditsToCustomer(customerId, creditData) {
        try {
            const response = await fetch(`/api/customers/add-package/${customerId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    total_credit: creditData.totalCredit,
                    openai_cost: creditData.openaiCost,
                    sms_cost: creditData.smsCost
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess('The package plan has been updated successfully.');
                this.loadCustomers();
            } else {
                this.showError(data.message || 'There was an error updating the package plan.');
            }
        } catch (error) {
            console.error('Error adding credits:', error);
            this.showError('There was an error updating the package plan.');
        }
    }

    async updateCreditsForCustomer(customerId, creditData) {
        try {
            const response = await fetch(`/api/customers/update-package/${customerId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    total_credit: creditData.totalCredit,
                    openai_cost: creditData.openaiCost,
                    sms_cost: creditData.smsCost
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess('The package plan has been updated successfully.');
                this.loadCustomers();
            } else {
                this.showError(data.message || 'There was an error updating the package plan.');
            }
        } catch (error) {
            console.error('Error updating credits:', error);
            this.showError('There was an error updating the package plan.');
        }
    }

    async changeSubscriptionStatus(customerId, newStatus) {
        try {
            const response = await fetch('/api/customers/change-subscription-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    customer_id: customerId,
                    status: newStatus
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess(`The customer has been ${newStatus === 'active' ? 'given full access' : 'removed full access'}.`);
                this.loadCustomers();
            } else {
                this.showError('There was an error changing the access.');
            }
        } catch (error) {
            console.error('Error updating subscription status:', error);
            this.showError('There was an error changing the access.');
        }
    }

    exportCustomers() {
        // Implement CSV export
        const csvContent = this.generateCSV();
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `customers_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    generateCSV() {
        const headers = ['Reg #', 'Name', 'Email', 'Phone', 'Pharmacy', 'Credits', 'OpenAI Cost', 'SMS Cost', 'Subscription', 'Status', 'Last Login', 'Start Date', 'Expiry Date'];
        const rows = this.filteredCustomers.map(customer => [
            customer.registration_number || customer.id,
            customer.name,
            customer.email,
            customer.phone || '',
            customer.pharmacy_name || '',
            customer.credits,
            customer.openai_cost,
            customer.sms_cost,
            customer.subscription_status || 'N/A',
            customer.status,
            customer.last_login ? new Date(customer.last_login).toLocaleString() : '',
            customer.start_date ? new Date(customer.start_date).toLocaleDateString() : '',
            customer.expiry_date ? new Date(customer.expiry_date).toLocaleDateString() : ''
        ]);
        
        return [headers, ...rows].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
    }

    showLoading(show) {
        document.getElementById('loadingSpinner').style.display = show ? 'block' : 'none';
        document.getElementById('customersTableContainer').style.display = show ? 'none' : 'block';
    }

    showSuccess(message) {
        const toastBody = document.getElementById('successToastBody');
        const toast = document.getElementById('successToast');
        
        toastBody.textContent = message;
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }

    showError(message) {
        const toastBody = document.getElementById('errorToastBody');
        const toast = document.getElementById('errorToast');
        
        toastBody.textContent = message;
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }
}

// Initialize the customers manager when the page loads
let customersManager;
document.addEventListener('DOMContentLoaded', function() {
    customersManager = new CustomersManager();
});
</script>
@endsection
