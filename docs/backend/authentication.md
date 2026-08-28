# 3.3 Authentication

The platform implements a multi-tenant authentication engine to securely verify user profiles, isolate organizational assets, and enforce specific execution privileges across all endpoint channels.

---

## Credential Security Blueprint

To establish full system accountability and protect sensitive system layers, user access credentials are bound by strict storage guidelines:

* **Tenant Association:** Every user profile (whether a recycling center worker, refinery worker, or administrator) is structurally hard-linked to an explicit `company_id`.
* **Cryptographic Hashing:** The database fields never save or intercept plain-text credentials. The platform records an immutable `password_hash` processed exclusively using **bcrypt** verification protocols.
* **Component Locations:** The underlying network interfaces, registration blocks, and token issuance workflows reside cleanly inside **`routers/auth.py`** and **`routers/user.py`**.

---

## 1. Login & Token Flow

The connection routine moves sequentially through credential parsing and authentication checks before granting client access:

```text
 [ Web / Mobile Client ] ──> POST Email & Password ──> [ routers/auth.py ]
                                                                │
                                                                v
 [ Protected Endpoints ] <── Validates JWT Scope <── Match bcrypt Hash (DB)
```

1. **Authentication Attempt:** The frontend application submits the user's email address and plain-text password securely to the authentication router.
2. **Hash Comparison:** The backend retrieves the matching profile record, passing the raw incoming text alongside the stored database `password_hash` into the bcrypt engine to confirm mathematical parity.
3. **Session Issuance:** If verified, the system returns a secure JSON Web Token (**JWT**) containing embedded context markers like `role` and `company_id`.
4. **Endpoint Guarding:** All guarded paths execute an authorization check before launching downstream service tasks, evaluating the caller's identity directly from the active security token context.

---

## 2. Password Reset Protocol

Account recovery pipelines circumvent manual or unauthenticated credential overrides using out-of-band validation lines:

* **Email Dispatch:** Account recovery routines generate specialized token requests sent directly to the user's registered inbox.
* **SMTP Delivery Integration:** The platform backend formats and triggers a secure activation url link dispatched via standard **SMTP protocol pipelines** using the primary system account configurations.

---

## 3. Abuse Protection

Because authentication routes interact with database transaction cycles and handle external user inputs, they represent high-value target vectors:

* **Brute-Force Shielding:** All entry points and registration gateways are hard-guarded by proactive rate-limiting modules.
* **Resource Optimization:** Excessive request payloads are intercepted at the middleware boundary layer to keep backend compute cores clean and optimize overall database performance.

---

## 4. Authorization Scopes (Role-Based Access)

Multi-tenant isolation and user boundaries are governed dynamically using a structured assignment matrix across three core profiles:

| Assigned Role String | Multi-Tenant Platform Access Scope |
| :--- | :--- |
| **`recycling_center_worker`** | Restricted to operations, intakes, scanning sequences, and device entries tied to their specific company ID. |
| **`refinery_worker`** | Restricted to exploring listed showroom entries and managing procurement bookings for their refinery facility. |
| **`admin`** | Elevated authorization rights allowing systemic auditing, account modification, and configuration adjustments across all registered company entities. |
