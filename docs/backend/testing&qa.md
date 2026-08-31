## Testing & QA Strategy

The eLoop backend infrastructure uses a multi-tiered testing pipeline. This ensures high reliability for processing requests from edge devices, on-site operators, and downstream buyers.

### Testing Tool Suite

Platform verification and testing are handled by three core tools:

* **Swagger UI / OpenAPI:** Our built-in, real-time testing sandbox layer. It allows immediate, manual parameter exploration straight from the cloud container instance.
* **Postman:** Our centralized workspace framework for building, grouping, and running automated collections of backend API integration requests.
* **Playwright:** Our end-to-end (E2E) visual testing engine. It runs headless browser automation to test complex user workflows across front-end application screens.


### Operational Testing Application Matrix

Our quality assurance protocols use these tools across three direct operational boundaries:

### Manual Endpoint Testing (Swagger UI)
Applied at the code integration boundary for instant developer validation.
* **Where It Applies:** Testing the API gateway parameters during feature development.
* **E-Loop Implementation:** Developers use the `/docs` sandbox to log in, fetch a test **JWT token**, paste it into the authorization header, and run manual `POST` payloads against **`/api/scanned-devices`** to check if the rule-based materials database lookup runs correctly.

#### Integration & Regression Testing (Postman)
Applied to verify communication layer stability across systems and database structures.
* **Where It Applies:** Automating sequence validations, checking data transformations, and running automated regression suites.
* **eLoop Implementation:** Postman collections simulate the automated data streams sent by **Raspberry Pi 5** cameras. The platform passes data collections through the Router, Schema, Service, and Repository layers to verify that **`PATCH /api/batches/{batch_id}`** calculates material volumes accurately and returns matching **High, Medium, Low evaluation tiers** without data errors.

#### End-to-End Workflow Testing (Playwright)
Applied at the interface level to mock real-world operator and buyer lifecycles.
* **Where It Applies:** Automating UI tests, testing complex front-end web paths, and validating end-to-end user data flows.
* **E-Loop Implementation:** Playwright controls automated headless browser engines to simulate user actions across platform applications:
  * **The Intake Scan Loop:** Automation scripts open the operator PWA screen, log into a center profile, fill out an e-waste intake form, trigger a mock edge scan upload, and verify that the UI data updates correctly.
  * **The Procurement Marketplace Loop:** Playwright logs into the refinery mobile portal interface, searches for high-value listings using data tier filters, clicks the direct contact action button, and checks that the system correctly transitions the target lot table record status to **Booked**.


### 3. Execution & Deployment Guardrails

The QA pipeline is integrated into the application lifecycle:

* **Postman CLI Verification:** Postman collection run definitions are automated via CLI runners during backend software builds.
* **Playwright E2E Gates:** Front-end code updates must clear full user-flow test tracks before deployment.
* **Heroku Staging Promotion:** Test suites must hit a 100% pass metric on our isolated testing server before changes can be promoted to the live production environment.
