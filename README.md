# Nuru Technical Documentation

This repository contains the comprehensive technical documentation and system architecture blueprints for the eLoop platform. 

## Project Structure

This project isolates core documentation content and system configurations within the `docs` directory:

```text
NURU_TECHNICAL_DOCUMENTATION/
├── docs/                             # Main source documentation root folder
│   ├── .vitepress/                   # VitePress core configuration engine
│   │   ├── theme/                    # Custom interface layouts
│   │   │   └── index.ts              # Theme module initialization script
│   │   ├── config.mts                # Primary VitePress site routing and sidebar rules
│   │   └── custom.css                # Custom global styling and theme overrides
│   ├── architecture/                 # System design and scalability layouts
│   │   ├── core-principles.md
│   │   ├── data-flow.md
│   │   ├── design-guidelines.md
│   │   ├── scalability.md
│   │   └── system-diagram.md
│   ├── backend/                      # Complete backend and API core technical docs
│   │   ├── api-conventions.md
│   │   ├── api-overview.md
│   │   ├── architecture-layers.md
│   │   ├── code-standards.md
│   │   ├── deployment.md
│   │   ├── endpoint-categories.md
│   │   ├── hosted-api.md
│   │   ├── prerequisites.md
│   │   └── testing&qa.md
│   ├── overview/                     # Platform core definitions and requirements
│   │   ├── key-features.md
│   │   ├── product-definition.md
│   │   ├── target-users.md
│   │   └── the-problem-it-solves.md
│   ├── public/images/                # Static visual assets and diagram assets
│   └── index.md                      # Documentation portal landing homepage
├── package-lock.json                 # Pinned configuration lockfile
├── package.json                      # Project dependencies and script runner limits
└── README.md                         # Project overview and system onboarding guide
```

### Access

The documentation portal is accessible locally at `http://localhost:5173`.


