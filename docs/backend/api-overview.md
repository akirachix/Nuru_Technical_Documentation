## API Overview

The eLoop backend services are exposed via a secure, RESTful architecture designed to manage communication between the Edge hardware, the Operator PWA, and the Mobile Digital Showroom. 

### Core Specification

| Parameter | Value | Description |
| :--- | :--- | :--- |
| **Framework** | FastAPI | High-performance, asynchronous Python web framework built on Starlette and Pydantic. |
| **API Version** | `1` | Initial release supporting multi-tenant registration, edge inference syncing, and showroom filtering. |
| **Base Path** | `https://herokuapp.com` | Live production entry point hosted on Heroku for environment-specific service routing. |

### Deployment Environments

System modules must route traffic to the appropriate base path based on deployment status:

*   **Production Environment (Hosted Heroku API)**: `https://herokuapp.com`
    *   Target for deployed Raspberry Pi units, the Operator PWA, and Mobile Showroom.
*   **Local Development Environment**: `http://127.0.0.1.8000`
    *  Sandbox endpoint for local hardware prototyping, offline debugging, and feature development.

### Protocol & Security

*   **Transport Protocol**: All production data transfers require strictly enforced HTTPS / TLS 1.3 encryption provided by the Heroku routing layer.
*   **Data Format**: Payloads are strictly exchanged using standard `application/json` formatting.
*   **Authentication**: Stateless **JWT (JSON Web Tokens)** carried inside the `Authorization: Bearer <TOKEN>` header.
*   **Heroku Lifecycle Note**: If hosted on low-tier or Eco Dynos, the container will sleep after 30 minutes of inactivity. Initial requests from edge hardware may experience a 10–30 second cold-start delay while the dyno wakes up.
