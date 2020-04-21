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
