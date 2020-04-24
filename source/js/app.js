document.addEventListener("DOMContentLoaded", function() {
  const navMain = document.querySelector('.nav');
  const navToggle = document.querySelector('.toggle');

  navToggle.classList.remove('toggle__nojs');
  navMain.classList.remove('nav__nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav__close')) {
      navMain.classList.remove('nav__close');
      navMain.classList.add('nav__open');
      navToggle.classList.remove('toggle__close');
      navToggle.classList.add('toggle__open')
    } else {
      navMain.classList.remove('nav__open');
      navMain.classList.add('nav__close');
      navToggle.classList.remove('toggle__open');
      navToggle.classList.add('toggle__close')
    }
  })
});
