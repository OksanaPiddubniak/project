const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const btnOpen = document.querySelector("#btnOpen");
const closeBtn = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");
const breakpoint = window.matchMedia("(width < calc(600 / 16 * 1rem))");

setUpTopNav();

btnOpen.addEventListener("click", openMoblileMenu);
closeBtn.addEventListener("click", closeMobileMenu);
breakpoint.addEventListener("change", () => {
  setUpTopNav();
});

function openMoblileMenu() {
  btnOpen.setAttribute("aria-expanded", true);
  menuTopNav.removeAttribute("inert", "");
  main.setAttribute("inert", "");
  footer.setAttribute("inert", "");
  animateMenu();
  bodyScrollLockUpgrade.disableBodyScroll(menuTopNav);
  closeBtn.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", false);
  menuTopNav.setAttribute("inert", "");
  main.removeAttribute("inert", "");
  footer.removeAttribute("inert", "");
  animateMenu();
  bodyScrollLockUpgrade.enableBodyScroll(menuTopNav);
  closeBtn.focus();
}
function animateMenu() {
  menuTopNav.classList.add("animating");

  setTimeout(() => {
    menuTopNav.classList.remove("animating");
  }, 1000);
}
function setUpTopNav() {
  if (breakpoint.matches) {
    menuTopNav.setAttribute("inert", "");
  } else {
    closeMobileMenu();
    menuTopNav.removeAttribute("inert", "");
  }
}
