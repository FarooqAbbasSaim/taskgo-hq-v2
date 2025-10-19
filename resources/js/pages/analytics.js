// Import Chart.js
import { Chart } from "chart.js";

// Clean analytics.js for appointments chart
document.addEventListener("DOMContentLoaded", async () => {
    console.log("Analytics script loaded");

    // Get CSRF token once for all API calls
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content");

    // Fetch appointments data
    let appointmentsData = null;
    try {
        console.log("Fetching appointments data from API...");

        const response = await fetch("/api/dashboard/appointments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken || "",
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(
                `API request failed with status ${response.status}`
            );
        }

        const result = await response.json();
        console.log("Appointments API Response:", result);

        if (result.success) {
            appointmentsData = result.data;
            console.log("Appointments data loaded:", appointmentsData);

            // Update the display values
            const thisMonthElement =
                document.querySelector('[data-target="2"]');
            const lastMonthElement =
                document.querySelector('[data-target="8"]');
            const revenuePercentageElement = document.querySelector(
                '[data-target="-72.6"]'
            );

            if (thisMonthElement) {
                thisMonthElement.textContent = result.data.this_month;
            }
            if (lastMonthElement) {
                lastMonthElement.textContent = result.data.last_month;
            }
            if (revenuePercentageElement) {
                revenuePercentageElement.textContent =
                    result.data.revenue_change_percentage;
            }

            // Create the chart
            createAppointmentsChart(appointmentsData);
        }
    } catch (error) {
        console.error("Error fetching appointments data:", error);
    }

    // Fetch Rx Orders data
    let rxOrdersData = null;
    try {
        console.log("Fetching Rx Orders data from API...");

        const rxResponse = await fetch("/api/dashboard/rx-orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken || "",
                Accept: "application/json",
            },
        });

        if (!rxResponse.ok) {
            throw new Error(
                `Rx Orders API request failed with status ${rxResponse.status}`
            );
        }

        const rxResult = await rxResponse.json();
        console.log("Rx Orders API Response:", rxResult);

        if (rxResult.success) {
            rxOrdersData = rxResult.data;
            console.log("Rx Orders data loaded:", rxOrdersData);

            // Update the display values
            const processedElement =
                document.querySelector('[data-target="78"]');
            const pendingElement = document.querySelector('[data-target="22"]');
            const totalOrdersElement = document.querySelector(
                '[data-target="2389"]'
            );

            console.log("Found elements:", {
                processedElement: !!processedElement,
                pendingElement: !!pendingElement,
                totalOrdersElement: !!totalOrdersElement,
            });

            // Debug: Log the actual elements found
            console.log("Element details:", {
                processedElement: processedElement,
                pendingElement: pendingElement,
                totalOrdersElement: totalOrdersElement,
            });

            if (processedElement) {
                console.log(
                    "Updating processed from",
                    processedElement.textContent,
                    "to",
                    rxResult.data.processed_percentage
                );
                processedElement.textContent =
                    rxResult.data.processed_percentage;
            }
            if (pendingElement) {
                console.log(
                    "Updating pending from",
                    pendingElement.textContent,
                    "to",
                    rxResult.data.pending_percentage
                );
                pendingElement.textContent = rxResult.data.pending_percentage;
            }
            if (totalOrdersElement) {
                console.log(
                    "Updating total orders from",
                    totalOrdersElement.textContent,
                    "to",
                    rxResult.data.total_orders_this_month.toLocaleString()
                );
                totalOrdersElement.textContent =
                    rxResult.data.total_orders_this_month.toLocaleString();
            } else {
                // Fallback: try to find the element by text content
                console.log(
                    "totalOrdersElement not found, trying fallback selector..."
                );
                const fallbackElement = document.querySelector(
                    'span[data-target="2389"]'
                );
                if (fallbackElement) {
                    console.log("Found fallback element:", fallbackElement);
                    fallbackElement.textContent =
                        rxResult.data.total_orders_this_month.toLocaleString();
                } else {
                    console.log("Fallback element also not found");
                }
            }

            // Update progress bars
            const processedProgressBar = document.getElementById(
                "processedProgressBar"
            );
            const pendingProgressBar =
                document.getElementById("pendingProgressBar");

            console.log("Found progress bars:", {
                processedProgressBar: !!processedProgressBar,
                pendingProgressBar: !!pendingProgressBar,
            });

            if (processedProgressBar) {
                console.log(
                    "Updating processed progress bar to",
                    rxResult.data.processed_percentage + "%"
                );
                processedProgressBar.style.width =
                    rxResult.data.processed_percentage + "%";
            }
            if (pendingProgressBar) {
                console.log(
                    "Updating pending progress bar to",
                    rxResult.data.pending_percentage + "%"
                );
                pendingProgressBar.style.width =
                    rxResult.data.pending_percentage + "%";
            }

            console.log("Updated Rx Orders data:", {
                processed: rxResult.data.processed_percentage,
                pending: rxResult.data.pending_percentage,
                total: rxResult.data.total_orders_this_month,
            });
        }
    } catch (error) {
        console.error("Error fetching Rx Orders data:", error);
    }

    // Fetch Rx Users data
    let rxUsersData = null;
    try {
        console.log("Fetching Rx Users data from API...");

        const rxUsersResponse = await fetch("/api/dashboard/rx-users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken || "",
                Accept: "application/json",
            },
        });

        if (!rxUsersResponse.ok) {
            throw new Error(
                `Rx Users API request failed with status ${rxUsersResponse.status}`
            );
        }

        const rxUsersResult = await rxUsersResponse.json();
        console.log("Rx Users API Response:", rxUsersResult);

        if (rxUsersResult.success) {
            rxUsersData = rxUsersResult.data;
            console.log("Rx Users data loaded:", rxUsersData);

            // Update the display values in footnote
            const totalUsersElement = document.querySelector(
                '[data-target="2000"]'
            );
            const malePercentageElement =
                document.querySelector('[data-target="90"]');
            const femalePercentageElement =
                document.querySelector('[data-target="10"]');

            if (totalUsersElement) {
                totalUsersElement.textContent =
                    rxUsersResult.data.total_users.toLocaleString();
            }
            if (malePercentageElement) {
                malePercentageElement.textContent =
                    rxUsersResult.data.male_percentage;
            }
            if (femalePercentageElement) {
                femalePercentageElement.textContent =
                    rxUsersResult.data.female_percentage;
            }

            // Create the age group pie chart
            createRxUsersChart(rxUsersData);
        }
    } catch (error) {
        console.error("Error fetching Rx Users data:", error);
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
