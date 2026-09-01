## Code Standards

The eLoop repository uses strict development guidelines to maintain a clean codebase, clear team communication, and smooth continuous deployment on Heroku.

### Naming Conventions

Code layout components use standard Python style guides.

* **Files & Packages:** Lowercase with underscores (e.g., `scanned_device.py`).
* **Classes / Pydantic Schemas:** PascalCase (e.g., `BatchCreateSchema`).
* **Functions & Attributes:** Lowercase with underscores (e.g., `calculate_material_tier`).
* **Global Constants:** Uppercase with underscores (e.g., `ACCESS_TOKEN_EXPIRE_MINUTES`).


### Repository Folder Structure

The project code layers follow a decoupled backend structure to isolate database tables, processing models, endpoints, and environment variables.

```text
NURU_BACKEND/
├── .github/
├── .vscode/
├── eloop/
│   ├── models/
│   │   ├── __init__.py
│   │   ├── batch.py
│   │   ├── booking.py
│   │   ├── company.py
│   │   ├── device_intake.py
│   │   ├── notification.py
│   │   ├── scanned_device.py
│   │   └── user.py
│   ├── repositories/
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── batch.py
│   │   ├── booking.py
│   │   ├── company.py
│   │   ├── device_intake.py
│   │   ├── notification.py
│   │   ├── scanned_device.py
│   │   └── user.py
│   ├── schemas/
│   ├── services/
│   ├── rate_limit.py
│   └── security.py
├── env/
├── .env
├── .gitignore
├── .python-version
├── database.py
├── main.py
├── Procfile
├── README.md
└── requirements.txt
```

### Commit Message Format

The development team used Conventional Commits to generate structured git histories and clean up release log tracking.

* **Format Structural Rule:** `type(scope): short description`

* **Standard Commit Types We Used:**
  * `feat`: Added a new asset component.
  * `fix`: Addressed logic errors and system crashes.
  * `docs`: Editing technical documentation, markdown guides, or comments.
  * `refactor`: Structural codebase updates that do not alter operational behavior.
  * `test`: Injected missing test coverages or tuning automation script records.

* **eLoop Commit messages We Used:**
  ```bash
  feat(routers): add batch allocation tracking endpoint
  fix(services): resolve score overflow error on lookup tables
  docs(api): update heroku configuration base path definitions
  test(postman): implement end to end booking process
  ```

### Implementation Workflow by Layer

New backend code for a resource is added to the matching layer file for that resource, for instance a new batch endpoint goes in **eloop/routers/batch.py**, **eloop/schemas/batch.py**, **eloop/services/batch.py** then finally to e**loop/repositories/batch.py**.
