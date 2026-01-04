@extends('layouts.vertical', ['title' => 'Announcements'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header justify-content-between align-items-center border-dashed">
                    <h4 class="card-title mb-0">Global Announcement Management</h4>
                    <p class="text-muted mb-0">This announcement will be displayed to all pharmacies</p>
                </div>
                <div class="card-body">
                    <form id="announcementForm">
                        <div class="mb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" 
                                       type="checkbox" 
                                       id="announcementEnabled"
                                       {{ $announcement->enabled ? 'checked' : '' }}>
                                <label class="form-check-label" for="announcementEnabled">
                                    <strong>Enable Announcement</strong>
                                </label>
                            </div>
                            <small class="text-muted">Toggle to show/hide the announcement on all pharmacy sites</small>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Announcement Content</label>
                            <div class="border rounded p-2 bg-light">
                                <!-- Rich Text Editor Toolbar -->
                                <div class="btn-toolbar mb-2" role="toolbar" aria-label="Text formatting">
                                    <div class="btn-group me-2" role="group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" id="boldBtn" title="Bold">
                                            <i class="ti ti-bold"></i>
                                        </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary" id="italicBtn" title="Italic">
                                            <i class="ti ti-italic"></i>
                                        </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary" id="underlineBtn" title="Underline">
                                            <i class="ti ti-underline"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Content Editable Area -->
                                <div id="announcementEditor" 
                                     contenteditable="true" 
                                     class="form-control"
                                     data-placeholder="Enter announcement text here...">{!! $announcement->content ?? '' !!}</div>
                            </div>
                            <small class="text-muted">Use the formatting buttons above to apply Bold, Italic, or Underline to your text. The text will scroll automatically if it exceeds the screen width.</small>
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <button type="button" class="btn btn-secondary" id="cancelBtn">Cancel</button>
                            <button type="button" class="btn btn-primary" id="saveAnnouncement">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Toast Container -->
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 9999;">
        <div id="successToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-success text-white">
                <i class="ti ti-check me-2"></i>
                <strong class="me-auto">Success</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body" id="successToastBody">
                Announcement saved successfully!
            </div>
        </div>
        <div id="errorToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-danger text-white">
                <i class="ti ti-alert-circle me-2"></i>
                <strong class="me-auto">Error</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body" id="errorToastBody">
                An error occurred.
            </div>
        </div>
    </div>

    @section('scripts')
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const editor = document.getElementById('announcementEditor');
            const boldBtn = document.getElementById('boldBtn');
            const italicBtn = document.getElementById('italicBtn');
            const underlineBtn = document.getElementById('underlineBtn');
            const enabledToggle = document.getElementById('announcementEnabled');
            const saveBtn = document.getElementById('saveAnnouncement');
            const cancelBtn = document.getElementById('cancelBtn');
            let originalContent = editor.innerHTML.trim();
            let originalEnabled = enabledToggle.checked;

            // Ensure editor is focusable and maintains focus
            editor.setAttribute('tabindex', '0');
            
            // Toast notification functions
            function showSuccessToast(message) {
                const toast = document.getElementById('successToast');
                const toastBody = document.getElementById('successToastBody');
                if (toast && toastBody) {
                    toastBody.textContent = message;
                    const bsToast = new bootstrap.Toast(toast, {
                        autohide: true,
                        delay: 3000
                    });
                    bsToast.show();
                }
            }
            
            function showErrorToast(message) {
                const toast = document.getElementById('errorToast');
                const toastBody = document.getElementById('errorToastBody');
                if (toast && toastBody) {
                    toastBody.textContent = message;
                    const bsToast = new bootstrap.Toast(toast, {
                        autohide: true,
                        delay: 5000
                    });
                    bsToast.show();
                }
            }
            
            // Rich Text Editor Functions
            function execCommand(command, value = null, event) {
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                // Ensure editor has focus first
                if (document.activeElement !== editor) {
                    editor.focus();
                }
                
                // Small delay to ensure focus is set
                setTimeout(function() {
                    try {
                        // Execute the command
                        const success = document.execCommand(command, false, value);
                        
                        if (!success) {
                            console.warn('Command failed:', command);
                        }
                        
                        // Update button states
                        updateButtonStates();
                        
                        // Keep focus on editor
                        editor.focus();
                    } catch (err) {
                        console.error('Error executing command:', err);
                    }
                }, 10);
            }

            // Formatting button handlers with proper event handling
            boldBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                execCommand('bold', null, e);
                return false;
            });
            
            italicBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                execCommand('italic', null, e);
                return false;
            });
            
            underlineBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                execCommand('underline', null, e);
                return false;
            });

            // Update button states based on selection
            function updateButtonStates() {
                try {
                    boldBtn.classList.toggle('active', document.queryCommandState('bold'));
                    italicBtn.classList.toggle('active', document.queryCommandState('italic'));
                    underlineBtn.classList.toggle('active', document.queryCommandState('underline'));
                } catch (e) {
                    // Ignore errors if commands are not available
                }
            }

            editor.addEventListener('mouseup', updateButtonStates);
            editor.addEventListener('keyup', updateButtonStates);
            editor.addEventListener('focus', updateButtonStates);
            editor.addEventListener('blur', function() {
                // Small delay to allow selection to be saved
                setTimeout(updateButtonStates, 100);
            });

            // Cancel button - revert changes
            cancelBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Check if there are changes
                const currentContent = editor.innerHTML.trim();
                const currentEnabled = enabledToggle.checked;
                
                if (currentContent !== originalContent || currentEnabled !== originalEnabled) {
                    // Just revert without confirmation for better UX
                    editor.innerHTML = originalContent;
                    enabledToggle.checked = originalEnabled;
                    updateButtonStates();
                    showSuccessToast('Changes reverted');
                } else {
                    // No changes, just reset
                    editor.innerHTML = originalContent;
                    enabledToggle.checked = originalEnabled;
                    updateButtonStates();
                }
                return false;
            });

            // Clean HTML content - remove inline styles, keep only semantic formatting (b, i, u)
            function cleanHTML(html) {
                if (!html) return '';
                
                // Create a temporary div to parse the HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                
                // Remove all style attributes from all elements
                tempDiv.querySelectorAll('*').forEach(el => {
                    el.removeAttribute('style');
                    // Remove other unwanted attributes
                    Array.from(el.attributes).forEach(attr => {
                        const attrName = attr.name.toLowerCase();
                        // Keep only class attribute, remove everything else
                        if (attrName !== 'class') {
                            el.removeAttribute(attr.name);
                        }
                    });
                });
                
                // Remove empty spans and divs that don't have semantic meaning
                tempDiv.querySelectorAll('span:empty, div:empty').forEach(el => el.remove());
                
                // Remove spans and divs that only contain text (unwrap them)
                tempDiv.querySelectorAll('span, div').forEach(el => {
                    // If span/div has no attributes and only contains text or semantic tags
                    if (el.attributes.length === 0 || (el.attributes.length === 1 && el.hasAttribute('class'))) {
                        const parent = el.parentNode;
                        if (parent) {
                            while (el.firstChild) {
                                parent.insertBefore(el.firstChild, el);
                            }
                            parent.removeChild(el);
                        }
                    }
                });
                
                // Get the cleaned HTML
                let cleaned = tempDiv.innerHTML;
                
                // Remove any remaining style attributes using regex (fallback)
                cleaned = cleaned.replace(/\s*style\s*=\s*["'][^"']*["']/gi, '');
                
                // Remove empty tags
                cleaned = cleaned.replace(/<(\w+)[^>]*>\s*<\/\1>/gi, '');
                
                // Normalize whitespace
                cleaned = cleaned.replace(/\s+/g, ' ').trim();
                
                return cleaned;
            }

            // Save announcement
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Clean the HTML before saving
                const rawContent = editor.innerHTML.trim();
                const cleanedContent = cleanHTML(rawContent);
                const enabled = enabledToggle.checked;
                
                // Validate content if enabled
                if (enabled && !cleanedContent) {
                    showErrorToast('Please enter announcement content before enabling.');
                    return;
                }
                
                // Show loading state
                const originalBtnText = saveBtn.innerHTML;
                saveBtn.disabled = true;
                saveBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Saving...';
                
                // Get CSRF token
                const csrfToken = document.querySelector('meta[name="csrf-token"]');
                if (!csrfToken) {
                    showErrorToast('CSRF token not found. Please refresh the page.');
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = originalBtnText;
                    return;
                }
                
                fetch('{{ route("admin.announcements.update") }}', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken.content,
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        enabled: enabled,
                        content: cleanedContent
                    })
                })
                .then(response => {
                    // Always reset button state first
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = originalBtnText;
                    
                    if (!response.ok) {
                        return response.json().then(data => {
                            throw new Error(data.message || 'Server error');
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        // Update with cleaned content from server
                        if (data.content !== undefined) {
                            editor.innerHTML = data.content;
                            originalContent = data.content;
                        } else {
                            originalContent = cleanedContent;
                        }
                        originalEnabled = enabled;
                        updateButtonStates();
                        
                        // Show success toast
                        showSuccessToast('Announcement saved successfully!');
                    } else {
                        throw new Error(data.message || 'Failed to save announcement');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showErrorToast('An error occurred while saving the announcement: ' + error.message);
                    // Button state already reset in the response handler above
                });
            });

            // Prevent form submission
            document.getElementById('announcementForm').addEventListener('submit', function(e) {
                e.preventDefault();
            });
        });
    </script>
    <style>
        #announcementEditor {
            min-height: 100px;
            background: white;
            border: 1px solid #dee2e6;
            padding: 10px;
            border-radius: 4px;
            cursor: text;
        }
        #announcementEditor:focus {
            outline: 2px solid #0d6efd;
            outline-offset: 2px;
            border-color: #0d6efd;
        }
        #announcementEditor:empty:before {
            content: attr(placeholder);
            color: #6c757d;
            pointer-events: none;
        }
        .btn-group .btn.active {
            background-color: #0d6efd !important;
            color: white !important;
            border-color: #0d6efd !important;
        }
        .btn-group .btn:hover {
            background-color: #f8f9fa;
        }
        .btn-group .btn.active:hover {
            background-color: #0b5ed7 !important;
        }
    </style>
    @endsection
@endsection
