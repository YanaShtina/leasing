import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';

export default {
  init() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      speed: 900,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });


  }
}