# 9.2 Role-Based Access Control

The platform enforces strict Role-Based Access Control (RBAC) to govern API authorization boundaries, insulate corporate resources, and maintain clear separation between supply chain operations.

---

## The Authorization Matrix

The system dynamically intercepts incoming JSON Web Tokens (JWT) at the gateway layer and checks the attached identity claims against a predefined permission scope matrix:

| System Role | Primary Interface | Allowed Operational Scope & Boundaries |
| :--- | :--- | :--- |
| **`recycling_operator`** | Next.js Web PWA | Restricted to physical lot intake registration, local computer vision scanning, individual item classification overrides, and batch closures. Cannot discover other recycling facilities or read active refinery booking logs. |
| **`refinery_worker`** | Flutter Mobile App | Restricted to exploring listed inventory within the public Digital Showroom, filtering batches by chemical composition, and executing procurement booking requests. Cannot write or modify scanning or intake metrics. |
| **`admin`** | Admin Dashboard | Elevated system-wide structural access. Authorized to provision new corporate tenants, adjust global configuration metrics, manage employee profiles, and audit transactional ledgers across all company entities. |

---

## Architectural Separation & Multi-Tenant Barriers

```text
       [ API Gateway Guard Layer ]
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
 [ Operator ]  [ Refinery ]   [ Admin ]
  Intake API    Showroom API   Tenant API
  Batch Sync    Booking API    Global Log
```

### 1. Dual-Tenant Isolation (Web vs. Mobile)
The platform is intentionally split into two distinct tenant landscapes. The system uses the user's role to ensure that factory floor personnel and industrial refinery buyers interact with completely separate resource groups. This prevents buyers from intercepting raw, pre-sorted scrap queues and restricts operators from altering binding marketplace checkout data.

### 2. Multi-Tenant Organization Shields
In addition to role checks, endpoints evaluate the user's hard-linked `company_id`. A user with the `recycling_operator` role can only query or write batches belonging to their own facility, preventing unauthorized cross-company visibility.

### 3. Centralized Enforcement Pattern
Authorization boundaries do not depend on frontend client-side hiding tricks. Access control is driven natively at the FastAPI backend route dependency layer using clean security injection decorators:

* Rejects unauthorized requests at the server boundary with an explicit **403 Forbidden** error status before hitting the service logic.
* Guarantees that even if a user manipulates client-side code on a tablet or phone, the cloud data ledger remains locked.
