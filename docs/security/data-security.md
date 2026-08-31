## Data Security

Data-at-rest and data-in-transit protections are largely inherited from the managed services the platform runs on - Heroku Postgres and Google Workspace , supplemented by explicit application-level choices around credential handling.

### Database

- **Engine:** **PostgreSQL**, provisioned via **Heroku Postgres**.
- **Backups:** Heroku Postgres automatically backs up the database, protecting against data loss from application bugs, accidental deletes, or infrastructure failure.
- **Access:** The database is only reachable through the backend application layer - there's no direct public exposure of the database itself.

### Secrets Management

- **Email Credentials:** Transactional email (e.g. password resets) is sent through a company **Google Workspace** account, authenticated via a **Gmail App Password** rather than the account's primary password - limiting what a leaked credential could access.
- **Application Secrets:** All secrets - JWT signing key, TOTP encryption key, database URL, SMTP credentials, Redis URL - are read from **environment variables** at runtime (never hardcoded), which on the current deployment means Heroku config vars. The JWT signing key and TOTP encryption key are required at startup; the app refuses to boot if either is missing, rather than falling back to an insecure default.
- **TOTP Secrets:** Individual users' TOTP secrets are encrypted (Fernet/AES-based symmetric encryption) before being persisted, using a key that's separate from the JWT signing key.

### Password Storage

Passwords are hashed with **bcrypt** (salted, adaptive-cost hashing) - never stored or logged in plaintext, and not reversible even if the database were compromised.
