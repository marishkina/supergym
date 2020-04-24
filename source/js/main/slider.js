'use strict';

(function () {
  var slider = document.querySelector('.slider');

  if (slider) {
    var swiper = new Swiper('.slider__container', {
      navigation: {
        nextEl: '.slider__control--next',
        prevEl: '.slider__control--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 4,
        },
      }
    });
  }
})();
