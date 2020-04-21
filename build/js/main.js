'use strict';

(function () {
  var slider = document.querySelector('.slider');

  if (slider) {
    var line = slider.querySelector('.slider__slide-line');
    var slides = slider.querySelectorAll('.slider__slide');
    var sliderWidth = slider.querySelector('.slider__wrap').offsetWidth;
    var lineWidth = 0;

    var nextButton = slider.querySelector('.slider__controler--next');
    var prevButton = slider.querySelector('.slider__controler--prev');

    var i = 1;
    for(var li of slides) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    if (sliderWidth >= 1160) {
      var width = 290;
      var count = 4;
    } else if (sliderWidth >= 566) {
      var width = 283;
      var count = 2;
    } else {
      var width = 226;
      var count = 1;
    }

    var position = 0;

    prevButton.addEventListener('click', function () {
      position += width * count;
      position = Math.min(position, 0)
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
  var subscriptionBlock = document.querySelector('.subscriptions');

  if (subscriptionBlock) {
    var cardToggles = subscriptionBlock.querySelectorAll('.subscriptions__toggle');
    var oneMonthToggle = subscriptionBlock.querySelector('.subscriptions__toggle--one-month');
    var sixMonthsToggle = subscriptionBlock.querySelector('.subscriptions__toggle--six-months');
    var twelveMonthsToggle = subscriptionBlock.querySelector('.subscriptions__toggle--twelve-months');

    var cardBlocks = subscriptionBlock.querySelectorAll('.subscriptions__card-block');
    var oneMonthCardBlock = subscriptionBlock.querySelector('.subscriptions__card-block--one-month');
    var sixMonthsCardBlock = subscriptionBlock.querySelector('.subscriptions__card-block--six-months');
    var twelveMonthsCardBlock = subscriptionBlock.querySelector('.subscriptions__card-block--twelve-months');

    cardBlocks.forEach(function (el) {
      el.classList.remove('subscriptions__card-block--no-js');
    });
    cardToggles.forEach(function (el) {
      el.classList.remove('subscriptions__toggle--no-js');
    });

    oneMonthToggle.addEventListener('click', function () {
      cardToggles.forEach(function (el) {
        el.classList.remove('subscriptions__toggle--active');
      });
      cardBlocks.forEach(function (el) {
        el.classList.remove('subscriptions__card-block--active');
      });
      oneMonthToggle.classList.add('subscriptions__toggle--active');
      oneMonthCardBlock.classList.add('subscriptions__card-block--active');
    });

    sixMonthsToggle.addEventListener('click', function () {
      cardToggles.forEach(function (el) {
        el.classList.remove('subscriptions__toggle--active');
      });
      cardBlocks.forEach(function (el) {
        el.classList.remove('subscriptions__card-block--active');
      });
      sixMonthsToggle.classList.add('subscriptions__toggle--active');
      sixMonthsCardBlock.classList.add('subscriptions__card-block--active');
    });

    twelveMonthsToggle.addEventListener('click', function () {
      cardToggles.forEach(function (el) {
        el.classList.remove('subscriptions__toggle--active');
      });
      cardBlocks.forEach(function (el) {
        el.classList.remove('subscriptions__card-block--active');
      });
      twelveMonthsToggle.classList.add('subscriptions__toggle--active');
      twelveMonthsCardBlock.classList.add('subscriptions__card-block--active');
    });
  }
})();
