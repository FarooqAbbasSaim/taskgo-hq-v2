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
        const result = await response.json();
        console.log("API Response:", result);

        if (result.success) {
            appointmentsData = result.data;

            // Update the Today and Yesterday values
            console.log("Looking for elements with data-target attributes...");

            // Try multiple selectors to find the elements
            const todayElement =
                document.querySelector('[data-target="124"]') ||
                document.querySelector('span[data-target="124"]') ||
                document.querySelector('div[data-target="124"]');

            const yesterdayElement =
                document.querySelector('[data-target="89"]') ||
                document.querySelector('span[data-target="89"]') ||
                document.querySelector('div[data-target="89"]');

            console.log("Found elements:", {
                todayElement,
                yesterdayElement,
                todayElementText: todayElement?.textContent,
                yesterdayElementText: yesterdayElement?.textContent,
            });
            console.log("API data:", {
                today: result.data.today,
                yesterday: result.data.yesterday,
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

            if (todayElement) {
                const oldValue = todayElement.textContent;
                todayElement.textContent = result.data.today;
                todayElement.setAttribute("data-target", result.data.today);
                todayElement.innerHTML = result.data.today; // Also update innerHTML
                console.log(
                    `Updated today element from "${oldValue}" to "${result.data.today}"`
                );

                // Force a re-render by temporarily hiding and showing
                todayElement.style.display = "none";
                setTimeout(() => {
                    todayElement.style.display = "";
                    console.log(
                        `Today element after re-render: "${todayElement.textContent}"`
                    );
                }, 10);

                // Set up a periodic check to see if something is overriding our changes
                let checkCount = 0;
                const checkInterval = setInterval(() => {
                    checkCount++;
                    if (
                        todayElement.textContent !==
                        result.data.today.toString()
                    ) {
                        console.warn(
                            `Today element was overridden! Expected: ${result.data.today}, Got: ${todayElement.textContent}`
                        );
                        todayElement.textContent = result.data.today;
                        todayElement.innerHTML = result.data.today;
                    }
                    if (checkCount >= 10) {
                        // Check for 1 second (10 * 100ms)
                        clearInterval(checkInterval);
                    }
                }, 100);
            } else {
                console.error(
                    "Today element not found! Tried selectors: [data-target='124'], span[data-target='124'], div[data-target='124']"
                );

                // Fallback: Try to find by text content
                const fallbackToday = Array.from(
                    document.querySelectorAll("span")
                ).find((span) => span.textContent.trim() === "124");
                if (fallbackToday) {
                    console.log("Found today element by text content fallback");
                    fallbackToday.textContent = result.data.today;
                    fallbackToday.setAttribute(
                        "data-target",
                        result.data.today
                    );
                }
            }

            if (yesterdayElement) {
                const oldValue = yesterdayElement.textContent;
                yesterdayElement.textContent = result.data.yesterday;
                yesterdayElement.setAttribute(
                    "data-target",
                    result.data.yesterday
                );
                yesterdayElement.innerHTML = result.data.yesterday; // Also update innerHTML
                console.log(
                    `Updated yesterday element from "${oldValue}" to "${result.data.yesterday}"`
                );

                // Force a re-render by temporarily hiding and showing
                yesterdayElement.style.display = "none";
                setTimeout(() => {
                    yesterdayElement.style.display = "";
                    console.log(
                        `Yesterday element after re-render: "${yesterdayElement.textContent}"`
                    );
                }, 10);

                // Set up a periodic check to see if something is overriding our changes
                let checkCount2 = 0;
                const checkInterval2 = setInterval(() => {
                    checkCount2++;
                    if (
                        yesterdayElement.textContent !==
                        result.data.yesterday.toString()
                    ) {
                        console.warn(
                            `Yesterday element was overridden! Expected: ${result.data.yesterday}, Got: ${yesterdayElement.textContent}`
                        );
                        yesterdayElement.textContent = result.data.yesterday;
                        yesterdayElement.innerHTML = result.data.yesterday;
                    }
                    if (checkCount2 >= 10) {
                        // Check for 1 second (10 * 100ms)
                        clearInterval(checkInterval2);
                    }
                }, 100);
            } else {
                console.error(
                    "Yesterday element not found! Tried selectors: [data-target='89'], span[data-target='89'], div[data-target='89']"
                );

                // Fallback: Try to find by text content
                const fallbackYesterday = Array.from(
                    document.querySelectorAll("span")
                ).find((span) => span.textContent.trim() === "89");
                if (fallbackYesterday) {
                    console.log(
                        "Found yesterday element by text content fallback"
                    );
                    fallbackYesterday.textContent = result.data.yesterday;
                    fallbackYesterday.setAttribute(
                        "data-target",
                        result.data.yesterday
                    );
                }
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

            return new CustomChartJs({ selector, options });
        } else {
            console.warn(`Chart element not found: ${selector}`);
        }
    };

    // Create appointments chart
    createChartIfExists("#appointmentsChart", () => {
        return {
            type: "bar",
            data: {
                labels: appointmentsData
                    ? appointmentsData.chart.labels
                    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        data: appointmentsData
                            ? appointmentsData.chart.data
                            : getRandomPromptData(),
                        backgroundColor: ins("chart-primary"),
                        borderRadius: 4,
                        borderSkipped: false,
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
                                return `${ctx.label}: ${ctx.parsed}%`;
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
