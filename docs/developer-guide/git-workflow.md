# Git Workflow

This document defines the rules for branch strategy and commit message formatting across the project ecosystem.


## Branch Strategy

We use a multi-tier branch model to keep our production environment safe and isolate ongoing code development.

### Permanent Deployment Branches
*   **`main`**: Holds stable, production-ready code. Direct pushes are banned. Code merges here trigger live deployments to Vercel and Heroku.
*   **`dev`**: Acts as the main integration space for developers. All completed feature branches merge here first to verify integration stability before code is merged to `main`.

### Working Feature 
Create a separate branch for every task. Branch out exclusively from `dev`. Use lowercase letters, numbers, and hyphens with these specific prefixes:

*   **`feature/`**: Use when adding new features or components.
    *   *Example:* `feature/device-registration`


## Commit Message Format

We follow the Conventional Commits specification. Every commit message must be written in English and start with a structural prefix followed by a brief description.



### Approved Commit Types

| Type | When to Use | Example |
| :--- | :--- | :--- |
| **`feat:`** | Adding a brand new feature or endpoint. | `feat: add weight field to intake form` |


### Formatting Rules
*   **Length Limit:** Keep the commit message short, clear, and under 50 characters.
