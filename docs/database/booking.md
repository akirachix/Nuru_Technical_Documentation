# 4.6 Booking Table Schema

Tracks refinery bookings and reservations for analyzed batches listed on the Digital Showroom, capturing the full transaction path from initial buyer hold through final confirmation or cancellation.

---

## Database Field Schema

| Column Name | Data Type | Constraints | Operational Description |
| :--- | :--- | :--- | :--- |
| **`book_id`** | String | `PRIMARY KEY` | Unique system-generated identifier for the booking record. |
| **`batch_id`** | String | `FOREIGN KEY` $\rightarrow$ `batches.batch_id`, `NOT NULL` | The unique identifier linking directly to the specific batch being booked. |
| **`user_id`** | String | `FOREIGN KEY` $\rightarrow$ `users.user_id`, `NOT NULL` | The unique identifier of the refinery user who initialized the booking. |
| **`booking_status`** | Enum | `NOT NULL` | The operational status of the procurement hold: `In progress`, `Confirmed`, or `Cancelled`. |
| **`created_at`** | DateTime | `NOT NULL` | Timestamp identifying exactly when the booking inquiry was submitted (UTC). |
| **`updated_at`** | DateTime | `NOT NULL` | Timestamp identifying exactly when the booking status flag was last updated (UTC). |

---

## State Lifecycle Definitions

The `booking_status` field is bound to an explicit status matrix to guarantee transaction consistency across the B2B marketplace:

* **`In progress`** $\rightarrow$ Initial hold triggered by a refinery worker. The targeted batch is immediately locked and hidden from other buyers while logistical and offline contract terms are reviewed.
* **`Confirmed`** $\rightarrow$ The local recycling center validates and manually accepts the transaction hold request, officially routing the lot into the physical shipping and delivery pipeline.
* **`Cancelled`** $\rightarrow$ The procurement request is terminated by either the buyer or seller, breaking the operational hold and immediately returning the batch to the public Showroom catalog.
