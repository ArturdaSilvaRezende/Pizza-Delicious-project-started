"use strict";

((doc) => {
  const target = doc.querySelectorAll("[data-scroll]");
  const animationScroll = "animate-scroll";

  animeScroll();

  window.addEventListener("scroll", () => {
    animeScroll();
  });

  if (target.length) {
    window.addEventListener("scroll", () => {
      animeScroll();
    });
  }

  function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function (e) {
      if (windowTop > e.offsetTop) {
        e.classList.add(animationScroll);
      }
    });
  }
})(document);
