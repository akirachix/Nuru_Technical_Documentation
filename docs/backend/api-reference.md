# 3.5 API Reference

The E-Loop REST API is organized into resource groups, each with its own dedicated router module to manage specific operational boundaries and multi-tenant data structures.



## Resource Router Groups

| Resource | Prefix | Purpose |
| :--- | :--- | :--- |
| **Auth / Users** | `/api/users`, `/api/auth` | User account registration, login authentication, and credential management. |
| **Companies** | `/api/companies` | Profile management for recycling center operators and refinery company tenants. |
| **Device Intakes** | `/api/device-intakes` | Ingestion step logging incoming e-waste lots arriving at local recycling facilities. |
| **Scanned Devices** | `/api/scanned-devices` | Individual component classification capturing, material calculation, and scoring. |
| **Batches** | `/api/batches` | Batch lifecycle control: creation, showroom listing, and batch-level aggregation. |
| **Bookings** | `/api/bookings` | Refinery booking holds and procurement request pipelines against listed inventory. |



## Authentication Endpoints

Handles secure identity validation, credential verification, and token issuance workflows.

| Method | Endpoint | Purpose |
| :---: | :--- | :--- |
| <Badge type="tip" text="POST" /> | `/auth/login` | Authenticates a user with email + password before issuing a credential token. Returns **401 Unauthorized** on invalid credentials, or **429 Too Many Requests** if the account crosses threshold limits. |
| <Badge type="tip" text="POST" /> | `/auth/forgot-password` | Accepts a user's email; if it matches an active profile, it triggers a password reset email sent via standard **SMTP protocol pipelines**. |
| <Badge type="tip" text="POST" /> | `/auth/reset-password` | Finalizes credential remediation by processing a secure, valid reset token form parsed out of the recovery link handler. |


## Company Endpoints

Manages structural organizational setups, corporate profiles, admin provisioning flows, and multi-tenant domain keys.

| Method | Endpoint | Purpose |
| :---: | :--- | :--- |
| <Badge type="tip" text="POST" /> | `/company/` | Provisions a new corporate tenant inside the core network and generates a clean, secure onboarding setup token. |
| <Badge type="tip" text="POST" /> | `/company/resend-setup` | Dispatches setup instructions back out to an organization using a standard enterprise email account lookup pattern. |
| <Badge type="tip" text="POST" /> | `/company/setup-admin` | Configures the foundational corporate administrator profile for a tenant using a pre-validated setup token string. |
| <Badge type="info" text="GET" /> | `/company/` | Compiles a listing payload of all registered company nodes, constrained by explicit, database-friendly pagination defaults. |
| <Badge type="info" text="GET" /> | `/company/{company_id}` | Locates and extracts data metrics matching a target company node using its primary database entry key. |
| <Badge type="warning" text="PATCH" /> | `/company/{company_id}` | Updates specific properties or data variables inside an existing company profile configuration by passing its unique identifier. |
| <Badge type="danger" text="DELETE" /> | `/company/{company_id}` | Drops an organizational tenant completely from the shared platform registry via its system identifier. |


## User Endpoints

Governs individual worker profiles, directory registries, administrative access escalations, and account deactivation flags.

| Method | Endpoint | Purpose |
| :---: | :--- | :--- |
| <Badge type="tip" text="POST" /> | `/user/` | Compiles data and instantiates a new account worker node inside the network database **(Requires Admin privileges)**. |
| <Badge type="info" text="GET" /> | `/user/` | Aggregates all registered system profiles using standard pagination properties **(Requires Admin privileges)**. |
| <Badge type="info" text="GET" /> | `/user/me` | Fetches the current, active caller's personal identity profiles, context flags, and multi-tenant security metrics. |
| <Badge type="info" text="GET" /> | `/user/directory/names` | Pulls down a streamlined, non-sensitive public index directory parsing only active employee first and last names. |
| <Badge type="info" text="GET" /> | `/user/{user_id}` | Pulls down detailed information tracking a target individual by executing a record lookup with their identifier. |
| <Badge type="warning" text="PATCH" /> | `/user/{user_id}` | Modifies internal access rights or administrative parameters on a specific user entry line **(Requires Admin privileges)**. |
| <Badge type="warning" text="PATCH" /> | `/user/{user_id}/deactivate` | Administrative security switch to immediately lock out an account and revoke token parsing rights **(Requires Admin privileges)**. |
| <Badge type="warning" text="PATCH" /> | `/user/me` | Allows a worker to modify properties on their own account profile grid, such as names or notification settings. |


## Device Intakes Endpoints

Logs raw e-waste lot parameters arriving from delivery nodes prior to sorting line entry.

