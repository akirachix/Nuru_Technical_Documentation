## Incident Response

### Logging

- **Where logs live:** Application and request-level logs are viewed directly through **Heroku's log stream** (`heroku logs`), rather than a separate aggregation/observability platform.
- **What this covers:** Backend request activity, errors, and runtime output from the API.
