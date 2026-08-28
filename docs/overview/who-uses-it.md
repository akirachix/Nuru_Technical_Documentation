# 1.3 Who Uses It

The platform operates on a multi-tenant matrix that isolates data boundaries while allowing seamless, secure resource interactions based on a user's defined account classification.

---

## Core User Matrix

| User Type | Role |
| :--- | :--- |
| **Recycling Center Operator** | Registers device intakes, scans components at the sorting line, confirms individual classifications, and clicks "Finish Batch" to close out and list a batch. |
| **Refinery Worker** | Browses the Digital Showroom, filters batches by value tier, and books batches for procurement. |
| **Admin** | Elevated access across the platform; manages user and company accounts. |

---

## Detailed Profile Scopes & Interfaces

### 1. Recycling Center Operator
* **Primary Interface:** Next.js Progressive Web Application (PWA).
* **Operational Scope:** On-site factory floor workers and local center facility supervisors.
* **Core Capabilities:**
  * Initial lot intake initialization and parameter registration.
  * Real-time monitoring of overhead edge camera classification outputs.
  * Post-inference verification of individual identified components.
  * Formal batch closure initialization, calculation processing, and catalog publishing.

### 2. Refinery Worker
* **Primary Interface:** Flutter Native Mobile Application.
* **Operational Scope:** Industrial metallurgy professionals, procurement officers, and refinery buyers.
* **Core Capabilities:**
  * On-demand read-only discovery of the global marketplace Digital Showroom inventory.
  * Multi-variable filtering based on material percentages and aggregated value tiers.
  * Direct atomic booking transactions to reserve and secure feedstock batches.
  * End-to-end historical log tracking of active procurement lifecycles.

### 3. Platform Admin
* **Primary Interface:** Core Administrative Control Dashboard.
* **Operational Scope:** Platform operators, data compliance monitors, and system auditors.
* **Core Capabilities:**
  * Cross-company data visibility and multi-tenant logging infrastructure audits.
  * New business profile provisioning (adding new recycling facilities or refinery companies).
  * Account lifecycle management (revoking or elevating individual worker permissions).
  * System-wide global metrics evaluation and global parameter fine-tuning.
