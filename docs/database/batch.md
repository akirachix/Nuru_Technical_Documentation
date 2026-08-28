# 4.5 Batch Table Schema

Stores consolidated e-waste lot metrics, averaged material weight evaluations, processing states, and pricing valuations aggregated from the sorting line.


## Database Field Schema

| Column Name | Data Type | Constraints | Operational Description |
| :--- | :--- | :--- | :--- |
| **`batch_id`** | String(36) | `PRIMARY KEY` | Unique system-generated identifier tracking the physical lot block. |
| **`user_id`** | UUID | `FOREIGN KEY` $\rightarrow$ `users.user_id`, `NOT NULL` | Links the lot lifecycle metrics to the assigning center operator. |
| **`device_class_name`** | String(50) | `NOT NULL` | Tracked hardware grouping type identifier (e.g., PCB, Batteries). |
| **`batch_weight`** | Float | `NOT NULL` | Accumulated structural mass parameter recorded for the whole payload. |
| **`batch_status`** | Enum | `NOT NULL` | In-flight processing validation status: Listed, Booked, or Completed. |
| **`value_tier`** | Enum | `NOT NULL` | Automated quality assessment classification: High, Medium, or Low. |
| **`created_at`** | DateTime | `NOT NULL` | Timestamp marking exactly when the cluster lot row initialized (UTC). |


## Enumerated Type Definitions

Specific fields are bound to strict validation structures to maintain processing consistency:

### 1. Device Class Name Context
* **`PCB`** $\rightarrow$ Printed Circuit Board configurations (logic blocks, motherboards).
* **`Batteries`** $\rightarrow$ Dedicated power storage components (lithium-ion, lithium-polymer).

### 2. Batch Status Enum Fields
* **`Listed`** $\rightarrow$ Batch computation finalized; pushed public onto the Digital Showroom catalog.
* **`Booked`** $\rightarrow$ Procurement reservation lock dropped by an active, verified refinery profile.
* **`Completed`** $\rightarrow$ Physical material transit finalized, and metallurgical extraction loop authorized.

### 3. Value Tier Enum Fields
* **`High`** $\rightarrow$ Lot holds valuable precious raw materials crossing high-purity rating boundaries.
* **`Medium`** $\rightarrow$ Payload contains mid-range target metals matching stable mining offset indices.
* **`Low`** $\rightarrow$ Minimum baseline scrap rating; requires standard processing volume aggregation layouts.
