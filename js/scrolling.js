'use strict';

(function () {

  let scrollFeedback = document.querySelector('.header-content__btn');
  let scrollFeatures = document.querySelector('.page-header__scroll');
  let feedback = document.querySelector('.feedback');
  let features = document.querySelector('.features');

  let onScrollFeedbackClick = function (evt) {
    evt.preventDefault();
    feedback.scrollIntoView({block: "start", behavior: "smooth"});
  }

  let onScrollFeaturesClick = function (evt) {
    evt.preventDefault();
    features.scrollIntoView({block: "start", behavior: "smooth"});
  }

  scrollFeedback.addEventListener('click', onScrollFeedbackClick);
  scrollFeatures.addEventListener('click', onScrollFeaturesClick);

})();
