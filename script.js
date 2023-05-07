const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('cross');
  navLinks.classList.toggle('nav-active');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is <= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

