## Risk Management

### Vendor Oversight

The platform's security posture is closely tied to three primary third-party vendors:

- **Heroku:** Hosts the backend API and the Postgres database, including automatic backups. Heroku's own platform security (patching, infrastructure hardening, DDoS mitigation at the platform level) is inherited rather than managed directly by the team.
- **Upstash (Redis):** Hosts the Redis instance the backend depends on for TOTP secrets, MFA/password-reset tokens, and rate-limit counters. Because 2FA verification, password resets, and abuse protection all route through it, an Upstash outage would degrade or block login and account-recovery flows platform-wide, not just cause a performance hit. Upstash's own infrastructure security and availability are inherited the same way Heroku's are.
- **Google Workspace:** Handles outbound transactional email via a company account and App Password.

### Concentration Risk

Because core infrastructure (Heroku), session/2FA state (Upstash Redis), and email delivery (Google Workspace) are each single vendors with no documented fallback, an outage or account issue on any one of them would directly impact the platform - an Upstash outage in particular would block the 2FA step of login entirely, since there's currently no code path that lets a user in without a working TOTP-secret lookup.

### Ongoing Monitoring

The current CI pipeline (GitHub Actions) only handles deployment to Heroku on push to `main` - there is no automated dependency/vulnerability scanning (e.g. `pip-audit`, Dependabot) or uptime monitoring configured today.
