import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';

export default {
  init() {
    const swiper = new Swiper('.swiper.slider__slider', {
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


    const swiper2 = new Swiper('.swiper.case__list-wrap', {
      modules: [Navigation, Pagination, Autoplay],
      speed: 900,
      loop: false,
/*       autoplay: {
        delay: 3000,
      }, */
      slidesPerView: 1.2,
      spaceBetween: 20,


      breakpoints: {
        900: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 30,
        }
      }
    });


  }
}