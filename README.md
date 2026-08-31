# Nuru Technical Documentation

This repository contains the comprehensive technical documentation and system architecture blueprints for the Nuru platform. The documentation is built and served using [VitePress](https://vitepress.dev), a Vite-powered static site generator.

## Project Structure

This project isolates core documentation content and system configurations within the `docs` directory:

```text
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


