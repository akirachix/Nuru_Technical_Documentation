# 11.1 Naming Conventions

The platform enforces strict language-specific coding standards across all development teams to guarantee a clean codebase, reduce developer friction, and streamline cross-platform architecture tracing.


## Language Ecosystem Syntax Matrix

| Ecosystem / Layer | Code Target | Case Style Convention | Concrete System Examples |
| :--- | :--- | :--- | :--- |
| **Python** (Backend Core) | Modules / Files | `snake_case` | `tier_calculator.py`, `batch_averager.py` |
| | Variables | `snake_case` | `scanned_device_id`, `material_composition` |
| | Functions | `snake_case` | `calculate_value_tier()`, `get_db()` |
| | Classes | `PascalCase` | `ScannedDevice`, `Company`, `Batch` |
| **Dart / Flutter** (Mobile) | Components / Classes | `PascalCase` | `ShowroomBrowser`, `BookingCard`, `AuthService` |
| | Variables / Functions | `camelCase` | `activeBatchId`, `submitBookingHold()` |
| **TypeScript / React** (Web PWA) | Components / Classes | `PascalCase` | `IntakeForm`, `ConveyorStream`, `BatchStatus` |
| | Variables / Functions | `camelCase` | `isScannerActive`, `triggerNextScan()` |


## Detailed Implementation Parameters

### 1. Python (FastAPI & SQLAlchemy Layer)
* **File & Module Ingestion:** All backend module code frameworks must utilize lower-case strings separated by absolute hyphens or underscores to maintain full integration mapping safety.
* **Functional Routines:** Lower-case characters separated strictly by underscores are enforced to allow rapid code-level scanning.
* **Data Layer Representations:** Object-relational mapping models utilize capitalized word boundaries to match conventional object patterns cleanly.

### 2. Dart / Flutter (Refinery Buyer App Layer)
* **Visual Interface Nodes:** Individual widget entities and data structure classes leverage immediate leading capitals for standard component grouping visibility.
* **In-Flight Data Assets:** Local function handles and dynamic interface parameters start with lowercase labels to keep code clean and maintain type safety properties.

### 3. TypeScript / React (Next.js Operator PWA Layer)
* **Layout Render Elements:** Direct interactive display views and contextual wrapper systems initialize with mandatory capitalized characters to separate layout components from native HTML elements.
* **State & Logic Trackers:** Variables tracking user session actions or event flags drop mid-line spacing completely in favor of capital transitions.
