const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('cross');
  navLinks.classList.toggle('nav-active');
});

