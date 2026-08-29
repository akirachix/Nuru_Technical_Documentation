## Key Features

* **Material Registration:** Recycling workers register incoming e-waste intakes (device type, brand, weight, source) via the web app.
  
  ![eLoop Device Registration UI](/images/register-device.png)

* **Visual Recognition:** A Raspberry Pi 5 + camera captures overhead images of components on the sorting line and classifies them locally with YOLOv8.

  ![eLoop Scan & Identify Visual Recognition UI](/images/visual-recognition.png)

* **Material Composition:** Each classification is cross-referenced against a material composition lookup table to estimate precious or critical metal percentages and an individual value tier.

  ![eLoop Batch Analysis & Composition UI](/images/material-composition.png)

* **Inventory Management:** Real-time tracking of sorted materials and batch status.

  ![eLoop Catalogue Batches & Inventory Management UI](/images/inventory-management.png)

* **Digital Showroom (Catalogue Browser):** A two-tenant showroom-like view where refineries browse verified, tiered batch listings and submit booking requests.

  ![eLoop Digital Showroom Sourcing UI](/images/digital-showroom.png)


## What Makes eLoop Unique

* **Fast and Local AI:** The system analyzes e-waste right on the sorting line.
* **Material Weight Analysis:** It turns e-waste into an accurate breakdown of the exact metals inside it. This connects real-world trash directly to the raw materials factories need.
* **Catalogue:** The moment a box of waste is scanned, classified, and sorted, it is posted directly to a digital showroom where refineries can book.


