// Marks in the side index the link of the section that is on the screen.
const links = [...document.querySelectorAll(".side-nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  // A section counts as current when it crosses the upper part of the screen.
  { rootMargin: "-20% 0px -70% 0px" },
);

links.forEach((link) => {
  observer.observe(document.querySelector(link.hash));
});
