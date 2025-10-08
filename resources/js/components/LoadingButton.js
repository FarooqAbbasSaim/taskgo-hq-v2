/**
 * LoadingButton Component
 * A reusable button component that shows loading state when clicked
 */
class LoadingButton {
    constructor(element, options = {}) {
        this.element =
            typeof element === "string"
                ? document.querySelector(element)
                : element;
        this.options = {
            loadingText: "Please wait...",
            spinnerSize: "sm",
            spinnerColor: "",
            disabledClass: "disabled",
            loadingClass: "loading",
            ...options,
        };

        if (!this.element) {
            console.error("LoadingButton: Element not found");
            return;
        }

        this.init();
    }

    init() {
        // Store original content
        this.originalContent = this.element.innerHTML;
        this.originalDisabled = this.element.disabled;

        // For submit buttons, handle form validation properly
        if (this.element.type === "submit") {
            this.initSubmitButton();
        } else {
            // For non-submit buttons, add click event listener
            this.element.addEventListener("click", (e) => {
                if (!this.element.disabled && !this.isLoading()) {
                    this.showLoading();
                }
            });
        }
    }

    initSubmitButton() {
        const form = this.element.closest("form");
        if (!form) return;

        // Store reference to this button
        this.form = form;
        this.submitTriggered = false;

        // Listen to form submit event
        form.addEventListener("submit", (e) => {
            // Check if this button triggered the submit
            if (document.activeElement === this.element) {
                this.submitTriggered = true;

                // For forms with validation, wait for validation to complete
                if (
                    form.classList.contains("needs-validation") ||
                    !form.hasAttribute("novalidate")
                ) {
                    // Use requestAnimationFrame to ensure validation has run
                    requestAnimationFrame(() => {
                        if (form.checkValidity() && this.submitTriggered) {
                            this.showLoading();
                        } else {
                            this.submitTriggered = false;
                        }
                    });
                } else {
                    // No validation, show loading immediately
                    this.showLoading();
                }
            }
        });

        // Reset submit triggered flag on form reset or validation failure
        form.addEventListener("invalid", () => {
            this.submitTriggered = false;
        });

        // Also listen to click for immediate feedback on validation failure
        this.element.addEventListener("click", (e) => {
            if (!this.element.disabled && !this.isLoading()) {
                // Small delay to allow validation to run
                setTimeout(() => {
                    if (!this.submitTriggered && form.checkValidity()) {
                        this.showLoading();
                    }
                }, 50);
            }
        });
    }

    showLoading(text = null) {
        if (this.isLoading()) return;

        const loadingText = text || this.options.loadingText;
        const spinnerSize = this.options.spinnerSize
            ? `spinner-border-${this.options.spinnerSize}`
            : "spinner-border-sm";
        const spinnerColor = this.options.spinnerColor
            ? `text-${this.options.spinnerColor}`
            : "";

        // Store original state
        this.element.dataset.originalContent = this.originalContent;
        this.element.dataset.originalDisabled =
            this.originalDisabled.toString();

        // Update button state
        this.element.disabled = true;
        this.element.classList.add(this.options.loadingClass);

        // Update content
        this.element.innerHTML = `
            <span class="spinner-border ${spinnerSize} ${spinnerColor} me-2" role="status" aria-hidden="true"></span>
            ${loadingText}
        `;

        // Trigger custom event
        this.element.dispatchEvent(
            new CustomEvent("loading:start", {
                detail: { button: this.element, loadingText },
            })
        );
    }

    hideLoading() {
        if (!this.isLoading()) return;

        // Restore original state
        this.element.innerHTML =
            this.element.dataset.originalContent || this.originalContent;
        this.element.disabled =
            this.element.dataset.originalDisabled === "true" ? true : false;
        this.element.classList.remove(this.options.loadingClass);

        // Clean up data attributes
        delete this.element.dataset.originalContent;
        delete this.element.dataset.originalDisabled;

        // Trigger custom event
        this.element.dispatchEvent(
            new CustomEvent("loading:end", {
                detail: { button: this.element },
            })
        );
    }

    isLoading() {
        return (
            this.element.classList.contains(this.options.loadingClass) ||
            this.element.querySelector(".spinner-border") !== null
        );
    }

    setLoadingText(text) {
        this.options.loadingText = text;
    }

    setSpinnerSize(size) {
        this.options.spinnerSize = size;
    }

    setSpinnerColor(color) {
        this.options.spinnerColor = color;
    }

    // Method to handle validation errors
    handleValidationError() {
        if (this.isLoading()) {
            this.hideLoading();
        }
        this.submitTriggered = false;
    }

    // Method to show loading immediately (useful for server-side validation)
    showLoadingImmediately(text = null) {
        this.showLoading(text);
    }

    // Static method to initialize all loading buttons on page
    static initAll(selector = "[data-loading-button]", options = {}) {
        const buttons = document.querySelectorAll(selector);
        const instances = [];

        buttons.forEach((button) => {
            const buttonOptions = {
                ...options,
                ...this.getOptionsFromDataAttributes(button),
            };
            instances.push(new LoadingButton(button, buttonOptions));
        });

        return instances;
    }

    // Extract options from data attributes
    static getOptionsFromDataAttributes(element) {
        const options = {};

        if (element.dataset.loadingText) {
            options.loadingText = element.dataset.loadingText;
        }

        if (element.dataset.spinnerSize) {
            options.spinnerSize = element.dataset.spinnerSize;
        }

        if (element.dataset.spinnerColor) {
            options.spinnerColor = element.dataset.spinnerColor;
        }

        if (element.dataset.loadingClass) {
            options.loadingClass = element.dataset.loadingClass;
        }

        return options;
    }
}

// Auto-initialize loading buttons when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    LoadingButton.initAll();
});

// Export for use in other modules
window.LoadingButton = LoadingButton;
