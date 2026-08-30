## Network Security

Network-level protection for the platform currently rests on Heroku's platform defaults plus application-level rate limiting, rather than a separately managed edge/WAF stack.

### Backend Hosting

- **Platform:** The API and database are both deployed and hosted on **Heroku**, with the Postgres database provisioned as a Heroku Postgres add-on.
- **Why Heroku:** Heroku abstracts away infrastructure management (patching, load balancing, TLS termination) so the team can focus on application-level security rather than server hardening.

### Abuse & Traffic Mitigation

- **Implementation:** Request-volume abuse is mitigated at the application layer via endpoint-level rate limiting (see [Application Security](./application-security.md)), keyed by client IP. This is the platform's actual defense against high-volume abusive traffic today — there is no separate, dedicated DDoS-mitigation service or add-on layered on top of it. Large-scale volumetric attacks would fall back to whatever mitigation Heroku's platform provides at the infrastructure level, which the team doesn't manage or configure directly.
  `[TODO: confirm whether a dedicated DDoS/WAF layer (e.g. Cloudflare) is planned before production, since application-level rate limiting alone won't stop a large volumetric attack from reaching Heroku's routing layer.]`

### API Gateway / WAF

`[TODO: confirm whether any additional layer — Cloudflare, a Web Application Firewall, or a dedicated API gateway — sits in front of Heroku, or whether traffic goes straight to Heroku's routing layer today.]`

### Transport Security

`[TODO: confirm HTTPS/TLS enforcement details — e.g. whether HTTP requests are redirected to HTTPS, and certificate management (Heroku typically handles this automatically for *.herokuapp.com domains).]`

### CORS

Cross-Origin Resource Sharing is currently configured to allow all origins (`*`) with credentials enabled. This is a common setting during prototype development but is worth tightening to an explicit allow-list of trusted frontend origins before production, especially since credentials are allowed alongside the wildcard.
