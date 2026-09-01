## AI Module Overview

eLoop's AI module is an **edge-deployed computer vision system** that classifies electronic waste components directly at the recycling center sorting line, without relying on a cloud round-trip for inference.

### What It Does

As devices are broken down and components pass through the sorting line, a camera feed is analyzed in real time by a custom-trained classification model running locally on a **Raspberry Pi**. The model identifies the type of component in view - for example, distinguishing **batteries** from **PCBs (printed circuit boards)** - and the resulting classification is sent to the backend, where it's surfaced in the live scanning view of the recycling dashboard.

### Why Edge Inference

Running the model **on-device** rather than in the cloud has two direct benefits for a physical sorting-line workflow:
* **Latency:** Operators get real-time feedback as items are captured, with no network round-trip to wait on.
* **Bandwidth & Privacy:** Only lightweight classification results are transmitted to the backend, not raw video, reducing both network load and the amount of camera data that leaves the facility.

### How It Fits the Product

This module is what powers the "visual classification" referenced in the platform's broader product description, it's the mechanism that turns a physical stream of incoming e-waste into structured, trackable data (device/batch records) that recycling centers and refinery buyers can act on.
