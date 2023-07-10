const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

export default {
  init() {
    const burger = document.querySelector('.burger');
    const body = document.querySelector('body');
    const nav = document.querySelector('.header__nav-list');
    const targetElement = document.querySelector('.header__nav-list');

    burger.addEventListener('click', () => {
      if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        body.classList.remove('active');
        enableBodyScroll(targetElement);
      } else {
        burger.classList.add('active');
        body.classList.add('active');
        disableBodyScroll(targetElement);
      }

      nav.classList.toggle('active');
    })
  },
}