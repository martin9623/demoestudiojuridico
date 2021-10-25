const BUTTON = document.querySelector(".nav__btn");
const MENU = document.querySelector(".menu");
const LINKS = document.querySelectorAll(".menu__item-link");

const openMenu = (x) => {
  x.addEventListener("click", () => {
    MENU.classList.toggle("menu-active");
  });
};

openMenu(BUTTON);
openMenu(LINKS[0]);
openMenu(LINKS[1]);
openMenu(LINKS[2]);
openMenu(LINKS[3]);
openMenu(LINKS[4]);
