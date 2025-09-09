import { gsap } from "gsap";

export default class FAQ {
    constructor(selector) {
        this.items = document.querySelectorAll(selector);
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => this.toggleItem(item));
        });
    }

    toggleItem(item) {
        // Fecha outros itens abertos
        this.items.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                this.closeItem(otherItem);
            }
        });

        // Alterna o item atual
        if (item.classList.contains('active')) {
            this.closeItem(item);
        } else {
            this.openItem(item);
        }
    }

    openItem(item) {
        item.classList.add('active');
        
        // Animação GSAP para abrir
        const answer = item.querySelector('.faq-answer');
        const inner = item.querySelector('.faq-answer-inner');
        
        gsap.to(answer, {
            height: inner.offsetHeight + "px",
            duration: 0.3,
            ease: "power1.out"
        });
        
        // Adiciona aria-expanded para acessibilidade
        const question = item.querySelector('.faq-question');
        question.setAttribute('aria-expanded', 'true');
    }

    closeItem(item) {
        item.classList.remove('active');
        
        // Animação GSAP para fechar
        const answer = item.querySelector('.faq-answer');
        
        gsap.to(answer, {
            height: 0,
            duration: 0.3,
            ease: "power1.in"
        });
        
        // Atualiza aria-expanded para acessibilidade
        const question = item.querySelector('.faq-question');
        question.setAttribute('aria-expanded', 'false');
    }
}
