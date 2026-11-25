/**
 * Navigation bar of the site.
 *
 * Exports `renderNavbar`, which writes the navigation bar (Bootstrap 5
 * `navbar` markup) into the `<header>` element of the page. It is called by
 * `js/main.js` on every page.
 *
 * Requirements: the Bootstrap JavaScript bundle (loaded by `js/main.js`), which
 * makes the toggler button and the dropdown work, and the CSS of Bootstrap
 * (loaded by `css/styles.css`).
 *
 * @module navbar
 */

/**
 * HTML markup of the navigation bar. It contains, in this order:
 * - the toggler button, which collapses and expands the menu on narrow screens;
 * - the links "Home", "Profile", "Projects", "Publications" (a dropdown
 *   with four links to sections of `publications.html`), and "About Me" (an
 *   external page).
 *
 * The class names in the markup come from Bootstrap 5 (for example `navbar`,
 * `navbar-expand-sm` and `bg-dark`).
 *
 * @type {string}
 */
const template = `
<nav class = "navbar navbar-expand-sm bg-dark navbar-dark px-3">
  <!-- Toggler/collapsible Button -->
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#collapsible">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- Navbar Links -->
  <div class="collapse navbar-collapse" id="collapsible">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <a class="nav-link" href="index.html"> Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="profile.html"> Profile </a>
      </li>
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
      <li class="nav-item">
        <a class="nav-link" href="https://alfiomartini.github.io/aboutMe/" target="_blank"> About Me</a>
      </li>
    </ul>
  </div>
</nav>
`;

/**
 * Renders the navigation bar into the first `<header>` element of the page. It
 * does nothing if the page has no `<header>` element (as in `404.html`).
 *
 * @returns {void}
 */
export function renderNavbar() {
  const header = document.querySelector("header");
  if (!header) return;
  header.innerHTML = template;
}
