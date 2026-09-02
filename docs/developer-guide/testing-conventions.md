# Testing Conventions

This guide explains how we structure, name, mock, and check coverage for tests across our project.


## Structure

### Arrange-Act-Assert (AAA) Rule
All tests must follow three steps in order:
*   **Arrange:** Set up variables, create fake data, or open the correct page.
*   **Act:** Run the function, call the API endpoint, or click the button.
*   **Assert:** Check that the outcome, status code, or screen change is correct.

### Folder Layout
Keep test files in these exact project folders:

```text
project-root/
├── informational-website/
│   └── cypress/
│       └── integration/
│           ├── body.cy.js
│           ├── footer.cy.js
│           └── functionality.cy.js
├── backend/
│   └── postman/
│       └── [collections].json
└── dashboard/
    ├── playwright.config.ts
    └── tests/
        └── example.spec.ts
```


## Naming

### File Names
*   **Website Tests (Cypress):** End names with `.cy.js` (like `body.cy.js`).
*   **API Tests (Postman):** Name files after the endpoint they test.
*   **Dashboard Tests (Playwright):** End names with `.spec.ts` (like `example.spec.ts`).

### Test Names
*   **Cypress:** Name blocks by the area they check (like footer or button clicks).
*   **Postman:** Use clear, short messages inside `pm.test()`.
    *   *Example:* `pm.test("Status code is 201 Created")`
*   **Playwright:** Write a full sentence explaining what the user should see.
    *   *Example:* `test('should handle successful device registration CRUD flows')`


## Mocking

### API Tests (Postman)
*   **Variables:** Use text tags like `{{BASE_URL}}` to change paths from local machines to the live Heroku server.
*   **Error Check:** Test how the system handles bad requests (like 401, 403, 422, or 500 errors) to see how it acts when things fail.

### Dashboard Tests (Playwright)
*   **Network Catching:** Stop real API calls before they leave the browser using Playwright tools.
*   **Fake Data:** Send back fake JSON text instead of hitting the live backend database.
*   **Clean Up:** Wipe fields clean, delete typed text, and reset forms before running the next step.


## Coverage

### What Must Be Tested
*   **Website:** Check 100% of fonts, layouts, pages, and click actions for crashes.
*   **API Endpoints:** Test all data fields and error states on the Device Intake API (`/device-intake/`).
*   **Dashboard:** Test 100% of the main pages (Dashboard, Registration, Batch Analysis) and form options (Create, Update, Delete).

### How to Run Tests
*   **Local Setup:** Run `npm run dev` in your dashboard folder, then use `npx playwright test --ui` to open the visual test screen.
*   **Code Controls:** The system runs these test blocks automatically before code merges. Pushes will lock and fail if a test breaks or a screen loads incorrectly.
