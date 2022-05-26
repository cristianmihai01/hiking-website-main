// select header
const header = document.querySelector('.header');
// select nav
const nav = document.querySelector('.nav');
// select nav trigger
const navTrigger = document.querySelector('.header__nav-trigger');

// open - close menu
navTrigger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// header background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Initialize Swiper
let swiper = new Swiper('.slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

// Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(
  '.hero__title, .companies__title, .companies__pretitle, .testimonials__title, .testimonials__pretitle, .features__container, .newsletter__container, .footer__container'
);
sr.reveal('.hero__subtitle', { delay: 500 });
sr.reveal('.hero__btn', { delay: 600 });
sr.reveal('.hero__img', { delay: 600, origin: 'bottom' });
sr.reveal('.feature', { interval: '100' });
sr.reveal('.features__explore-text', { delay: 600, origin: 'bottom' });
sr.reveal('.section-primary__img', { origin: 'left' });
sr.reveal('.section-primary__text', { origin: 'right' });
sr.reveal('.brands__item', { interval: '100' });
sr.reveal('.slider', { interval: '100' });
sr.reveal('.footer__copyright', { delay: 200, origin: 'top' });
