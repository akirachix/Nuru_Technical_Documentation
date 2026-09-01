## Deployment

The PWA is deployed and hosted on **Vercel** as a high-performance Next.js Progressive Web Application. The pipeline is connected directly to the `Nuru_Dashboard` GitHub repository to automate production building, optimization compiling, and edge network distribution.

### Vercel Architecture & Built-in Pipeline
* **Framework Defaults:** Vercel automatically detects the Next.js framework configuration and compiles the codebase using the standard `next build` command. No custom build configurations or `vercel.json` overrides are maintained on top of the framework defaults.
* **Continuous Delivery (CI/CD):** Because the GitHub integration is connected, every code push to the `main` branch triggers an automatic production deployment. Pushes to other branches similarly produce preview deployments scoped to that specific branch.
* **Backend Reachability Validation:** Once a live build finishes compiling, the active sign-in flows, analytics dashboards, and data routing components are checked directly on the live Vercel URL to confirm requests successfully reach the Heroku backend and resolve without console error logs.


### Environment Variables Configuration

The frontend application depends on a single environment variable to coordinate network communications. This must point directly to the live Heroku backend:

*   **Variable Name:** `NEXT_PUBLIC_API_URL`
*   **Production Target Value:** `https://e-loop-...herokuapp.com`
*   **Configuration Scope:** This property is managed directly within the web-based Vercel project dashboard under **Settings > Environment Variables** or injected into the workspace slot using the command-line terminal interface.


### Build and Deployment Management Commands

Orchestrate, link, and handle your hosting pipelines directly from your local terminal workspace using the official Vercel CLI tool:

*   **Link Local Repository to Vercel (One-Time Step)**
    *   Authenticates your local workspace machine and systematically ties the code directory to your active Vercel project.
    *   `vercel link`
*   **Inject Production Environment Variables via CLI**
    *   Pushes the explicit backend network reference key directly into your cloud project settings.
    *   `vercel env add NEXT_PUBLIC_API_URL production`
*   **Execute a Manual Production Deployment**
    *   Triggers an immediate, forced production release to the live domain URL outside of the automated GitHub push flow (highly utilized for first-time initial setups).
    *   `vercel --prod`
