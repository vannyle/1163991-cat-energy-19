document.addEventListener("DOMContentLoaded", function () {
  var navMain = document.querySelector('.page-header__nav');
  var navToggle = document.querySelector('.page-header__toggle');
  var showAllItems = document.querySelector('.more-items');
//Get all the inputs...
  var inputs = document.querySelectorAll('input, select, textarea');

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

  document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('order--js')) {
      e.preventDefault();
      alert('Модальное окно заказа');
    }
  });

  if (showAllItems) {
    showAllItems.addEventListener('click', function (e) {
      if (e.target.classList.contains('more-items__button--js')) {
        e.preventDefault();
        alert('Показать все товары')
      }
    });
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('invalid', function (e) {
      e.target.classList.add('error');
    }, false);
  }
});
