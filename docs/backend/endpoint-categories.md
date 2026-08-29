## Endpoint Categories

The E-Loop API organized its operations into seven distinct resource paths. This structure separates core administration, device registration, sorting processes, and downstream refinery purchase pipelines.

### Authentication Endpoints (**`/auth`**)
Manages security sessions, credentials, and token configurations.
* **POST** **`/auth/login`** – Validates user profile access keys and issues active session tokens.
* **POST** **`/auth/forgot-password`** – Handles verification emails to update system keys.
* **POST** **`/auth/reset-password`** – Updates old login credentials safely.

### Company Endpoints (**`/company`**)
Controls tenant organization identities and corporate system setups.
* **POST** **`/company/`** – Enters new partner organizations and returns activation keys.
* **POST** **`/company/resend-setup`** – Pushes new welcome configurations to system profile emails.
* **POST** **`/company/setup-admin`** – Creates the primary administrator profile for an organization.
* **GET** **`/company/`** – Queries all platform-registered corporate listings with pagination.
* **GET** **`/company/{company_id}`** – Pulls a single organizational workspace record.
* **PATCH** **`/company/{company_id}`** – Edits metadata details for a company registration profile.
* **DELETE** **`/company/{company_id}`** – Removes a corporate workspace account layout.

### User Endpoints (**`/user`**)
Handles individual access privileges and profiles across the multi-tenant layout.
* **POST** **`/user/`** – Enters new profiles under admin configuration rules.
* **GET** **`/user/`** – Pulls system profiles with standard data pagination configurations.
* **GET** **`/user/me`** – Fetches tracking credentials for the logged-in system user.
* **GET** **`/user/directory/names`** – Lists public data mappings for organization directory setups.
* **GET** **`/user/{user_id}`** – Resolves an individual identity structure.
* **PATCH** **`/user/{user_id}`** – Modifies database entries for a worker configuration.
* **PATCH** **`/user/{user_id}/deactivate`** – Suspends system profile access records.
* **PATCH** **`/user/me`** – Updates personal account metadata fields.

### Device Intake Endpoints (**`/device-intake`**)
Tracks on-site center operations machinery entering the processing ecosystem.
* **POST** **`/device-intake/`** – Logs incoming hardware device entry configurations.
* **GET** **`/device-intake/`** – Pulls a paginated log of all hardware device profiles.
* **GET** **`/device-intake/user/{user_id}`** – Finds operational hardware entries bound to a user tracking ID.
* **GET** **`/device-intake/{device_id}`** – Pulls metadata for a system-connected machine.
* **PATCH** **`/device-intake/{device_id}`** – Alters internal parameters for a hardware record.
* **DELETE** **`/device-intake/{device_id}`** – Flushes a machine registry log from the system store.

### Scanned Device Endpoints (**`/api/scanned-devices`**)
Processes computer vision classifications sent from line sorting hardware.
* **POST** **`/api/scanned-devices`** – Accepts component classifications from **Raspberry Pi 5** streams.
* **GET** **`/api/scanned-devices/{scanned_device_id}`** – Fetches information for an individual component scanning.
* **GET** **`/api/scanned-devices`** – Pulls all entries inside the component database layout.
* **GET** **`/api/scanned-devices/batch/{batch_id}`** – Compiles component tracking records linked to a specific lot index.
* **PATCH** **`/api/scanned-devices/batch/{batch_id}`** – Edits parameter fields across components in a lot.
* **DELETE** **`/api/scanned-devices/batch/{batch_id}`** – Clears component scanning histories for a lot structure.

### Batch Endpoints (**`/api/batches`**)
Tracks raw waste aggregations from intake through to marketplace availability.
* **POST** **`/api/batches`** – Starts tracking a new incoming e-waste lot.
* **GET** **`/api/batches/{batch_id}`** – Fetches valuation scores and tracking updates for a lot.
* **GET** **`/api/batches/{user_id}`** – Pulls all historical collection logs for an operator.
* **PATCH** **`/api/batches/{batch_id}`** – Calculates internal material volumes and assigns a evaluation tier (**High, Medium, Low**).
* **PUT** **`/api/batches/{batch_id}`** – Transitions material availability states across **Listed, Booked, Completed** stages.
* **DELETE** **`/api/batches/{batch_id}/`** – Removes an e-waste lot from the operational database tree.

### Booking Endpoints (**`/api/booking`**)
Coordinates transactional logistics between marketplace sellers and metallurgy buyers.
* **POST** **`/api/booking`** – Registers an interest contract for a verified e-waste lot.
* **GET** **`/api/booking/{booking_id}`** – Pulls transactional information for a material transfer block.
* **GET** **`/api/booking/{user_id}`** – Gathers acquisition history bound to an authenticated procurement profile.
* **PATCH** **`/api/booking/{booking_id}`** – Updates downstream coordination tracking metrics.


## Database Relationships

The system backend manages multi-tenant isolation, automated edge data collection, and marketplace sales through six core data table connections.

| **No.**  | From Table | To Table | Connection Type | Functional System Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **`companies`** | **`users`** | One-to-Many | A registered facility profile hosts multiple worker profiles, tying operators or buyers to a corporate identity. |
| **2** | **`users`** | **`device_intake`** | One-to-Many | An on-site operator logs multiple physical processing machinery shipments into a center inventory over time. |
| **3** | **`users`** | **`batches`** | One-to-Many | A recycling center operator initializes, reviews, and uploads multiple analyzed electronic waste lots. |
| **4** | **`users`** | **`booking`** | One-to-Many | A refinery procurement professional issues multiple distinct transaction inquiries on available material configurations. |
| **5** | **`batch`** | **`scanned_device`** | One-to-Many | An individual lot aggregates multiple streaming classification strings captured by **Raspberry Pi 5** cameras. |
| **6** | **`batch`** | **`booking`** | One-to-One | A listed material aggregation locks onto a single active marketplace contract when claimed by a buyer. |
