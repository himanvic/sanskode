# Deployment checklist

## Cloudflare Pages (recommended)

This is a static HTML site. No framework, package install, database, or server function is required.

1. Push the project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Connect GitHub and select the repository.
4. Set:
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** `exit 0`
   - **Build output directory:** `public`
5. Deploy and open the `*.pages.dev` URL Cloudflare provides.

The `public/_headers` file defines conservative security and caching headers supported by Cloudflare Pages. Review any header changes before deploying.

Official documentation: <https://developers.cloudflare.com/pages/framework-guides/deploy-anything/>

## Local preview

From the repository root:

```bash
python -m http.server 8000 --directory public
```

Visit <http://localhost:8000>.

## Custom domain

After the first successful deployment, open the Pages project in the Cloudflare dashboard, choose **Custom domains**, and follow the prompts. Do not add a made-up domain to project metadata; use the exact domain you own.
