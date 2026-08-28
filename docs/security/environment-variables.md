# 9.5 Environment Variables & Secrets

The platform architecture implements strict externalized runtime configurations to guarantee cryptographic confidentiality, enforce environment isolation, and eliminate credential exposure risks.

---

## Core Security Objectives

To preserve system integrity and satisfy rigorous auditing benchmarks, all sensitive keys and dynamic system behaviors are bound by strict isolation principles:

* **Zero Plain-Text Code Injection:** No cryptographic tokens, connection chains, or secret keys are ever hard-coded directly into repository files.
* **Platform-Level Injection:** Production secrets reside exclusively within secure cloud runtime containers (such as the Heroku Dashboard Config Vars pipeline).
* **Source-Control Exclusion:** Secret configuration assets are permanently blocked from reaching open source code repositories to prevent accidental downstream leaks.

---

## Production Configuration Matrix

The table below outlines the primary configuration variables required to initialize the backend application context in a production state:

| Environment Variable Key | Target Layer | Functional Purpose / Constraints |
| :--- | :--- | :--- |
| **`SECRET_KEY`** | Web Security / Auth | The cryptographically secure string used to sign and verify stateful **JWT identity tokens**. |
| **`DATABASE_URL`** | Core Storage Engine | The complete, encrypted relational path connection string pointing directly to the managed **PostgreSQL** instance. |
| **`CORS_ORIGINS`** | Network Middleware | Comma-separated domain string defining the precise, explicit host allow-list for cross-origin tracking protection. |
| **`RATE_LIMIT_ENABLED`** | Traffic Guard | Boolean runtime toggle switch (`true` or `false`) that activates or suspends the automated API rate-limiting subsystem. |

---

## Leak Prevention Architecture

```text
 [ Local Developer Workspace ] ──> Generates Secrets ──> Saved to Local .env File
                                                                  │
   [ Git Commit Sequence ] ──> Filtered by .gitignore ──> Blocks Upstream Pushes
                                                                  │
                                                                  v
 [ Public GitHub Repository ] <────────────────────────── Safe From Key Leaks!
```

### 1. Local Development Sandbox Isolation
During local engineering development cycles, variables are staged within a local plaintext file named **`.env`** situated at the project module root level. This environment-mimicking resource allows software components to read local paths fluidly without impacting live user records.

### 2. Explicit `.gitignore` Enforcement
To ensure that developer teams never accidentally expose local configuration secrets, the project root contains a prioritized tracking rule defined natively within the **`.gitignore`** system schema file:

```text
# Block credential exposure files from ever entering git tracking histories
.env
.env.*
```

Because of this definition, local configuration files are completely invisible to the staging pipeline, keeping your upstream git commits entirely clean.

### 3. Production Pipeline Delivery
During production deployments (pushed via `git push heroku main`), the backend app extracts its dependencies directly from the cloud platform's configuration management dashboard. This decoupling allows system administrators to adjust settings, scale access control tokens, or rotate database connection pathways instantly without refactoring a single line of compiled code.
