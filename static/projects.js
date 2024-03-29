import { projects } from "./projectsData.js";
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
  function getDisabled() {
    if (disabled) return "disabled";
    else return "";
  }
  return `<div class="project" data-name=''>
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
                <a class="btn btn-info btn-sm ${getDisabled()}" href=${liveUrl} target="_blank">Live</a>
                <a class="btn btn-info btn-sm" href=${projectUrl} target="_blank">Code</a>
              </div>
            </div>
          </div>`;
}

export function generatePage(projects, options = []) {
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

// export const projectsCode = generatePage(projects);
