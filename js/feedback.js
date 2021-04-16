'use strict';

(function () {

  let form = document.querySelector('.feedback-form');
  let inputName = form.querySelector('.feedback-form__input--name');
  let inputPhone = form.querySelector('.feedback-form__input--phone');
  let inputTextarea = form.querySelector('.feedback-form__input--textarea');
  let permission = form.querySelector('.feedback-form__checkbox');
  let label = form.querySelector('.feedback-form__label');
  let btnSubmit = form.querySelector('.feedback-form__btn');

  let getCheckboxCondition = function () {
    let condition = true;

    if (!permission.checked) {
      condition = false;
    }

    return condition;
  }

  let btnSubmitCondition = function () {
    let checkboxCondition = getCheckboxCondition();

    if (!checkboxCondition) {
      btnSubmit.classList.add('feedback-form__btn--disabled');
      btnSubmit.setAttribute('disabled', 'disabled');
    }
  }

  let recordsStorage = function () {
    let isStorageSupport = true;
    let storage = '';

    try {
      storage = localStorage.getItem('test');
    } catch (err) {
      isStorageSupport = false;
    }

    if (isStorageSupport) {
      localStorage.setItem('feedbackName', inputName.value);
      localStorage.setItem('feedbackPhone', inputPhone.value);
      localStorage.setItem('feedbackMessage', inputTextarea.value);
    }
  }

  let onCheckboxChange = function () {
    let checkboxCondition = getCheckboxCondition();

    if (!checkboxCondition) {
      btnSubmit.classList.add('feedback-form__btn--disabled');
      btnSubmit.setAttribute('disabled', 'disabled');
    } else if (btnSubmit.classList.contains('feedback-form__btn--disabled')) {
      btnSubmit.classList.remove('feedback-form__btn--disabled');
      btnSubmit.removeAttribute('disabled');
    }
  }

  let onFormSubmit = function (evt) {
    recordsStorage();
  }

  inputPhone.addEventListener('blur', function () {
    if (inputPhone.value.length < 14) {
      inputPhone.setCustomValidity('Номер телефона должен состоять из 10 цифр');
    } else {
      inputPhone.setCustomValidity('');
    }
  });

  permission.addEventListener('change', onCheckboxChange);

  form.addEventListener('submit', onFormSubmit);

  btnSubmitCondition();

})();
