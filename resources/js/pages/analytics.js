// Import Chart.js
import { Chart } from "chart.js";

// Clean analytics.js for appointments chart
document.addEventListener("DOMContentLoaded", async () => {
    console.log("Analytics script loaded");

    const appointmentsCanvas = document.querySelector("#appointmentsChart");
    const rxUsersCanvas = document.querySelector("#rxUsersChart");
    const totalPharmaciesCanvas = document.querySelector("#totalPharmaciesChart");

    if (!appointmentsCanvas && !rxUsersCanvas && !totalPharmaciesCanvas) {
        return;
    }

    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content");
    const jsonHeaders = {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken || "",
        Accept: "application/json",
    };

    const fetchDashboardJson = async (url) => {
        const response = await fetch(url, { method: "GET", headers: jsonHeaders });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
    };

    // Load widgets in parallel — serial awaits previously summed all API latencies.
    const [appointmentsResult, rxOrdersResult, rxUsersResult, totalPharmaciesResult] =
        await Promise.all([
            fetchDashboardJson("/api/dashboard/appointments").catch((error) => {
                console.error("Error fetching appointments data:", error);
                return null;
            }),
            fetchDashboardJson("/api/dashboard/rx-orders").catch((error) => {
                console.error("Error fetching Rx Orders data:", error);
                return null;
            }),
            fetchDashboardJson("/api/dashboard/rx-users").catch((error) => {
                console.error("Error fetching Rx Users data:", error);
                return null;
            }),
            fetchDashboardJson("/api/dashboard/total-pharmacies").catch((error) => {
                console.error("Error fetching Total Pharmacies data:", error);
                return null;
            }),
        ]);

    if (appointmentsResult?.success) {
        const thisMonthElement = document.getElementById("appointmentsThisMonth");
        const lastMonthElement = document.getElementById("appointmentsLastMonth");
        const revenuePercentageElement = document.getElementById(
            "appointmentsRevenueChange"
        );

        if (thisMonthElement) {
            thisMonthElement.textContent = appointmentsResult.data.this_month;
        }
        if (lastMonthElement) {
            lastMonthElement.textContent = appointmentsResult.data.last_month;
        }
        if (revenuePercentageElement) {
            revenuePercentageElement.textContent =
                appointmentsResult.data.revenue_change_percentage;
        }

        createAppointmentsChart(appointmentsResult.data);
    }

    if (rxOrdersResult?.success) {
        const processedElement = document.querySelector('[data-target="78"]');
        const pendingElement = document.querySelector('[data-target="22"]');
        const totalOrdersElement =
            document.querySelector('[data-target="2389"]') ||
            document.querySelector('span[data-target="2389"]');
        const processedProgressBar = document.getElementById("processedProgressBar");
        const pendingProgressBar = document.getElementById("pendingProgressBar");

        if (processedElement) {
            processedElement.textContent = rxOrdersResult.data.processed_percentage;
        }
        if (pendingElement) {
            pendingElement.textContent = rxOrdersResult.data.pending_percentage;
        }
        if (totalOrdersElement) {
            totalOrdersElement.textContent =
                rxOrdersResult.data.total_orders_this_month.toLocaleString();
        }
        if (processedProgressBar) {
            processedProgressBar.style.width =
                rxOrdersResult.data.processed_percentage + "%";
        }
        if (pendingProgressBar) {
            pendingProgressBar.style.width =
                rxOrdersResult.data.pending_percentage + "%";
        }
    }

    if (rxUsersResult?.success) {
        const totalUsersElement = document.querySelector('[data-target="2000"]');
        const malePercentageElement = document.querySelector('[data-target="90"]');
        const femalePercentageElement = document.querySelector('[data-target="10"]');

        if (totalUsersElement) {
            totalUsersElement.textContent =
                rxUsersResult.data.total_users.toLocaleString();
        }
        if (malePercentageElement) {
            malePercentageElement.textContent = rxUsersResult.data.male_percentage;
        }
        if (femalePercentageElement) {
            femalePercentageElement.textContent =
                rxUsersResult.data.female_percentage;
        }

        createRxUsersChart(rxUsersResult.data);
    }

    if (totalPharmaciesResult?.success) {
        const currentTotalElement = document.getElementById(
            "totalPharmaciesCurrentTotal"
        );
        const currentMonthNewElement = document.getElementById(
            "totalPharmaciesCurrentMonthNew"
        );

        if (currentTotalElement) {
            currentTotalElement.textContent =
                totalPharmaciesResult.data.current_total.toLocaleString();
        }
        if (currentMonthNewElement) {
            currentMonthNewElement.textContent =
                totalPharmaciesResult.data.current_month_new.toLocaleString();
        }

        createTotalPharmaciesChart(totalPharmaciesResult.data);
    }

    function createAppointmentsChart(data) {
        const canvas = document.querySelector("#appointmentsChart");
        if (!canvas) {
            console.error("Appointments chart canvas not found");
            return;
        }

        // Destroy existing chart if it exists
        if (
            window.appointmentsChart &&
            typeof window.appointmentsChart.destroy === "function"
        ) {
            window.appointmentsChart.destroy();
        }

        const ctx = canvas.getContext("2d");

        const chartData = data.chart.data || [];
        const chartLabels = data.chart.labels || [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        console.log("Creating chart with data:", chartData);
        console.log("Chart labels:", chartLabels);

        window.appointmentsChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: chartLabels,
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: "#3f51b5",
                        borderRadius: 4,
                        borderSkipped: false,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            title: function (context) {
                                if (data.chart.tooltips) {
                                    return data.chart.tooltips[
                                        context[0].dataIndex
                                    ].month;
                                }
                                return context[0].label;
                            },
                            label: function (context) {
                                if (data.chart.tooltips) {
                                    return `Revenue: ${
                                        data.chart.tooltips[context.dataIndex]
                                            .revenue
                                    }`;
                                }
                                return `Revenue: €${context.parsed.y.toLocaleString()}`;
                            },
                        },
                    },
                },
                scales: {
                    x: { display: false, grid: { display: false } },
                    y: { display: false, grid: { display: false } },
                },
            },
        });
    }

    function createTotalPharmaciesChart(data) {
        const canvas = document.querySelector("#totalPharmaciesChart");
        if (!canvas) {
            return;
        }

        if (
            window.totalPharmaciesChart &&
            typeof window.totalPharmaciesChart.destroy === "function"
        ) {
            window.totalPharmaciesChart.destroy();
        }

        const ctx = canvas.getContext("2d");
        const styles = getComputedStyle(document.documentElement);
        const primary = styles.getPropertyValue("--bs-primary").trim() || "#3e60d5";
        const primaryRgb =
            styles.getPropertyValue("--bs-primary-rgb").trim() || "62, 96, 213";
        const secondary = styles.getPropertyValue("--bs-secondary-color").trim() || "#6c757d";
        const borderColor =
            styles.getPropertyValue("--bs-border-color").trim() || "rgba(0,0,0,0.1)";

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, `rgba(${primaryRgb}, 0.30)`);
        gradient.addColorStop(1, `rgba(${primaryRgb}, 0.02)`);

        window.totalPharmaciesChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: data.chart.labels,
                datasets: [
                    {
                        label: "Total Pharmacies",
                        data: data.chart.data,
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: primary,
                        borderWidth: 2,
                        tension: 0.35,
                        pointRadius: 3,
                        pointHoverRadius: 4,
                        pointBackgroundColor: primary,
                        pointBorderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            title: function (context) {
                                return data.chart.tooltips?.[context[0].dataIndex]
                                    ?.month || context[0].label;
                            },
                            label: function (context) {
                                const tooltip =
                                    data.chart.tooltips?.[context.dataIndex];
                                const value = context.parsed.y.toLocaleString();
                                const asOf = tooltip?.as_of
                                    ? ` (as of ${tooltip.as_of})`
                                    : "";
                                return `Total pharmacies: ${value}${asOf}`;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: secondary,
                        },
                        border: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0,
                            color: secondary,
                        },
                        grid: {
                            color: borderColor,
                        },
                        border: {
                            display: false,
                        },
                    },
                },
            },
        });
    }

    function createRxUsersChart(data) {
        const canvas = document.querySelector("#rxUsersChart");
        if (!canvas) {
            console.error("Rx Users chart canvas not found");
            return;
        }

        // Destroy existing chart if it exists
        if (
            window.rxUsersChart &&
            typeof window.rxUsersChart.destroy === "function"
        ) {
            window.rxUsersChart.destroy();
        }

        const ctx = canvas.getContext("2d");

        // Prepare data for age groups - filter out zero values
        const ageGroups = data.age_groups;
        const percentages = data.percentages;

        // Filter out age groups with 0 users
        const filteredData = Object.entries(ageGroups).filter(
            ([label, value]) => value > 0
        );
        const labels = filteredData.map(([label]) => label);
        const values = filteredData.map(([label, value]) => value);
        const colors = ["#3f51b5", "#ff9800", "#4caf50", "#f44336"]; // Blue, Orange, Green, Red

        console.log("Creating Rx Users chart with age group data:", {
            originalData: ageGroups,
            filteredLabels: labels,
            filteredValues: values,
            percentages: percentages,
        });

        window.rxUsersChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [
                    {
                        data: values,
                        backgroundColor: colors,
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function (context) {
                                const label = context.label || "";
                                const value = context.parsed;
                                const percentage = percentages[label] || 0;
                                return `${label}: ${value} users (${percentage}%)`;
                            },
                        },
                    },
                },
                cutout: "60%",
            },
        });
    }
});
