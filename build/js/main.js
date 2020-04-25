'use strict';

(function () {
  var review = document.querySelector('.reviews');

  if (review) {
    var line = review.querySelector('.reviews__list');
    var slides = review.querySelectorAll('.reviews__item');
    var sliderWidth = review.querySelector('.reviews__list-wrap').offsetWidth;

    var nextButton = review.querySelector('.reviews__controler--next');
    var prevButton = review.querySelector('.reviews__controler--prev');

    if (sliderWidth >= 566) {
      var width = 566;
    } else if (sliderWidth >= 560 && sliderWidth <= 566) {
      width = 560;
    } else {
      width = 226;
    }

    var count = 1;
    var position = 0;

    prevButton.addEventListener('click', function () {
      position += width * count;
      position = Math.min(position, 0);
      line.style.marginLeft = position + 'px';
    });

    nextButton.addEventListener('click', function () {
      position -= width * count;
      position = Math.max(position, -width * (slides.length - count));
      line.style.marginLeft = position + 'px';
    });
  }
})();

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

'use strict';

(function () {
  var subscriptionBlock = document.querySelector('.subscriptions');

  if (subscriptionBlock) {
    var cardToggles = [].slice.call(subscriptionBlock.querySelectorAll('.subscriptions__toggle'), 0);
    var cardBlocks = [].slice.call(subscriptionBlock.querySelectorAll('.subscriptions__card-block'), 0);
    var oneMonthCardBlock = subscriptionBlock.querySelector('.subscriptions__card-block--one-month');
    var sixMonthsCardBlock = subscriptionBlock.querySelector('.subscriptions__card-block--six-months');
    var twelveMonthsCardBlock = subscriptionBlock.querySelector('.subscriptions__card-block--twelve-months');

    cardBlocks.forEach(function (el) {
      el.classList.remove('subscriptions__card-block--no-js');
    });
    cardToggles.forEach(function (el) {
      el.classList.remove('subscriptions__toggle--no-js');
    });


    cardToggles.forEach(function (el, i) {
      el.addEventListener('click', function(evt) {
        cardToggles.forEach(function (el, i) {
          el.classList.remove('subscriptions__toggle--active');
        });
        el.classList.add('subscriptions__toggle--active');

        cardBlocks.forEach(function (item) {
          item.classList.remove('subscriptions__card-block--active');
        });

        if (i === 0) {
          oneMonthCardBlock.classList.add('subscriptions__card-block--active');
        } else if (i === 1) {
          sixMonthsCardBlock.classList.add('subscriptions__card-block--active');
        } else {
          twelveMonthsCardBlock.classList.add('subscriptions__card-block--active');
        }
      });
    });
  }
})();

'use strict';

(function () {
  $(document).ready(function () {
    $('#tel').mask('+7 (999) 999 99 99');
  });
})();
