import "../../css/global.css";
import "../../css/header.css";
import "../../css/header.css";
import "../../css/descricao-areas.css";
import "../../css/faq.css";
import "../../css/footer-float.css";
import "../../css/footer.css";
import "../../css/menu-mobile.css";
import "../../css/cores.css";

import MenuMobile from '../modules/menu-mobile.js';
import FAQ from '../modules/faq.js';
import HeaderScroll from '../modules/header-scroll.js';
import FooterScroll from '../modules/footer-scroll.js';
import { initPageOpenAnimations, initScrollAnimations } from '../modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {

    // Inicializa o menu mobile com submenu integrado, caso os elementos existam
    const menuMobile = new MenuMobile(
        '[data-menu="logo"]',
        '[data-menu="button"]',
        '[data-menu="list"]',
        '[data-menu="contato-mobile"]',
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

    // Animações de abertura e scroll
    initPageOpenAnimations();
    initScrollAnimations();

    // Inicializa a classe FAQ
    new FAQ('.faq-item');
});