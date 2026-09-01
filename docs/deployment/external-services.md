## External Services

| Service                     | Purpose                                                      | Status                                                            |
| --------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Heroku**                  | Hosts backend API + Postgres database                        | Active, confirmed in `Procfile` and deploy workflow               |
| **Upstash (Redis)**         | TOTP secrets, MFA/password-reset tokens, rate-limit counters | Active, confirmed via `REDIS_URL`                                 |
| **Google Workspace (SMTP)** | Sends password-reset emails via App Password                 | Active, confirmed via `SMTP_HOST`/`SMTP_USERNAME`/`SMTP_PASSWORD` |
