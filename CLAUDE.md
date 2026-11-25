# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal homepage, deployed by GitHub Pages at https://alfiomartini.github.io/ from the `master` branch. It is a static site: HTML, CSS, Bootstrap 5.3.3 (CDN), Font Awesome 6.5.2 (CDN), and vanilla JavaScript written as ES modules. There is no build step. `package.json` lists development tools only (Prettier, ESLint, Stylelint, html-validate, linkinator); nothing from `node_modules/` is part of the site.

## Commands

- `npm install`: installs the development tools.
- `npm run serve`: serves the directory at http://localhost:8000/ (`python3 -m http.server 8000`). The site must be served over HTTP, because browsers do not load ES modules from `file://`.
- `npm run format`: formats `*.html`, `css/`, `js/` and `data/` with Prettier.
- `npm run lint`: ESLint on `js/` and `data/`, Stylelint on `css/`.
- `npm run validate`: html-validate on `*.html`.
- `npm run check-links`: linkinator on the four pages. External URLs are skipped.
- `npm run check`: runs `lint`, `validate` and `check-links`.

The GitHub Actions workflow `.github/workflows/linter.yml` runs `npm run check` whenever commits are pushed to any branch of the remote repository.

There is no test suite.

## Architecture

Pages: `index.html`, `projects.html`, `publications.html`, `profile.html` (plus `404.html`), all in the repository root. Each page has a minimal `<head>` (charset, viewport, title and `<meta>` elements, favicon, `css/styles.css`, and its own stylesheet `css/<page>.css`) and loads `js/main.js` as a module at the end of `<body>`.

- **Library loading.** The versions of Bootstrap and Font Awesome are written only in two files: `css/styles.css` (`@import` of the Bootstrap and Font Awesome CSS and of the Antic Slab font) and `js/main.js` (imports the Bootstrap bundle, which includes Popper). To upgrade a library, edit those two files.
- **Shared navbar.** Each page contains an empty `<header class="header"></header>`. `js/main.js` calls `renderNavbar()` from `js/navbar.js`, which holds the navbar markup and writes it into the `<header>`. To change the navigation, edit `js/navbar.js`.
- **Projects page.** `data/projects.js` exports `projects`, an array of four arrays (`jsProjects`, `reactProjects`, `pythonProjects`, `nodeProjects`). `js/projects.js` flattens the arrays, sorts them by `weight` (descending), and renders the entries whose `language` is checked in the filter checkboxes. A single `change` handler serves all the checkboxes; each checkbox in `projects.html` carries a `data-language` attribute (`javascript`, `python`, `react`, `node`).
- **Assets.** Images and PDFs are in `assets/img/` and `assets/pdf/`.

## Data format of `data/projects.js`

Each entry of the four arrays is an object with these properties:

| Property     | Content                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `title`      | Project name.                                                                                  |
| `language`   | One of `javascript`, `python`, `react`, `node`. It must match the `data-language` of a checkbox in `projects.html`, otherwise the project is never displayed. |
| `readme`     | Description, as trusted HTML. It is inserted with `innerHTML`, so it must never contain user-supplied data. |
| `videoUrl`   | YouTube embed URL, used as the `src` of an iframe.                                             |
| `liveUrl`    | URL of the deployed application.                                                               |
| `projectUrl` | URL of the source code.                                                                        |
| `keywords`   | Array of strings.                                                                              |
| `weight`     | Number; projects with a higher weight are listed first.                                        |
| `disabled`   | Optional. If `true`, the "Live" button is disabled.                                            |

To add a project, add an entry to the array that corresponds to its language.
