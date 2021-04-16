'use strict';

(function () {
  let footer = document.querySelector('.page-footer');
  let footerNav = footer.querySelector('.footer-sait-nav__columns');
  let footerContacts = footer.querySelector('.footer-contacts__list');
  let navTitle = footer.querySelector('.footer-sait-nav__title');
  let contactsTitle = footer.querySelector('.footer-contacts__title');

  let footerNavClose = function () {
    navTitle.classList.add('page-footer__title--menu-close');
    footerNav.classList.add('footer-sait-nav__columns--menu-close');
  };

  let footerNavOpen = function () {
    navTitle.classList.remove('page-footer__title--menu-close');
    footerNav.classList.remove('footer-sait-nav__columns--menu-close');
  };

  let footerContactsClose = function () {
    contactsTitle.classList.add('page-footer__title--menu-close');
    footerContacts.classList.add('footer-contacts__list--menu-close');
  };

  let footerContactsOpen = function () {
    contactsTitle.classList.remove('page-footer__title--menu-close');
    footerContacts.classList.remove('footer-contacts__list--menu-close');
  };

  let onToggleNavClick = function () {
    if (footerNav.classList.contains('footer-sait-nav__columns--menu-close')) {
      footerNavOpen();
      footerContactsClose();
    } else if (!(footerNav.classList.contains('footer-sait-nav__columns--menu-close'))) {
      footerNavClose();
    } else {
      footerNavClose();
      footerContactsOpen();
    }
  };

  let onToggleContactsClick = function () {
    if (footerContacts.classList.contains('footer-contacts__list--menu-close')) {
      footerContactsOpen();
      footerNavClose();
    } else if (!(footerContacts.classList.contains('footer-contacts__list--menu-close'))) {
      footerContactsClose();
    } else {
      footerContactsClose();
      footerNavOpen();
    }
  };

  contactsTitle.addEventListener('click', onToggleContactsClick);

  navTitle.addEventListener('click', onToggleNavClick);
})();
