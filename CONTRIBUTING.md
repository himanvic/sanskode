# Contributing to Sanskode

Thanks for helping improve Sanskode.

## Useful contributions

- Fixes to gameplay controls, state handling, and responsive layout.
- C++ or Python content corrections with a short explanation.
- Better keyboard accessibility, focus states, and reduced-motion behavior.
- Mini-game improvements that keep instructions clear for beginner learners.
- Documentation and deployment fixes.

## Before opening a pull request

1. Keep the static app free of unnecessary external runtime dependencies.
2. Test the change in a modern desktop browser and at a narrow mobile width.
3. If Node.js is available, run `node scripts/validate.mjs`.
4. Describe the user-facing change and any limitations in the pull request.
5. Do not include API keys, credentials, personal browser data, or other secrets.

The current app is deliberately kept in one HTML entry point so it can be edited easily by learners. If proposing a larger refactor, explain the maintenance benefit and how it affects direct local use and Cloudflare Pages deployment.
