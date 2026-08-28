# 3.2 Architecture Pattern

The backend is engineered around a strict **service-layered architecture pattern**. This separation of concerns ensures that business logic remains decoupled from network protocols, database connections, and validation engines, maximizing code reusability and testing isolation.


## Architecture Layer Breakdown

The code repository workspace is structured into specialized functional layers, each maintaining explicit operational boundaries:

* ** `models`**  
  Contains the core **SQLAlchemy ORM model definitions**. These classes establish the physical database schema structures, table configurations, column data constraints, and relational mappings.
* ** `database.py`**  
  Manages the low-level relational connection configuration. It configures the global SQLAlchemy engine instance, establishes context-bound session factories, and exposes the `get_db` generator dependency used for context-managed transaction injections.
* ** `services`**  
  Houses the core **system business logic**. The functions in this domain are entirely decoupled and independent of the web layer, allowing them to be fully reusable across REST routing requests, stateful real-time WebSockets, or background worker pipelines.
* ** `schemas`**  
  Contains data validation contracts driven by **Pydantic request and response models**. These schemas enforce structural typing boundaries, sanitize parameters at entry, and scrub sensitive entities prior to output rendering.
* ** `routers`**  
  Defines the **FastAPI endpoints** that orchestrate operations across your domain space. These modules ingest web traffic and bridge incoming payloads over to structural backend handlers:
  * `auth.py` & `user.py`
  * `company.py` & `device_intake.py`
  * `scanned_device.py` & `batch.py`
  * `booking.py` & `notification.py`
* ** `rate_limit` file**  
  A dedicated network protection middleware component configuration engineered to track request volumes and throttle excessive client traffic to protect computing resources.


## Architectural Responsibility Constraints

To preserve structural design integrity across the application lifecycle, developer teams must respect the explicit boundary logic governing layer communication:

```text
 [ Web Client / Edge Device ]
             │
             v
   ┌───────────────────┐
   │  routers layer    │ <── Parses payload validation templates (schemas)
   └─────────┬─────────┘
             │
             v
   ┌───────────────────┐
   │  services layer   │ <── Implements algorithmic core & computing logic
   └─────────┬─────────┘
             │
             v
   ┌───────────────────┐
   │   models layer    │ <── Triggers database mappings (database.py)
   └───────────────────┘
```


