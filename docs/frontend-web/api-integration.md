## API Integration & Service Architecture

The system uses a unified, type-safe API communication layer built directly with the browser native **Fetch API**. All asynchronous network transactions are routed through a centralized helper system that manages base environment endpoints, authorization injections, strict data serialization parsing, and centralized global error structures.

### Centralized API Client & Network Core

The integration handles asynchronous network operations through a central engine located inside `src/lib/api.ts`:

* **Dynamic Base Endpoint Isolation:** Network destinations adapt to host configurations by evaluating system environment properties. The routing falls back to local development networks if production environment flags are missing:
  ```typescript
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';
  ```
* **Bearer Token Injection Wrapper:** Outgoing requests pass through a security scanner that fetches authorization signatures directly from system storage:
  ```typescript
  function getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('eloop_token');
  }
  ```
  If an encryption signature token exists, the runtime pushes a structural formatting key directly into the request header array:
  ```text
  Authorization: Bearer [eloop_token]
  ```
* **Unified Error Mapping:** Server rejections and error structures are intercepted and scrubbed globally. If an operational tracking action encounters raw array logs or custom validation parameters, the exception handler collapses the nested messages into a uniform output:
  ```typescript
  if (Array.isArray(error.detail)) {
    message = error.detail.map((d) => d.msg).filter(Boolean).join(', ');
  }
  ```


### Global Type Safety Schema

The platform implements strict model structures to define business rules and data models across tenant environments:

#### Structural Workspace Configurations
```typescript
export type CompanyType = 'recycling_center' | 'refinery';

export type UserRole = 'recycling_center_worker' | 'refinery_operator' | 'company_admin';

export type DeviceClassName = 'PCB' | 'Batteries';
export type ValueTier = 'High' | 'Medium' | 'Low';
export type BatchStatus = 'Listed' | 'Booked' | 'Completed';
export type BookingStatus = 'in_progress' | 'confirmed' | 'cancelled';

export type DeviceType = 'laptop' | 'smartphone' | 'tablet' | 'desktop' | 'other';
export type DeviceCondition = 'damaged' | 'unknown';
```

#### Core Data Entities
* **Profiles (`UserRead`, `CompanyRead`, `UserDisplayName`):** Tracks system identifiers, active statuses, roles, creation dates, and token generation hooks (`setup_token`).
* **Inventories & Lifecycle Tracking (`BatchRead`, `BatchCreate`, `BatchUpdate`):** Manages operational properties such as sorting material weights, evaluation categories (`ValueTier`), and batch progression states.
* **Refinery Commitments (`BookingRead`, `BookingCreate`, `BookingUpdate`):** Standardizes cross-organization interactions by tracking batch locks, reserving user identifiers, and monitoring execution statuses.
* **Component Intelligence Elements (`ScannedDeviceRead`, `ScannedDeviceCreate`, `ScannedDeviceUpdate`):** Maps specific visual estimation profiles down to precise elemental decimal weights across critical elements, including Gold, Silver, Palladium, Copper, Cobalt, Lithium, Aluminium, Iron, Nickel, and Lead.
* **Intake Auditing Logs (`DeviceIntakeRead`, `DeviceIntakeCreate`):** Logs inbound waste asset metrics, tracking device conditions, model details, vendor origins, notes, serial numbers, and system records.


### Core System Service Actions

The system exposes structured endpoint groupings within the exported `api` module layout:

#### Authentication & Access Configuration
* **`login(email, password)`** — `POST /auth/login`
  * Verifies user login parameters and provisions authorization tokens.
* **`createCompany(data)`** — `POST /company/`
  * Provisions a new corporate profile and returns a layout payload containing a unique setup token.
* **`setupAdmin(token, data)`** — `POST /company/setup-admin`
  * Uses the invitation token queries to assign administrative credentials to a new corporate account.

#### Workspace Profile Administration
* **`getCompany(id)`** / **`listCompanies()`** — `GET /company/:id` / `GET /company/`
  * Retrieves metadata configurations for registered facilities.
* **`getMe()`** — `GET /user/me`
  * Fetches account data for the currently authenticated operator session.
* **`getUser(userId)`** / **`listUsers()`** — `GET /user/:userId` / `GET /user/`
  * Handles team context directories and operational detail cards.
* **`listUserNames()`** — `GET /user/directory/names`
  * Pulls high-performance displayName lookup strings for worker identification.
* **`createUser(data)`** — `POST /user/`
  * Allows a verified administrator to manually add other workers or admins to their company.

#### Ingestion & Material Logistics
* **`listBatches(status)`** — `GET /batch/?status=`
  * Pulls full material lists, filtered by optional state keys (`Listed`, `Booked`, `Completed`).
* **`listBatchesByUser(userId)`** — `GET /batch/user/:userId`
  * Collects batch records assigned to a single recycling station worker.
* **`getBatch(batchId)`** — `GET /batch/:batchId`
  * Queries comprehensive data metrics for an isolated inventory track.
* **`createBatch(data)`** — `POST /batch/`
  * Commits a freshly sorted e-waste batch tracking block to the real-time layout layer.
* **`updateBatch(batchId, data)`** — `PATCH /batch/:batchId`
  * Alters active metrics or updates status properties across material evaluation states.
* **`deleteBatch(batchId)`** — `DELETE /batch/:batchId`
  * Removes an unfinalized tracking block permanently from the ledger records.

#### Transactional Refinery Connections
* **`createBooking(data)`** — `POST /booking/`
  * Allows refinery buyers to book high-value listings found within the showroom grid.
* **`listBookings()`** / **`listUserBookings(userId)`** — `GET /booking/` / `GET /booking/user/:userId`
  * Compiles reservation registries globally or filters logs by selecting isolated profiles.
* **`getBooking(bookingId)`** — `GET /booking/:bookingId`
  * Collects individual transaction profiles to coordinate downstream procurement.
* **`updateBooking(bookingId, data)`** — `PATCH /booking/:bookingId`
  * Advances lock workflows through sequential progression steps (`in_progress` → `confirmed` → `cancelled`).

#### Component Intelligence Elements
* **`createScannedDevice(data)`** — `POST /scanned-device/`
  * Submits visual computer vision scanning results along with precise composition weight margins.
* **`updateScannedDevice(scannedDeviceId, data)`** — `PATCH /scanned-device/:scannedDeviceId`
  * Recalibrates logged material percentage metrics for an isolated component scan.
* **`deleteScannedDevice(scannedDeviceId)`** — `DELETE /scanned-device/:scannedDeviceId`
  * Erases a flawed scanning line log entry from the temporary session database.
* **`getScannedDevice(scannedDeviceId)`** — `GET /scanned-device/:scannedDeviceId`
  * Checks analytical parameters for a selected piece of scanned hardware.
* **`listScannedDevicesByBatch(batchId)`** — `GET /scanned-device/batch/:batchId`
  * Extracts all individual classifications cataloged under a parent batch profile.
* **`listScannedDevices()`** — `GET /scanned-device/`
  * Returns an audit ledger tracking all raw visual classifications globally.

#### Intake Auditing Logs
* **`createDeviceIntake(data)`** — `POST /device-intake/`
  * Registers initial bulk assets (brand, weight, classification) before sorting line distribution.
* **`listDeviceIntakesByUser(userId)`** — `GET /device-intake/user/:userId`
  * Displays logging history tracking inputs generated by a single user session.
