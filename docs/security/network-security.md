## Network Security

Network-level protection for the platform currently rests on Heroku's platform defaults plus application-level rate limiting, rather than a separately managed edge/WAF stack.

### Backend Hosting

- **Platform:** The API and database are both deployed and hosted on **Heroku**, with the Postgres database provisioned as a Heroku Postgres add-on.
- **Why Heroku:** Heroku abstracts away infrastructure management (patching, load balancing, TLS termination) so the team can focus on application-level security rather than server hardening.

### Abuse & Traffic Mitigation

- **Implementation:** Request-volume abuse is mitigated at the application layer via endpoint-level rate limiting (see [Application Security](./application-security.md)), keyed by client IP.
  
### CORS

Cross-Origin Resource Sharing is currently configured to allow all origins (`*`) with credentials enabled.
