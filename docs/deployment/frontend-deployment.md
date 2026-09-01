## Frontend Deployment

The frontend is a Progressive Web App (PWA), hosted on Vercel.

### Deploying

**Option 1 - Manual upload via the Vercel dashboard**

1. Build the PWA locally (or obtain the built output from whoever maintains the repo).
2. Log in to the Vercel dashboard.
3. Open the project and use the deploy/upload option to upload the build output directly.
4. Confirm the deployment once Vercel finishes processing the upload.

**Option 2 - Deploy via the Vercel CLI**

With the Vercel CLI installed and authenticated (`vercel login`):

```bash
vercel --prod
```

Run this from the project's local directory.
