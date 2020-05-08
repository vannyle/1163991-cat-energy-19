document.addEventListener("DOMContentLoaded", function () {
  const navMain = document.querySelector('.page-header__nav');
  const navToggle = document.querySelector('.page-header__toggle');
//Get all the inputs...
  const inputs = document.querySelectorAll('input, select, textarea');

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
  });

  document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('order--js')) {
      e.preventDefault();
      alert('Модальное окно заказа');
    }
  });

  // Loop through them...
  for (let input of inputs) {
    // Just before submit, the invalid event will fire, let's apply our class there.
    input.addEventListener('invalid', (event) => {
      input.classList.add('error');
    }, false);
  }
});
