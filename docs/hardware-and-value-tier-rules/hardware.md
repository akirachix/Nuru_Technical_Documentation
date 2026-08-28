# 8.1 Hardware Overview

The physical material intelligence sorting line leverages a standardized edge-computing hardware configuration to capture live vision frames and process local computer vision algorithms without causing factory floor bottleneck delays.

---

## Edge System Hardware Specifications

| Component Profile | Interface Standard | Primary Deployment Operational Role |
| :--- | :--- | :--- |
| **Raspberry Pi 5** | Single-Board Computer | Orchestrates input capture buffers and runs local deep learning inference tasks. |
| **Raspberry Pi Camera Module 3** | Industrial CSI Lens Array | Suspended overhead to capture clear optical frames of the active conveyor belt stream. |
| **Stateful WebSocket Link** | Network Protocol (`wss://`) | Real-time, continuous metadata link connecting edge line arrays directly to the cloud. |

---

## Technical Component Profiles

### 1. Raspberry Pi 5 Core Unit
* **Operational Scope:** Acts as the primary physical edge station computing node deployed directly over the workspace conveyor lines.
* **On-Device Inference:** Captures live overhead camera feeds of passing e-waste items and executes a custom-trained **YOLOv8s** machine learning architecture locally.
* **Autonomous Processing:** Identifies and isolates component groupings completely on the device, eliminating the need to transmit heavy raw video data formats over external networks.

### 2. Raspberry Pi Camera Module 3
* **Physical Assembly Layout:** Positioned securely as an overhead industrial visual acquisition lens looking downward at the manual sorting area grid.
* **Connection Interface:** Links natively back into the central Raspberry Pi 5 single-board computer processing port using a flexible high-speed **ribbon data cable**.
* **Optical Functionality:** Delivers frame buffers at precise intervals to feed high-resolution images straight into the running local target classification model.

### 3. Ingestion Network Stream
* **Bidirectional Pipeline:** Maintains an open connection linking the local Raspberry Pi station directly to the remote FastAPI server cluster.
* **Real-Time Transmission:** Streams the locally calculated machine learning classification tags and validation metrics immediately over a persistent **WebSocket** connection.
* **Compute Optimization:** Limits bandwidth payloads strictly to lightweight metric strings to guarantee low-latency asset aggregation on the cloud backend.
