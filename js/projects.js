import { projects } from "../data/projects.js";
// for debugging only
// window.projects = projects;

function getProject({
  title,
  readme,
  videoUrl,
  liveUrl,
  projectUrl,
  disabled,
}) {
  return (`<div class="project" data-name=''>
            <div class="readme">
              <h5>${title}</h5>
              <div class="readme__text">
                ${readme}
              </div>
            </div>
            <div class="video">
              <iframe src=${videoUrl} frameborder="0" 
              allowfullscreen></iframe>
              <div class="video-btns">
                <a class="btn btn-info btn-sm ${disabled ? "disabled" : ""}" href=${liveUrl} target="_blank">Live</a>
                <a class="btn btn-info btn-sm" href=${projectUrl} target="_blank">Code</a>
              </div>
            </div>
          </div>`);
}

function generatePage(projects, options = []) {
  let html = "";
  let counter = 0;
  projects.forEach((proj) => {
    if (options.includes(proj.language)) {
      html += getProject(proj);
      counter++;
    }
  });
  return { html, counter };
}

const projectsElm = document.querySelector(".projects");
let flatCopy = projects.reduce((acc, projList) => {
  acc = [...acc, ...projList];
  return acc;
}, []);
flatCopy.sort((proj1, proj2) => proj2.weight - proj1.weight);

const checkboxes = document.querySelectorAll(
  ".checkboxes input[type='checkbox']",
);
const counterElm = document.querySelector(".counter");

function activeLanguages() {
  return [...checkboxes]
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.language);
}

function updateUI() {
  const { html, counter } = generatePage(flatCopy, activeLanguages());
  projectsElm.innerHTML = html;
  counterElm.textContent = counter;
}

// initialize UI
checkboxes.forEach((checkbox) => {
  checkbox.checked = true;
  checkbox.addEventListener("change", updateUI);
});
updateUI();
