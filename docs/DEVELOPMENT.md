# Development notes

## Architecture

- `public/index.html` is the source of truth for the static app. The HTML, CSS, game loop, learning activities, and dashboard logic are kept together so a beginner can edit and preview the project without a bundler.
- `public/assets/branding/favicon.svg` is the only local image-style site asset in this starter structure.
- `public/_headers` is read by Cloudflare Pages to add HTTP response headers after deployment; it has no effect when opening the file directly.
- `scripts/validate.mjs` provides a lightweight syntax and structure check.

## Making changes

1. Make a small change in `public/index.html`.
2. Preview it locally with the Python static server described in the README.
3. Run `node scripts/validate.mjs` if Node.js is installed.
4. Check both a desktop-width and a narrow/mobile viewport.
5. Commit with a descriptive message and push to GitHub. The connected Cloudflare Pages project can then deploy the update.

## Runtime independence

Keep runtime resources local unless a new dependency is a deliberate product decision. This app currently does not use a remote script, remote style sheet, external font, image URL, or network API call in the browser code.
