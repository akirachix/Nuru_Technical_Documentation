# 3.4 Error Handling

The platform implements standardized HTTP status codes and error-reporting schemas across all core routing channels. The batch-finishing transaction lifecycle serves as the primary system-wide convention model for API response structures.

---

## HTTP Response Matrix

The table below outlines the standard response codes, semantic meanings, and typical production triggers across the API network:

| Status Code | Semantic Meaning | Typical System Cause / Trigger |
| :--- | :--- | :--- |
| **`200`** | **Success** | The batch (or other systemic entity resource) processed completely and returned data normally. |
| **`400`** | **Bad Request** | Client-side logical validation error; e.g., calling `POST /api/batches/{batch_id}/finish` against a batch with zero scanned devices. |
| **`404`** | **Not Found** | The targeted identifier or resource path does not exist; e.g., the requested `batch_id` cannot be found in the database. |
| **`422`** | **Unprocessable Entity** | The incoming request payload body breaks Pydantic validation structures due to missing, typed improperly, or malformed parameters. |
| **`429`** | **Too Many Requests** | Active client interaction traffic patterns cross threshold limits managed by the system's rate-limiting modules. |
| **`500`** | **Internal Server Error** | An unhandled exception occurred within the core backend. Requires access to Heroku log streams (`heroku logs --tail`) to isolate tracebacks. |

---

## Structural Response Blueprint

To ensure that both frontend clients (the Next.js PWA and the Flutter mobile app) parse exceptions identically, error responses are returned as structured payloads:

### Sample Payload: Validation Error (422)
```json
{
  "detail": [
    {
      "loc": ["body", "weight"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

### Sample Payload: Logical Error (400 / 404)
```json
{
  "detail": "Batch processing cannot be finalized without registered e-waste components."
}
```

---

## Log Analysis Guidelines

When debugging critical errors (such as system code status `500`), developers must isolate the backend pipeline behaviors directly through the cloud runtime logs.

