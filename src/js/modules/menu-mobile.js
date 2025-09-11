
import gsap from "gsap";

export default class MenuMobile {
  constructor(logoMobile, menuButton, menuList, events) {
    this.logoMobile = document.querySelector(logoMobile);
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.headerActions = document.querySelector('.header_acoes');
    this.activeClass = "active";
    this.events = events || ["click"];
    this.menuOpened = false;
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  isMobile() {
    return window.innerWidth <= 800;
  }

  openMenu(event) {
    if (this.isMobile()) {
      event.stopPropagation();
      if (this.menuOpened) {
        this.closeMenu();
      } else {
        this.menuOpened = true;
        this.menuList.classList.add(this.activeClass);
        this.headerActions.classList.add(this.activeClass);
        this.menuButton.classList.add(this.activeClass);
        this.animateMenuItems();
        this.toggleMenuAnimation(true);
        document.body.classList.add('no-scroll');
      }
    }
  }

  closeMenu() {
    if (this.isMobile()) {
      this.menuOpened = false;
      this.menuList.classList.remove(this.activeClass);
      this.headerActions.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
      this.toggleMenuAnimation(false);
      document.body.classList.remove('no-scroll');
    }
  }

  addMenuMobileEvents() {
    this.menuButton.addEventListener('click', this.openMenu);
    this.menuList.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        this.closeMenu();
      }
    });
  }

  addLinkClickEvents() {
    const links = this.menuList.querySelectorAll('a');
    links.forEach(link => this.addLinkEventListener(link));

    const highlightLink = document.querySelector('.sublinhado');
    if (highlightLink) {
      this.addLinkEventListener(highlightLink);
    }
  }

  addLinkEventListener(link) {
    link.addEventListener('click', () => {
      if (this.isMobile()) {
        this.closeMenu();
      }
    });
  }

  animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power1.out", delay: 0.1 + index * 0.1,
          onComplete: () => gsap.set(item, { clearProps: "all" })
        });
    });
  }

  toggleMenuAnimation(show) {
    const menuList = document.querySelector('.js [data-menu="list"]');
    if (show) {
      gsap.to(menuList, {
        duration: 0.5,
        opacity: 1,
        visibility: 'visible',
        ease: 'power1.inOut',
        onStart: () => menuList.style.display = 'flex'
      });
    } else {
      gsap.to(menuList, {
        duration: 0.5,
        opacity: 0,
        visibility: 'hidden',
        ease: 'power1.inOut',
        onComplete: () => menuList.style.display = 'none'
      });
    }
  }

  init() {
    if (this.logoMobile && this.menuButton && this.menuList && this.headerActions) {
      this.addMenuMobileEvents();
      this.addLinkClickEvents();
    }
    return this;
  }
}