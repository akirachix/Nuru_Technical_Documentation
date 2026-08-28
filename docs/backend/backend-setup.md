# 3.1 Backend Setup

Follow this step-by-step installation guide to clone the source repository, configure local environment variables, initialize database schemas, and boot up the hot-reloading FastAPI application layer.


## 1. Clone the Repository

Execute these terminal commands to download the code repository infrastructure and step down into the core application module workspace directory:

```bash
git clone https://github.com/akirachix/Nuru_Backend
cd Nuru_Backend
cd eloop
```

## 2. Create and Activate a Virtual Environment

Isolate your local system dependencies by spinning up a lightweight Python virtual environment using the high-performance `uv` package manager:

```bash
uv venv env
source env/bin/activate
```


## 3. Install Dependencies

Install all package requirements, configurations, and core database engine dependencies declared in the framework configuration file:

```bash
pip install -r requirements.txt
```


## 4. Environment Variables Configuration

Create a localized secret management file named **`.env`** directly inside the application module's root directory:

```bash
touch .env
```


## 5. Set up the Database

Prepare the PostgreSQL storage schemas for application transactions using structural migration histories or internal framework metadata:

### A. Run Database Migrations
Execute existing schema definitions and push layout transformations safely to your target database instance using Alembic:
```bash
alembic upgrade head
```

### B. Fallback / Core Tables Initialization
Alternatively, initialize the core physical metadata tables directly using the embedded SQLAlchemy engine sequence:
```bash
python -c "from database import Base, engine; Base.metadata.create_all(bind=engine)"
```


## 6. Run the Backend

Launch your local development web server with live reloading enabled using the Uvicorn ASGI configuration protocol on port `8000`:

```bash
uvicorn app:app --reload --port 8000
```


## 7. Confirm It Is Working

Validate that the services are active, healthy, and accepting system traffic requests by dispatching an analytical network curl request against the local address:

```bash
curl http://localhost:8000/health
```

### Expected JSON Server Response:
```json
{
  "status": "healthy"
}
```
