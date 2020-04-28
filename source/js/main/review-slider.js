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
