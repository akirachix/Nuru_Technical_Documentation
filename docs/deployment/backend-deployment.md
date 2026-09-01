## Backend Deployment

### Platform

Heroku, using the standard Python/Heroku buildpack flow (`Procfile`-driven).

### Procfile

```
release: alembic upgrade head
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

* **release phase** - runs Alembic migrations (`alembic upgrade head`) automatically before the new release goes live, so the database schema stays in sync with each deploy.
* **web process** - starts the FastAPI app via `uvicorn`, bound to the port Heroku assigns dynamically via `$PORT`.

### Prerequisites

* A Heroku app already created, with a Postgres add-on provisioned (`DATABASE_URL` is set automatically by Heroku when the add-on is attached)
* Environment variables configured in Heroku config vars 
* Python version pinned via `.python-version` (currently `3.10.12`)

### Deploying

Deployment is automated via GitHub Actions on every push to `main` (see [CI/CD Pipeline](./cicd-pipeline.md)) - there is no manual `git push heroku main` step in the normal workflow.

For a manual deploy with the Heroku CLI installed and authenticated:

```bash
heroku git:remote -a <heroku-app-name>
git push heroku main
```

Migrations run automatically via the Procfile's `release` phase on every deploy, no separate manual migration command is needed in normal operation.
