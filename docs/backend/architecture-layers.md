## Architecture Layers

The eLoop backend uses a decoupled four-layer architecture to isolate database actions, business logic, data validation, and HTTP routing.


### 1. Router Layer (API Ingress)

* **Function**: Handles incoming HTTP requests from local sorting lines, PWAs, and mobile endpoints.
* **Responsibilities**:
  * Defines endpoint paths and HTTP status codes.
  * Validates **JWT security tokens** from operator devices.
  * Forwards validated payloads to lower layers and returns JSON responses to clients.


### 2. Schema Layer (Data Validation)

* **Function**: Defines the data shapes required for request bodies and API responses using **Pydantic**.
* **Responsibilities**:
  * Enforces strict type safety and mandatory field requirements across the ecosystem.
  * Validates component classifications sent from **Raspberry Pi 5** cameras.
  * Filters out internal fields (such as password hashes) before data leaves the server.


### 3. Service Layer (Business Logic)

* **Function**: Executes the platform's core material estimation algorithms and operational workflows.
* **Responsibilities**:
  * Receives component classifications from the camera feed.
  * Cross-references items against rule-based lookup tables to calculate material volumes.
  * Assigns final batch value tiers (**High, Medium, Low**).


### 4. Repository Layer (Data Access)

* **Function**: Interacts directly with the cloud database via an Object-Relational Mapper (ORM) or raw SQL.
* **Responsibilities**:
  * Inserts new e-waste batch registration records.
  * Queries real-time material lookup data for the Service Layer.
  * Updates physical sorting records and persists historical collection logs.
