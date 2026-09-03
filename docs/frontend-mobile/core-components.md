## Core Components

### Routing

Mobile has no file-based router - navigation is via `Navigator.push`/`pushReplacement`/`pushAndRemoveUntil` with `MaterialPageRoute`.

- **`SplashScreen`** is the app's `home`. On start it calls `SplashViewModel.bootstrap()`, which waits for a minimum splash duration while concurrently trying to restore a persisted session (see Auth flow below), then routes to either `MainLayout` (session restored) or `OnboardingWrapper` (no valid session).
- **`RoleRouter`** centralizes post-login navigation: given a role string, it normalizes it and routes into `MainLayout` with `isAdmin: true/false`, replacing the entire nav stack (`pushAndRemoveUntil`) so the user can't navigate back into the auth flow. See `architecture-layers.md` for the role-coverage gap.
- **`MainLayout`** is the authenticated app shell - an `AppBar` (`ELoopTopBar`: logo, notifications icon, profile avatar), a bottom tab bar (`ELoopBottomNav`), and an `IndexedStack` of pages. Admins get an extra **Workers** tab; both roles get **Catalog** and **My Bookings**.

### API Service Layer

All services currently point to the heroku hosted backend url.

| Service             | Responsibility                                         | Key endpoints                                                                                                                   |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `AuthService`       | Login, forgot password                                 | `POST /auth/login`, `POST /auth/forgot-password`                                                                                |
| `TotpService`       | Two-factor setup/enable/verify                         | `POST /auth/totp/setup`, `/enable`, `/verify`                                                                                   |
| `CompanyApiService` | Company registration                                   | `POST /company/`                                                                                                                |
| `AccountApiService` | Admin account setup (from a company setup token)       | `POST /company/setup-admin?token=...`                                                                                           |
| `UserService`       | Current user profile, password change                  | `GET /user/me`, `PATCH /user/me`                                                                                                |
| `WorkerService`     | Worker CRUD                                            | `GET /user/`, `GET /user/{id}`, `POST /user/`, `PATCH /user/{id}`, `PATCH /user/{id}/deactivate`, `PATCH /user/{id}/reset-totp` |
| `BatchService`      | Batch tier lookup and status updates                   | `GET /batch/{id}`, `PATCH /batch/{id}`                                                                                          |
| `BookingService`    | Booking listing and status updates                     | `GET /booking/user/{id}`, `PATCH /booking/{id}`                                                                                 |
| `CatalogRepository` | Local, hardcoded catalog list (not backend-driven yet) | —                                                                                                                               |

Services attach `Authorization: Bearer <token>` where a session exists, decode JSON into models, and surface the backend's `detail` field (string or list) by throwing an `Exception` — comparable to the web app's centralized error-mapping in `src/lib/api.ts`, but implemented per-service on mobile rather than through one shared client.

### Auth Service

Authentication is a multi-step flow:

1. `AuthService.login()` exchanges email/password for a **temporary token** (`LoginResponse.tempToken`) and a `totpEnabled` flag.
2. If TOTP isn't enabled yet, `TotpService.setup()` provisions a secret/otpauth URI, confirmed via `TotpService.enable()` with a user-entered code.
3. If TOTP is already enabled, `TotpService.verify()` exchanges the temp token + code for a real **access token**.
4. The access token and resolved `UserModel` are stored in **`AuthSession`**, an in-memory, app-wide singleton (`accessToken`, `currentUser`, `isAuthenticated`).
5. `AuthSession.setSession()` also persists the token via `SecureSessionStorage`. On next launch, `SplashViewModel` reads the persisted token, calls `UserService.getCurrentUser()` to validate/rehydrate the session, and clears the stored token if that call fails.
