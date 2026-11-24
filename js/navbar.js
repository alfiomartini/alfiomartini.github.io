/**
 * Navigation bar of the site.
 *
 * Exports `renderNavbar`, which writes the navigation bar (Bootstrap 5
 * `navbar` markup) into the `<header>` element of the page and activates the
 * Bootstrap tooltips. It is called by `js/main.js` on every page.
 *
 * Requirements: the global `bootstrap` object (the Bootstrap JavaScript bundle,
 * loaded by `js/main.js` before this module) and the CSS of Bootstrap and
 * Font Awesome (loaded by `css/styles.css`).
 *
 * @module navbar
 */

/**
 * HTML markup of the navigation bar. It contains, in this order:
 * - a link to `index.html`, shown as an icon;
 * - the toggler button, which collapses and expands the menu on narrow screens;
 * - the links "Projects", "Publications" (a dropdown with four links to
 *   sections of `publications.html`), "Resume", and "About Me" (an external
 *   page);
 * - a link to the resume in PDF, shown as an icon with a tooltip.
 *
 * TODO: The links to `resume.html` and to the resume in PDF are commented out
 * in the markup, because the resume is outdated.
 *
 * The class names in the markup come from Bootstrap 5 (for example `navbar`,
 * `navbar-expand-sm` and `bg-dark`), and the icons come from Font Awesome (for
 * example `fas fa-square-h`).
 *
 * @type {string}
 */
const template = `
<nav class = "navbar navbar-expand-sm bg-dark navbar-dark px-3">
  <a href="index.html">
      <i class="fas fa-square-h fa-2x text-white  me-2"></i>
  </a>
  <!-- Toggler/collapsible Button -->
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#collapsible">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- Navbar Links -->
  <div class="collapse navbar-collapse" id="collapsible">
    <ul class="navbar-nav me-auto">
      <li class="nav-item"> 
        <a class="nav-link" href="projects.html"> Projects </a>  
      </li>
      <!-- Dropdown-->
      <li class = "nav-item dropdown"> 
        <a  class="nav-link dropdown-toggle"  href="#"
          id="navbardrop" data-bs-toggle="dropdown"> 
            Publications </a>
        <div class="dropdown-menu"> 
          <a class= "dropdown-item" href="publications.html#journals"> Journals </a>
          <a class= "dropdown-item" href="publications.html#bookChap"> Book Chapters </a> 
          <a class= "dropdown-item" href="publications.html#workshops"> Workshops </a>
          <a class= "dropdown-item" href="publications.html#myTechRep"> Reports </a>
        </div>
      </li>
      <!-- TODO: The resume is outdated. Restore this link after updating it.
      <li class="nav-item">
        <a class="nav-link" href="resume.html"> Resume </a>
      </li>
      -->

      <li class="nav-item">
        <a class="nav-link" href="https://alfiomartini.github.io/aboutMe/" target="_blank"> About Me</a>
      </li>
    </ul>
    <!-- TODO: The resume is outdated. Restore this link after updating it.
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" href="assets/pdf/resume.pdf" target="_blank"
        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Resume in PDF"
        >
          <i class="pdf fas  fa-file-pdf"></i>
        </a>
      </li>
    </ul>
    -->
  </div>
</nav>
`;

/**
 * Renders the navigation bar into the first `<header>` element of the page,
 * and creates a Bootstrap `Tooltip` for each element that has
 * `data-bs-toggle="tooltip"` (the link to the PDF). It does nothing if the page
 * has no `<header>` element (as in `404.html`).
 *
 * @returns {void}
 */
export function renderNavbar() {
  const header = document.querySelector("header");
  if (!header) return;
  header.innerHTML = template;
  header
    .querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach((element) => new bootstrap.Tooltip(element));
}
