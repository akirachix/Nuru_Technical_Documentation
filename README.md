# Nuru Technical Documentation

This repository contains the comprehensive technical documentation and system architecture blueprints for the eLoop platform. 
This repository contains the comprehensive technical documentation and system architecture blueprints for the Nuru platform. The documentation is built and served using [VitePress](https://vitepress.dev), a Vite-powered static site generator.

## Project Structure

This project isolates core documentation content and system configurations within the `docs` directory:

```text
NURU_TECHNICAL_DOCUMENTATION/
├── docs/
│   ├── .vitepress/
│   │   ├── theme/
│   │   │   └── index.ts
│   │   ├── config.mts
│   │   └── custom.css
│   ├── architecture/
│   │   ├── core-principles.md
│   │   ├── data-flow.md
│   │   ├── design-guidelines.md
│   │   ├── scalability.md
│   │   └── system-diagram.md
│   ├── backend/
│   │   ├── api-conventions.md
│   │   ├── api-overview.md
│   │   ├── architecture-layers.md
│   │   ├── code-standards.md
│   │   ├── deployment.md
│   │   ├── endpoint-categories.md
│   │   ├── hosted-api.md
│   │   ├── prerequisites.md
│   │   └── testing&qa.md
│   ├── overview/
│   │   ├── key-features.md
│   │   ├── product-definition.md
│   │   ├── target-users.md
│   │   └── the-problem-it-solves.md
│   ├── public/images/
│   └── index.md
├── package-lock.json
├── package.json
└── README.md
├── docs/
│   ├── .vitepress/
│   ├── overview/
│   ├── public/              
│   ├── config.mts           
│   ├── custom.css           
│   └── index.md             
├── package.json             
└── README.md                
│   ├── .vitepress/          # VitePress system configurations and themes
│   ├── overview/            # Platform fundamentals, user definitions, and problem space
│   ├── public/              # Static assets, diagrams, and images
│   ├── config.mts           # Primary VitePress site configuration
│   ├── custom.css           # Custom global styling overrides
│   └── index.md             # Documentation portal homepage
├── package.json             # Project dependencies and execution scripts
└── README.md                # Project overview and deployment guide
```

### Access

The documentation portal is accessible locally at `http://localhost:5173`.


