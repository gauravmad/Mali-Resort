const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('cross');
  navLinks.classList.toggle('nav-active');
});

var acc = document.getElementsByClassName("accordion");
var i;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}