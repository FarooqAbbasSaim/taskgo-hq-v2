@extends('layouts.vertical', ['title' => $title ?? 'SOP Catalog'])

@section('content')
    <div class="row mt-4">
        <div class="col-12">
            <div class="card mb-4">
                <div class="card-header border-dashed">
                    <h4 class="card-title mb-1">SOP Catalog</h4>
                    <p class="text-muted mb-0">Upload Word documents for pharmacies to import into their CRM as draft SOPs.</p>
                </div>
                <div class="card-body">
                    <div class="alert alert-info">
                        Only <strong>.doc</strong> and <strong>.docx</strong> files are supported. New uploads are inactive until activated.
                    </div>

                    <form id="sopCatalogUploadForm" enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="sopCatalogFiles" class="form-label">Upload Word documents</label>
                            <input
                                type="file"
                                class="form-control"
                                id="sopCatalogFiles"
                                name="sop_documents[]"
                                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                multiple
                                required>
                        </div>
                        <button type="submit" class="btn btn-primary" id="sopCatalogUploadBtn">Upload</button>
                    </form>

                    <div id="sopCatalogUploadProgressWrap" class="mt-3" style="display:none;">
                        <div class="d-flex justify-content-between mb-2">
                            <strong>Uploading documents</strong>
                            <span id="sopCatalogUploadProgressText">0 of 0</span>
                        </div>
                        <div class="progress">
                            <div id="sopCatalogUploadProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" style="width:0%;"></div>
                        </div>
                    </div>

                    <div id="sopCatalogUploadMessage" class="mt-3"></div>
                </div>
            </div>

            <div class="card">
                <div class="card-header border-dashed d-flex justify-content-between align-items-center">
                    <h4 class="card-title mb-0">Catalog Documents</h4>
                    <span class="text-muted small" id="sopCatalogCount">0 documents</span>
                </div>
                <div class="card-body" id="sopCatalogList">
                    <div class="text-muted">Loading catalog...</div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
            const listNode = document.getElementById('sopCatalogList');
            const countNode = document.getElementById('sopCatalogCount');
            const uploadForm = document.getElementById('sopCatalogUploadForm');
            const uploadBtn = document.getElementById('sopCatalogUploadBtn');
            const uploadMessage = document.getElementById('sopCatalogUploadMessage');
            const progressWrap = document.getElementById('sopCatalogUploadProgressWrap');
            const progressBar = document.getElementById('sopCatalogUploadProgressBar');
            const progressText = document.getElementById('sopCatalogUploadProgressText');
            const fileInput = document.getElementById('sopCatalogFiles');

            function escapeHtml(value) {
                return String(value)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
            }

            function showMessage(type, message) {
                uploadMessage.innerHTML = '<div class="alert alert-' + type + ' mb-0">' + escapeHtml(message) + '</div>';
            }

            function renderList(items) {
                if (!items.length) {
                    listNode.innerHTML = '<div class="text-muted">No SOP catalog documents uploaded yet.</div>';
                    countNode.textContent = '0 documents';
                    return;
                }

                countNode.textContent = items.length + (items.length === 1 ? ' document' : ' documents');
                listNode.innerHTML = items.map(function (item) {
                    const statusBadge = item.is_active
                        ? '<span class="badge bg-success-subtle text-success">Active</span>'
                        : '<span class="badge bg-secondary-subtle text-secondary">Inactive</span>';

                    return (
                        '<div class="border rounded p-3 mb-3 d-flex flex-wrap justify-content-between align-items-center gap-3">' +
                            '<div>' +
                                '<div class="fw-semibold fs-5 text-dark">' + escapeHtml(item.title) + '</div>' +
                                '<div class="text-muted small mt-1">Added on ' + escapeHtml(item.added_on || '') + '</div>' +
                                '<div class="mt-2">' + statusBadge + '</div>' +
                            '</div>' +
                            '<div class="d-flex flex-wrap gap-2">' +
                                '<button type="button" class="btn btn-sm ' + (item.is_active ? 'btn-outline-warning' : 'btn-outline-success') + ' sop-catalog-toggle" data-id="' + item.id + '" data-active="' + (item.is_active ? '0' : '1') + '">' +
                                    (item.is_active ? 'Deactivate' : 'Activate') +
                                '</button>' +
                                '<button type="button" class="btn btn-sm btn-outline-danger sop-catalog-delete" data-id="' + item.id + '" ' + (item.has_imports ? 'disabled title="Already imported by a pharmacy"' : '') + '>Delete</button>' +
                            '</div>' +
                        '</div>'
                    );
                }).join('');
            }

            async function loadCatalog() {
                const response = await fetch('/api/sop-catalog', {
                    headers: { 'Accept': 'application/json' },
                });
                const payload = await response.json();
                if (!response.ok || !payload.success) {
                    listNode.innerHTML = '<div class="text-danger">Could not load SOP catalog.</div>';
                    return;
                }
                renderList(payload.data || []);
            }

            async function uploadFilesSequentially(files) {
                const total = files.length;
                let completed = 0;
                progressWrap.style.display = 'block';
                uploadBtn.disabled = true;

                for (const file of files) {
                    progressText.textContent = 'Uploading ' + (completed + 1) + ' of ' + total + '...';
                    progressBar.style.width = Math.round((completed / total) * 100) + '%';

                    const formData = new FormData();
                    formData.append('_token', csrfToken);
                    formData.append('sop_documents[]', file);

                    const response = await fetch('/api/sop-catalog', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        body: formData,
                    });

                    const payload = await response.json();
                    if (!response.ok || !payload.success) {
                        throw new Error(payload.message || 'Upload failed for ' + file.name);
                    }

                    completed++;
                }

                progressBar.style.width = '100%';
                progressText.textContent = 'Uploaded ' + total + ' of ' + total;
                uploadBtn.disabled = false;
                fileInput.value = '';
                showMessage('success', total === 1 ? 'Document uploaded successfully.' : total + ' documents uploaded successfully.');
                await loadCatalog();
                setTimeout(function () {
                    progressWrap.style.display = 'none';
                    progressBar.style.width = '0%';
                }, 800);
            }

            uploadForm.addEventListener('submit', async function (event) {
                event.preventDefault();
                uploadMessage.innerHTML = '';

                const files = Array.from(fileInput.files || []);
                if (!files.length) {
                    showMessage('warning', 'Choose at least one Word document to upload.');
                    return;
                }

                try {
                    await uploadFilesSequentially(files);
                } catch (error) {
                    uploadBtn.disabled = false;
                    progressWrap.style.display = 'none';
                    showMessage('danger', error.message || 'Upload failed.');
                    await loadCatalog();
                }
            });

            listNode.addEventListener('click', async function (event) {
                const toggleBtn = event.target.closest('.sop-catalog-toggle');
                const deleteBtn = event.target.closest('.sop-catalog-delete');

                if (toggleBtn) {
                    const id = toggleBtn.getAttribute('data-id');
                    const isActive = toggleBtn.getAttribute('data-active') === '1';
                    const response = await fetch('/api/sop-catalog/' + id + '/toggle-active', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': csrfToken,
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        body: JSON.stringify({ is_active: isActive }),
                    });
                    const payload = await response.json();
                    if (!response.ok || !payload.success) {
                        alert(payload.message || 'Could not update catalog item.');
                        return;
                    }
                    await loadCatalog();
                }

                if (deleteBtn && !deleteBtn.disabled) {
                    if (!confirm('Delete this catalog document and remove its file from storage?')) {
                        return;
                    }

                    const id = deleteBtn.getAttribute('data-id');
                    const response = await fetch('/api/sop-catalog/' + id, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': csrfToken,
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                    });
                    const payload = await response.json();
                    if (!response.ok || !payload.success) {
                        alert(payload.message || 'Could not delete catalog item.');
                        return;
                    }
                    await loadCatalog();
                }
            });

            loadCatalog();
        });
    </script>
@endsection
