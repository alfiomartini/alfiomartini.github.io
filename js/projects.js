import { projects } from "../data/projects.js";

const languageNames = {
  javascript: "JavaScript",
  python: "Python",
  react: "React",
};

// Maximum number of characters of the description shown on a card.
const EXCERPT_LENGTH = 150;

// The `readme` field is trusted HTML written by the site author (see
// data/projects.js), so it is inserted with innerHTML.
const sortedProjects = projects
  .flat()
  .sort((proj1, proj2) => proj2.weight - proj1.weight);

const projectsElm = document.querySelector(".projects");
const checkboxes = document.querySelectorAll(
  ".checkboxes input[type='checkbox']",
);
const counterElm = document.querySelector(".counter");
const dialog = document.querySelector(".project-dialog");
const dialogLanguage = dialog.querySelector(".dialog-language");
const dialogTitle = dialog.querySelector(".dialog-title");
const dialogText = dialog.querySelector(".dialog-text");
const dialogKeywords = dialog.querySelector(".dialog-keywords");
const dialogActions = dialog.querySelector(".dialog-actions");

// Returns the first characters of the description as plain text, cut at a word
// boundary. The HTML is parsed into an inert document, so nothing is loaded.
function getExcerpt(readme) {
  const text = new DOMParser()
    .parseFromString(readme, "text/html")
    .body.textContent.replace(/\s+/g, " ")
    .trim();
  if (text.length <= EXCERPT_LENGTH) return text;
  return `${text.slice(0, EXCERPT_LENGTH).replace(/\s+\S*$/, "")}…`;
}

function getCard(project, index) {
  return `<li>
            <button type="button" class="project-card" data-index="${index}">
              <span class="card-language">${languageNames[project.language]}</span>
              <span class="card-title">${project.title}</span>
              <span class="card-excerpt">${getExcerpt(project.readme)}</span>
              <span class="card-more">
                View details <i class="fas fa-arrow-right"></i>
              </span>
            </button>
          </li>`;
}

function activeLanguages() {
  return [...checkboxes]
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.language);
}

function updateUI() {
  const languages = activeLanguages();
  let html = "";
  let counter = 0;
  sortedProjects.forEach((project, index) => {
    if (languages.includes(project.language)) {
      html += getCard(project, index);
      counter++;
    }
  });
  projectsElm.innerHTML = html;
  counterElm.textContent = counter;
}

function openProject({
  title,
  language,
  readme,
  liveUrl,
  projectUrl,
  keywords,
  disabled,
}) {
  dialogLanguage.textContent = languageNames[language];
  dialogTitle.textContent = title;
  dialogText.innerHTML = readme;
  dialogKeywords.innerHTML = keywords
    .map((keyword) => `<li>${keyword}</li>`)
    .join("");
  dialogActions.innerHTML = `${
    disabled
      ? `<span class="button button-primary is-disabled" aria-disabled="true">Live</span>`
      : `<a class="button button-primary" href="${liveUrl}" target="_blank" rel="noopener noreferrer">Live</a>`
  }
    <a class="button button-secondary" href="${projectUrl}" target="_blank" rel="noopener noreferrer">Code</a>`;
  dialog.querySelector(".dialog-body").scrollTop = 0;
  dialog.showModal();
}

projectsElm.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (card) openProject(sortedProjects[card.dataset.index]);
});

dialog.querySelector(".dialog-close").addEventListener("click", () => {
  dialog.close();
});

// A click on the backdrop, outside the dialog box, closes the dialog.
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

// initialize UI
checkboxes.forEach((checkbox) => {
  checkbox.checked = true;
  checkbox.addEventListener("change", updateUI);
});
updateUI();
