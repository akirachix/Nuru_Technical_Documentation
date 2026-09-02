## Models Used

### Detection Model: YOLOv8s

* **Architecture:** **YOLOv8s** - the "small" variant in the YOLOv8 (You Only Look Once, version 8) family of real-time object detection models.
* **Why this variant:** The "s" (small) size was chosen as a balance between detection accuracy and inference speed, which matters here because the model runs on **constrained edge hardware** (a Raspberry Pi) rather than a GPU server. Larger YOLOv8 variants (m/l/x) would likely be more accurate but too slow for real-time inference on this hardware.
* **Classes:** Trained across **19 classes**, covering the range of PCB and battery types the sorting line needs to distinguish.

