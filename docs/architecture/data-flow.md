## Data Flow

::: info Metadata Pipeline
This section details how scanning telemetries pass asynchronously from localized conveyor line sensors into cloud transactional databases.
:::


### Technical Flow Architecture

```text
[Raspberry Pi 5 camera] ──(Raw Pixels)──> [Raspberry Pi 5 module] ──(YOLOv8 model)──> [FASTAPI CORE]
                                                                              │
                                                                       (SQL Ingestion)
                                                                              ▼
[Refineries Interface] <──(Sync Catalogs)── [Digital Showroom] <──(SQL Updates)── [Postgres DB]
```


### Flow Lifecycle

#### 1. Ingestion Phase
* **Frame Capture:** The camera continuously scans the belt line.
* **Local Parsing:** Raw image grids are streamed directly to the Raspberry Pi 5 module.

#### 2. Edge Processing Phase
* **Neural Analysis:** The hardware module inputs the frame pixels through the local **YOLOv8** network.
* **Component Classification:** The local inference chip instantly generates item class and confidence records.
* **Network Handshake:** The device pipes the event metrics upstream over active WebSocket channels.

#### 3. Backend Execution Phase
* **Schema Validation:** The centralized **FastAPI** server ingests the raw edge metadata blocks securely.
* **Composition Audit:** The server looks up material ratios to estimate precious metal weight concentrations.
* **Value Classification:** The matrix model processes composition values to assign dynamic batch tiers (`HIGH`, `MEDIUM`, `LOW`).
* **Database Persist:** Validated material data structures are saved into permanent relational **PostgreSQL** storage tables.

#### 4. Digital Showroom Sourcing Phase
* **Catalog Update:** The secure backend updates active inventory catalogs automatically.
* **Showroom Discovery:** The **Flutter App** pulls live mineral fields over secure JSON REST endpoints.
* **Transaction Booking:** Refinery agents select batches and trigger booking state changes to finalize the order lifecycle.
