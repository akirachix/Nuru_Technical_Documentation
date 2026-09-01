## Environment Variables

| Variable              | Purpose                                                    | Required?                                           |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------- |
| `DATABASE_URL`        | Postgres connection string                                 | Yes - set automatically by Heroku's Postgres add-on |
| `REDIS_URL`           | Upstash Redis connection string                            | Yes                                                 |
| `SECRET_KEY`          | JWT signing key                                            | Yes - app fails to start without it                 |
| `TOTP_ENCRYPTION_KEY` | Encrypts TOTP secrets at rest                              | Yes - app fails to start without it                 |
| `TOTP_ISSUER`         | Display name shown in authenticator apps during TOTP setup | Yes                                                 |
| `SMTP_HOST`           | SMTP server for outbound email                             | Yes                                                 |
| `SMTP_PORT`           | SMTP port                                                  | Yes                                                 |
| `SMTP_USERNAME`       | SMTP auth username (Google Workspace account)              | Yes                                                 |
| `SMTP_PASSWORD`       | SMTP auth password (Google Workspace App Password)         | Yes                                                 |
| `MAIL_FROM`           | "From" address on outbound emails                          | Yes                                                 |
| `FRONTEND_URL`        | Base URL used to build password-reset links sent in email  | Yes                                                 |

**GitHub Actions secrets** (used by the deploy workflow, not read by the app itself):

- `HEROKU_API_KEY`
- `HEROKU_APP_NAME`
- `HEROKU_EMAIL`
