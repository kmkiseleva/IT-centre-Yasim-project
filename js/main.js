(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });

  if (window.innerWidth < 900) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
      });
    }
  }
})();

$(function () {
  $(".works-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<img src="img/svg/arrL.svg">', '<img src="img/svg/arrR.svg">'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
