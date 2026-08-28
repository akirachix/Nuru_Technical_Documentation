# 6.3 Communication with the Backend

The E-Loop frontend platforms (the Next.js Progressive Web Application and the mobile Digital Showroom) and the backend cloud infrastructure communicate by sending and receiving structured API calls and real-time data to synchronize work processes across the platform ecosystem.

---

## Communication Architecture Overview

The system architecture utilizes standard HTTP request-response patterns and persistent network data streams to bridge client interactions with cloud resources:

* **PWA Clients:** Dispatch initial ingestion data records, configuration adjustments, and definitive sorting logs.
* **Edge Hardware Node:** Transmits visual artificial intelligence classification outputs directly as rapid-fire event strings.
* **Backend API & Cloud Database:** Ingests client traffic, performs algorithmic evaluations, and updates state ledgers.
* **Mobile Clients:** Request real-time read and write operations to sync catalog views and book available feedstocks.

---

## Operational Network Integration Lifecycles

```text
 [ PWA Intake Form ] ───────> Write Request (POST) ───────> [ Cloud Database ]
                                                                   │
 [ Edge Camera AI  ] ───────> E-Waste Type Query ─────────> [ Lookup Table ]
                                                                   │
 [ PWA Sorting Done ] ──────> Inventory Update (PATCH) ───> [ Cloud Database ]
                                                                   │
                                                                   v
 [ Mobile Showroom ] <────── Read/Write Queries <───────── [ Digital Showroom ]
```

### 1. Ingestion Data Write
At the initial step of batch intake, the worker's PWA submits a secure **write request** containing initial lot fields to the internal system API. The cloud server interceptor captures the payload and records it cleanly into the database.

### 2. Real-Time Edge Processing & Cross-Referencing
Once physical sorting starts on the conveyor assembly line, the local edge hardware communicates with the cloud using dynamic data lines:
* The edge camera streams an **e-waste type request** triggered directly via local visual AI inference.
* The backend API automatically catches this request code string on arrival.
* The core application runs the tag through an integrated, rule-based e-waste type lookup table.
* The engine calculates raw material composition estimations and corresponding item-level value tiers.
* The system returns the finalized, structured assessment metrics directly to the operator's display dashboard.

### 3. Inventory Reconciliation
When physical sorting operations wrap up, the operator interface transmits an **inventory log update request** via the API layer. This transaction updates the real-time database records, locks the batch from further item additions, and initiates statistical lot aggregation algorithms.

### 4. Marketplace Synchronization
Lastly, this compiled inventory is securely synchronized with the **Digital Showroom** data cache. The system transforms the closed records into marketplace entries, allowing mobile front-end applications used by refinery buyers to execute **read and write queries** that pull real-time batch metrics and seller coordinates directly from the backend cloud storage.
