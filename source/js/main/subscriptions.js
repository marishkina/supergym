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
