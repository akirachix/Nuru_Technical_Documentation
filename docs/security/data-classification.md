## Data Classification

The platform's data currently lives in a single **PostgreSQL** database hosted on Heroku Postgres. While there isn't yet a formal, documented classification policy, the data naturally falls into a few distinct categories based on sensitivity and use.

### 1. Identity & Access Data

- **What it includes:** User account records - email addresses, hashed passwords, and TOTP secrets used for the mandatory 2FA flow.
- **Sensitivity:** Highest sensitivity in the system - this is the data that gates access to everything else.
- **Handling:** Passwords are hashed with **bcrypt**; TOTP secrets are encrypted at rest (Fernet symmetric encryption) using a dedicated encryption key separate from the JWT signing key.

### 2. Operational / Business Data

- **What it includes:** Device and batch intake records, recycling center and refinery workflow data (e.g. batch analysis, catalogue listings).
- **Sensitivity:** Moderate - commercially relevant (e.g. to refinery buyers viewing the Digital Showroom) but not personally identifying on its own.
- **Handling:** Standard database access controls via the backend API; no direct external access to the database.

### 3. AI Classification Results

- **What it includes:** Output from the Raspberry Pi edge model - item classifications (e.g. battery, PCB) sent from the sorting line to the backend.
- **Sensitivity:** Low - these are material-type labels, not personal or financial data.
