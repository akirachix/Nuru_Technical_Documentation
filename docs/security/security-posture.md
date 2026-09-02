## Security Posture

The eLoop Dashboard platform is currently deployed, with the security focused around the highest-leverage risks for a system at this stage: protecting operator account access, keeping the API resilient against abuse, and making sure recovery data isn't lost if something goes wrong.

### Current Priorities

- **Account Access:** Two-factor authentication is mandatory for all users, combining email-based password verification with TOTP, rather than relying on a single credential.
- **API Resilience:** Rate limiting is implemented at the backend on authentication and password-reset endpoints to keep the platform available under abusive traffic; large-scale volumetric attacks currently rely on Heroku's platform-level defenses rather than a dedicated DDoS layer (see [Network Security](./network-security.md)).
- **Data Durability:** The production database runs on **Heroku Postgres**, which handles automatic backups, reducing the risk of unrecoverable data loss.
