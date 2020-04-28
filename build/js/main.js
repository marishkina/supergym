'use strict';

(function () {
  var review = document.querySelector('.reviews');

  function asArr(arr) {
    return [].slice.call(arr, 0);
  }

  function setActiveReview(reviewItems, activeReviewItem) {
    reviewItems.forEach(function (reviewItem) {
      if (reviewItem === activeReviewItem) {
        reviewItem.classList.add('reviews__item--active');
      } else {
        reviewItem.classList.remove('reviews__item--active');
      }
    });
  }

  function getNextReview(reviewItems, reviewItem) {
    var reviewIndex = reviewItems.indexOf(reviewItem);
    var totalReviewsIndexes = reviewItems.length - 1;
    if (reviewIndex === totalReviewsIndexes) {
      return reviewItems[0];
    } else {
      return reviewItems[reviewIndex + 1];
    }
  }

  function getPrevReview(reviewItems, reviewItem) {
    var reviewIndex = reviewItems.indexOf(reviewItem);
    var totalReviewsIndexes = reviewItems.length - 1;
    if (reviewIndex === 0) {
      return reviewItems[totalReviewsIndexes];
    } else {
      return reviewItems[reviewIndex - 1];
    }
  }

  if (review) {
    var ACTIVE_REVIEW_DEFAULT_INDEX = 0;
    var reviewItems = asArr(review.querySelectorAll('.reviews__item'));
    var nextButton = review.querySelector('.reviews__controler--next');
    var prevButton = review.querySelector('.reviews__controler--prev');

    var currentlyActiveReview = reviewItems[ACTIVE_REVIEW_DEFAULT_INDEX];

    setActiveReview(reviewItems, currentlyActiveReview);

    nextButton.addEventListener('click', function () {
      var nextReview = getNextReview(reviewItems, currentlyActiveReview);
      setActiveReview(reviewItems, nextReview);
      currentlyActiveReview = nextReview;
    });

    prevButton.addEventListener('click', function () {
      var prevReview = getPrevReview(reviewItems, currentlyActiveReview);
      setActiveReview(reviewItems, prevReview);
      currentlyActiveReview = prevReview;
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
          spaceBetween: 20,
          slidesPerGroup: 4,
        },
        1300: {
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
  var feedback = document.querySelector('.feedback');

  if (feedback) {
    jQuery.validator.addMethod('checkMask', function (value, element) {
      return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });

    $('feddback').validate({
      rules: {
        tel: {
          checkMask: true
        }
      },
      messages: {
        tel: {
          checkMask: 'Введите полный номер телефона'
        }
      }
    });
    $('#tel').mask('+7(999)999-9999', {autoclear: false});
  }
})();
