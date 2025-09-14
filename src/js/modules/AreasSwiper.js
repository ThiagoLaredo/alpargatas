import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default class AreasSwiper {
  constructor(selector) {
    this.selector = selector;
    this.init();
  }

  init() {
    this.swiper = new Swiper(this.selector, {
      modules: [Navigation],
      slidesPerView: 1.2, // mobile: 1 inteiro + parte do próximo
      spaceBetween: 20,
      loop: true,

      breakpoints: {
        768: { slidesPerView: 2.2 },   // tablet: 2 inteiros + parte do 3º
        1024: { slidesPerView: 3.5 }   // desktop: 3 inteiros + parte do 4º
      },

      navigation: {
        // não coloca nextEl
        prevEl: `${this.selector} .swiper-button-prev`
      }
    });
  }
}
