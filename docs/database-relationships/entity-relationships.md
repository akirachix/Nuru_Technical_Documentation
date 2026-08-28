# 5.1 Entity Relationships

The E-Loop relational database model uses strict referential integrity parameters to maintain multi-tenant data boundaries, trace the physical e-waste lifecycle, and isolate commercial procurement transactions.

---

## Relationship Definition Matrix

The table below catalogs every explicit structural link, cardinality type, and business constraint rule declared across the relational storage system:

| # | From Table | To Table | Type | Operational Description |
| :---: | :--- | :--- | :--- | :--- |
| **1** | `companies` | `users` | One-to-Many | One company can have many workers registered. |
| **2** | `users` | `device_intake` | One-to-Many | One worker can register many e-waste device intakes over time. |
| **3** | `users` | `batches` | One-to-Many | One worker can create multiple analyzed batches. |
| **4** | `users` | `booking` | One-to-Many | One refinery worker can make multiple booking inquiries. |
| **5** | `batch` | `scanned_device` | One-to-Many | One batch can have many scanned device records linked to it. |
| **6** | `batch` | `booking` | One-to-One | One batch has one booking linked to it. |

---

## Entity Relationship Diagram

The diagram below outlines table structures, primary keys `(PK)`, foreign keys `(FK)`, and structural relationship cardinalities across the database ledger:

```mermaid
erDiagram
    companies ||--o{ users : "has"
    users ||--o{ device_intake : "registers"
    users ||--o{ batches : "assembles"
    users ||--o{ booking : "submits"
    batch ||--o{ scanned_device : "contains"
    batch ||--|| booking : "links"

    companies {
        string company_id PK
        string company_name
        enum company_type
        string email
        boolean is_active
        datetime created_at
    }

    users {
        string user_id PK
        string company_id FK
        string role
        string first_name
        string last_name
        date dob
        string email
        string password_hash
        datetime created_at
    }

    device_intake {
        string device_id PK
        string user_id FK
        enum device_type
        string source_vendor
        string device_brand
        integer device_weight
        datetime created_at
    }

    scanned_device {
        string scanned_device_id PK
        string scanned_device_name
        string user_id FK
        string batch_id FK
        float gold_pct
        float silver_pct
        float copper_pct
        float cobalt_pct
        float lithium_pct
        float aluminium_pct
        float iron_pct
        float nickel_pct
        float lead_pct
        string scanned_at
    }

    batch {
        string batch_id PK
        string user_id FK
        string device_class_name
        float batch_weight
        enum batch_status
        enum value_tier
        datetime created_at
    }

    booking {
        string book_id PK
        string batch_id FK
        string user_id FK
        enum booking_status
        datetime created_at
        datetime updated_at
    }
```
