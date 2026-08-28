# 14.1 Technical Glossary

This glossary defines the core technical components, industry terms, and platform abstractions utilized throughout the Nuru ecosystem.

## Terms & Definitions

| Term | Definition |
| :--- | :--- |
| **API** | Application Programming Interface — the set of HTTP endpoints the backend exposes for the PWA and mobile app to call. |
| **PCB** | Printed Circuit Board — one of the two top-level e-waste categories Nuru classifies (the other being Battery). |
| **YOLOv8s** | The edge computer-vision model which runs locally on the Raspberry Pi to classify e-waste components from camera images. |
| **Value Tier** | The HIGH / MEDIUM / LOW classification assigned to a component or a batch based on its (averaged) material composition. |
| **Batch** | A group of scanned devices processed together; batches move through the status lifecycle `In Progress` - `Listed` - `Booked` - `Completed`. |
| **Digital Showroom** | The refinery-facing catalogue view of listed batches available to browse and book. |
| **Booking** | A refinery's request to reserve a listed batch; moves through `In progress` - `Confirmed` or `Cancelled`. |
| **Material Composition** | The estimated percentage-by-weight of critical/precious metals (gold, silver, copper, cobalt, lithium, aluminium, iron, nickel, lead) in a component or batch. |
| **Two-tenant** | Describes the platform serving two distinct account types — recycling centers and refineries — from the same backend, scoped by company and role. |
| **bcrypt** | The password-hashing approach implied by the `users.password_hash` field, used to store passwords securely rather than in plain text. |
| **ORM** | Object-Relational Mapper — SQLAlchemy, used to define database tables as Python classes (models) and query them without raw SQL. |
| **Alembic** | The migration tool used to version and apply changes to the database schema. |
| **WebSocket** | The persistent connection protocol the Raspberry Pi uses to stream classification results to the backend in real time. |
| **Dyno** | Heroku's term for the container/process running the application. |
