## CI/CD Pipeline

### Current workflow

A single GitHub Actions workflow (`.github/workflows/deploy.yml`) handles backend deployment:

```yaml
name: Deploy FastAPI to Heroku

on:
  push:
    branches:
      - main
  workflow_dispatch:
```

**Trigger:** runs automatically on every push to `main`, or can be triggered manually via `workflow_dispatch`.

**Steps:**
1. Checks out the repository
2. Sets up Python (version pinned via `.python-version`, currently `3.10.12`), with pip caching
3. Installs dependencies from `requirements.txt`
4. Installs the Heroku CLI
5. Deploys to Heroku using the `akhileshns/heroku-deploy` GitHub Action, authenticated via `HEROKU_API_KEY`/`HEROKU_APP_NAME`/`HEROKU_EMAIL` secrets

Database migrations then run automatically as part of Heroku's release phase, not as a separate CI step.
