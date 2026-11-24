# Personal Homepage

This is my homepage, that presents a quick overview of my _web projects_, _publications_ and current professional interests with respect to _Computer Science_ and _Software Development_. It was built with _HTML/CSS/Bootstrap_ and a bit of _JavaScript_. To see it live click [here](https://alfiomartini.github.io/). The web projects represent a set of experiments I carried out while I was trying to learn the foundations of web development.

The site is static: it has no framework and no build step. GitHub Pages serves the files of the `master` branch as they are. Bootstrap and Font Awesome are loaded from CDNs, with the exact version in each URL.

## Running the site locally

The JavaScript files are ES modules, which browsers do not load from `file://`. The site must therefore be served over HTTP.

1. Install the development tools (once): `npm install`.
2. Start the local server: `npm run serve`.
3. Open http://localhost:8000/ in a browser.

## Checking the code

The tools listed in `package.json` are development dependencies only. They are not part of the site.

| Command               | Purpose                                               |
| --------------------- | ----------------------------------------------------- |
| `npm run format`      | Formats HTML, CSS and JavaScript with Prettier.       |
| `npm run lint`        | Checks JavaScript with ESLint and CSS with Stylelint. |
| `npm run validate`    | Validates the HTML files with html-validate.          |
| `npm run check-links` | Checks the local links of the pages with linkinator.  |
| `npm run check`       | Runs `lint`, `validate` and `check-links`.            |

The same checks run on GitHub, with the GitHub Actions workflow `.github/workflows/linter.yml`, whenever commits are pushed to any branch of the remote repository. The result is shown next to each commit and in the "Actions" tab.

## Directory layout

```
alfiomartini.github.io/
├── .github/
│   └── workflows/
│       └── linter.yml                  Runs `npm run check` on every push
├── assets/
│   ├── img/
│   │   ├── favicon.ico
│   │   ├── picture_github.jpg
│   │   └── profile_picture_10_11_2020-min.jpg
│   └── pdf/
│       ├── HarvardX CS50 Certificate _ edX_.pdf
│       └── resume.pdf
├── css/
│   ├── index.css
│   ├── projects.css
│   ├── publications.css
│   ├── resume.css
│   └── styles.css                      Shared styles; loads Bootstrap and Font Awesome
├── data/
│   └── projects.js                     Project data shown on the projects page
├── js/
│   ├── main.js                         Shared entry module of all pages
│   ├── navbar.js                       Renders the navigation bar (renderNavbar)
│   ├── projects.js                     Filtering and rendering of the projects page
│   └── resume.js                       Layout of the resume page
├── .gitignore
├── .htmlvalidate.mjs
├── 404.html                            Page shown for unknown addresses
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── index.html                          Home page: picture and short presentation
├── package-lock.json
├── package.json                        Development tools and npm scripts
├── prettier.config.mjs
├── projects.html                       Projects page, with language filter checkboxes
├── publications.html                   Publications page, in sections linked from the navbar
├── resume.html                         Resume page, with skills, experience and education
├── robots.txt
└── stylelint.config.mjs
```
