# 2.2 Data Flow

The system processes data across three distinct operational phases: real-time edge scanning, batch-level aggregation, and downstream buyer marketplace procurement.

---

## 1. Component Scan (Individual Device Tiering)

This workflow captures and processes data continuously on the physical sorting line as individual items pass beneath the vision module.

```text
 [ Raspberry Pi 5 ] ──> YOLOv8s Local Inference ──> Raw JSON Data Payload
                                                              │
                                                              v
 [ Backend DB ] <── Persist ScannedDevice Row <── [ FastAPI Core Server ]
       │
       └─> Stream Updates via WebSocket ──> [ Next.js PWA Interface ]
```

* **Image Acquisition:** The Raspberry Pi 5 overhead camera system captures localized frame buffers of incoming e-waste items.
* **On-Device Inference:** A local **YOLOv8s** edge network processes the frame to extract classifications and model metrics directly on the device.
  * **Sample Output Payload:**
    ```json
    {
      "subclass": "smartphone_logic_board",
      "confidence_score": 0.80
    }
    
* **Ingestion Transmission:** The edge client streams the inference metadata payload directly to the FastAPI cloud application layer via standard network integration pathways (mapping to the `POST /api/scanned-devices` data context).
* **Database Persistence:** The backend instantiates and commits a new **`ScannedDevice`** record containing:
  * `category` / `subclass`
  * `material_composition` 
  * `individual_tier`
* **Operator Frontend Refresh:** The Next.js PWA dynamically renders the identified classification tag, individual value tier, and algorithmic execution logic, giving the sorting operator immediate visibility to trigger an manual **Rescan** if needed.


## 2. Finish Batch (Batch Value Aggregation)

This transactional routine triggers when an operator seals a physical pallet lot, forcing an atomic consolidation of all underlying item records.

### Process Lifecycle Step-by-Step
1. **Operator Action:** The warehouse sorting worker taps the **"Finish Batch"** action component inside the web PWA.
2. **Network Request:** The client dispatches a structured state transition call to the cloud gateway:
   * `PATCH /api/batches/{batch_id}/finish`
3. **Database Assembly:** The server extracts every recorded `ScannedDevice` instance associated with the active `batch_id`.
4. **Composition Calculation:** 
   * The backend invokes `batch_averager.calculate_batch_average_materials()` to compile a weighted average of each individual mineral concentration across the entire sample group.
   * The core application invokes `tier_calculator.calculate_value_tier()` against those compiled batch averages to determine the absolute material status grouping (**HIGH** / **MEDIUM** / **LOW**).
5. **State Commitment:** The main record's status variable transitions from `In Progress` to `Listed`.
6. **Showroom Synchronization:** The finalized entity ledger—containing the calculated `average_material_composition`, consolidated `batch_value_tier`, and nested array profiles of all constituent `individual_tiers`—becomes visible to refinery buyers inside the marketplace engine.

## 3. Booking a Batch (Marketplace Procurement)

This workflow governs concurrent buyer operations inside the shared B2B Digital Showroom catalog.

### Procurement Transaction Lifecycle

```text
 Refinery Flutter App ──> Tap "Book This Batch" ──> POST /api/bookings
                                                              │
                                                              v
 [ Marketplace View ] <── Hide From Inventory <── [ Status: "Booked" ]
```

* **Discovery Filtering:** A refinery sourcing specialist fires up the native Flutter application, parsing the Digital Showroom catalog using multi-variable filters (e.g., isolation by target value tier).
* **Reservation Request:** The user isolates an entry and triggers the checkout process by clicking **"Book This Batch"**.
* **Transaction Initialization:** The backend runs an atomic query routine to verify item availability before appending a new row to the **`Booking`** ledger containing:
  * `batch_id`
  * `refinery_user_id` / `company_id`
  * `status`
* **Concurrency Lockout:** The target batch state shifts immediately to **`Booked`**, wiping the item from the available inventory caches of all other competing refinery nodes to guarantee transactional isolation.
* **Offline Fulfillment Integration:** Physical fulfillment, contract terms, shipping validation, and material delivery arrangements are handled completely offline outside system structures. Once communications close, authorized admins update the booking entry status variables to **`Confirmed/Completed`** or **`Cancelled`**.
