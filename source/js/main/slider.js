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
