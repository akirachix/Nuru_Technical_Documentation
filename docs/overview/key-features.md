# 1.4 Key Features

The core capabilities of the platform are organized into five primary functional pillars that automate material detection, standardize inventory values, and open up direct transactional marketplace pipelines.

---

## Feature Matrix

| Feature | Primary Interface | Technical Driver |
| :--- | :--- | :--- |
| **Material Registration** | Web App (Next.js PWA) | FastAPI Ingestion Endpoints |
| **Visual Recognition** | Physical Sorting Line | Raspberry Pi 5 + YOLOv8s Model |
| **Material Composition** | Backend Engine | Rule-Based JSON Lookup Matrix |
| **Inventory Management** | Web App Dashboard | PostgreSQL Relational Ledger |
| **Digital Showroom** | Mobile App (Flutter) | Multi-Tenant Data Control Layer |

---

## Detailed Feature Profiles

### 1. Material Registration
* **User Target:** Recycling Center Operators
* **Functionality:** Provides factory-floor workers with a lightweight intake interface to register incoming e-waste assets before they enter the processing lines. 
* **Captured Parameters:**
  * **Device Type:** Classification type (e.g., laptop, smartphone, tablet).
  * **Brand:** Manufacturer metadata tracking for supply trends.
  * **Weight:** Total gross lot mass recorded at intake.
  * **Source:** Provenance or donation channel tracking.

### 2. Visual Recognition
* **User Target:** Edge Automated System
* **Functionality:** Removes manual inspection dependencies by embedding a high-speed computer vision unit directly over the physical conveyor infrastructure.
* **Core Capabilities:**
  * Overhead component image acquisition via an integrated industrial camera module.
  * Real-time local machine learning inference execution using a compact **YOLOv8** architecture.
  * Instant processing footprint to isolate and recognize target components (e.g., `printed_circuit_board`, `lithium_ion_battery`) directly on the edge hardware.

### 3. Material Composition
* **User Target:** System Backend Core
* **Functionality:** Translates visual indicators into precise, estimated mineral assets using historical material assay configurations.
* **Core Capabilities:**
  * Cross-references edge-generated object classes against an integrated, static material percentage mapping table.
  * Estimates underlying critical and precious material concentrations (including **Gold**, **Cobalt**, **Lithium**, and **Copper**).
  * Computes an initial item-level material rating score before aggregating values up into batch metrics.

### 4. Inventory Management
* **User Target:** Recycling Facility Managers & Operators
* **Functionality:** Supplies supervisors with live administrative dashboards to trace volume and processing states across their local footprint.
* **Core Capabilities:**
  * Real-time calculation and listing of all cataloged components currently sitting on the warehouse floor.
  * Direct structural oversight of active batch states (`In Progress` vs. `Listed`).
  * Immutable logging of finalized lot runs, securing transaction metrics prior to showroom publishing.

### 5. Digital Showroom (Catalogue Browser)
* **User Target:** Refinery Sourcing Workers & Plant Buyers
* **Functionality:** Operates as a secure, decentralized B2B marketplace bridging material retrieval sites with material processors.
* **Core Capabilities:**
  * Exposes verified, finalized batch lots complete with averaged mineral weights and device counts.
  * Provides search filters matching precise buyer needs, including targeted component styles or specific values (**HIGH**, **MEDIUM**, or **LOW**).
  * Runs concurrent transaction protection mechanics, letting buyers drop an instant booking hold request to reserve feedstocks and hide them from general view.
