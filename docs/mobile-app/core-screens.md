# 7.2 Core Screens & Responsibilities

The Flutter mobile application contains four primary layout contexts engineered to expose listed e-waste metrics, sort feedstocks, handle atomic booking requests, and track procurement lifecycles.

## Screen Architecture Matrix

| Screen Context | Core Intent / Responsibility | Primary User Actions |
| :--- | :--- | :--- |
| **Digital Showroom / Catalogue** | Marketplace visibility of verified inventories. | Explore batches, check device counts, and view compositions. |
| **Filtering** | Feedstock optimization and catalog narrowing. | Sort entries by material content or discrete value tiers. |
| **Booking** | Concurrency locking and asset reservation. | Trigger immediate booking holds directly from the listing. |
| **Booking History** | Audit log tracking and procurement lifecycles. | Monitor booking status across In progress, Confirmed, or Cancelled. |

## Detailed Screen Specifications

### 1. Digital Showroom / Catalogue
* **E-Waste Asset Visibility:** Allows refinery workers to explore and browse verified, finalized batch lots published by recycling operators.
* **Aggregated Metrics Access:** Provides real-time visibility into vital material statistics, including calculated lot value tiers, explicit element weights, and total underlying device counts.

### 2. Filtering
* **Material Selection Optimization:** Features a multi-variable query engine letting procurement officers isolate lots tailored to specific metallurgical refining requirements.
* **Target Criteria Parameters:**
  * **Value Tier Boundaries:** Narrow down catalog items matching high-yield profiles (**HIGH**, **MEDIUM**, or **LOW**).
  * **Material Composition:** Filter inventory records matching targeted critical mineral thresholds (e.g., specific lithium or cobalt ratios).
* **Pipeline Automation:** Streamlines downstream processing workflows by speeding up raw feedstock sourcing decisions.

### 3. Booking
* **Atomic Claim Ingestion:** Allows refinery users to instantly secure and claim an individual batch lot package directly out of its active showroom listing item card.
* **Transactional Concurrency Protection:** Triggers an immediate database lock that transitions the parent batch directly into the **`Booked`** state.
* **Inventory Exclusivity Enforced:** Automatically wipes the claimed item from the public display feeds of all other competing refineries to prevent duplicate claims and overlapping acquisition attempts.

### 4. Booking History
* **Logistics Auditing Dashboard:** Supplies a complete historical ledger tracking past and active commercial transaction flows for the refinery facility.
* **Lifecycle Status Tracking:** Renders precise visual tracking indicators mapping out the exact current operational stage of an active booking request:
  * **`In progress`** $\rightarrow$ Initial allocation lock applied; logistics parameters currently under offline evaluation.
  * **`Confirmed`** $\rightarrow$ Transaction validated by the sourcing facility; physical material cargo authorized.
  * **`Cancelled`** $\rightarrow$ Request hold dropped or terminated, returning the target lot block straight to the marketplace.
