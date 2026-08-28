# 10.1 System Integration

The platform infrastructure relies on tightly integrated cloud platforms, managed state stores, structured configuration payloads, and low-latency edge connections to keep data synchronized smoothly across the ecosystem.

---

## Integration Services Matrix

The table below catalogs the primary structural services, operational use-cases, and explicit system-level configurations driving the platform's integration plane:

| Service | Used For | Configuration |
| :--- | :--- | :--- |
| **Heroku** | Backend hosting (FastAPI app + PostgreSQL add-on). | Config vars: `DATABASE_URL`, `SECRET_KEY`, `CORS_ORIGINS`, `RATE_LIMIT_ENABLED`. Deploy via `git push heroku main`. |
| **PostgreSQL (Heroku Postgres)** | Primary relational database. | Provisioned via the `heroku-postgresql` add-on; schema managed via Alembic migrations or SQLAlchemy `metadata.create_all`. |
| **Material Composition JSON** | In-memory lookup table for component material percentages. | Stored at `config/material_composition.json`, loaded into `app.state.material_composition` on backend startup. |
| **Raspberry Pi 5 / WebSocket** | Real-time ingestion of on-device YOLOv8's classification results. | Pi connects to the backend's WebSocket endpoint. |

---

## Infrastructure Connection Mapping

```text
               ┌────────────────────────────────────────────────────────┐
               │                     HEROKU CLOUD                       │
               │                                                        │
               │  ┌───────────────────┐        ┌─────────────────────┐  │
               │  │  FastAPI Engine   │ <───>  │  Heroku Postgres    │  │
               │  │                   │        │  (Schema: Alembic)  │  │
               │  └─────────▲─────────┘        └─────────────────────┘  │
               │            │                                           │
               │  ┌─────────┴─────────┐                                 │
               │  │ app.state Cache   │                                 │
               │  │ (config/.json)    │                                 │
               │  └───────────────────┘                                 │
               └────────────▲───────────────────────────────────────────┘
                            │
                            │  (wss:// Real-Time WebSocket Channel)
                            │
               ┌────────────┴─────────┐
               │   Raspberry Pi 5     │
               │  (Local YOLOv8 Scan) │
               └──────────────────────┘
```

### 1. The Cloud Gateway Layer
**Heroku** functions as the central hosting engine, providing environment variable provisioning and a Git-based deployment pipeline. It hosts the FastAPI code while feeding secrets down to the web configuration controllers, ensuring zero credential exposure.

### 2. The Persistent Storage Layer
**Heroku Postgres** acts as the single source of truth for transactions, users, and lots. Because the system utilizes an ORM layer, schema maps are managed safely via **Alembic migrations** rather than manual SQL alteration scripts, keeping deployment databases cleanly aligned across versions.

### 3. The Performance Lookup Layer
Real-time material grading requires ultra-fast lookups. Rather than forcing a relational row query every single time a device passes the camera, the system parses `material_composition.json` directly into the active RAM space of the FastAPI server instance on boot (`app.state.material_composition`). This delivers instantaneous, sub-millisecond mapping results for edge-ingested object logs.

### 4. The Edge Processing Layer
The **Raspberry Pi 5** acts as an autonomous data collection agent. By completing deep learning **YOLOv8** classification loops right at the sorting station, the device shields the backend from parsing heavy streaming video streams, passing only lightweight structured event messages across the open WebSocket channel.
