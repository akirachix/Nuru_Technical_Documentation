## What eLoop Is
**e-Loop** is a material intelligence system combining Artificial Intelligence (AI) and the Internet of Things (IoT). It works as a data-driven supply chain platform for automating the ingestion, identification, valuation, and tracking of critical raw materials in electronic waste (e-waste). 

The system is comprised of three main parts from an architectural perspective:
*   **Edge Hardware & AI Setup:** A camera attached to a localized computer vision model using a **Raspberry Pi 5** model.
*   **Cloud Backend:** A **FastAPI** server running a **PostgreSQL** relational database backend.
*   **User Interfaces:** A Progressive Web Application (PWA) using **Next.js** for both recycling and refinery companies, and a native mobile application using **Flutter** for refinery companies.


## What eLoop Does
E-Loop replaces manual, low-visibility e-waste sorting with automation, transparency, and searchability by performing the following:

*   **Executes Real-Time Visual Sorting:** Captures images on physical recycling lines and performs real-time visual sorting using a high-resolution camera and an edge-based neural network to identify and classify targets automatically, either as PCBs or batteries.
*   **Streams Ingest Telemetry:** Pushes classification events from edge cameras into the cloud database as real-time events via persistent, low-latency **WebSocket** connections.
*   **Runs Automated Material Valuations:** Cross-references items from the identified items list against an internal rule-based material composition lookup table. It automatically assigns an e-waste batch to a **HIGH**, **MEDIUM**, or **LOW** value tier by averaging the total component weight, thereby removing the need to guess.
*   **Hosts a Digital Showroom:** Collects verified, higher-value batch inventories and brings them together into a secure B2B sourcing marketplace to enable industrial refineries to browse, filter, and discover critical materials such as gold, lithium, etc.
* **Manages the Procurement Lifecycle:** Directs the trade process in a single state tracking machine covering the **Batch Lifecycle** (`In Progress` → `Listed` → `Booked` → `Completed`) and the related **Booking Status** (`In Progress` → `Confirmed` / `Cancelled`).