| Method | Endpoint | Purpose |
| :---: | :--- | :--- |
| <Badge type="tip" text="POST" /> | `/device-intake/` | Creates a new physical device intake record inside the system model layer **(Requires Recycling Center access scope)**. |
| <Badge type="info" text="GET" /> | `/device-intake/` | Lists all indexed device intake lots with database-friendly pagination defaults enforced. |
| <Badge type="info" text="GET" /> | `/device-intake/user/{user_id}` | Gathers a historical collection of device intake entries recorded by a targeted center employee `user_id`. |
| <Badge type="info" text="GET" /> | `/device-intake/{device_id}` | Isolates and extracts data metrics tracking a unique delivery lot via its system `device_id`. |
| <Badge type="warning" text="PATCH" /> | `/device-intake/{device_id}` | Updates log specifics or entry metrics for a recorded intake run **(Requires Recycling Center access scope)**. |
| <Badge type="danger" text="DELETE" /> | `/device-intake/{device_id}` | Purges a target delivery intake entry from the platform storage tables **(Requires Recycling Center access scope)**. |


## Scanned Device Endpoints

This module ingests, filters, and manages individual element logs processed by the vision infrastructure or monitored via the operator dashboard.

| Method | Endpoint | Purpose |
| :---: | :--- | :--- |
| <Badge type="tip" text="POST" /> | `/api/scanned-devices` | Creates a scanned device entry after local YOLOv8s classification. Automatically executes material lookup, determines individual tier values, and persists records. |
| <Badge type="info" text="GET" /> | `/api/scanned-devices/{scanned_device_id}` | Retrieves detailed metrics, metadata, and calculated material profiles for a specific scanned device. |
| <Badge type="info" text="GET" /> | `/api/scanned-devices` | Fetches a global historical collection of scanned device entries across the multi-tenant scope. |
| <Badge type="info" text="GET" /> | `/api/scanned-devices/batch/{batch_id}` | Extracts a collection array containing all underlying scanned devices grouped inside a targeted `batch_id`. |
| <Badge type="warning" text="PATCH" /> | `/api/scanned-devices/batch/{batch_id}` | Updates existing properties or classification overrides for scanned items nested within a specified batch lot. |
| <Badge type="danger" text="DELETE" /> | `/api/scanned-devices/batch/{batch_id}` | Flushes or purges scanned device records assigned to an active, unsubmitted `batch_id` payload. |


## Batch Endpoints

Manages physical lot aggregation pipelines, composition calculations, and state machine listings for your inventory packages.

| Method | Endpoint | Purpose |
| :---: | :--- | :--- |
| <Badge type="tip" text="POST" /> | `/api/batches` | Creates a new batch lot within the storage system. Initial state variable automatically defaults to **`In Progress`**. |
| <Badge type="info" text="GET" /> | `/api/batches/{batch_id}` | Retrieves the profile, status information, and metrics record matching a specific `batch_id`. |
| <Badge type="info" text="GET" /> | `/api/batches/{user_id}` | Pulls a collection of batch entities filtered by the system identifier of the assigning operator `user_id`. |
| <Badge type="warning" text="PATCH" /> | `/api/batches/{batch_id}` | **Critical Endpoint:** Computes average material compositions, maps classification weights to tier matrices, and pushes the batch state forward to **`Listed`**. |
| <Badge type="warning" text="PUT" /> | `/api/batches/{batch_id}` | Updates full structural batch parameters or forces linear state changes across the tracking chain (e.g., `Listed` $\rightarrow$ `Booked` $\rightarrow$ `Completed`). |
| <Badge type="danger" text="DELETE" /> | `/api/batches/{batch_id}` | Removes a batch lot entry directly from the database ledger by passing its unique identifier string. |


## Booking Endpoints

Governs marketplace holds, contract reservations, and dynamic transaction statuses submitted by refinery buyers.

| Method | Endpoint | Purpose |
| :---: | :--- | :--- |
| <Badge type="tip" text="POST" /> | `/api/booking` | Generates a new marketplace procurement hold request, claiming a listing directly out of the active catalogue browser. |
| <Badge type="info" text="GET" /> | `/api/booking/{booking_id}` | Retrieves the transactional log, tracking details, and fulfillment information for a specific `booking_id`. |
| <Badge type="info" text="GET" /> | `/api/booking/{user_id}` | Pulls a descriptive list profile collection of current or past bookings created by a specific refinery buyer `user_id`. |
| <Badge type="warning" text="PATCH" /> | `/api/booking/{booking_id}` | Modifies transaction lifecycle details or logs status confirmation notes across the catalog dashboard backend. |
