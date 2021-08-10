"use strict";

((doc) => {
  const header__btn_menu = doc.querySelector(".header__btn-menu");
  const header__menu = doc.querySelector(".header__menu");

  header__btn_menu.addEventListener("click", controlMenu);

  let n = 1;
  function controlMenu() {
    if (n == 1) {
      header__menu.style.left = "0";
      header__menu.style.transition = "0.4s ease-in";
      return (n = 0);
    } else {
      header__menu.style.left = "-100%";
      header__menu.style.transition = "0.4s ease-in";
      return (n = 1);
    }
  }
})(document);
