## Coding Standards

### Naming Conventions Used
* **Components & Layouts:** Used **PascalCase** for all React component names and their corresponding files (e.g., `ActivityHub.tsx`, `BackButton.tsx`).
* **Routes & Directories:** Used **kebab-case** or lowercase for all directory names inside the Next.js `app` router to maintain clean browser URLs (e.g., `batch-analysis`, `signin`).
* **Variables & Functions:** Used **camelCase** for standard variables, state values, and function declarations (e.g., `batchId`, `handleSubmit`).
* **Constants & Keys:** Used **UPPER_SNAKE_CASE** for global configuration objects, fallback constants, or static verification datasets (e.g., `DEV_ELEMENTS`, `VALID_SORT_KEYS`).

### Component Structure Used
* **Client Directives:** Placed the `"use client";` directive at the absolute top of files that rely on React lifecycle triggers, local component state, or DOM interactions.
* **Component Framework:** Wrote all functional UI structures as declared, typed functions using regular block statements.
* **Typing Bindings:** Typed inline arguments directly or leverage isolated TypeScript declarations (`type`, `interface`, or global `.d.ts` files) to enforce data structures.
* **Export Strategy:** Used structured exports at the base of your file layouts to maintain predictable assembly streams across directories.

### Imports Organization
* **Core React Hooks:** Listed foundational library triggers first, drawing out hooks directly from the core `"react"` package.
* **Framework Modules:** Placed official framework navigation tools and asset builders second, pulling from standard `"next/*"` endpoints.
* **Asset Utilities:** Imported interface iconography tools third, grouping elements together from the `"lucide-react"` or `"recharts"` dependency kits.
* **Application Layer:** Pulled local database connection profiles and application clients using path aliases (e.g., `@/lib/api`).
* **Local Subcomponents:** Housed localized page styles, subroutines, or formatting arrays at the base of the import stack using relative paths (`../components/badges`).
