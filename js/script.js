const navBtnEl = document.querySelector(".btn-nav-mobile");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});
