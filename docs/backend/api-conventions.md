## API Conventions

The E-Loop backend follows strict RESTful conventions to ensure consistent, secure, and predictable communications across all integrated clients and devices.

### Base URL

All requests must use the standard versioned entry path.

* **Production Path:** `/api/1` (appended to the hosted cloud domain)
* **Local Path:** `http://127.0.0.1.8000`


### Authentication

Access to secure endpoints requires token validation.

* **Mechanism:** Stateless **JWT (JSON Web Tokens)**.
* **Location:** Sent inside the HTTP `Authorization` request header.
* **Format:** `Bearer <TOKEN>`
* **Scope:** Deployed **Raspberry Pi 5** hardware, operator tablets, and mobile devices must request a token via the login endpoint before hitting protected routes.


### Status Codes

eLoop's API returns standard HTTP status codes to communicate the outcome of server requests.

| Code | Status | Description | E-Loop Context |
| :--- | :--- | :--- | :--- |
| **200** | OK | Success | Batch details retrieved or inventory lookup successful. |
| **201** | Created | Resource Created | New e-waste batch successfully registered via PWA. |
| **400** | Bad Request | Validation Failure | **Pydantic** schema rejected a malformed edge device payload. |
| **401** | Unauthorized | Authentication Missing | Expired or missing JWT token on a protected route. |
| **403** | Forbidden | Permission Denied | Refinery account attempting to access seller sorting logs. |
| **404** | Not Found | Resource Missing | Requested batch ID does not exist in the database. |
| **500** | Internal Error | Server Failure | Database connection loss or unhandled execution crash. |
