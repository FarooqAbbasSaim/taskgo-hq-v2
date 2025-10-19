import { CustomChartJs, ins } from "../app";

const getRandomPromptData = () => {
    return Array.from(
        { length: 7 },
        () => Math.floor(Math.random() * (300 - 100 + 1)) + 100
    );
};

// Prevent multiple initializations
let chartsInitialized = false;

// Initialize charts after DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
    if (chartsInitialized) {
        console.log("Charts already initialized, skipping...");
        return;
    }
    chartsInitialized = true;

    // Add a small delay to ensure DOM is fully rendered
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Fetch appointments data first
    let appointmentsData = null;
    try {
        console.log("Fetching appointments data from API...");

        // Get CSRF token
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        const response = await fetch("/api/dashboard/appointments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken || "",
                Accept: "application/json",
            },
        });

        console.log("Appointments API response status:", response.status);
        console.log("Appointments API response ok:", response.ok);

        if (!response.ok) {
            console.error(
                "Appointments API failed with status:",
                response.status
            );
            const errorText = await response.text();
            console.error("Error response:", errorText);
            throw new Error(
                `API request failed with status ${response.status}`
            );
        }

        const result = await response.json();
        console.log("Appointments API Response:", result);
        console.log("Appointments API Response status:", response.status);
        console.log("Response headers:", response.headers);

        // Debug the chart data specifically
        if (result.success && result.data && result.data.chart) {
            console.log("Chart data received:", result.data.chart);
            console.log(
                "Chart labels count:",
                result.data.chart.labels ? result.data.chart.labels.length : 0
            );
            console.log(
                "Chart data count:",
                result.data.chart.data ? result.data.chart.data.length : 0
            );
        }

        if (result.success) {
            appointmentsData = result.data;
            console.log(
                "Appointments data loaded successfully:",
                appointmentsData
            );
            console.log("Chart data from API:", appointmentsData.chart);
            console.log(
                "Chart labels from API:",
                appointmentsData.chart.labels
            );
            console.log(
                "Chart data array from API:",
                appointmentsData.chart.data
            );
            console.log(
                "Chart data length from API:",
                appointmentsData.chart.data.length
            );

            // Verify the data matches expected values
            const expectedData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 157, 270, 74];
            const dataMatches =
                JSON.stringify(appointmentsData.chart.data) ===
                JSON.stringify(expectedData);
            console.log("Data matches expected values:", dataMatches);
            if (!dataMatches) {
                console.error(
                    "Data mismatch! Expected:",
                    expectedData,
                    "Got:",
                    appointmentsData.chart.data
                );
            }

            // Update the This month and Last month values
            console.log("Looking for elements with data-target attributes...");

            // Try multiple selectors to find the elements
            const thisMonthElement =
                document.querySelector('[data-target="2"]') ||
                document.querySelector('span[data-target="2"]') ||
                document.querySelector('div[data-target="2"]');

            const lastMonthElement =
                document.querySelector('[data-target="8"]') ||
                document.querySelector('span[data-target="8"]') ||
                document.querySelector('div[data-target="8"]');

            const revenuePercentageElement =
                document.querySelector('[data-target="-72.6"]') ||
                document.querySelector('span[data-target="-72.6"]') ||
                document.querySelector('div[data-target="-72.6"]');

            console.log("Found elements:", {
                thisMonthElement,
                lastMonthElement,
                revenuePercentageElement,
                thisMonthElementText: thisMonthElement?.textContent,
                lastMonthElementText: lastMonthElement?.textContent,
                revenuePercentageElementText:
                    revenuePercentageElement?.textContent,
            });
            console.log("API data:", {
                this_month: result.data.this_month,
                last_month: result.data.last_month,
                revenue_change_percentage:
                    result.data.revenue_change_percentage,
            });

            // Also log all elements with data-target attributes for debugging
            const allDataTargetElements =
                document.querySelectorAll("[data-target]");
            console.log(
                "All elements with data-target:",
                Array.from(allDataTargetElements).map((el) => ({
                    element: el,
                    dataTarget: el.getAttribute("data-target"),
                    textContent: el.textContent,
                    tagName: el.tagName,
                }))
            );

            if (thisMonthElement) {
                const oldValue = thisMonthElement.textContent;
                const thisMonthValue = result.data.this_month || 0;
                thisMonthElement.textContent = thisMonthValue;
                thisMonthElement.setAttribute("data-target", thisMonthValue);
                thisMonthElement.innerHTML = thisMonthValue; // Also update innerHTML
                console.log(
                    `Updated this month element from "${oldValue}" to "${result.data.this_month}"`
                );

                // Force a re-render by temporarily hiding and showing
                thisMonthElement.style.display = "none";
                setTimeout(() => {
                    thisMonthElement.style.display = "";
                    console.log(
                        `This month element after re-render: "${thisMonthElement.textContent}"`
                    );
                }, 10);

                // Set up a periodic check to see if something is overriding our changes
                let checkCount = 0;
                const checkInterval = setInterval(() => {
                    checkCount++;
                    if (
                        thisMonthElement.textContent !==
                        result.data.this_month.toString()
                    ) {
                        console.warn(
                            `This month element was overridden! Expected: ${result.data.this_month}, Got: ${thisMonthElement.textContent}`
                        );
                        thisMonthElement.textContent = result.data.this_month;
                        thisMonthElement.innerHTML = result.data.this_month;
                    }
                    if (checkCount >= 10) {
                        // Check for 1 second (10 * 100ms)
                        clearInterval(checkInterval);
                    }
                }, 100);
            } else {
                console.error(
                    "This month element not found! Tried selectors: [data-target='124'], span[data-target='124'], div[data-target='124']"
                );

                // Fallback: Try to find by text content
                const fallbackThisMonth = Array.from(
                    document.querySelectorAll("span")
                ).find((span) => span.textContent.trim() === "124");
                if (fallbackThisMonth) {
                    console.log(
                        "Found this month element by text content fallback"
                    );
                    fallbackThisMonth.textContent = result.data.this_month;
                    fallbackThisMonth.setAttribute(
                        "data-target",
                        result.data.this_month
                    );
                }
            }

            if (lastMonthElement) {
                const oldValue = lastMonthElement.textContent;
                const lastMonthValue = result.data.last_month || 0;
                lastMonthElement.textContent = lastMonthValue;
                lastMonthElement.setAttribute("data-target", lastMonthValue);
                lastMonthElement.innerHTML = lastMonthValue; // Also update innerHTML
                console.log(
                    `Updated last month element from "${oldValue}" to "${result.data.last_month}"`
                );

                // Force a re-render by temporarily hiding and showing
                lastMonthElement.style.display = "none";
                setTimeout(() => {
                    lastMonthElement.style.display = "";
                    console.log(
                        `Last month element after re-render: "${lastMonthElement.textContent}"`
                    );
                }, 10);

                // Set up a periodic check to see if something is overriding our changes
                let checkCount2 = 0;
                const checkInterval2 = setInterval(() => {
                    checkCount2++;
                    if (
                        lastMonthElement.textContent !==
                        result.data.last_month.toString()
                    ) {
                        console.warn(
                            `Last month element was overridden! Expected: ${result.data.last_month}, Got: ${lastMonthElement.textContent}`
                        );
                        lastMonthElement.textContent = result.data.last_month;
                        lastMonthElement.innerHTML = result.data.last_month;
                    }
                    if (checkCount2 >= 10) {
                        // Check for 1 second (10 * 100ms)
                        clearInterval(checkInterval2);
                    }
                }, 100);
            } else {
                console.error(
                    "Last month element not found! Tried selectors: [data-target='8'], span[data-target='8'], div[data-target='8']"
                );

                // Fallback: Try to find by text content
                const fallbackLastMonth = Array.from(
                    document.querySelectorAll("span")
                ).find((span) => span.textContent.trim() === "8");
                if (fallbackLastMonth) {
                    console.log(
                        "Found last month element by text content fallback"
                    );
                    fallbackLastMonth.textContent = result.data.last_month;
                    fallbackLastMonth.setAttribute(
                        "data-target",
                        result.data.last_month
                    );
                }
            }

            // Update revenue percentage
            if (revenuePercentageElement) {
                const oldValue = revenuePercentageElement.textContent;
                const revenuePercentageValue =
                    result.data.revenue_change_percentage || 0;
                revenuePercentageElement.textContent = revenuePercentageValue;
                revenuePercentageElement.setAttribute(
                    "data-target",
                    revenuePercentageValue
                );
                revenuePercentageElement.innerHTML = revenuePercentageValue;
                console.log(
                    `Updated revenue percentage element from "${oldValue}" to "${result.data.revenue_change_percentage}"`
                );
            } else {
                console.error(
                    "Revenue percentage element not found! Tried selectors: [data-target='-72.6'], span[data-target='-72.6'], div[data-target='-72.6']"
                );
            }

            // Update the existing chart with new data instead of recreating
            console.log("Updating appointments chart with loaded data...");
            console.log("Current appointmentsData:", appointmentsData);
            console.log(
                "Current appointmentsData.chart:",
                appointmentsData.chart
            );

            // Always create the chart with API data
            console.log("Creating appointments chart with API data");
            createChartIfExists("#appointmentsChart", () => {
                        console.log(
                            "Creating new appointments chart with API data"
                        );
                        const chartLabels = appointmentsData.chart.labels || [
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
                        const chartData = appointmentsData.chart.data || [];

                        // Always create chart, even with zero values
                        console.log("Creating chart with data:", chartData);

                        // Debug: Log data alignment
                        console.log("Chart recreation debug:", {
                            labels: chartLabels,
                            chartData: chartData,
                            tooltips: appointmentsData.chart.tooltips,
                            labelsLength: chartLabels.length,
                            dataLength: chartData.length,
                            tooltipsLength: appointmentsData.chart.tooltips
                                ? appointmentsData.chart.tooltips.length
                                : 0,
                        });

                        // Verify data alignment
                        if (chartLabels.length !== chartData.length) {
                            console.error(
                                "Mismatch: labels and data arrays have different lengths!"
                            );
                        }
                        if (
                            appointmentsData.chart.tooltips &&
                            chartData.length !==
                                appointmentsData.chart.tooltips.length
                        ) {
                            console.error(
                                "Mismatch: chart data and tooltips arrays have different lengths!"
                            );
                        }

                        return {
                            type: "bar",
                            data: {
                                labels: chartLabels,
                                datasets: [
                                    {
                                        data: chartData,
                                        backgroundColor: ins("chart-primary"),
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
                                                if (
                                                    appointmentsData &&
                                                    appointmentsData.chart &&
                                                    appointmentsData.chart
                                                        .tooltips
                                                ) {
                                                    return appointmentsData
                                                        .chart.tooltips[
                                                        context[0].dataIndex
                                                    ].month;
                                                }
                                                return context[0].label;
                                            },
                                            label: function (context) {
                                                if (
                                                    appointmentsData &&
                                                    appointmentsData.chart &&
                                                    appointmentsData.chart
                                                        .tooltips
                                                ) {
                                                    return `Revenue: ${
                                                        appointmentsData.chart
                                                            .tooltips[
                                                            context.dataIndex
                                                        ].revenue
                                                    }`;
                                                }
                                                return `Revenue: €${context.parsed.y.toLocaleString()}`;
                                            },
                                        },
                                    },
                                },
                                scales: {
                                    x: {
                                        display: false,
                                        grid: { display: false },
                                    },
                                    y: {
                                        display: false,
                                        grid: { display: false },
                                    },
                                },
                            },
                        };
                    });

                    console.log("Chart recreated successfully with API data");
                } catch (error) {
                    console.error("Error updating chart:", error);
                    // Fallback to recreation if update fails
                    console.log("Falling back to chart recreation...");
                    setTimeout(() => {
                        createChartIfExists("#appointmentsChart", () => {
                            console.log(
                                "Creating appointments chart with data:",
                                appointmentsData
                            );
                            const chartLabels = appointmentsData.chart
                                .labels || [
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
                            const chartData = appointmentsData.chart.data || [];

                            // Create chart with available data
                            console.log("Creating fallback chart with data:", chartData);

                            // Debug: Log data alignment for fallback chart
                            console.log("Fallback chart creation debug:", {
                                labels: chartLabels,
                                chartData: chartData,
                                tooltips: appointmentsData.chart.tooltips,
                                labelsLength: chartLabels.length,
                                dataLength: chartData.length,
                                tooltipsLength: appointmentsData.chart.tooltips
                                    ? appointmentsData.chart.tooltips.length
                                    : 0,
                            });

                            return {
                                type: "bar",
                                data: {
                                    labels: chartLabels,
                                    datasets: [
                                        {
                                            data: chartData,
                                            backgroundColor:
                                                ins("chart-primary"),
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
                                                    if (
                                                        appointmentsData &&
                                                        appointmentsData.chart &&
                                                        appointmentsData.chart
                                                            .tooltips
                                                    ) {
                                                        return appointmentsData
                                                            .chart.tooltips[
                                                            context[0].dataIndex
                                                        ].month;
                                                    }
                                                    return context[0].label;
                                                },
                                                label: function (context) {
                                                    if (
                                                        appointmentsData &&
                                                        appointmentsData.chart &&
                                                        appointmentsData.chart
                                                            .tooltips
                                                    ) {
                                                        return `Revenue: ${
                                                            appointmentsData
                                                                .chart.tooltips[
                                                                context
                                                                    .dataIndex
                                                            ].revenue
                                                        }`;
                                                    }
                                                    return `Revenue: €${context.parsed.y.toLocaleString()}`;
                                                },
                                            },
                                        },
                                    },
                                    scales: {
                                        x: {
                                            display: false,
                                            grid: { display: false },
                                        },
                                        y: {
                                            display: false,
                                            grid: { display: false },
                                        },
                                    },
                                },
                            };
                        });
                    }, 50);
                }
            } else {
                console.log("No existing chart found, creating new one...");
                createChartIfExists("#appointmentsChart", () => {
                    console.log(
                        "Creating new appointments chart with data:",
                        appointmentsData
                    );
                    const chartLabels = appointmentsData.chart.labels || [
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
                    const chartData = appointmentsData.chart.data || [];

                    // Create chart with available data
                    console.log("Creating new chart with data:", chartData);

                    // Debug: Log data alignment for new chart
                    console.log("New chart creation debug:", {
                        labels: chartLabels,
                        chartData: chartData,
                        tooltips: appointmentsData.chart.tooltips,
                        labelsLength: chartLabels.length,
                        dataLength: chartData.length,
                        tooltipsLength: appointmentsData.chart.tooltips
                            ? appointmentsData.chart.tooltips.length
                            : 0,
                    });

                    return {
                        type: "bar",
                        data: {
                            labels: chartLabels,
                            datasets: [
                                {
                                    data: chartData,
                                    backgroundColor: ins("chart-primary"),
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
                                            if (
                                                appointmentsData &&
                                                appointmentsData.chart &&
                                                appointmentsData.chart.tooltips
                                            ) {
                                                return appointmentsData.chart
                                                    .tooltips[
                                                    context[0].dataIndex
                                                ].month;
                                            }
                                            return context[0].label;
                                        },
                                        label: function (context) {
                                            if (
                                                appointmentsData &&
                                                appointmentsData.chart &&
                                                appointmentsData.chart.tooltips
                                            ) {
                                                return `Revenue: ${
                                                    appointmentsData.chart
                                                        .tooltips[
                                                        context.dataIndex
                                                    ].revenue
                                                }`;
                                            }
                                            return `Revenue: €${context.parsed.y.toLocaleString()}`;
                                        },
                                    },
                                },
                            },
                            scales: {
                                x: {
                                    display: false,
                                    grid: { display: false },
                                },
                                y: {
                                    display: false,
                                    grid: { display: false },
                                },
                            },
                        },
                    };
                });
            }
        }
    } catch (error) {
        console.error("Error fetching appointments data:", error);
    }

    // Fetch Rx Orders data
    let rxOrdersData = null;
    try {
        console.log("Fetching Rx Orders data from API...");

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        const rxResponse = await fetch("/api/dashboard/rx-orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken || "",
                Accept: "application/json",
            },
        });
        const rxResult = await rxResponse.json();
        console.log("Rx Orders API Response:", rxResult);

        if (rxResult.success) {
            rxOrdersData = rxResult.data;

            // Update the processed percentage
            const processedElement =
                document.querySelector('[data-target="78"]');
            if (processedElement) {
                processedElement.textContent =
                    rxResult.data.processed_percentage;
                processedElement.setAttribute(
                    "data-target",
                    rxResult.data.processed_percentage
                );
            }

            // Update the pending percentage
            const pendingElement = document.querySelector('[data-target="22"]');
            if (pendingElement) {
                pendingElement.textContent = rxResult.data.pending_percentage;
                pendingElement.setAttribute(
                    "data-target",
                    rxResult.data.pending_percentage
                );
            }

            // Update today's orders
            const todayOrdersElement =
                document.querySelector('[data-target="47"]');
            if (todayOrdersElement) {
                todayOrdersElement.textContent = rxResult.data.today_orders;
                todayOrdersElement.setAttribute(
                    "data-target",
                    rxResult.data.today_orders
                );
            }

            // Update progress bars
            const processedProgressBar = document.getElementById(
                "processedProgressBar"
            );
            const pendingProgressBar =
                document.getElementById("pendingProgressBar");

            if (processedProgressBar) {
                processedProgressBar.style.width =
                    rxResult.data.processed_percentage + "%";
            }
            if (pendingProgressBar) {
                pendingProgressBar.style.width =
                    rxResult.data.pending_percentage + "%";
            }

            console.log("Updated Rx Orders data:", {
                processed: rxResult.data.processed_percentage,
                pending: rxResult.data.pending_percentage,
                today: rxResult.data.today_orders,
            });
        }
    } catch (error) {
        console.error("Error fetching Rx Orders data:", error);
    }

    // Fetch Rx Users data
    let rxUsersData = null;
    try {
        console.log("Fetching Rx Users data from API...");

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        const rxUsersResponse = await fetch("/api/dashboard/rx-users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken || "",
                Accept: "application/json",
            },
        });
        const rxUsersResult = await rxUsersResponse.json();
        console.log("Rx Users API Response:", rxUsersResult);

        if (rxUsersResult.success) {
            rxUsersData = rxUsersResult.data;

            // Update the male percentage
            const maleElement = document.querySelector('[data-target="25"]');
            if (maleElement) {
                maleElement.textContent = rxUsersResult.data.male_percentage;
                maleElement.setAttribute(
                    "data-target",
                    rxUsersResult.data.male_percentage
                );
            }

            // Update the female percentage
            const femaleElement = document.querySelector('[data-target="75"]');
            if (femaleElement) {
                femaleElement.textContent =
                    rxUsersResult.data.female_percentage;
                femaleElement.setAttribute(
                    "data-target",
                    rxUsersResult.data.female_percentage
                );
            }

            console.log("Updated Rx Users data:", {
                male: rxUsersResult.data.male_percentage,
                female: rxUsersResult.data.female_percentage,
                male_count: rxUsersResult.data.male,
                female_count: rxUsersResult.data.female,
            });
        }
    } catch (error) {
        console.error("Error fetching Rx Users data:", error);
    }

    // Fetch OpenAI API Usage data
    let openAIUsageData = null;
    try {
        console.log("Fetching OpenAI API Usage data from API...");

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        const openAIResponse = await fetch("/api/dashboard/openai-usage", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken || "",
                Accept: "application/json",
            },
        });
        const openAIResult = await openAIResponse.json();
        console.log("OpenAI API Usage Response:", openAIResult);

        if (openAIResult.success) {
            openAIUsageData = openAIResult.data;

            // Update today's requests
            const todayElement = document.querySelector(
                '[data-target="2,847"]'
            );
            if (todayElement) {
                todayElement.textContent =
                    openAIResult.data.today.toLocaleString();
                todayElement.setAttribute(
                    "data-target",
                    openAIResult.data.today
                );
            }

            // Update yesterday's requests
            const yesterdayElement = document.querySelector(
                '[data-target="2,634"]'
            );
            if (yesterdayElement) {
                yesterdayElement.textContent =
                    openAIResult.data.yesterday.toLocaleString();
                yesterdayElement.setAttribute(
                    "data-target",
                    openAIResult.data.yesterday
                );
            }

            console.log("Updated OpenAI API Usage data:", {
                today: openAIResult.data.today,
                yesterday: openAIResult.data.yesterday,
                increase: openAIResult.data.increase_percentage,
            });
        }
    } catch (error) {
        console.error("Error fetching OpenAI API Usage data:", error);
    }

    // Helper function to create chart only if element exists
    const createChartIfExists = (selector, options) => {
        const element = document.querySelector(selector);
        if (element) {
            // Destroy existing chart if it exists
            try {
                if (window.Chart && Chart.getChart(element)) {
                    console.log(`Destroying existing chart for ${selector}`);
                    Chart.getChart(element).destroy();
                }
            } catch (error) {
                console.warn(`Error destroying chart for ${selector}:`, error);
            }

            // Clear the canvas
            const ctx = element.getContext("2d");
            if (ctx) {
                ctx.clearRect(0, 0, element.width, element.height);
            }

            console.log(
                `Creating new chart for ${selector} with options:`,
                options()
            );
            const chart = new CustomChartJs({ selector, options });

            // Store chart instance globally for appointments chart
            if (selector === "#appointmentsChart") {
                window.appointmentsChart = chart;
                console.log("Stored appointments chart instance:", chart);

                // Debug the actual chart data after creation
                if (chart && chart.chart) {
                    console.log("Chart created successfully!");
                    console.log("Chart data labels:", chart.chart.data.labels);
                    console.log(
                        "Chart data datasets:",
                        chart.chart.data.datasets
                    );
                    console.log(
                        "Chart data labels length:",
                        chart.chart.data.labels.length
                    );
                    console.log(
                        "Chart data datasets[0].data length:",
                        chart.chart.data.datasets[0].data.length
                    );
                }
            }

            return chart;
        } else {
            console.warn(`Chart element not found: ${selector}`);
        }
    };

    // Create appointments chart with 12 months of sample data initially
    // Only create if no API data is available yet
    if (!appointmentsData) {
        console.log(
            "No appointments data available yet, waiting for API response..."
        );
        return;
    }

    // Create Rx Users pie chart (gender distribution)
    createChartIfExists("#rxUsersChart", () => {
        return {
            type: "pie",
            data: {
                labels: ["Male", "Female"],
                datasets: [
                    {
                        data: rxUsersData
                            ? [rxUsersData.male, rxUsersData.female]
                            : [0, 0],
                        backgroundColor: [
                            ins("chart-primary"),
                            ins("chart-secondary"),
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function (ctx) {
                                const total = ctx.dataset.data.reduce(
                                    (a, b) => a + b,
                                    0
                                );
                                const percentage =
                                    total > 0
                                        ? Math.round((ctx.parsed / total) * 100)
                                        : 0;
                                return `${ctx.label}: ${ctx.parsed} (${percentage}%)`;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        display: false,
                        grid: { display: false },
                        ticks: { display: false },
                    },
                    y: {
                        display: false,
                        grid: { display: false },
                        ticks: { display: false },
                    },
                },
            },
        };
    });

    // Create OpenAI API Usage line chart
    createChartIfExists("#tokenChart", () => {
        return {
            type: "line",
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        data: [65, 78, 90, 81, 56, 55, 40],
                        borderColor: ins("chart-primary"),
                        backgroundColor: ins("chart-primary"),
                        fill: false,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 4,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                },
                scales: {
                    x: {
                        display: false,
                        grid: { display: false },
                    },
                    y: {
                        display: false,
                        grid: { display: false },
                    },
                },
            },
        };
    });
});
