# 13.3 End-to-End Tests (Playwright)

End-to-end testing simulates real-world workflows to validate that frontend interfaces, interactive data models, form inputs, and backend routing endpoints coordinate flawlessly across the entire ecosystem.

## 1. Setup & Environment Initialization

Follow these configuration steps to download required browser drivers and initialize a production-ready test sandbox:

### Step A. Launch Local App Build
Ensure your target interface builds are actively running in a terminal instance prior to launching automation pipelines:
```bash
npm run dev
```

### Step B. Spin Up the Test Framework
Split your integrated terminal window within your code editor (VS Code) to preserve your running server instance, open a fresh command console session, and run the following bootstrap command:
```bash
npm init playwright@latest
```

### Automated Configuration Output
The layout engine automatically handles several background initialization tasks during initialization:
* Instantiates a sample tracking test file at **`tests/example.spec.ts`**.
* Generates a primary framework configuration asset file at **`playwright.config.ts`**.
* Pulls down localized binary versions of target browsing rendering engines (**Chromium**, **Firefox**, and **Webkit**).

## 2. Launching the Interactive Test Interface

Once your installation dependencies settle completely, execute the following command block to spin up the specialized Playwright visual controller:

```bash
npx playwright test --ui
```

From this unified graphic user dashboard tool, you can trigger specific automation lines, evaluate rendering loops, analyze failure trace profiles, and test any targeted application layout context or form flow.


## 3. Sample Automation Profile: Device Registration

The automated spec file target validates the core layout parameters, lifecycle behaviors, data persistence routes, and data validation boundaries built into the **eLoop Dashboard's Register Device Page**.

### A. Form UI & Layout Validations
* **Navigation Integrity:** Verifies critical header elements to confirm route links like `"Dashboard"`, `"Registration"`, and `"Batch Analysis"` are present and route properly.
* **Component Verification:** Audits mandatory form selectors to ensure interactive dropdown fields, the submission action block button, and metadata placeholder text alignments (`serial numbers`, `brands`, `weights`, `source vendors`) render completely.

### B. Form CRUD Functionalities
* **Record Initialization (CREATE):** Validates device registration mechanics by mocking a structured `POST` API event transaction returning a safe **`201 Created`** code. It simulates user parameter data keystrokes and asserts that a confirmation message appears on-screen.
* **Record Modification (UPDATE):** Asserts record mutation durability parameters by pulling an active item through lookup parameters, mocking explicit `GET` and `PUT` context frames returning **`200 OK`**, modifying the target `brand` parameter text string, and resubmitting the form.
* **Field Deletion (DELETE):** Evaluates form management handling values by populating the serial identifier input field, executing a complete clear command sequence, and verifying the targeted DOM property returns cleanly to an empty string structure.

### C. Form Input Validation & Error Handling
* **Mandatory Field Constraints:** Enforces client-side form compliance parameters by triggering the form submission action component while all input fields remain empty, confirming visible HTML validation flags or inline alert alerts render.
* **Typing Restrictions:** Evaluates data boundary integrity across numerical inputs by attempting to write alphabetical character blocks directly into the weight entry field, asserting that invalid user inputs are immediately rejected.
