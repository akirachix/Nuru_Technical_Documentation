## Security Measures

- **Token storage:** Access tokens persist via `flutter_secure_storage` (`SecureSessionStorage`), which uses platform secure storage (Keychain on iOS, EncryptedSharedPreferences/Keystore on Android) rather than plain preferences.
- **Session validation on launch:** A persisted token is re-validated against `GET /user/me` on every cold start and clears it if the backend rejects it.
- **Two-factor authentication (TOTP):** Login requires a second factor via `TotpService`; a password alone only yields a temporary token, never full access. The backend encrypts TOTP secrets at rest (`TOTP_ENCRYPTION_KEY`) and stores them in Redis (`deployment/system-integration.md`) - mobile only ever handles the resulting QR/otpauth URI and verification codes, not raw secrets beyond what's needed to render setup.
- **Authenticated requests:** `WorkerService`, `BatchService`, `BookingService`, and `UserService` attach the session token as a `Bearer` header.
- **Client-side input validation:** `Validators` (`lib/utils/validators.dart`) provides shared `required`, `email`, and `minLength` checks used across login, company/account creation, worker creation, and password-change forms.
- **Error message handling:** Services parse the backend's `detail` field (string or FastAPI-style validation list) rather than exposing raw response bodies.
