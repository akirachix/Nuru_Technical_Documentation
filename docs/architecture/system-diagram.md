# 2.1 System Diagram

E-Loop is a hardware-integrated system. Component and batch value tiers are derived from real scanned material-composition data run through a trained scoring model. 

---

## Architectural Data Topology

```mermaid
graph TD
    subgraph Edge Layer
        Pi[Raspberry Pi 5 + Camera Module 3] -->|YOLOv8s Inference| LocalAI[Local Classification]
    end

    subgraph Cloud Backend Layer (Heroku)
        API[FastAPI Server Engine]
        JSON[Material Composition Lookup Table]
        DB[(PostgreSQL Database)]
        
        LocalAI -->|wss:// Real-Time WebSockets| API
        API <-->|In-Memory Cache| JSON
        API <-->|Persist & Read States| DB
    end

    subgraph Client Application Layer
        PWA[Next.js PWA \n Recycling Operators]
        Mobile[Flutter Mobile App \n Refinery Buyers]
        
        API <-->|HTTPS REST API| PWA
        API <-->|HTTPS REST API| Mobile
    end
```

---

## High-Level System Components

At a high level, the system is composed of the following factors and components:

| Component | Description |
| :--- | :--- |
| **Raspberry Pi 5 + Camera Module 3** | Captures overhead camera feeds of e-waste components on the sorting line; runs the YOLOv8s model locally for classification; sends classification results to the backend over WebSocket. |
| **FastAPI Backend (Heroku)** | Central point that receives classifications from the Pi, looks up material composition, calculates individual and batch value tiers, persists everything to PostgreSQL, and serves the PWA and the Flutter app. |
| **Material Composition Lookup Table** | A file mapping component category or the subclasses to material percentages (gold, silver, copper, cobalt, lithium, aluminium, iron, nickel, lead). Loaded into memory on backend startup for fast lookups. |
| **PostgreSQL** | Stores users, companies, device intakes, batches, scanned devices, and bookings; tracks the batch status lifecycle (**In Progress** - **Listed** - **Booked** - **Completed**). |
| **Next.js PWA (Recycling Centers)** | Web app used by recycling center operators to register intakes, trigger scans, confirm classifications and finish batches. |
| **Flutter Mobile App (Refineries)** | App used by refinery workers to browse the Digital Showroom, filter batches by tier or composition and book batches. |
