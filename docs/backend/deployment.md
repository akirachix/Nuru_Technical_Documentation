## Deployment Architecture & Process

The backend is deployed on Heroku under the application profile **`eloop-backend`**. It interfaces with a provisioned **Heroku Postgres** managed production database.


### Server Configuration & Runtime Buildpack

The cloud architecture avoids manual buildpack scripts by relying on automated repository detection:
* **Buildpack Detection**: Heroku identifies the Python engine automatically from the **`requirements.txt`** file in the repository root.
* **Process Execution**: The active container dyno pulls its startup instructions from the checked-in **`Procfile`**, launching the FastAPI app via Uvicorn.
* **Database Connection**: Attaching the managed Postgres add-on automatically populates the **`DATABASE_URL`** environment configuration variable inside the runtime wrapper.


### Required Environment Variables

Configuration parameters are set directly through the Heroku dashboard or CLI interface. Every variable modification automatically reboots the server container dyno to apply changes:

| Key | Expected Format / Type | Purpose for eLoop |
| :--- | :--- | :--- |
| `DATABASE_URL` | Cloud Connection URI string | Automatically injected by the managed Postgres add-on to bind the app to the database. |
| `SECRET_KEY` | High-entropy string | Used to securely sign and verify stateless JWT operator session tokens. |
| `CORS_ORIGINS` | Web URL Address string | Set to `https://...app/` to authorize cross-origin front-end dashboard requests. |


### Step-by-Step Provisioning & Deployment Steps

Run this terminal sequence to provision the remote environment, configure variables, and deploy your code:

Log in to the cloud host command gateway:
```bash
heroku login
```

Create the remote web application container workspace:
```bash
heroku create eloop-backend
```

Attach the managed hobby-tier Postgres relational database to the application instance:
```bash
heroku addons:create heroku-postgresql:hobby-dev --app eloop-ackend
```

Configure your remaining operational environment parameters:
```bash
heroku config:set 
  SECRET_KEY=secret key 
  CORS_ORIGINS=https//...
  --app eloop-ackend
```

Push your active branch changes directly to the live environment to compile and execute your release:
```bash
git push heroku main
```


### Post-Deployment Verification & System Diagnostics

Stream live server startup behaviors, track ongoing background executions, or inspect the material composition lookup table load count metrics:
```bash
heroku logs --tail --app eloop-backend
```

Ping the deployed runtime instance over an external connection pool to verify the gateway is responding to client apps:
```bash
curl https://eloop...herokuapp.com/
```
