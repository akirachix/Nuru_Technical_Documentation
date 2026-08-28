# 12.1 Backend Deployment (Heroku)

The backend production application layer is deployed on Heroku as the `eloop-backend` app, backed by a fully managed Heroku Postgres database instance.

---

## Architecture Lifecycle Configuration

The hosting cluster leverages platform automation to detect and run the runtime ecosystem dependencies:

* **Buildpack Integration:** Heroku automatically evaluates the environment and assigns the **Python buildpack** via the presence of the structural `requirements.txt` file located at the repository root. No manual buildpack overriding is required.
* **Process Orchestration:** The dyno container cluster reads its boot instructions directly from the checked-in **`Procfile`**, which spins up the high-performance FastAPI application server via the **Uvicorn** ASGI protocol.
* **Access Scope boundaries:** Production deployments are strictly gated behind authorized Heroku accounts maintaining structural collaborator privileges on the target `eloop-backend` app instance.

---

## Deployment CLI Command Walkthrough

Follow this step-by-step console sequence using the official **Heroku CLI** to authenticate your terminal session, provision cloud containers, attach managed storage systems, inject variables, and trigger live updates.

### 1. Authenticate Account Session
Log into your platform dashboard account profile directly through your local console interface:
```bash
heroku login
```

### 2. Provision the Cloud App Container
Initialize and claim your unique platform application workspace slot:
```bash
heroku create eloop-backend
```

### 3. Attach Managed PostgreSQL Storage
Provision and link the standardized cloud database tier directly to your app instance container. This automation sequence dynamically sets your production `DATABASE_URL` routing variable:
```bash
heroku addons:create heroku-postgresql:hobby-dev --app eloop-backend
```

### 4. Configure Production Environment Variables
Inject your production secret keys, token security markers, and CORS cross-domain allow-lists. Any structural modification made across these entries automatically reboots active dyno workers to ensure variables update cleanly:
```bash
heroku config:set \
  SECRET_KEY=your-secret-key \
  CORS_ORIGINS=https://vercel.app \
  --app eloop-backend
```

### 5. Trigger the Build Release Execution
Push your active repository source branch changes directly upstream to your cloud git host to build your containers live:
```bash
git push heroku main
```

---

## Post-Deployment Diagnostics & Validation

Once your release build cycle closes successfully, monitor active container behaviors and verify pipeline health targets using these verification routines.

### A. Stream Live Operational Logs
Monitor your production container startup logging output sequences (including tracking your internal material assay JSON load counts specified across Sections 9.5 and 13.4) to confirm zero boot crashes occur:
```bash
heroku logs --tail --app eloop-backend
```

### B. Validate Route Ingestion Handshakes
Dispatch a network curl request against your live, public web address endpoint to confirm that your FastAPI server layer is online and processing connections properly:
```bash
curl https://herokuapp.com
```
