# 7.3 API Integration

The refinery-facing mobile application leverages a native runtime connection to communicate directly with unified backend infrastructure services, using shared resource endpoints to handle transactional states.

## Architectural Mapping

The client integrates directly into the platform core without relying on isolated middlewares or individual data layers:

* **Unified Backend Infrastructure:** Connects natively to the identical **FastAPI cloud backend** utilized by the operator web PWA.
* **Shared Resource Endpoints:** Interacts with the exact same centralized resource endpoints:
  * `/api/companies`
  * `/api/batches`
  * `/api/bookings`

## Security Framework

```text
  [ Flutter Native Client ] ──> Logs in with Credentials ──> [ Unified FastAPI Backend ]
                                                                     │
  [ Inbound/Outbound Payload ] <── Scoped to Company ID <── [ Returns Session JWT ]
```

### 1. Gateway-Level Access Control
Data security and access permissions are dynamically enforced at the **API gateway layer**. The system handles traffic validation rules directly through centralized **Role-Based Access Control (RBAC)** configurations rather than distributing security verification logic across separate client networks.

### 2. Multi-Tenant Payload Scoping
Following a successful authentication sequence, the native mobile application obtains secure session tokens. The application utilizes these tokens to enforce precise data containment rules:
* Automatically locks all inbound and outbound communication payloads strictly to the authenticated refinery worker's specific company profile.
* Guarantees strict **multi-tenant data isolation** across the entire shared resource ecosystem.
* Blocks cross-organizational data leaks, keeping corporate metrics and procurement logs hidden from competing refinery nodes.
