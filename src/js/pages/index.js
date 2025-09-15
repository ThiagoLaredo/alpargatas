import "../../css/global.css";
import "../../css/header.css";
import "../../css/introducao.css";
import "../../css/alpa.css";
import "../../css/programas-sobre.css";
import "../../css/programas.css";
import "../../css/fases.css";
import  "../../css/jornada.css";
import  "../../css/swiper.css";
import "../../css/etapas.css";
import "../../css/pre-requisitos.css";
import "../../css/beneficios.css";
import "../../css/banner-inscricao.css";
import "../../css/faq.css";
import "../../css/footer-float.css";
import "../../css/footer.css";
import "../../css/menu-mobile.css";
import "../../css/cores.css";

import MenuMobile from '../modules/menu-mobile.js';
import FAQ from '../modules/faq.js';
import HeaderScroll from '../modules/header-scroll.js';
import FooterScroll from '../modules/footer-scroll.js';
import { initPageOpenAnimations, initScrollButtonAnimation, initScrollAnimations, initMapAnimations } from '../modules/animations.js';
import AreasSwiper from '../modules/AreasSwiper.js';
import CardExpand from '../modules/CardExpand.js';


document.addEventListener('DOMContentLoaded', () => {

    // Inicializa o menu mobile com submenu integrado, caso os elementos existam
    const menuMobile = new MenuMobile(
        '[data-menu="logo"]',
        '[data-menu="button"]',
        '[data-menu="list"]',
        '[data-menu="contato-mobile"]',
        '[data-menu="whatsapp"]',
        '[data-menu="linkedin"]',
        '[data-menu="instagram"]',
        '.header_acoes' // Novo parâmetro
    );
    if (menuMobile) {
        menuMobile.init();
    } else {
    }

    //  FOOTER SCROLL 
    const footerScroll = new FooterScroll('.footer-float');
    footerScroll.init();

    // HEADER SCROLL
    const headerScroll = new HeaderScroll('.header');
    headerScroll.init();

    // AREAS SWIPER
    new AreasSwiper('.areas-swiper');

    new CardExpand('.area-card'); 


    const thumbnailEl = document.querySelector('#videoThumbnail');
    if (thumbnailEl) {
      const videoPopup = new VideoPopup(
        '#videoThumbnail',
        '#videoPopup',
        '#videoElement', 
        '#closePopup',
        '../videos/lancamento.mp4'
      );
      videoPopup.init();
    }

    // Animações de abertura e scroll
    initPageOpenAnimations();
    initScrollButtonAnimation();
    initScrollAnimations();
    initMapAnimations();

    // Inicializa a classe FAQ
    new FAQ('.faq-item');
});