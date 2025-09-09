export default class FooterScroll {
  constructor(footerSelector) {
    this.footer = document.querySelector(footerSelector);
    this.scrollThreshold = 50; // mostra só depois de rolar um pouco
    this.bottomOffset = 100;   // distância em px do rodapé antes de sumir
  }

  handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Quanto falta para chegar no fim
    const distanceFromBottom = documentHeight - (currentScrollTop + windowHeight);

    // Regras:
    // 1) só aparece se passou o threshold
    // 2) some quando estiver perto do rodapé
    if (currentScrollTop > this.scrollThreshold && distanceFromBottom > this.bottomOffset) {
      this.footer.classList.add('footer-scrolled');
    } else {
      this.footer.classList.remove('footer-scrolled');
    }
  }

  init() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
}
