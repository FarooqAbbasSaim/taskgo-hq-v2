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
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Pharmacy</th>
                                    <th>Credits</th>
                                    <th>OpenAI Cost</th>
                                    <th>SMS Cost</th>
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

    <!-- Customer Status Change Modal -->
    <div class="modal fade" id="statusChangeModal" tabindex="-1" aria-labelledby="statusChangeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="statusChangeModalLabel">Change Customer Status</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to change the status of <strong id="customerName"></strong>?</p>
                    <div class="form-group">
                        <label for="newStatus">New Status:</label>
                        <select class="form-select" id="newStatus">
                            <option value="active">Active</option>
                            <option value="deactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirmStatusChange">Confirm</button>
                </div>
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

        // Status change confirmation
        document.getElementById('confirmStatusChange').addEventListener('click', () => {
            this.changeCustomerStatus();
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
                <td>${customer.id}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="avatar-sm bg-primary-subtle rounded-circle me-2 d-flex align-items-center justify-content-center">
                            <span class="text-primary fw-semibold">${customer.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <div>
                            <h6 class="mb-0">${customer.name}</h6>
                            <small class="text-muted">ID: ${customer.id}</small>
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
                    <span class="badge ${customer.status === 'active' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}">
                        ${customer.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                </td>
                <td>
                    ${customer.last_login ? new Date(customer.last_login).toLocaleDateString() : 'Never'}
                </td>
                <td>${customer.start_date ? new Date(customer.start_date).toLocaleDateString() : 'N/A'}</td>
                <td>${customer.expiry_date ? new Date(customer.expiry_date).toLocaleDateString() : 'N/A'}</td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-sm btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Actions
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onclick="customersManager.viewCustomer(${customer.id})">
                                <i class="ti ti-eye me-2"></i>View Details
                            </a></li>
                            <li><a class="dropdown-item" href="#" onclick="customersManager.changeStatus(${customer.id}, '${customer.name}', '${customer.status}')">
                                <i class="ti ti-edit me-2"></i>Change Status
                            </a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item text-danger" href="#" onclick="customersManager.deleteCustomer(${customer.id})">
                                <i class="ti ti-trash me-2"></i>Delete
                            </a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    changeStatus(customerId, customerName, currentStatus) {
        this.currentCustomerId = customerId;
        document.getElementById('customerName').textContent = customerName;
        document.getElementById('newStatus').value = currentStatus === 'active' ? 'deactive' : 'active';
        
        const modal = new bootstrap.Modal(document.getElementById('statusChangeModal'));
        modal.show();
    }

    async changeCustomerStatus() {
        if (!this.currentCustomerId) return;
        
        const newStatus = document.getElementById('newStatus').value;
        
        try {
            const response = await fetch('/api/customers/change-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    customer_id: this.currentCustomerId,
                    status: newStatus
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess('Customer status updated successfully');
                this.loadCustomers(); // Reload data
                bootstrap.Modal.getInstance(document.getElementById('statusChangeModal')).hide();
            } else {
                this.showError('Failed to update customer status: ' + data.message);
            }
        } catch (error) {
            console.error('Error updating customer status:', error);
            this.showError('Failed to update customer status. Please try again.');
        }
    }

    viewCustomer(customerId) {
        // Implement customer details view
        console.log('View customer:', customerId);
        // You can implement a modal or redirect to a details page
    }

    deleteCustomer(customerId) {
        if (confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
            // Implement customer deletion
            console.log('Delete customer:', customerId);
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
        const headers = ['ID', 'Name', 'Email', 'Phone', 'Pharmacy', 'Credits', 'OpenAI Cost', 'SMS Cost', 'Status', 'Last Login', 'Start Date', 'Expiry Date'];
        const rows = this.filteredCustomers.map(customer => [
            customer.id,
            customer.name,
            customer.email,
            customer.phone || '',
            customer.pharmacy_name || '',
            customer.credits,
            customer.openai_cost,
            customer.sms_cost,
            customer.status,
            customer.last_login ? new Date(customer.last_login).toLocaleDateString() : '',
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
        // You can implement a toast notification here
        alert(message);
    }

    showError(message) {
        // You can implement a toast notification here
        alert('Error: ' + message);
    }
}

// Initialize the customers manager when the page loads
let customersManager;
document.addEventListener('DOMContentLoaded', function() {
    customersManager = new CustomersManager();
});
</script>
@endsection
