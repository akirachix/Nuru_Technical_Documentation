## QA Documentation 

The application uses the Playwright framework to validate user flows, API synchronization, and interface layout behaviors across the entire PWA ecosystem in a single continuous pipeline.

### Project Initialization & Local Environment Setup

Run all commands from the project root directory:

1. **Start the Local Server:**
   `npm run dev`
2. **Open a Split Terminal and Initialize Playwright:**
   `npm init playwright@latest`
   * Installs browser targets (**Chromium**, **Firefox**, **WebKit**).
   * Generates configuration engine settings inside `playwright.config.ts`.
   * Provisions standard baseline scripts inside `tests/example.spec.ts`.

### Primary Test Commands
* **Open Interactive Test Dashboard:** `npx playwright test --ui`
* **Execute Full PWA Test Suite (Headless):** `npx playwright test`
* **Display Local HTML Test Report:** `npx playwright show-report`

### Repository Specifications & Log Artifacts
* **`./test-results/`:** Logs debugging screenshots and traces recorded during automated execution failures.
* **`./playwright-report/`:** Holds structural files tracking local execution history details.

### Full PWA Testing Matrix Strategy

The automation suite tests the entire PWA ecosystem as a whole to evaluate cross-page states, end-to-end integration boundaries, and critical interface components across every active screen:

#### App Initialization & Onboarding States
* Validates user lifecycle flows from the initial landing portal (`src/app/welcome/page.tsx`) through the multi-tenant registration portals (`src/app/signup/`).
* Confirms account provisioning routes by testing admin credential verification checks and new worker roster logging procedures (`src/app/dashboard/workers/new/page.tsx`).

#### Activity Hub & Workspace Analytics
* Asserts metric calculations inside the main console workspace (`src/app/recycling/page.tsx`).
* Validates near-real-time summary tiles (`Active Batch`, `Devices Today`, `Batches`, `Bookings`) and checks toggle filter actions for interactive charts built with Recharts.

#### Device Registration Workflow
* **Layout Check:** Confirms visibility of global header navigation links (`Dashboard`, `Registration`, and `Batch Analysis`) alongside input fields, placeholders, drop-down menus, and action components.
* **Create Action:** Submits valid data, mocks a `POST` network call (`201 Created`), and checks for a success notification banner.
* **Update Action:** Passes a device reference via query parameters, mocks a `GET` and `PUT` workflow (`200 OK`), alters text details, and resubmits.
* **Delete/Clear Action:** Enters values into text containers, fires a field-clear command, and confirms the input value scales back to an empty string.
* **Validation & Errors:** Confirms that the interface blocks non-numeric characters inside the numerical weight box and triggers visible error notifications when attempting to fire an empty form layout payload.

#### Live Edge Scanning & Marketplace Integrations
* Simulates camera stream connectivity and tests visual metadata overlays for e-waste category classifications and dynamic tier assignments (`src/app/recycling/scan/page.tsx`).
* Asserts calculation changes from complete batch groupings (`src/app/recycling/batch-analysis/page.tsx`) down to downstream marketplace catalog list views (`src/app/refinery/catalogue/page.tsx`) and procurement inquiry communication ledgers.
