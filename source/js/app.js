document.addEventListener("DOMContentLoaded", function () {
  const navMain = document.querySelector('.page-header__nav');
  const navToggle = document.querySelector('.page-header__toggle');
//Get all the inputs...
  const inputs = document.querySelectorAll('input, select, textarea');
  const slider = document.getElementById('slider');
  const beforeBtn = document.getElementById('before-btn');
  const afterBtn = document.getElementById('after-btn');
  const catMobile = document.querySelector('.example__cat--mobile');
  const sliderMobile = document.getElementById('slider-mobile');

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

  // Loop through them...
  for (let input of inputs) {
    // Just before submit, the invalid event will fire, let's apply our class there.
    input.addEventListener('invalid', (event) => {
      input.classList.add('error');
    }, false);
  }

  slider.addEventListener('input', function (e) {
    const perc = e.target.value / 100;
    document.getElementById('cat-before').style.clip = `rect(0, ${680 - 680 * perc}px, 517px, 0)`;
    document.getElementById('cat-after').style.clip = `rect(0, 680px, 517px, ${680 - 680 * perc}px)`;

    beforeBtn.addEventListener('click', function () {
      document.getElementById('cat-before').style.clip = `rect(0, 680px, 517px, 0)`;
      document.getElementById('cat-after').style.clip = `rect(0, 0, 517px, 0)`;
      e.target.value = 0;
    });

    afterBtn.addEventListener('click', function () {
      document.getElementById('cat-before').style.clip = `rect(0, 0, 517px, 0)`;
      document.getElementById('cat-after').style.clip = `rect(0, 680px, 517px, 0)`;
      e.target.value = 100;
    });
  });

  sliderMobile.addEventListener('click', function (e) {
    if (e.target.checked === true) {
      catMobile.classList.add('example__cat--mobile-after');
      catMobile.classList.remove('example__cat--mobile-before')
    } else {
      catMobile.classList.remove('example__cat--mobile-after');
      catMobile.classList.add('example__cat--mobile-before')
    }
  });
});
