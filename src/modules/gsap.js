import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  init() {
    console.log('gsap', gsap);
    const leftItem = document.querySelector('.hero__info.time');
    const rigthItem = document.querySelector('.hero__info.avans');

    const tl = gsap.timeline();

    tl.from(leftItem, {
      x:300,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
    })
    .from(rigthItem, {
      x:-300,
      opacity: 0,
      duration: 1,
    })
    .from('.hero__btn', {
      opacity: 0,
      duration: 0.5,
      rotation: 360, 
    })



    gsap.from('.leasing__item._1', {
      scrollTrigger: {
        trigger:'.leasing',
        markers: false,
        start: '-300 0',
      },
      x:-30,
      opacity: 0,
      duration:1,
      delay:0,
    })

    gsap.from('.leasing__item._3', {
      scrollTrigger: {
        trigger:'.leasing',
        markers: false,
        start: '-300 0',
      },
      x:30,
      opacity: 0,
      duration:1,
      delay:0.7,
    })

    gsap.from('.leasing__item._2', {
      scrollTrigger: {
        trigger:'.leasing',
        markers: false,
        start: '-300 0',
      },
      x:0,
      opacity: 0,
      duration:1,
      delay:1.4,
    })


    gsap.from('.steps__item._1', {
      scrollTrigger: {
        trigger:'.steps',
        markers: false,
        start: '-300 0',
      },
      x:-10,
      opacity: 0,
      duration:1,
      delay:0.5,
    })

    gsap.from('.steps__item._2', {
      scrollTrigger: {
        trigger:'.steps',
        markers: false,
        start: '-300 0',
      },
      x:-10,
      opacity: 0,
      duration:1,
      delay:1,
    })

    gsap.from('.steps__item._3', {
      scrollTrigger: {
        trigger:'.steps',
        markers: false,
        start: '-300 0',
      },
      x:-10,
      opacity: 0,
      duration:1,
      delay:1.5,
    })

    gsap.from('.steps__item._4', {
      scrollTrigger: {
        trigger:'.steps',
        markers: false,
        start: '-300 0',
      },
      x:0,
      opacity: 0,
      duration:1,
      delay:2,
    })

    gsap.from('.steps__item._5', {
      scrollTrigger: {
        trigger:'.steps',
        markers: false,
        start: '-300 0',
      },
      x:0,
      opacity: 0,
      duration:1,
      delay:2.5,
    })

    gsap.from('.steps__btn-info', {
      scrollTrigger: {
        trigger:'.steps',
        markers: false,
        start: '-300 0',
      },
      x:0,
      scale:0,
      opacity: 0,
      duration:1,
      delay:4,
    })

    /* we */

    gsap.from('.we__item._1', {
      scrollTrigger: {
        trigger:'.we',
        markers: false,
        start: '-300 0',
      },
      x:-20,
      opacity: 0,
      duration:1,
      delay:.5,
    })

    gsap.from('.we__item._2', {
      scrollTrigger: {
        trigger:'.we',
        markers: false,
        start: '-300 0',
      },
      x:-10,
      opacity: 0,
      duration:1,
      delay:1,
    })

    gsap.from('.we__item._3', {
      scrollTrigger: {
        trigger:'.we',
        markers: false,
        start: '-300 0',
      },
      x:10,
      opacity: 0,
      duration:1,
      delay:1.5,
    })

    gsap.from('.we__item._4', {
      scrollTrigger: {
        trigger:'.we',
        markers: false,
        start: '-300 0',
      },
      x:20,
      opacity: 0,
      duration:1,
      delay:2,
    })


    /* partners__item */
    gsap.from('.partners__item._4', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-300 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:0.5,
    }),
    gsap.from('.partners__item._8', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:0.8,
    }),
    gsap.from('.partners__item._1', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:1.1,
    }),
    gsap.from('.partners__item._9', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:1.5,
    }),
    gsap.from('.partners__item._7', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:2,
    }),
    gsap.from('.partners__item._3', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:2.3,
    }),
    gsap.from('.partners__item._5', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:2.8,
    }),
    gsap.from('.partners__item._2', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:3,
    }),
    gsap.from('.partners__item._6', {
      scrollTrigger: {
        trigger:'.partners__item',
        markers: false,
        start: '-700 0',
      },
      scale:0,
      opacity: 0,
      duration:1,
      delay:3.2,
    })
    
  }
}