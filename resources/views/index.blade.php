@extends('layouts.vertical', ['title' => 'HQ Dashboard'])

@section('content')
    <div class="row row-cols-xxl-4 row-cols-md-2 row-cols-1 mt-4">
        <!-- Appointments Widget -->
        <div class="col">
            <div class="card card-h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h5 class="text-uppercase">Appointments</h5>
                        </div>
                        <div>
                            <i class="text-muted fs-24 svg-sw-10" data-lucide="calendar"></i>
                        </div>
                    </div>
                    <div class="mb-3" style="height: 60px; overflow: hidden;">
                        <canvas height="60" id="appointmentsChart"></canvas>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <span class="text-muted">Last month</span>
                            <div class="fw-semibold"><span data-target="8">8</span></div>
                        </div>
                        <div class="text-end">
                            <span class="text-muted">This month</span>
                            <div class="fw-semibold"><span data-target="2">2</span></div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted text-center">
                    <strong>This month's revenue is <span data-target="-72.6">-72.6</span>% from last month</strong>
                </div>
            </div>
        </div>
        <!-- Medication Orders Widget -->
        <div class="col">
            <div class="card card-h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h5 class="text-uppercase mb-5">Medication Orders</h5>
                        </div>
                        <div>
                            <i class="text-muted fs-24 svg-sw-10" data-lucide="package"></i>
                        </div>
                    </div>
                    <div class="progress progress-lg mb-3">
                        <div class="progress-bar bg-success" role="progressbar" id="processedProgressBar" style="width: 0%;"></div>
                        <div class="progress-bar bg-warning" role="progressbar" id="pendingProgressBar" style="width: 0%;"></div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <span class="text-muted">Processed</span>
                            <h5 class="mb-0"><span data-target="78">78</span>%</h5>
                        </div>
                        <div class="text-end">
                            <span class="text-muted">Pending</span>
                            <h5 class="mb-0"><span data-target="22">22</span>%</h5>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted text-center">
                    <strong>Pharmacies have received <span data-target="2389">2,389</span> orders this month</strong>
                </div>
            </div>
        </div>
        <!-- Rx Users Widget -->
        <div class="col">
            <div class="card card-h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h5 class="text-uppercase">Rx Users</h5>
                        </div>
                        <div>
                            <i class="text-muted fs-24 svg-sw-10" data-lucide="users"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <canvas height="120" id="rxUsersChart" width="120"></canvas>
                    </div>
                </div>
                <div class="card-footer text-muted text-center">
                    <span>Total users: <strong data-target="2000">2,000</strong><br/> Male: <strong data-target="90">90</strong>%, Female: <strong data-target="10">10</strong>%</span>
                </div>
            </div>
        </div>
        <!-- OpenAI API Usage Widget -->
        <div class="col">
            <div class="card card-h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h5 class="text-uppercase">OpenAI API Usage</h5>
                        </div>
                        <div>
                            <i class="text-muted fs-24 svg-sw-10" data-lucide="brain"></i>
                        </div>
                    </div>
                    <div class="mb-3">
                        <canvas height="60" id="tokenChart"></canvas>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <span class="text-muted">Today</span>
                            <div class="fw-semibold"><span data-target="2,847">2,847</span> requests</div>
                        </div>
                        <div class="text-end">
                            <span class="text-muted">Yesterday</span>
                            <div class="fw-semibold"><span data-target="2,634">2,634</span> requests</div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted text-center">
                    AI features usage up <strong>8.1%</strong> from yesterday
                </div>
            </div>
        </div>
    </div> <!-- end row-->
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <!-- AI Requests -->
                        <div class="col-xl-3 col-md-6">
                            <div class="text-center">
                                <p class="mb-4"><i data-lucide="bot"></i> AI Requests</p>
                                <h2 class="fw-bold mb-0"><span data-target="807,621">0</span></h2>
                                <p class="text-muted">Total AI requests in last 30 days</p>
                                <p class="mb-0 mt-4"><i data-lucide="calendar"></i> Data from May</p>
                            </div>
                        </div>
                        <!-- Usage Duration -->
                        <div class="col-xl-3 col-md-6 order-xl-last">
                            <div class="text-center">
                                <p class="mb-4"><i data-lucide="timer"></i> Usage Duration</p>
                                <h2 class="fw-bold mb-0"> 9 Months</h2>
                                <p class="text-muted">Including 4 weeks this quarter</p>
                                <p class="mb-0 mt-4"><i data-lucide="clock"></i> Last accessed: 12.06.2025</p>
                            </div>
                        </div>
                        <!-- AI Usage Chart -->
                        <div class="col-xl-6">
                            <div class="w-100" style="height: 240px;">
                                <canvas id="activeUsersChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center text-muted justify-content-between">
                        <div>
                            Last update: 16.06.2025
                        </div>
                        <div>
                            You received 2 new AI feedback reports
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- end row -->
    <div class="row">
        <div class="col-xxl-6">
            <div class="card">
                <div class="card-header justify-content-between align-items-center border-dashed">
                    <h4 class="card-title mb-0">Recent AI Sessions</h4>
                    <div class="d-flex gap-2">
                        <a class="btn btn-sm btn-light" href="javascript:void(0);">
                            <i class="ti ti-plus me-1"></i> New Session
                        </a>
                        <a class="btn btn-sm btn-primary" href="javascript:void(0);">
                            <i class="ti ti-file-export me-1"></i> Export Logs
                        </a>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-centered table-custom table-sm table-nowrap table-hover mb-0">
                            <tbody>
                                <!-- Session Row Example -->
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-1.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Alice Cooper</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5001</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">GPT-4</h5>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-05-01</h5>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">2,304</h5>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Completed</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Repeat more AI session entries -->
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-2.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">David Lee</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5002</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">DALL·E</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-30</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">580</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Pending</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Retry</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-3.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Sophia Turner</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5003</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">Whisper</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-29</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">1,102</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Completed</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Retry</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-4.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">James Wilson</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5004</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">GPT-3.5</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-28</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">760</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i
                                                class="ti ti-circle-filled fs-xs text-danger"></i> Failed</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Retry</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-5.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Ava Carter</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5005</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">Claude 2</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-27</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">1,678</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Completed</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-6.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Ethan Brooks</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5006</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">Gemini Pro</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-26</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">945</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Pending</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Retry</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-7.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Mia Clarke</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5007</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">GPT-4 Turbo</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-25</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">2,189</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Completed</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-8.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Lucas Perry</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5008</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">Stable Diffusion</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-24</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">312</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i
                                                class="ti ti-circle-filled fs-xs text-danger"></i> Failed</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Retry</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-9.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Chloe Adams</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5009</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">GPT-4</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-23</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">1,784</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Completed</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-sm rounded-circle me-2"
                                                src="/images/users/user-10.jpg" />
                                            <div>
                                                <span class="text-muted fs-xs">Benjamin Gray</span>
                                                <h5 class="fs-base mb-0"><a class="text-body" href="#!">#AI-5010</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-muted fs-xs">Model</span>
                                        <h5 class="fs-base mb-0 fw-normal">Whisper</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Date</span>
                                        <h5 class="fs-base mb-0 fw-normal">2025-04-22</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Tokens</span>
                                        <h5 class="fs-base mb-0 fw-normal">890</h5>
                                    </td>
                                    <td><span class="text-muted fs-xs">Status</span>
                                        <h5 class="fs-base mb-0 fw-normal"><i class="ti ti-circle-filled fs-xs"></i>
                                            Pending</h5>
                                    </td>
                                    <td style="width: 30px;">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                                data-bs-toggle="dropdown" href="#">
                                                <i class="ti ti-dots-vertical fs-lg"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">View Details</a>
                                                <a class="dropdown-item" href="#">Retry</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <div class="align-items-center justify-content-between row text-center text-sm-start">
                        <div class="col-sm">
                            <div class="text-muted">Showing <span class="fw-semibold">1</span> to <span
                                    class="fw-semibold">10</span> of <span class="fw-semibold">2684</span>
                                Sessions</div>
                        </div>
                        <div class="col-sm-auto mt-3 mt-sm-0">
                            <ul class="pagination pagination-sm pagination-boxed mb-0 justify-content-center">
                                <li class="page-item disabled"><a class="page-link" href="#"><i
                                            class="ti ti-chevron-left"></i></a></li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#"><i
                                            class="ti ti-chevron-right"></i></a></li>
                            </ul>
                        </div> <!-- end col-->
                    </div> <!-- end row-->
                </div>
            </div> <!-- end card-->
        </div> <!-- end col-->
        <div class="col-xxl-6">
            <div class="card">
                <div class="card-header border-dashed">
                    <h4 class="card-title mb-0">AI Model Usage Summary</h4>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-sm table-centered table-custom table-nowrap mb-0">
                            <thead class="bg-light-subtle thead-sm">
                                <tr class="text-uppercase fs-xxs">
                                    <th>Model</th>
                                    <th>Requests</th>
                                    <th>Total Tokens</th>
                                    <th>Average Tokens</th>
                                    <th>Last Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GPT-4</td>
                                    <td>1,248</td>
                                    <td>2,483,920</td>
                                    <td>1,989</td>
                                    <td>2025-06-15</td>
                                </tr>
                                <tr>
                                    <td>DALL·E</td>
                                    <td>328</td>
                                    <td>194,320</td>
                                    <td>592</td>
                                    <td>2025-06-14</td>
                                </tr>
                                <tr>
                                    <td>Claude 2</td>
                                    <td>814</td>
                                    <td>1,102,390</td>
                                    <td>1,354</td>
                                    <td>2025-06-13</td>
                                </tr>
                                <tr>
                                    <td>Whisper</td>
                                    <td>512</td>
                                    <td>653,210</td>
                                    <td>1,275</td>
                                    <td>2025-06-12</td>
                                </tr>
                                <tr>
                                    <td>Stable Diffusion</td>
                                    <td>102</td>
                                    <td>61,400</td>
                                    <td>602</td>
                                    <td>2025-06-10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer border-top-0 text-end">
                    <span class="text-muted">Updated 1 hour ago</span>
                </div>
            </div> <!-- end card-->
            <div class="card">
                <div class="card-header border-dashed">
                    <h4 class="card-title mb-0">AI API Performance Metrics</h4>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-sm table-centered table-nowrap table-custom mb-0">
                            <thead class="bg-light-subtle thead-sm">
                                <tr class="text-uppercase fs-xxs">
                                    <th>Endpoint</th>
                                    <th>Avg Latency</th>
                                    <th>Requests</th>
                                    <th>Error Rate</th>
                                    <th>Cost ($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>/v1/chat/completions</td>
                                    <td>720ms</td>
                                    <td>8,204</td>
                                    <td>0.18%</td>
                                    <td>128.34</td>
                                </tr>
                                <tr>
                                    <td>/v1/images/generations</td>
                                    <td>930ms</td>
                                    <td>1,029</td>
                                    <td>0.03%</td>
                                    <td>43.89</td>
                                </tr>
                                <tr>
                                    <td>/v1/audio/transcriptions</td>
                                    <td>1.2s</td>
                                    <td>489</td>
                                    <td>0.00%</td>
                                    <td>16.45</td>
                                </tr>
                                <tr>
                                    <td>/v1/embeddings</td>
                                    <td>610ms</td>
                                    <td>2,170</td>
                                    <td>0.10%</td>
                                    <td>24.98</td>
                                </tr>
                                <tr>
                                    <td>/v1/chat/moderation</td>
                                    <td>450ms</td>
                                    <td>5,025</td>
                                    <td>0.01%</td>
                                    <td>7.52</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer border-top-0 text-end">
                    <span class="text-muted">API stats updated: 2025-06-16 08:32 AM</span>
                </div>
            </div>
        </div>
    </div><!-- end row-->

@endsection

@section('scripts')
    {{-- Dashboard charts are now handled in analytics.js --}}
    
    <script>
        // Prevent back button from showing cached pages
        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                // Page was loaded from cache, reload it
                window.location.reload();
            }
        });

        // Clear any cached data when page loads
        if ('caches' in window) {
            caches.keys().then(function(names) {
                names.forEach(function(name) {
                    caches.delete(name);
                });
            });
        }
    </script>
@endsection
