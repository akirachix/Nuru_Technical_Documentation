## Backend Prerequisites & Installation Guide

To run and deploy the E-Loop backend repository locally or on cloud servers, the following software, runtime packages, and system keys must be configured.

### Prerequisites & Dependencies

* **Python 3.10+**: The foundational runtime environment. Uses advanced typing syntax for runtime request payloads.
* **pip env**: Local package managers to lock core dependencies and manage isolated visual environments.
* **Heroku CLI**: The terminal command-line tool suite required to deploy updates and trail server container logs.


### Core Python Packages

The software ecosystem relies on these core dependencies declared in the project configuration files:

* **fastapi**: The core web API network delivery layer.
* **uvicorn[standard]**: The production-ready ASGI server engine used to host local endpoints.
* **pydantic**: The schema engine validating inbound hardware scan records and JSON requests.
* **python-jose[cryptography]**: The cryptographic layer encoding and decoding operator JWT sessions.
* **passlib[bcrypt]**: The processing dependency used to securely salt and hash operator passwords.


### Required Environment Variables (`.env`)

Create a `.env` file in the root folder path. The server framework looks for these key keys to establish data pipes and cryptographic boundaries:

| Variable Variable Key | Expected Format / Type | Purpose for E-Loop |
| :--- | :--- | :--- |
| `SECRET_KEY` | Hexadecimal String | High-entropy string used to sign and verify operator JWT session profiles. |
| `ALGORITHM` | String (e.g., `HS256`) | The encryption methodology used to hash secure web tokens. |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Integer (`30`) | The lifespan configuration before an on-site tablet or mobile device session expires. |
| `DATABASE_URL` | Cloud Connection URI string | The secure entry route mapping the API to our primary database store. |



### Local Installation Steps

Clone the project repository and navigate to the directory:
```bash
cd e-loop-backend
```

Install all pinned library packages into an isolated virtual workspace:
```bash
pipenv install
```

Enter the active virtual runtime shell environment:
```bash
pipenv shell
```
Install all required library dependencies directly from the text file using pip:
```bash
pip install -r requirements.txt
```

Launch the local development web server thread with auto-reload active:
```bash
uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

Once launched, the terminal output maps your sandbox entry routes to `http://127.0.0.1:8000`. You can visit `http://127.0.0` to test endpoint inputs.
