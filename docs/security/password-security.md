# 9.1 Password Security

The platform enforces strict cryptographic standards to protect user access credentials, eliminate data vulnerability vectors, and ensure compliance with modern security auditing parameters.

---

## Core Security Directives

To maintain maximum credential isolation and shield user account integrity across all system layers, authentication storage boundaries comply with these strict architectural constraints:

* **Plain-Text Total Elimination:** User passwords are never captured, written to logging output streams, or stored in plain-text format anywhere within the platform ecosystem.
* **Immutable Hash Storage:** The central database `users` table records and persists only a cryptographically secure `password_hash` value.
* **Immediate Discard Protocol:** The raw, plain-text password payload parameter is strictly discarded from server memory loops immediately after the hashing algorithm completes execution during both registration and login authentication cycles.

---

## Structural Authentication Lifecycle Flow

```text
  [ Client Application Interface ]
                 │
                 v  (Transmits Password over TLS)
     [ FastAPI Routing Core ]
                 │
                 v  (Computes Cryptographic Hash)
     [ Memory Volatility Dump ]  ──> Plain-Text Password Discarded Instantly
                 │
                 v  (Commits / Compares Hash)
       [ PostgreSQL Ledger ]
```

### 1. New Account Registration Step
When an operator or refinery worker establishes an account profile, the entry router ingests the registration schema payload over an encrypted network tunnel. The backend pipes the raw password string directly into a localized **bcrypt computational node**, generates a random salt pairing, maps out the immutable hash sequence string, and writes only that hash result to disk before completely purging the raw text string from working thread cache contexts.

### 2. Login Verification Step
During an active login check request, the inbound password payload is immediately intercepted at the entry gateway layer. The server routes the text alongside the user's stored database string back to the hashing verification function. Once the engine completes its mathematical comparison to confirm authentication permission status, the system drops the temporary memory reference to the plain-text credentials, ensuring zero persistent storage exposure.
