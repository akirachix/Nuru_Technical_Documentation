# 6.2 Core Screens & Responsibilities

The Next.js Progressive Web App (PWA) exposes five primary layout contexts engineered to authenticate workers, initiate sorting runs, log incoming assets, and track active factory inventories.

## Screen Architecture Matrix

| Screen Context | Core Intent / Responsibility | Primary User Actions |
| :--- | :--- | :--- |
| **Login / Account** | Guard gateway layer and tenant management. | Authenticate user; Provision admins or center staff. |
| **Device Intake Registration**| Enters gross e-waste parameters to the database. | Log type, manufacturer brand, total lot weight, and source. |
| **Live Scanning View** | Monitors real-time edge computer vision streams. | Trigger Start Scan; Fire Next Scan; Initialize Finish Batch. |
| **Batch View** | Granular lot ledger analysis and system rollup. | Audit scanned item array; Trigger average calculations; Expose catalog. |
| **Inventory / Batch Status** | Historical center tracking and lifecycle metrics overview. | Monitor processing states from In Progress to Completed. |


## Detailed Screen Specifications

### 1. Login / Account
* **Authentication Boundary:** Validates and logs the recycling center worker securely against the centralized backend services.
* **Onboarding Logic:** The specific user who registers a new company automatically escalates to a tenant System Administrator account.
* **Staff Provisioning:** Allows the company administrator to provision, invite, and configure permissions for extra company admins or standard facility floor workers.

### 2. Device Intake Registration
* **Pre-Processing Entry:** Provides a high-visibility form for operations personnel to log e-waste inventory records prior to conveyor sorting line entry.
* **Data Fields Collected:**
  * **Device Type:** Categorized classification of the arriving lot.
  * **Brand:** Manufacturer tracing information.
  * **Weight:** Total gross mass parameters.
  * **Source:** Traceability log indicating supply origin or vendor.

### 3. Live Scanning View
* **IoT Hardware Stream:** Captures and prints individual item tracking details pushed directly from the Raspberry Pi 5 camera setup over a live, persistent link.
* **Dynamic Content Display:**
  * Identified machine learning device category and subclass metadata markers.
  * Real-time, rule-parsed precious and critical mineral composition estimates.
  * Calculated individual value tier grades backed by absolute scoring metrics.
* **Interactive Control Actions:** Exposed button triggers including **Start Scan**, **Next Scan**, and **Finish Batch**.

### 4. Batch View
* **Item Array Log:** Compiles and details a comprehensive visual ledger itemizing every single item scanned into the current active lot group.
* **Aggregated Rollup Trigger:** Houses the **"Finish Batch"** action component, which immediately commands the frontend to calculate lot statistics and requests the backend to run the weight-averaging algorithms and value tiering procedures.
* **Marketplace Sync:** Features an **Upload** action component on the batch metrics assessment sub-screen that pushes closed inventory records over to expose them on the public catalog catalog view.

### 5. Inventory / Batch Status
* **Administrative Oversight:** Delivers facility supervisors a complete, live operational dashboard to evaluate processing velocity and historical trends.
* **Value Tier Visibility:** Renders clear visual identifiers charting calculated batch grades.
* **Lifecycle State Tracking:** Monitors lot packages fluidly across every operational step: **In Progress**, **Listed**, **Booked**, and **Completed**.
