# 4. Database Overview

The eLoop platform leverages a relational database management system to ensure high transactional integrity, strict relational constraint enforcement, and bulletproof multi-tenant separation.

## Technology Profile

* **Primary Database Engine:** **PostgreSQL**
* **Object-Relational Mapping (ORM):** **SQLAlchemy**
* **Database Schema Migrations:** **Alembic**

## Core Schema Tables

The system's operational dataset is organized around six foundational tables:

| Table Name | Primary Responsibility | Data Scope |
| :--- | :--- | :--- |
| **`companies`** | Multi-tenant organization isolation profiles. | Tracking both recycling facility and refinery buyer operations. |
| **`users`** | Individual account access control parameters. | Holds profile information, hashed credentials, and role assignments. |
| **`device_intake`** | Gross physical asset collection log records. | Pre-sorted data footprints capturing weight, device categories, and origin. |
| **`scanned_devices`** | Granular vision classification inference events. | Saves individual item element arrays and raw mineral metrics logs. |
| **`batches`** | Aggregated material lot package profiles. | Tracks consolidated inventory statuses from `In Progress` to `Listed`. |
| **`booking`** | B2B marketplace transaction lifecycle logs. | Manages procurement reservation locks created by refinery professionals. |

## Data Layer Architecture Flow

```text
  [ Client Application / Edge Input ]
                  │
                  v
       [ FastAPI Core Server ]
                  │
                  v
       [ SQLAlchemy ORM Layer ]
                  │
                  v
    ┌───────────────────────────┐
    │    PostgreSQL Database    │
    │  ┌───────────┐┌─────────┐ │
    │  │ companies ││  users  │ │
    │  └───────────┘└─────────┘ │
    │  ┌───────────┐┌─────────┐ │
    │  │  intakes  ││ batches │ │
    │  └───────────┘└─────────┘ │
    │  ┌───────────┐┌─────────┐ │
    │  │  scanned  ││ booking │ │
    │  └───────────┘└─────────┘ │
    └───────────────────────────┘
```
