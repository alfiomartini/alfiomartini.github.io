import { projects } from "./projectsData.js";
// for debugging only
window.projects = projects;

function getProject({ title, readme, videoUrl, liveUrl, projectUrl }) {
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
                <a class="btn btn-info btn-sm" href=${liveUrl} target="_blank">Live</a>
                <a class="btn btn-info btn-sm" href=${projectUrl} target="_blank">Code</a>
              </div>
            </div>
          </div>`;
}

function generatePage(projects) {
  let html = "";
  projects.forEach((projList) => {
    projList.forEach((proj) => {
      console.log(proj.title);
      html += getProject(proj);
    });
  });
  return html;
}

export const projectsCode = generatePage(projects);
// console.log(projectsCode);
