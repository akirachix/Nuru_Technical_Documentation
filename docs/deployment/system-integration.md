## System Integration

How the pieces of the eLoop platform actually talk to each other:

### Mobile / Frontend -> Backend

Both the mobile app and (presumably) the frontend web app communicate with the backend exclusively over HTTPS REST calls to the Heroku-hosted API. Authentication is via JWT bearer tokens obtained through the two-step login + TOTP flow (see security docs). There is no GraphQL, WebSocket, or gRPC layer - plain REST/JSON throughout.

### Backend -> Database

The backend talks to Postgres via SQLAlchemy ORM, with Alembic managing schema migrations. Connection string comes from `DATABASE_URL`, set automatically by Heroku's Postgres add-on.

### Backend -> Redis (Upstash)

Used for: TOTP secret storage (encrypted), MFA/password-reset token storage, and rate-limit counters (via `slowapi`). Connection via `REDIS_URL`.

### Backend -> Email

Password-reset emails are sent via SMTP directly to Google Workspace, authenticated with an App Password (`SMTP_HOST`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `MAIL_FROM`).

### Frontend password-reset redirect

The backend uses `FRONTEND_URL` to build the link included in password-reset emails, so the reset flow redirects the user back to whichever frontend is configured — this is the integration point between the email flow and the web/mobile client that handles the reset UI.
