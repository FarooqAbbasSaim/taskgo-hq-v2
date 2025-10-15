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
                    <div class="row mb-3 justify-content-between">
                        <div class="col-md-4">
                            <div class="input-group">
                                <span class="input-group-text"><i class="ti ti-search"></i></span>
                                <input type="text" class="form-control" id="searchCustomers" placeholder="Search customers...">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="btn-group w-100" role="group">
                                <!-- <input type="radio" class="btn-check" name="viewType" id="allView" value="" checked>
                                <label class="btn btn-outline-primary" for="allView">All</label> -->
                                
                                <input type="radio" class="btn-check" name="viewType" id="activeView" value="active" checked>
                                <label class="btn btn-outline-primary" for="activeView">Active</label>

                                <input type="radio" class="btn-check" name="viewType" id="inactiveView" value="deactive">
                                <label class="btn btn-outline-primary" for="inactiveView">Inactive</label>

                                <input type="radio" class="btn-check" name="viewType" id="frozenView" value="frozen">
                                <label class="btn btn-outline-primary" for="frozenView">Frozen</label>

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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Organisation</th>
                                    <th>Credits</th>
                                    <th>Plan</th>
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
                        <h3 class="mb-1" id="freezeModalTitle">Freeze Customer?</h3>
                        <p class="text-muted mb-0" id="freezeModalMessage">They won't be able to access their account.</p>
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
                        <h3 class="mb-1" id="archiveModalTitle">Archive Customer?</h3>
                        <p class="text-muted mb-0" id="archiveModalMessage">They won't be able to access their account.</p>
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

        // Status filter radio buttons
        document.querySelectorAll('input[name="viewType"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const selectedValue = e.target.value;
                
                if (selectedValue === 'archived') {
                    // For archived view, switch to archived endpoint
                    this.currentView = 'archived';
                    this.loadCustomers(); // Reload from archived endpoint
                } else if (selectedValue === 'frozen') {
                    // For frozen view, switch to frozen endpoint
                    this.currentView = 'frozen';
                    this.loadCustomers(); // Reload from frozen endpoint
                } else if (selectedValue === 'deactive') {
                    // For inactive view, switch to inactive endpoint
                    this.currentView = 'inactive';
                    this.loadCustomers(); // Reload from inactive endpoint
                } else {
                    // For active view, use regular endpoint
                    this.currentView = 'active';
                    this.loadCustomers(); // Reload from regular endpoint
                }
            });
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
            let endpoint = '/api/customers';
            if (this.currentView === 'archived') {
                endpoint = '/api/customers/archived';
            } else if (this.currentView === 'frozen') {
                endpoint = '/api/customers/frozen';
            } else if (this.currentView === 'inactive') {
                endpoint = '/api/customers/inactive';
            }
            
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
        
        this.filteredCustomers = this.customers.filter(customer => {
            const matchesSearch = !searchTerm || 
                customer.name.toLowerCase().includes(searchTerm) ||
                customer.email.toLowerCase().includes(searchTerm) ||
                customer.phone?.toLowerCase().includes(searchTerm) ||
                customer.pharmacy_name?.toLowerCase().includes(searchTerm);
            
            // Since we're using separate endpoints for each status, no need for additional status filtering
            return matchesSearch;
        });
        
        this.renderCustomers();
        
        // Initialize popovers
        this.initializePopovers();
    }
    
    updateTableHeaders() {
        const thead = document.querySelector('#customersTable thead tr');
        
        if (this.currentView === 'inactive') {
            // For inactive view, show only specific columns
            thead.innerHTML = `
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Organisation</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
            `;
        } else {
            // For other views, show all columns
            thead.innerHTML = `
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Organisation</th>
                <th>Credits</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Start Date</th>
                <th>Expiry Date</th>
                <th>Actions</th>
            `;
        }
    }
    
    initializePopovers() {
        // Initialize all popovers
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
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
        
        // Update table headers based on current view
        this.updateTableHeaders();
        
        tbody.innerHTML = this.filteredCustomers.map(customer => `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="avatar-sm bg-primary-subtle rounded-circle me-2 d-flex align-items-center justify-content-center">
                            <span class="text-primary fw-semibold">${customer.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <div>
                            <h6 class="mt-2 mb-0">
                                <a href="/admin/customers/${customer.id}" class="text-decoration-none text-body">
                                    ${customer.name}
                                </a>
                            </h6>
                            <h6 class="text-muted">${customer.registration_number || customer.id}</h6>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="d-flex align-items-center gap-1">
                        <span class="text-body">${customer.email}</span>
                        ${customer.email_verified ? 
                            '<i class="ti ti-check-circle text-success" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Email Verified" tabindex="0" style="cursor: pointer;"></i>' : 
                            '<i class="ti ti-alert-circle text-warning" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Email is not verified yet" tabindex="0" style="cursor: pointer;"></i>'
                        }
                    </span>
                </td>
                <td>${customer.phone || 'N/A'}</td>
                <td>${customer.pharmacy_name || 'N/A'}</td>
                ${this.currentView !== 'inactive' ? `<td class="credits-column">
                    <span class="d-flex align-items-center gap-1">
                        ${customer.credits}
                        <i class="ti ti-info-circle text-muted" 
                           data-bs-toggle="popover" 
                           data-bs-trigger="hover" 
                           data-bs-content="OpenAI cost: <strong>$${customer.openai_cost}/request</strong><br>SMS cost: <strong>$${customer.sms_cost}/sms</strong>"
                           data-bs-html="true"
                           tabindex="0"
                           style="cursor: pointer;">
                        </i>
                    </span>
                </td>` : ''}
                ${this.currentView !== 'inactive' ? `<td class="plan-column">
                    <div class="d-flex flex-column mb-1">
                        <span class="badge ${customer.subscription_status === 'active' ? 'bg-success text-white' : 'bg-primary text-white'}">
                        ${customer.subscription_status === 'active' ? 'Pro' : 'Free'}
                        </span>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input status-toggle" type="checkbox" id="statusToggle${customer.id}" 
                            data-customer-id="${customer.id}" ${customer.subscription_status === 'active' ? 'checked' : ''}
                            onchange="customersManager.handleSubscriptionToggle(${customer.id}, this.checked, '${customer.name}')">
                        <label class="form-check-label" for="statusToggle${customer.id}"></label>
                    </div>
                </td>` : ''}
                <td>
                    <span class="badge ${customer.status === 'active' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}">
                        ${customer.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                </td>
                <td>
                    ${customer.last_login ? this.formatDateTime(customer.last_login) : 'Never'}
                </td>
                ${this.currentView !== 'inactive' ? `<td class="start-date-column">${customer.start_date ? new Date(customer.start_date).toLocaleDateString() : 'N/A'}</td>` : ''}
                ${this.currentView !== 'inactive' ? `<td class="expiry-date-column">${customer.expiry_date ? new Date(customer.expiry_date).toLocaleDateString() : 'N/A'}</td>` : ''}
                <td>
                    <div class="dropdown">
                        <button class="btn btn-link text-muted p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-dots-vertical fs-5"></i>
                        </button>
                        <ul class="dropdown-menu">
                            ${this.getActionButtons(customer)}
                        </ul>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Get action buttons based on current view and customer status
    getActionButtons(customer) {
        let menuItems = '';
        
        // If viewing archived customers, only show unarchive option
        if (this.currentView === 'archived') {
            return `
                <li><a class="dropdown-item" href="#" onclick="customersManager.handleArchiveAction(${customer.id}, '${customer.status}', '${customer.name}')">
                    <i class="ti ti-undo me-2"></i>Unarchive
                </a></li>
            `;
        }
        
        // Freeze/Unfreeze option
        if (customer.status === 'freeze') {
            menuItems += `
                <li><a class="dropdown-item" href="#" onclick="customersManager.handleFreezeAction(${customer.id}, '${customer.status}', '${customer.name}')">
                    <i class="ti ti-lock-open me-2"></i>Unfreeze
                </a></li>
            `;
        } else {
            menuItems += `
                <li><a class="dropdown-item" href="#" onclick="customersManager.handleFreezeAction(${customer.id}, '${customer.status}', '${customer.name}')">
                    <i class="ti ti-lock me-2"></i>Freeze
                </a></li>
            `;
        }
        
        // Archive option (only for non-archived customers)
        if (customer.status !== 'deactive') {
            menuItems += `
                <li><a class="dropdown-item" href="#" onclick="customersManager.handleArchiveAction(${customer.id}, '${customer.status}', '${customer.name}')">
                    <i class="ti ti-ban me-2"></i>Archive
                </a></li>
            `;
        }
        
        // Credit options (only for active customers)
        if (customer.status === 'active') {
            // Show Add Credits only when credits are zero
            if (customer.credits === 0) {
                menuItems += `
                    <li><a class="dropdown-item" href="#" onclick="customersManager.handleAddCredits(${customer.id})">
                        <i class="ti ti-plus me-2"></i>Add Credits
                    </a></li>
                `;
            } else {
                // Show Update Credits when credits exist
                menuItems += `
                    <li><a class="dropdown-item" href="#" onclick="customersManager.handleUpdateCredits(${customer.id}, ${customer.credits}, ${customer.sms_cost}, ${customer.openai_cost})">
                        <i class="ti ti-edit me-2"></i>Update Credits
                    </a></li>
                `;
            }
        }
        
        // Copy Rx Link option (for all customers)
        menuItems += `
            <li><a class="dropdown-item" href="#" onclick="customersManager.copyRxLink('${customer.registration_number || customer.id}')">
                <i class="ti ti-link me-2"></i>Copy Rx Link
            </a></li>
        `;
        
        return menuItems;
    }

    // Handle freeze/unfreeze button click
    handleFreezeAction(customerId, currentStatus, customerName) {
        const action = currentStatus === 'freeze' ? 'unfreeze' : 'freeze';
        const newStatus = currentStatus === 'freeze' ? 'active' : 'freeze';
        
        // Store the action data for the modal
        this.pendingAction = {
            customerId: customerId,
            newStatus: newStatus,
            action: action
        };
        
        // Update modal content
        if (action === 'freeze') {
            document.getElementById('freezeModalTitle').innerHTML = `Freeze <strong>${customerName}</strong>?`;
            document.getElementById('freezeModalMessage').textContent = `They won't be able to access their account.`;
        } else {
            document.getElementById('freezeModalTitle').innerHTML = `Unfreeze <strong>${customerName}</strong>?`;
            document.getElementById('freezeModalMessage').textContent = `They will be able to access their account again.`;
        }
        
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('freezeModal'));
        modal.show();
    }

    // Handle archive/unarchive button click
    handleArchiveAction(customerId, currentStatus, customerName) {
        const action = currentStatus === 'deactive' ? 'unarchive' : 'archive';
        const newStatus = currentStatus === 'deactive' ? 'active' : 'deactive';
        
        // Store the action data for the modal
        this.pendingAction = {
            customerId: customerId,
            newStatus: newStatus,
            action: action
        };
        
        // Update modal content
        if (action === 'archive') {
            document.getElementById('archiveModalTitle').innerHTML = `Archive <strong>${customerName}</strong>?`;
            document.getElementById('archiveModalMessage').textContent = `They won't be able to access their account.`;
        } else {
            document.getElementById('archiveModalTitle').innerHTML = `Unarchive <strong>${customerName}</strong>?`;
            document.getElementById('archiveModalMessage').textContent = `They will be able to access their account again.`;
        }
        
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
    handleSubscriptionToggle(customerId, isActive, customerName) {
        const newStatus = isActive ? 'active' : 'trial';
        const $toggle = document.getElementById(`statusToggle${customerId}`);
        
        // Determine if this is an upgrade or downgrade
        const isUpgrade = isActive; // true when giving access, false when removing
        
        let title, text, confirmText, icon;
        
        if (isUpgrade) {
            title = `Upgrade ${customerName}?`;
            text = 'They will get access to all the Pro features.';
            confirmText = 'Yes, upgrade';
            icon = 'question';
        } else {
            title = `Remove Pro Access from ${customerName}?`;
            text = 'They will lose access to Pro features and be moved to Free plan.';
            confirmText = 'Yes, remove access';
            icon = 'warning';
        }
        
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: isUpgrade ? '#3085d6' : '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: confirmText,
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
        let headers, rows;
        
        if (this.currentView === 'inactive') {
            // For inactive customers, exclude credits, plan, start date, and expiry date
            headers = ['Name', 'Email', 'Phone', 'Organisation', 'Status', 'Last Login'];
            rows = this.filteredCustomers.map(customer => [
                customer.name,
                customer.email,
                customer.phone || '',
                customer.pharmacy_name || '',
                customer.status,
                customer.last_login ? this.formatDateTime(customer.last_login) : ''
            ]);
        } else {
            // For other views, include all columns
            headers = ['Name', 'Email', 'Phone', 'Organisation', 'Credits', 'Plan', 'Status', 'Last Login', 'Start Date', 'Expiry Date'];
            rows = this.filteredCustomers.map(customer => [
                customer.name,
                customer.email,
                customer.phone || '',
                customer.pharmacy_name || '',
                customer.credits,
                customer.subscription_status === 'active' ? 'Pro' : 'Trial',
                customer.status,
                customer.last_login ? this.formatDateTime(customer.last_login) : '',
                customer.start_date ? this.formatDateTime(customer.start_date) : '',
                customer.expiry_date ? this.formatDateTime(customer.expiry_date) : ''
            ]);
        }
        
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

    formatDateTime(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'long' });
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes().toString().padStart(2, '0');
        const ampm = hour >= 12 ? 'pm' : 'am';
        const displayHour = hour % 12 || 12;
        
        return `${day} ${month} ${year}, ${displayHour}:${minute} ${ampm}`;
    }

    // Copy Rx Link functionality
    copyRxLink(registrationNumber) {
        const rxLink = `{{ env('APP_URL') }}/register?reg_no=${registrationNumber}`;
        
        // Copy to clipboard
        navigator.clipboard.writeText(rxLink).then(() => {
            // Show success toast
            this.showSuccess('Rx link copied successfully.');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            this.showError('Failed to copy Rx link.');
        });
    }

    // Show success toast
    showSuccess(message) {
        const toastBody = document.getElementById('successToastBody');
        const toast = document.getElementById('successToast');
        
        if (toastBody && toast) {
            toastBody.textContent = message;
            const bsToast = new bootstrap.Toast(toast);
            bsToast.show();
        }
    }
}

// Initialize the customers manager when the page loads
let customersManager;
document.addEventListener('DOMContentLoaded', function() {
    customersManager = new CustomersManager();
});
</script>
@endsection
