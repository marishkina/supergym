'use strict';

(function () {
  var review = document.querySelector('.reviews');

  if (review) {
    var line = review.querySelector('.reviews__list');
    var slides = review.querySelectorAll('.reviews__item');
    var sliderWidth = review.querySelector('.reviews__list-wrap').offsetWidth;
    var lineWidth = 0;

    var nextButton = review.querySelector('.reviews__controler--next');
    var prevButton = review.querySelector('.reviews__controler--prev');

    var i = 1;
    for(var li of slides) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    if (sliderWidth >= 566) {
      var width = 566;
    } else if (sliderWidth >= 560 && sliderWidth <= 566) {
      var width = 560;
    } else {
      var width = 226;
    }

    var count = 1;
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
