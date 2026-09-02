## Deployment Architecture

A high-level view of where each part of the eLoop platform runs:

| Component | Hosted on |
|---|---|
| Backend API (FastAPI) | Heroku |
| Database (PostgreSQL) | Heroku Postgres add-on |
| Redis (TOTP secrets, tokens, rate-limit counters) | Upstash |
| Transactional email (password resets) | Google Workspace, via SMTP |
| Frontend Web | Vercel |
| Technical documentation site (this site) | GitHub Pages, served at `https://akirachix.github.io/Nuru_Technical_Documentation/` |
| AI classification | Runs on Raspberry Pi edge devices at recycling centers,sends only classification results to the backend |

