"use strict";

((doc) => {
  const navigationLinks = doc.querySelectorAll('.header__menu a[href^="#"]');
  navigationLinks.forEach((item) => {
    item.addEventListener("click", scrollClick);
  });
  function scrollClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const to = doc.querySelector(id).offsetTop - 110;
    window.scroll(0, to);
  }
})(document);
