
const navBtnEl = document.querySelector(".btn-nav-mobile");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});

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
  });
});

// Sticky Navigation
const sectionHeroEl = document.querySelector(".waste-body");

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  console.log(ent);

  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
});
obs.observe(sectionHeroEl);
