function layout() {
  resume.innerHTML = "";
  let width = window.innerWidth;
  if (width <= 1020 && width >= 696) {
    collapse.append(skills);
    collapse.append(experience);
    resume.append(education);
    resume.append(collapse);
  } else if (width > 696) {
    resume.append(education);
    resume.append(skills);
    resume.append(experience);
  } else {
    resume.append(skills);
    resume.append(education);
    resume.append(experience);
  }
}

const skills = document.querySelector(".skills");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
const collapse = document.createElement("section");
const resume = document.querySelector(".resume");
layout();
window.addEventListener("resize", layout);
