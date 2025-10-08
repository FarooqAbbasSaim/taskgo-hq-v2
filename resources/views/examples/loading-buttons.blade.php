@extends('layouts.base', ['title' => 'Loading Buttons Examples'])

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Examples</a></li>
                        <li class="breadcrumb-item active">Loading Buttons</li>
                    </ol>
                </div>
                <h4 class="page-title">Loading Button Component Examples</h4>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Basic Usage</h4>
                    <p class="text-muted mb-0">Simple loading buttons with different variants</p>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <x-loading-button text="Primary" variant="primary" />
                        <x-loading-button text="Secondary" variant="secondary" />
                        <x-loading-button text="Success" variant="success" />
                        <x-loading-button text="Danger" variant="danger" />
                        <x-loading-button text="Warning" variant="warning" />
                        <x-loading-button text="Info" variant="info" />
                    </div>
                    
                    <div class="d-flex flex-wrap gap-2">
                        <x-loading-button text="Light" variant="light" />
                        <x-loading-button text="Dark" variant="dark" />
                        <x-loading-button text="Outline Primary" variant="outline-primary" />
                        <x-loading-button text="Outline Secondary" variant="outline-secondary" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Different Sizes</h4>
                    <p class="text-muted mb-0">Loading buttons in various sizes</p>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
                        <x-loading-button text="Small" variant="primary" size="sm" />
                        <x-loading-button text="Default" variant="primary" />
                        <x-loading-button text="Large" variant="primary" size="lg" />
                    </div>
                    
                    <div class="d-flex flex-wrap align-items-center gap-2">
                        <x-loading-button text="Small" variant="success" size="sm" spinner-size="xs" />
                        <x-loading-button text="Default" variant="success" spinner-size="sm" />
                        <x-loading-button text="Large" variant="success" size="lg" spinner-size="md" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Custom Loading Text</h4>
                    <p class="text-muted mb-0">Buttons with custom loading messages</p>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <x-loading-button text="Save Changes" variant="primary" loading-text="Saving..." />
                        <x-loading-button text="Delete Item" variant="danger" loading-text="Deleting..." />
                        <x-loading-button text="Send Email" variant="info" loading-text="Sending..." />
                    </div>
                    
                    <div class="d-flex flex-wrap gap-2">
                        <x-loading-button text="Process Data" variant="success" loading-text="Processing..." />
                        <x-loading-button text="Upload File" variant="warning" loading-text="Uploading..." />
                        <x-loading-button text="Generate Report" variant="secondary" loading-text="Generating..." />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Form Integration</h4>
                    <p class="text-muted mb-0">Loading buttons in forms</p>
                </div>
                <div class="card-body">
                    <form id="exampleForm">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email">
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="3" placeholder="Enter message"></textarea>
                        </div>
                        <div class="d-flex gap-2">
                            <x-loading-button text="Submit" variant="primary" type="submit" loading-text="Submitting..." />
                            <x-loading-button text="Reset" variant="outline-secondary" type="reset" loading-text="Resetting..." />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">JavaScript API</h4>
                    <p class="text-muted mb-0">Programmatic control of loading buttons</p>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <button id="jsButton1" class="btn btn-primary" data-loading-button data-loading-text="Loading...">
                            JavaScript Button 1
                        </button>
                        <button id="jsButton2" class="btn btn-success" data-loading-button data-loading-text="Processing...">
                            JavaScript Button 2
                        </button>
                    </div>
                    
                    <div class="d-flex gap-2">
                        <button id="showLoading" class="btn btn-outline-primary">Show Loading</button>
                        <button id="hideLoading" class="btn btn-outline-secondary">Hide Loading</button>
                        <button id="toggleLoading" class="btn btn-outline-info">Toggle Loading</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Custom Spinner Colors</h4>
                    <p class="text-muted mb-0">Loading buttons with custom spinner colors</p>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <x-loading-button text="Primary" variant="primary" spinner-color="white" />
                        <x-loading-button text="Success" variant="success" spinner-color="white" />
                        <x-loading-button text="Danger" variant="danger" spinner-color="white" />
                    </div>
                    
                    <div class="d-flex flex-wrap gap-2">
                        <x-loading-button text="Light" variant="light" spinner-color="primary" />
                        <x-loading-button text="Warning" variant="warning" spinner-color="dark" />
                        <x-loading-button text="Info" variant="info" spinner-color="white" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Usage Examples</h4>
                    <p class="text-muted mb-0">Code examples for different use cases</p>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <h5>Blade Component Usage</h5>
                            <pre><code>&lt;x-loading-button 
    text="Save Changes" 
    variant="primary" 
    loading-text="Saving..." 
    spinner-size="sm" 
    spinner-color="white" 
/&gt;</code></pre>
                        </div>
                        <div class="col-lg-6">
                            <h5>JavaScript Usage</h5>
                            <pre><code>// Initialize with data attribute
&lt;button data-loading-button data-loading-text="Loading..."&gt;
    Click Me
&lt;/button&gt;

// Or programmatically
const button = new LoadingButton('#myButton', {
    loadingText: 'Processing...',
    spinnerSize: 'sm',
    spinnerColor: 'white'
});

button.showLoading();
button.hideLoading();</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Form submission example
    const form = document.getElementById('exampleForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const loadingButton = new LoadingButton(submitButton);
            
            loadingButton.showLoading();
            
            // Simulate form submission
            setTimeout(() => {
                loadingButton.hideLoading();
                alert('Form submitted successfully!');
            }, 3000);
        });
    }
    
    // JavaScript API examples
    const jsButton1 = document.getElementById('jsButton1');
    const jsButton2 = document.getElementById('jsButton2');
    const showLoadingBtn = document.getElementById('showLoading');
    const hideLoadingBtn = document.getElementById('hideLoading');
    const toggleLoadingBtn = document.getElementById('toggleLoading');
    
    if (jsButton1 && jsButton2) {
        const loadingButton1 = new LoadingButton(jsButton1);
        const loadingButton2 = new LoadingButton(jsButton2);
        
        if (showLoadingBtn) {
            showLoadingBtn.addEventListener('click', function() {
                loadingButton1.showLoading();
                loadingButton2.showLoading();
            });
        }
        
        if (hideLoadingBtn) {
            hideLoadingBtn.addEventListener('click', function() {
                loadingButton1.hideLoading();
                loadingButton2.hideLoading();
            });
        }
        
        if (toggleLoadingBtn) {
            toggleLoadingBtn.addEventListener('click', function() {
                if (loadingButton1.isLoading()) {
                    loadingButton1.hideLoading();
                    loadingButton2.hideLoading();
                } else {
                    loadingButton1.showLoading();
                    loadingButton2.showLoading();
                }
            });
        }
    }
    
    // Add click handlers to all loading buttons for demo
    document.querySelectorAll('[data-loading-button]').forEach(button => {
        button.addEventListener('click', function(e) {
            // Only show loading if it's not already loading
            if (!this.classList.contains('loading')) {
                const loadingButton = new LoadingButton(this);
                loadingButton.showLoading();
                
                // Simulate async operation
                setTimeout(() => {
                    loadingButton.hideLoading();
                }, 2000);
            }
        });
    });
});
</script>
@endpush
