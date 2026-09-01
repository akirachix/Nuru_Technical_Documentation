## Technology Stack

### Framework
* **Next.js**
  * Serves as the overarching application framework for both the recycling center application and the refinery digital showroom.
  * Manages application routing, server-side data fetching, and page optimization.

### Languages
* **TypeScript**
  * Used as the primary programming language across the entire codebase to provide strict type safety and reduce runtime errors.

### Libraries
* **React**
  * Functions as the core user interface library built into the Next.js framework.
  * Powers the component-driven architecture, reactive UI updates, form event handling, and internal state management (such as managing real-time scanning views and batch workflows).
* **Recharts**
  * Handles responsive, interactive data visualization and charting across the dashboard interfaces.
  * Renders complex tracking charts using built-in components like `LineChart`, `Line`, `XAxis`, `YAxis`, `CartesianGrid`, and `Tooltip`.
* **Lucide React**
  * Provides consistent, accessible iconography across core screens (such as `Logout` used within layout navigation menus).


## Prerequisites

To run and develop the frontend web application locally, we ensured the system met the following software requirements:

* **Node.js**
  *  Node.js (LTS version, v18.x or higher).
* **Package Manager**
  * An active package manager (`npm` or `yarn`) to manage software dependencies and run project scripts.
* **Environment Variables (`.env`)**
  * Configured environment configuration file in the project root folder specifying backend API base URLs and required authentication provider keys.
