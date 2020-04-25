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
