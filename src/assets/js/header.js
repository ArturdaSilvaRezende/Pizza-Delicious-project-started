"use strict";

((doc) => {
  const header = doc.querySelector(".header");
  const header__btn_menu = doc.querySelector(".header__btn-menu");
  const header__menu = doc.querySelector(".header__menu");

  header__btn_menu.addEventListener("click", controlMenu);
  window.onscroll = function () {
    scrollTopHeader();
  };

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

  function scrollTopHeader() {
    if (
      document.body.scrollTop > 330 ||
      document.documentElement.scrollTop > 330
    ) {
      header.style.position = "fixed";
      header.classList.add("showHeader");
    } else {
      header.style.position = "relative";
    }
  }
})(document);
