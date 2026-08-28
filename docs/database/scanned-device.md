# 4.4 Scanned Device Table Schema

Stores every individual e-waste component scanned by the computer vision hardware at the recycling center, along with its estimated mineral composition metrics.

---

## Database Field Schema

| Column Name | Data Type | Constraints | Operational Description |
| :--- | :--- | :--- | :--- |
| **`scanned_device_id`** | String | `PRIMARY KEY` | Unique identifier for a scanned device instance. |
| **`scanned_device_name`**| String | `NOT NULL` | Human-readable label / component subclass (e.g., smartphone_logic_board). |
| **`user_id`** | String | `FOREIGN KEY` $\rightarrow$ `users.user_id`, `NOT NULL` | Identifies the specific sorting line worker who performed the scan loop. |
| **`batch_id`** | String | `FOREIGN KEY` $\rightarrow$ `batches.batch_id`, `NOT NULL` | Relates the device directly to the parent batch collection it belongs to. |
| **`gold_pct`** | Float | `NOT NULL` | Estimated percentage (%) of gold elements by total component weight. |
| **`silver_pct`** | Float | `NOT NULL` | Estimated percentage (%) of silver elements by total component weight. |
| **`copper_pct`** | Float | `NOT NULL` | Estimated percentage (%) of copper elements by total component weight. |
| **`cobalt_pct`** | Float | `NOT NULL` | Estimated percentage (%) of cobalt elements by total component weight. |
| **`lithium_pct`** | Float | `NOT NULL` | Estimated percentage (%) of lithium elements by total component weight. |
| **`aluminium_pct`** | Float | `NOT NULL` | Estimated percentage (%) of aluminium elements by total component weight. |
| **`iron_pct`** | Float | `NOT NULL` | Estimated percentage (%) of iron elements by total component weight. |
| **`nickel_pct`** | Float | `NOT NULL` | Estimated percentage (%) of nickel elements by total component weight. |
| **`lead_pct`** | Float | `NOT NULL` | Estimated percentage (%) of lead elements by total component weight. |
| **`scanned_at`** | String | `NOT NULL` | Date and time string when the computer vision system logged the device. |
