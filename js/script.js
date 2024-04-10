// for mobile nav

const navBtnEl = document.querySelector(".btn-nav-mobile");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});

// for smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // to scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky Navigation
const sectionHeroEl = document.querySelector(".waste-body");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport. (null means the viewport)
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
