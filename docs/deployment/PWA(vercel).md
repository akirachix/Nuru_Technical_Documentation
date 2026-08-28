---

The recycling center operator dashboard is deployed separately from the API cloud cluster on Vercel, utilizing an integrated, continuous-delivery connection linked directly to the `Nuru_Dashboard` GitHub repository.

---

## Automation & Framework Delivery

* **Zero-Config Build Pipeline:** Vercel recognizes the native **Next.js** project footprint immediately upon ingestion. It runs the standard `next build` script command automatically, removing any need for manual build configuration overrides or custom infrastructure provisioning files.
* **Continuous Git Deployments:** Because the GitHub integration is actively connected, every code change pushed to the `main` tracking branch triggers a production build update in real time. Code changes pushed to alternative branches generate safe, preview deployments scoped to that specific branch feature.

---

## Vercel CLI Deployment Operations

Follow this console guide to map workflows, inject public client variables, or trigger manual overrides using the global **Vercel CLI**:

### 1. Bind Your Local Workspace (One-Time Setup)
Link your current repository terminal workspace directly to your active Vercel project account structure:
```bash
vercel link
```

### 2. Configure Your Public API Connection Endpoint
Inject the environmental key targeting your production Heroku server host instance. This configuration can be handled directly via the Vercel online administrative control panel settings grid or run via terminal commands:
```bash
vercel env add NEXT_PUBLIC_API_URL production
# When prompted for the parameter value, paste your live backend domain:
# https://herokuapp.com
```

### 3. Initialize a Manual / First-Time Production Release
If you choose to bypass automated Git webhooks or need to push a direct build update straight to production from your current local workspace lines, execute a manual production override:
```bash
vercel --prod
```

---

## Live System Post-Deployment Verification

Once Vercel switches your deployment tracking indicators to active green statuses:
1. Open your assigned live project dashboard web address layout.
2. Initialize testing on the login interface and center operator screens.
3. Review browser developer tool console dashboards to ensure network handshakes reach your remote Heroku instance and execute smoothly without throwing cross-origin blocking parameters or client script exceptions.
