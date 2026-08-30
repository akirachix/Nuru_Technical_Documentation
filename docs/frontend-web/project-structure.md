## Project Folder Structure

Below is the folder structure of our **Nuru Dashboard** repository.

```text
nuru_dashboard/
├── .github/                       GitHub actions and CI/CD workflow configurations
├── .next/                         Next.js build outputs and compilation caches
├── node_modules/                  Installed npm third-party project dependencies
├── playwright-report/             Automated test execution summaries and HTML reports
├── public/                        Static static assets
│   └── eloop-logo.png             System brand logo image asset
├── src/                           Main application source directory
│   ├── app/                       Next.js App Router core routing architecture
│   │   ├── dashboard/             Management portal metrics and configuration paths
│   │   │   └── workers/           Team management routes
│   │   │       └── new/           Worker registration routing subfolder
│   │   │           ├── layout.tsx Layout file for worker creation steps
│   │   │           └── page.tsx   Worker creation form view page
│   │   ├── recycling/             Processing center facility on-site workspace
│   │   │   ├── _components/       Isolated presentation elements for recycling screens
│   │   │   │   └── badges.tsx     Status banners and value tier badge UI tags
│   │   │   ├── batch-analysis/    Material sorting breakdown summary interface
│   │   │   │   └── page.tsx       Batch evaluation and catalogue upload screen
│   │   │   ├── catalogue/         Completed inventory records ledger table
│   │   │   │   ├── _components/   Filtering subcomponents for the sorting matrix
│   │   │   │   └── page.tsx       Historical batch log data table list view
│   │   │   ├── registration/      Material batch manual parameter logging forms
│   │   │   │   └── page.tsx       Pre-sorting asset parameter input page
│   │   │   ├── scan/              Live camera classification workspace view
│   │   │   │   └── page.tsx       Computer vision streaming overlay control room
│   │   │   ├── layout.tsx         Unified layout shell with navigation bar array
│   │   │   └── page.tsx           Base recycling center overview dashboard screen
│   │   ├── signin/                Account authentication portal
│   │   │   └── page.tsx           Login credential verification form panel
│   │   ├── signup/                Multiphase workspace initialization workspace
│   │   │   ├── account/           Worker user account definition settings
│   │   │   │   └── page.tsx       Personal user profiles account creation flow
│   │   │   ├── company/           Corporate facility information metadata properties
│   │   │   │   └── page.tsx       Operations profiling company details route
│   │   │   └── organization/      Overarching enterprise operational boundaries
│   │   │       └── page.tsx       Parent enterprise framework parameter config
│   │   ├── welcome/               First-time user onboarding routing segment
│   │   │   └── page.tsx           Initial entry dashboard launch checkpoint
│   │   ├── favicon.ico            Tab context site shortcut visual identifier
│   │   ├── globals.css            Root Tailwind CSS rules and layout tokens
│   │   ├── layout.tsx             Root layout wrapping structural HTML nodes
│   │   └── page.tsx               Root domain index redirect landing channel
│   ├── components/                Modular global component architecture library
│   │   └── dashboard/             Reusable dashboards functional components
│   │       ├── activityHub.tsx    Live analytical event data tracker card block
│   │       ├── backButton.tsx     Standard transactional browser return trigger
│   │       └── onBoardingScreens.tsx Contextual multi-step guided interface screens
│   ├── hooks/                     Custom isolated component lifecycle hooks
│   │   └── useOnboarding.ts       Setup wizard progression step manager state hook
│   ├── lib/                       Central application initialization wrappers
│   │   └── api.ts                 Next-to-cloud Axios server fetch infrastructure
│   └── recharts.d.ts              Custom data visualization global typing overrides
├── test-results/                  Cached automated regression snapshots and logs
├── tests/                         Playwright workflow test collection files
│   ├── activity-hub.spec.ts       Test specification for the activity tracking system
│   └── batch-analysis.spec.ts     Test specification for the material estimation logic
├── .env                           Root environment parameter mapping definitions
├── .gitignore                     Git tracking file criteria ignore matrices
├── AGENTS.md                      AI assistant context project directives file
├── CLAUDE.md                      Workspace agent code compliance execution handbook
├── eslint.config.mjs              Standard JavaScript syntax checking preferences
├── next-env.d.ts                  Integrated Next.js automated typing declarations
├── next.config.ts                 Override parameters for optimization builds
├── package-lock.json              Frozen dependencies exact installation lockfile
├── package.json                   Project scripts and required software versions
├── playwright.config.ts           Validation test engine runner environment config
├── postcss.config.mjs             Style parsing preprocessing configuration rules
├── README.md                      Initial markdown project developer user guide
└── tsconfig.json                  Structural TypeScript assembly options schema
```
