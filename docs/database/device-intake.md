# 4.3 Device Intake Table Schema

Lets recycling center workers register and save e-waste intake information ahead of processing on the sorting conveyor lines.

---

## Database Field Schema

| Column Name | Data Type | Constraints | Operational Description |
| :--- | :--- | :--- | :--- |
| **`device_id`** | String | `PRIMARY KEY` | Unique identifier for the individual device intake record. |
| **`user_id`** | String | `FOREIGN KEY` $\rightarrow$ `users.user_id`, `NOT NULL` | Links the intake log entry to the recycling center worker who registered it. |
| **`device_type`** | Enum | `NOT NULL` | Category classification of the incoming e-waste device (e.g., laptop, smartphone). |
| **`source_vendor`** | String | `Optional` | Tracking metadata capturing the vendor source or donor channel. |
| **`device_brand`** | String | `NOT NULL` | Manufacturer brand classification tracking (e.g., Apple, Dell, Samsung). |
| **`device_weight`** | Integer | `NOT NULL` | Total gross weight of the logged devices measured in kilograms (kg). |
| **`created_at`** | DateTime | `NOT NULL` | Timestamp identifying exactly when the intake record was registered (UTC). |
