# 4.2 User Table Schema

Stores user credentials and links each worker to their company. Serves as the foundation for multi-tenant data access controls and role-based dashboard experiences.

## Database Field Schema

| Column Name | Data Type | Constraints | Operational Description |
| :--- | :--- | :--- | :--- |
| **`user_id`** | String | `PRIMARY KEY` | Unique identifier for an individual worker. |
| **`company_id`** | String | `FOREIGN KEY` $\rightarrow$ `companies.company_id`, `NOT NULL` | Operational link binding the worker securely to their company profile. |
| **`role`** | String | `NOT NULL` | Role-based permission profile string: `recycling_operator`, `refinery_worker`, or `admin`. |
| **`first_name`** | String | `NOT NULL` | Worker's first legal name. |
| **`last_name`** | String | `NOT NULL` | Worker's last legal name. |
| **`dob`** | Date | `Optional` | Worker's date of birth (used for system records). |
| **`email`** | String | `NOT NULL` | Unique login email address and security communications link. |
| **`password_hash`** | String | `NOT NULL` | Cryptographically secure hashed password string (processed using bcrypt). |
| **`created_at`** | DateTime | `NOT NULL` | Timestamp identifying when the account record was initialized (UTC). |
