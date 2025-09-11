export default class HeaderScroll {
    constructor(headerSelector) {
        this.header = document.querySelector(headerSelector);
        this.lastScrollTop = 0;
        this.scrollThreshold = 50; // Ajuste o valor conforme necessário
    }

    init() {
        if (!this.header) return;

        window.addEventListener('scroll', () => this.onScroll());
    }

    onScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.scrollThreshold) {
            // Scroll para baixo
            this.header.classList.add('header--hidden');
        } else {
            // Scroll para cima
            this.header.classList.remove('header--hidden');
        }

        this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para evitar valores negativos
    }
}