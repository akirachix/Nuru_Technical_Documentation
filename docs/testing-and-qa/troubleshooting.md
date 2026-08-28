# 13.4 Troubleshooting

This guide catalogs common system errors, edge hardware connectivity hurdles, and diagnostic lookup faults encountered across the platform integration pipeline.

---

## Technical Issue Resolution Matrix

| Issue | Likely Cause | Solution |
| :--- | :--- | :--- |
| **`"Component type not found: PCB/unknown_type"`** | YOLOv8s returned a subclass not defined inside the static `material_composition.json` dictionary mapping. | Feed the overhead edge camera with components that the machine learning AI model is trained to recognize if you require valid metric processing output. |
| **Batch tier not calculating on "Finish Batch"** | There are zero registered `ScannedDevice` entries associated with the batch, a database model query failure happened, or an error was thrown inside the service layer calculation code loop. | Run `heroku logs --tail` to capture active trail tracebacks; confirm that child `scanned_devices` rows exist for the targeted `batch_id` using a direct `psql` database connection. |
| **Raspberry Pi cannot connect to the backend gateway** | Incorrect remote WebSocket target URL string routing parameters, a localized factory network/firewall blockage rule, or the FastAPI backend web application server is offline. | Test network connectivity limits directly from the physical Raspberry Pi single-board station using a short standalone Python networking script targeting: `wss://<backend-host>/ws/classify`. |
| **Material composition lookup function returns an empty set `{}`** | The vital reference asset `config/material_composition.json` file failed to compile or failed to map into server memory pools on initial boot parameters. | Confirm that the file path location resolves cleanly on your instance and trace the physical count variable logging the total categories loaded at backend platform startup. |
