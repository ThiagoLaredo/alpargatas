import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export const initPageOpenAnimations = () => {
  // 1. Estado inicial (só opacity)
  gsap.set([
    "[data-menu='logo']", 
    "[data-menu='button']", 
    "#menu > li > a", 
    "#menu > li > span", 
    ".header_acoes a",
    ".decoracao-bottom-left", 
    ".decoracao-top-right",
    ".intro_texto h1", 
    ".intro_texto p", 
    ".intro_texto .retangulo-decorativo",
    ".cta-button", 
    ".intro_imagem", 
    ".intro_selo"
  ], { opacity: 0 });

  // 2. Timeline principal
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // --- HEADER ---
  tl.to("[data-menu='logo']", { opacity: 1, duration: 0.8 });
  tl.to("[data-menu='button']", { opacity: 1, duration: 0.6 }, 0.2);
  tl.to("#menu > li > a, #menu > li > span", { opacity: 1, stagger: 0.1, duration: 0.5 }, 0.3);
  tl.to(".header_acoes a", { opacity: 1, stagger: 0.15, duration: 0.5 }, 0.5);

  // --- INTRO DECORAÇÕES ---
  tl.fromTo(".decoracao-bottom-left", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, 0.8);
  tl.fromTo(".decoracao-top-right", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, "<0.2");

  // --- TEXTO PRINCIPAL ---
  tl.fromTo(".intro_texto h1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.2);
  tl.fromTo(".intro_texto p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.2");
  tl.fromTo(".intro_texto .retangulo-decorativo", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "<0.2");

  // --- CTA ---
  tl.fromTo(".cta-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.8);

  // --- IMAGEM ---
  tl.to(".intro_imagem", { opacity: 1, duration: 0.9 }, 2.0); // sem y

  // --- SELO ---
  tl.to(".intro_selo", { opacity: 1, duration: 0.9 }, 2.2); // sem y

  // --- ELEMENTOS GERAIS DA PÁGINA (fold check) ---
  document.querySelectorAll('.page-open-animate').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    const isAboveFold = rect.top < window.innerHeight;

    if (isAboveFold) {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 2.5 + (i * 0.1), ease: "back.out(1.4)" }
      );
    } else {
      gsap.set(el, { opacity: 1 });
    }
  });
};

export const initScrollButtonAnimation = () => {
  const arrow = document.querySelector('.scroll-text img');

  if (arrow) {
    gsap.to(arrow, {
      y: 10,            // desloca para baixo
      repeat: -1,       // loop infinito
      yoyo: true,       // vai e volta
      ease: "power1.inOut",
      duration: 0.8
    });
  }
};


  export function initScrollAnimations() {
  
    const elements = document.querySelectorAll(".animate-me");
  
    elements.forEach((el, index) => {
  
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "play none none none",
          markers: false,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    });
  }