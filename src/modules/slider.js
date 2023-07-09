import Swiper, { Pagination, Navigation } from 'swiper';

export default {
  init() {
    

    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      speed: 1100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      effect: 'cards',
    });

    console.log('slider,', swiper);
  }
}