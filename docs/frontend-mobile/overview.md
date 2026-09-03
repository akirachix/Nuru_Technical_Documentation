## Frontend Mobile Overview

**e-Loop** mobile is a Flutter app covering two operational roles as the, scoped to the parts of the workflow that make sense on a phone:

- **Company Admin** (`company_admin`) - registers the company, sets up the admin account, and manages workers (create, update, deactivate, reset TOTP), in addition to everything below.
- **Refinery Operator** (`refinery_operator`) - authenticates and works with the catalog and their own bookings.

Unlike the web app (see `frontend-web/web-overview.md`), the mobile app does not serve on-site sorting-line scanning - that's a Progressive Web App workflow running against a live camera feed and edge-device (Raspberry Pi) classification. Mobile's scope is: authenticate, browse the batch catalog, manage bookings, and (for admins) manage the worker roster.
