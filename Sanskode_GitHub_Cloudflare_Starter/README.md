<div align="center">
  <img src="public/assets/branding/favicon.svg" width="76" height="76" alt="Sanskode logo">
  <h1>SANSKODE — The Coding Arcade</h1>
  <p><strong>The purple arcade for coding minds.</strong></p>
  <p>A local-first coding arcade for learners who want to practice programming through play.</p>
  <p>
    <img alt="Static site" src="https://img.shields.io/badge/site-static-8b5cf6">
    <img alt="Vanilla JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-f0db4f">
    <img alt="No backend" src="https://img.shields.io/badge/backend-none-22c55e">
    <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-7c3aed">
  </p>
</div>

---

## About

**Sanskode** combines a playable arcade platformer with bite-sized programming lessons, mini-games, and practice tasks for **C++ and Python**. It is built with plain HTML, CSS, and JavaScript and runs in a modern browser without a separate application backend, account, package installation, or external runtime assets.

The site can be opened locally. When published through Cloudflare Pages, the same static files are served from the web; gameplay and learning interactions still run client-side.

## Features

- **Arcade platformer** with keyboard controls and touch-friendly controls.
- **C++ / Python preference** for language-aware lessons, questions, and practice tasks.
- **11 learning mini-games:** Multiple Choice, Crossword Clues, Word Search, Fill in the Blank, Match A to B, Sequence Builder, Code Bingo, Flash Cards, Categorize, Word Scramble, and Math Crossword.
- **Learning dashboard** with runs, XP, local progress indicators, tasks, and achievements.
- **Purple interface themes** and reduced-motion styling.
- **Responsive layout** for desktop and smaller screens.
- **Local saves:** preferences and progress are stored in browser storage when it is available. They are not synced between browsers or devices.
- **Static and dependency-free:** no app backend, external JavaScript libraries, external fonts, or third-party image requests are required at runtime.

## Quick start

### Option A — Open the page directly

Open `public/index.html` in a recent version of Chrome, Edge, Firefox, or another modern browser. Browser storage behavior may differ when a page is opened using `file://`; use Option B for a more consistent local origin.

### Option B — Run a local static preview

You do not need to install Node packages. If Python 3 is installed, open a terminal in the project folder and run:

```bash
python -m http.server 8000 --directory public
```

Then open <http://localhost:8000>.

This starts a **local static file server for development only**. Sanskode itself does not require server-side application code or a database.

## Publish to GitHub

1. Extract the project ZIP to a normal folder on your computer.
2. Create an **empty** repository on GitHub named `sanskode` (or choose another name). Do not initialize it with a second README, license, or `.gitignore`; those files are already included here.
3. Open PowerShell or a terminal in the extracted project folder and run the commands below, replacing `YOUR-USERNAME` with your GitHub username.

```bash
git init
git branch -M main
git add .
git commit -m "Initial Sanskode release"
git remote add origin https://github.com/YOUR-USERNAME/sanskode.git
git push -u origin main
```

Git must be installed and you must authenticate to GitHub before pushing. See the [GitHub repository quickstart](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories) for more details.

## Deploy to Cloudflare Pages

The project is a plain static site and does not need a framework build. The deployable files are inside `public/`.

1. Sign in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Open **Workers & Pages** and choose **Create application**.
3. Select **Pages** and choose **Import an existing Git repository**.
4. Connect GitHub and select your Sanskode repository.
5. Use these settings:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | `None` / no framework |
   | Build command | `exit 0` |
   | Build output directory | `public` |

6. Start the deployment. Cloudflare Pages will provide a `*.pages.dev` address. Commits pushed to the production branch can then trigger new deployments automatically.

The current official instructions are in [Cloudflare's Static HTML guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/). See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the short deployment checklist.

## Project structure

```text
sanskode/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── feature_request.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       └── validate.yml
├── docs/
│   ├── DEPLOYMENT.md
│   └── DEVELOPMENT.md
├── public/
│   ├── assets/
│   │   └── branding/
│   │       └── favicon.svg
│   ├── _headers
│   └── index.html
├── scripts/
│   └── validate.mjs
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── SECURITY.md
```

## Quality checks

A small GitHub Actions workflow runs a dependency-free validator on pushes and pull requests. It checks that the static entry point and Sanskode metadata exist, detects duplicate HTML IDs, verifies local-only runtime asset references, and syntax-checks each inline JavaScript block using Node's parser without executing browser code.

Run the same check locally (Node.js 20 or newer recommended):

```bash
node scripts/validate.mjs
```

## Privacy and limitations

- The app does not require registration and contains no app backend.
- Progress is browser-local. Clearing site data or changing browsers/devices may remove or separate saved progress.
- A Cloudflare-hosted version is publicly reachable if you deploy it to a public Pages URL. “Local-first” describes app behavior and storage, not a guarantee that a hosted URL is private.
- This project provides client-side practice activities. It is not a compiler service and should not be described as executing arbitrary C++ or Python code unless a real execution engine is added later.

## Contributing

Bug reports, accessible-UI improvements, learning-content corrections, and new mini-game ideas are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

Released under the MIT License. See [`LICENSE`](LICENSE).

---

<div align="center">
  <sub>Created by Himanshu · Sanskode — The Coding Arcade</sub>
</div>
