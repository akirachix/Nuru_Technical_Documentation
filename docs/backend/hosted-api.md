## API Overview

The **E-Loop API** is the core backbone of our system. It connects our edge hardware, the operator PWA, and the mobile Digital Showroom. 

### Our Core Specification

The backend is built for high performance and low data latency.

| Parameter | Our Configuration | Why We Chose It for E-Loop |
| :--- | :--- | :--- |
| **Framework** | **FastAPI** (Python) | It handles fast, simultaneous images from our edge cameras without slowing down. |
| **API Version** | `v1.0.0` | Our first release for PWA inputs, CNN syncs, and showroom filters. |
| **Base Path** | Generated Heroku Domain | The single secure cloud entry point for all system traffic. |

### Our Protocols & Security

* **Data Format**: All data is sent as **JSON (`application/json`)**. This keeps things simple for our **Raspberry Pi 5** devices.
* **Encryption**: Pricing and user data is protected using **HTTPS / TLS 1.3**. The system blocks plain HTTP traffic.
* **Access Control**: Data sessions are secured using stateless **JWT (JSON Web Tokens)** inside request headers.


## Our Hosted Infrastructure

The backend runs on cloud servers, keeping the physical sorting lines connected to refinery buyers in real time.

### Our Live Deployment Environments

There are two distinct environments to keep our live production data safe.

* **Production Environment**
  * Deployed to the live **Heroku Web App** instance routing target.
  * Deployed Raspberry Pi 5 units, the PWA, and the mobile showroom use this primary path.
* **Our Staging & QA Sandbox**
  * Deployed to our isolated **Heroku Staging Pipeline** container.
  * Our testing server where we safely check updates to our CNN models and lookup tables first.


### Our Interactive Documentation (Swagger & OpenAPI)

We host live documentation dashboards straight from our app server to make testing quick.

#### Our Swagger UI Sandbox
* **Path:** `/docs` on our hosted server.
* The interactive test bench. Developers can log in, send JSON data, and mock real-time sorting line scans.

#### Our ReDoc Reference
* **Path:** `/redoc` on our hosted server.
* The structured layout guide. This makes onboarding new team members to our API schemas easy.

#### Our Raw OpenAPI Spec
* **Path:** `/openapi.json` on our hosted server.
* The raw JSON file. It lets us auto-generate testing tools and matching SDK setups instantly.


### System Handling for Our Cloud Infrastructure

The cloud setup has two behaviors designed around:

* **Server Sleeping**: If a recycling center is quiet for **30 minutes**, our cloud server sleeps to save resources.
* **First-Scan Wake Delay**: The first scan on a **Raspberry Pi 5** takes **10 to 30 seconds** to wake the server up. There is also a **45-second timeout limit** built into the edge code so this lag never drops or ruins the scan data.
