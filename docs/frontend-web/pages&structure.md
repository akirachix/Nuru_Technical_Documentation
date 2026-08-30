## Pages and Features

### App Initialization & Onboarding Modules

#### App Onboarding Wizard
* Implements an introductory slideshow carousel for freshly initialized accounts, highlighting turning e-waste into opportunities, unlocking batch values, and connecting recyclers with refinery partners.
* Features a persistent layout tracking indicator dots, a top-right `Skip` or `Next` action button, and custom vector graphics.

<img src="/images/splash-screen.png" alt="Onboarding Screens" width="100%" />

#### Welcome Entry Portal (`src/app/welcome/page.tsx`)
* Provides the primary routing entry page for unauthenticated sessions directly following the carousel walkthrough, anchored by an isometric manufacturing facility layout graphic.
* Exposes explicit action selectors branching users into either `Sign Up` or `Sign In`.

<img src="/images/welcome.png" alt="Welcome Entry Portal" width="100%" />

#### Organization Selection (`src/app/signup/organization/page.tsx`)
* Requires operators to explicitly select their organizational profile type to branch the registration workflow into appropriate portal permissions: **Recycling Center** or **Refinery Factory**.

<img src="/images/org.png" alt="Organization Selection" width="100%" />

#### Password Reset Self-Service
* Secures data integrity by enforcing structured input validation across two clean parameters: `New Password` and `Confirm New Password`.

<img src="/images/reset.png" alt="Password Reset Screen" width="100%" />


### Operational Recycling Center Screens

#### Activity Hub Dashboard (`src/app/recycling/page.tsx`)
* Renders critical near-real-time summary tiles modeling current performance metrics: `Active Batch`, `Devices Today`, `Batches`, and `Bookings`.
* Integrates interactive data charting modules driven by Recharts libraries to display daily scan frequencies over a custom line graph wrapper.

<img src="/images/activity.png" alt="Activity Hub Dashboard" width="100%" />

#### Asset Registration Portal (`src/app/recycling/registration/page.tsx`)
* Exposes a comprehensive grid form array comprising data parameters to register incoming device properties before starting an AI edge scan execution: `Device Type`, `Serial Number`, `Brand`, `Weight (kg)`, `Source Vendor`, `Condition`, and `Notes`.

<img src="/images/register-device.png" alt="Asset Registration Portal" width="100%" />

#### Scan & Identify Workspace (`src/app/recycling/scan/page.tsx`)
* Coordinates physical component analysis via a split-screen layout displaying a left-hand **Scan history** sidebar paired with a central live device camera scanner interface.
* Freezes camera telemetry outputs upon image ingestion (`Image Captured`), overlays classification determinations (`Classified: Desktop PCB`), and provides tier grading tags (`Tier: High`).

<img src="/images/scan.png" alt="Scan and Identify View" width="100%" />

#### Batch Analysis Panel (`src/app/recycling/batch-analysis/page.tsx`)
* Processes compiled session metrics from a completed batch into visual percentage sliders mapping isolated raw materials like Copper, Silver, Lithium, and Gold.
* Features an analytical metadata tile showing the explicit system code (`Batch ID`), `Total Batch Weight`, value tiers, and device classifications.

<img src="/images/batch.png" alt="Batch Analysis Panel" width="100%" />

#### Catalogue Batches Ledger (`src/app/recycling/catalogue/page.tsx`)
* Renders active and historic facility inventory streams through a structured table arrangement utilizing sorting buttons attached to tracking labels: `ID`, `Creator`, `Date`, `Status`, `Tier`, and `Category`.

<img src="/images/inventory-management.png" alt="Catalogue Batches Ledger" width="100%" />


### Commercial Refinery Portal & Digital Showroom

#### Marketplace Catalogue (`src/app/refinery/catalogue/page.tsx`)
* Serves as the central sourcing ledger where refinery buyers browse and audit verified e-waste batch availability using dedicated filters and textual search.
* Exposes contextual call-to-action shortcuts within the rows, letting buyers instantly command a `Book` action for available stock or see a locked state indicator (`Closed`).

<img src="/images/book.png" alt="Marketplace Catalogue" width="100%" />

#### Batch Specification Detail Card (`src/app/refinery/batch-details/page.tsx`)
* Renders isolated verification profiles for a selected e-waste track, containing a metadata console summary and a **Generated Material Report Chart** modeling precious element yields.
* Exposes two primary foot actions to secure the inventory: a `Book Batch` transaction trigger alongside a `Download Report` export pipeline.

<img src="/images/batch-specifications.png" alt="Batch Specification Details" width="100%" />

#### Inquiry Console Communication Ledger (`src/app/refinery/inquiry-console/page.tsx`)
* Provides a dedicated centralized dashboard for refinery operators to track ongoing business negotiations, communication statuses, and transaction histories with source recycling facilities.
* Implements an action route via explicit `View >` button elements in each row, enabling managers to step deep into private messaging strings or transaction receipts.

<img src="/images/view-batch.png" alt="Inquiry Console Ledger" width="100%" />


### Supervisory Management Hubs

#### Team Directory Console (`src/app/dashboard/workers/page.tsx`)
* Renders a tabular staff list displaying the company roster, customized with column data labels: `Name`, `Email`, and `Role`.
* Applies structural styling separating team roles using colored tag treatments, distinguishing administrative profiles (**Admin**) from terminal operator accounts (**Worker**).

<img src="/images/manage-workers.png" alt="Team Directory Console" width="100%" />
