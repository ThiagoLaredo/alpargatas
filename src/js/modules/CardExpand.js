export default class CardExpand {
    constructor(selector) {
      this.cards = document.querySelectorAll(selector);
      this.init();
    }
  
    init() {
      if (!this.cards.length) return;
  
      this.cards.forEach(card => {
        const texto = card.querySelector('p');
        const btn = card.querySelector('.saiba-mais');
  
        if (!texto || !btn) return;
  
        // se o texto já couber, esconde o botão
        if (texto.scrollHeight <= texto.clientHeight) {
          btn.style.display = 'none';
        }
  
        btn.addEventListener('click', () => {
          this.toggleText(texto, btn);
        });
      });
    }
  
    toggleText(texto, btn) {
      texto.classList.toggle('expandido');
      btn.textContent = texto.classList.contains('expandido')
        ? 'Ver menos'
        : 'Saiba mais';
    }
  }
  