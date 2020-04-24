document.addEventListener("DOMContentLoaded", function() {
  const navMain = document.querySelector('.page-header__nav');
  const navToggle = document.querySelector('.page-header__toggle');

  navToggle.classList.remove('page-header__toggle--nojs');
  navMain.classList.remove('page-header__nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('page-header__nav--close')) {
      navMain.classList.remove('page-header__nav--close');
      navMain.classList.add('page-header__nav--open');
      navToggle.classList.remove('page-header__toggle--close');
      navToggle.classList.add('page-header__toggle--open')
    } else {
      navMain.classList.remove('page-header__nav--open');
      navMain.classList.add('page-header__nav--close');
      navToggle.classList.remove('page-header__toggle--open');
      navToggle.classList.add('page-header__toggle--close')
    }
  })
});
