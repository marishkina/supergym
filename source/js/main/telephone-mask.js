'use strict';

(function () {
  var feedback = document.querySelector('.feedback');

  if (feedback) {
    jQuery.validator.addMethod('checkMask', function (value, element) {
      return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });

    $('.feedback__form').validate({
      rules: {
        tel: {
          checkMask: true
        }
      },
      messages: {
        tel: {
          checkMask: 'Введите полный номер'
        }
      }
    });
    $('#tel').mask('+7(999)999-9999', {autoclear: false});
  }
})();
