## Data Pipeline

### Inference: Fully Local

Classification runs **entirely on the Raspberry Pi** at the sorting line. The camera feed is processed on-device by the YOLOv8s model , frames are never uploaded to the cloud for inference, which is what enables real-time results without network latency.

### What Gets Sent to the Backend

Only the **classification results** , not raw images or video, are transmitted from the Raspberry Pi to the backend API. This keeps the data pipeline lightweight:

### End-to-End Flow

1. **Capture:** The Pi's camera captures images on the sorting line.
2. **Local Inference:** YOLOv8s classifies items in view directly on the Pi.
3. **Result Transmission:** The classification output (e.g. "battery" or "PCB") is sent to the backend.
4. **Logging & Display:** The backend stores and associates the result with the relevant device/batch record, and it's displayed in real time in the dashboard's live scanning view.
