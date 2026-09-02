# Global Code Standards

This document establishes the universal coding standards, conventions, and architectural rules that apply across the project ecosystem.


## Universal Architectural Principles

### Separation of Concerns
*   Keep frontend user interfaces and backend business logic completely separate.
*   Ensure presentation components do not touch database connection layers directly.

### Stateless Processing
*   Keep all application API compute nodes fully stateless.
*   Offload persistent variables and session data strictly to databases.

### Single Responsibility
*   Ensure every individual module manages exactly one functional task.
*   Ensure each source file has only one reason to change.


## Naming & Style Conventions

### General Naming Patterns
*   Use long, highly descriptive names instead of ambiguous shorthand.
*   Prioritize self-documenting variables over vague inline comments.

### Language Uniformity
*   Write all variables, schemas, schemas, comments, and logs in English.
*   Maintain strict English naming conventions across all repository assets.

### Lowercase File Formats
*   Name all source files using lowercase letters and hyphens.



## Version Control & Git Protocols

### Conventional Commits
Format all repository updates using the following standardized structural prefixes:

| Commit Prefix | Operational Scope | Practical Example |
| :--- | :--- | :--- |
| `feat:` | Adding a brand new feature or module. | `feat: integrate composition vector search` |
| `fix:` | Patching a codebase or runtime bug. | `fix: resolve line continuation loop syntax` |
| `chore:` | Updating build tool chains or dependencies. | `chore: lock runtime engine target to python-3.12` |
| `docs:` | Amending markdown documentation pages. | `docs: complete global architectural guidelines` |

### Branch Management
*   **Main Line Stability:** Protect the `main` branch as a stable source of truth.
*   **Direct Push Ban:** Never push raw, unreviewed changes directly to `main`.
*   **Feature Branching:** Build updates on isolated branches named `feature/description` or `bugfix/issue-id`.
