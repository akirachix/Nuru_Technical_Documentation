## System Diagram

eLoop is a hardware-integrated system. Component and batch value tiers are derived from real scanned material-composition data run through a trained scoring model. 

![eLoop System Flow Diagram](/images/sad.png)


## Component Breakdown

### Hardware & AI Layer

#### Camera Array
* **Purpose:** Monitors incoming electronic waste continuously .
* **Function:** Captures image frames .
* **Data:** Sends raw images to the Raspberry Pi 5 .

<img src="/images/camera.png" alt="Raspberry Pi AI Camera" class="hardware" />

#### Raspberry Pi 5
* **Purpose:** Runs object recognition locally [IMAGE].
* **Function:** Runs **YOLOv8** to identify components and track item counts.
* **Data:** Sends light metadata upstream over WebSockets.

<img src="/images/raspberry.png" alt="Raspberry Pi 5" class="hardware" />


### Central Cloud Layer
* **Data:** Sends raw images to the Raspberry Pi 5 module .

<img src="/images/camera.png" alt="Raspberry Pi 5 Camera" class="hardware" />

#### Raspberry Pi 5
* **Purpose:** Runs object recognition locally.
* **Function:** Runs **YOLOv8** to identify components and track item counts.
* **Data:** Sends light metadata upstream over WebSockets.

<img src="/images/raspberry.png" alt="Raspberry Pi 5 module" class="hardware" />


### Central Cloud Layer

#### eLoop API (FastAPI)
* **Purpose:** Core logic engine for the platform.
* **Function:** Handles microservices for system operations:
  * **Ingestion:** Validates real-time data from the conveyor line.
  * **Composition:** Calculates precise material weight ratios.
  * **Value Matrix:** Assigns financial tiers (`HIGH`, `MEDIUM`, `LOW`).
  * **State Machine:** Manages material batch listing statuses.

#### Database (PostgreSQL)
* **Purpose:** Stores all relational system data.
* **Function:** Tracks inventory records, user accounts/actions, and historical logs.


### User Interfaces

#### Recycler PWA (Next.js)
* **Purpose:** Operator terminal at the recycling yard.
* **Function:** Triggers cameras, registers batches, and checks sorting reports.

#### Refinery PWA (Flutter)
* **Purpose:** Digital Showroom for global refineries.
* **Function:** Displays verified batch catalogs and handles transaction bookings.
