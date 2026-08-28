# 4.1 Company Table Schema

Stores company profile information for both Recycling Center and Refinery organizations, serving as the foundational anchor of the platform's multi-tenant data isolation layer.

## Database Field Schema

| Column Name | Data Type | Constraints | Operational Description |
| :--- | :--- | :--- | :--- |
| **`company_id`** | String | `PRIMARY KEY` | Unique identifier for structural company verification. |
| **`company_name`** | String | `NOT NULL` | Legal corporate name of the registered company. |
| **`company_type`** | Enum | `NOT NULL` | Multi-tenant type string: `recycling_center` or `refinery`. |
| **`email`** | String | `NOT NULL` | Primary communication and corporate system email address. |
| **`is_active`** | Boolean | `NOT NULL` | Status flag checking whether the account is currently active. |
| **`created_at`** | DateTime | `NOT NULL` | Timestamp specifying when the record was initialized (UTC). |
