
const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.toggle');

navToggle.classList.remove('toggle--nojs');
navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--open')) {
    navMain.classList.remove('nav--open');
    navMain.classList.add('nav--close');
    navToggle.classList.remove('toggle--open');
    navToggle.classList.add('toggle--close')
  } else {
    navMain.classList.remove('nav--close');
    navMain.classList.add('nav--open');
    navToggle.classList.remove('toggle--close');
    navToggle.classList.add('toggle--open')
  }
});
