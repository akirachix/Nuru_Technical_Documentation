# 9.3 CORS Rules

The backend controls which frontend applications may call the API through the `CORS_ORIGINS` environment variable, using an explicit allow-list rather than a wildcard.

## Defensive Configuration Blueprint

This browser-side protection mechanism restricts cross-origin interactions strictly to verified, trusted host domains to eliminate arbitrary cross-site request vulnerabilities.

* **Explicit Allow-Listing:** The system explicitly avoids the use of open card parameters (`"*"`) alongside authorization handlers, satisfying strict browser-side cross-origin standards.
* **Environment-Driven Injection:** In production environments, domains are parsed from comma-separated strings inside environment setups into the middleware array.
* **Method & Header Restriction:** Limits allowed operations to required endpoints and locks down acceptable headers to prevent malicious injection attempts.

## Code Reference Configuration

The code block below outlines the underlying setup registering the specific local development origins, validation parameters, and protocol headers within the application structure:

```python
ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://localhost:8000",
    "https://127.0.0.1:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)
```

## Security Property Explanations

### 1. Origins Array Validation
The middleware inspects the origin header of every incoming web browser request against the allowed configuration strings. If an unverified external site attempts to fetch metrics or invoke endpoints via an end-user session, the engine drops the cross-origin pipeline immediately.

### 2. Allow Credentials Clearance
Setting `allow_credentials=True` allows authorized clients to pass user session details and authentication payloads safely across different domains, which is essential for preserving secure multi-tenant sessions.

### 3. Header and Method Isolation
* **`allow_methods`** $\rightarrow$ Restricts acceptable network activities strictly to a safe baseline framework (`GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`).
* **`allow_headers`** $\rightarrow$ Locks acceptable parameters down to standard metadata headers (`Content-Type`, `Authorization`), blocking attackers from wrapping custom exploits inside network packages.
