# Loading Button Component

A reusable button component that automatically shows a loading spinner when clicked, providing visual feedback to users during asynchronous operations.

## Features

-   ✅ Automatic loading state management
-   ✅ Customizable loading text and spinner appearance
-   ✅ Multiple button variants and sizes
-   ✅ Blade component for easy template usage
-   ✅ JavaScript API for programmatic control
-   ✅ Form integration support with validation handling
-   ✅ Bootstrap form validation compatibility
-   ✅ Accessibility compliant
-   ✅ Responsive design

## Quick Start

### Using Blade Component

```blade
<x-loading-button
    text="Save Changes"
    variant="primary"
    loading-text="Saving..."
/>
```

### Using HTML with Data Attributes

```html
<button
    class="btn btn-primary"
    data-loading-button
    data-loading-text="Processing..."
>
    Click Me
</button>
```

### Using JavaScript API

```javascript
const button = new LoadingButton("#myButton", {
    loadingText: "Loading...",
    spinnerSize: "sm",
    spinnerColor: "white",
});

button.showLoading();
button.hideLoading();
```

## Blade Component Props

| Prop           | Type    | Default          | Description                                                                                  |
| -------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------- |
| `text`         | string  | 'Submit'         | Button text                                                                                  |
| `loadingText`  | string  | 'Please wait...' | Text shown during loading                                                                    |
| `type`         | string  | 'button'         | Button type (button, submit, reset)                                                          |
| `variant`      | string  | 'primary'        | Button variant (primary, secondary, success, danger, warning, info, light, dark, outline-\*) |
| `size`         | string  | ''               | Button size (sm, lg)                                                                         |
| `spinnerSize`  | string  | 'sm'             | Spinner size (xs, sm, md, lg)                                                                |
| `spinnerColor` | string  | ''               | Spinner color (white, primary, secondary, etc.)                                              |
| `loadingClass` | string  | 'loading'        | CSS class added during loading                                                               |
| `disabled`     | boolean | false            | Whether button is disabled                                                                   |
| `class`        | string  | ''               | Additional CSS classes                                                                       |
| `id`           | string  | null             | Button ID                                                                                    |
| `onclick`      | string  | null             | Onclick handler                                                                              |
| `form`         | string  | null             | Form ID to associate with                                                                    |
| `name`         | string  | null             | Button name                                                                                  |
| `value`        | string  | null             | Button value                                                                                 |

## Data Attributes

| Attribute             | Description                       |
| --------------------- | --------------------------------- |
| `data-loading-button` | Marks element as a loading button |
| `data-loading-text`   | Custom loading text               |
| `data-spinner-size`   | Spinner size (xs, sm, md, lg)     |
| `data-spinner-color`  | Spinner color                     |
| `data-loading-class`  | CSS class added during loading    |

## JavaScript API

### Constructor

```javascript
new LoadingButton(element, options);
```

**Parameters:**

-   `element` - DOM element or selector string
-   `options` - Configuration object

**Options:**

-   `loadingText` - Text shown during loading
-   `spinnerSize` - Spinner size (xs, sm, md, lg)
-   `spinnerColor` - Spinner color
-   `disabledClass` - CSS class for disabled state
-   `loadingClass` - CSS class for loading state

### Methods

#### `showLoading(text)`

Shows loading state on the button.

**Parameters:**

-   `text` (optional) - Custom loading text

#### `hideLoading()`

Hides loading state and restores original button state.

#### `isLoading()`

Returns whether the button is currently in loading state.

#### `setLoadingText(text)`

Updates the loading text.

#### `setSpinnerSize(size)`

Updates the spinner size.

#### `setSpinnerColor(color)`

Updates the spinner color.

#### `handleValidationError()`

Handles validation errors by hiding the loading state and resetting the submit trigger flag.

#### `showLoadingImmediately(text)`

Shows loading state immediately without waiting for validation. Useful for server-side validation scenarios.

### Static Methods

#### `LoadingButton.initAll(selector, options)`

Initializes all loading buttons matching the selector.

**Parameters:**

-   `selector` - CSS selector (default: '[data-loading-button]')
-   `options` - Default options for all buttons

## Examples

### Basic Usage

```blade
<!-- Primary button -->
<x-loading-button text="Save" variant="primary" />

<!-- Success button with custom loading text -->
<x-loading-button
    text="Delete"
    variant="danger"
    loading-text="Deleting..."
/>

<!-- Large button with custom spinner -->
<x-loading-button
    text="Upload"
    variant="info"
    size="lg"
    spinner-size="md"
    spinner-color="white"
/>
```

### Form Integration

```blade
<form class="needs-validation" novalidate>
    <div class="mb-3">
        <input type="text" class="form-control" placeholder="Enter name" required>
    </div>
    <x-loading-button
        text="Submit"
        variant="primary"
        type="submit"
        loading-text="Submitting..."
    />
</form>
```

**Important:** For proper validation handling, add `class="needs-validation" novalidate` to your form element.

### Server-Side Validation Handling

For forms that use server-side validation (like Laravel's validation), the loading button will:

1. Show loading state when form is submitted
2. Keep loading state visible until server responds
3. Page reloads with validation errors (loading state disappears naturally)

```javascript
// Example for server-side validation
loginForm.addEventListener("submit", function (e) {
    // Check client-side validation first
    if (!loginForm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        loadingButton.handleValidationError();
        return;
    }

    // Show loading immediately for server-side validation
    loadingButton.showLoadingImmediately();
    // Form submits normally, loading persists until page reloads
});
```

### JavaScript Control

```javascript
// Initialize button
const button = new LoadingButton("#myButton");

// Show loading
button.showLoading("Processing...");

// Hide loading after async operation
setTimeout(() => {
    button.hideLoading();
}, 3000);

// Check loading state
if (button.isLoading()) {
    console.log("Button is loading");
}
```

### Custom Event Handling

```javascript
const button = new LoadingButton("#myButton");

button.element.addEventListener("loading:start", function (e) {
    console.log("Loading started:", e.detail.loadingText);
});

button.element.addEventListener("loading:end", function (e) {
    console.log("Loading ended");
});
```

## Styling

The component includes comprehensive CSS styles that work with Bootstrap themes. You can customize the appearance by overriding CSS variables or classes:

```scss
// Custom loading button styles
.btn[data-loading-button] {
    &.loading {
        opacity: 0.8;
        pointer-events: none;
    }

    .spinner-border {
        animation: spinner-border 0.75s linear infinite;
    }
}
```

## Browser Support

-   Chrome 60+
-   Firefox 55+
-   Safari 12+
-   Edge 79+

## Accessibility

The component includes proper ARIA attributes and keyboard navigation support:

-   `role="status"` on spinner
-   `aria-hidden="true"` on decorative spinner
-   Proper focus management
-   Screen reader friendly

## Integration Notes

1. The component automatically initializes all buttons with `data-loading-button` attribute
2. Loading state is preserved across page refreshes
3. Works with form validation and submission
4. Compatible with Bootstrap 5.x themes
5. Supports dark mode automatically
