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
window.addEventListener('scroll', (e) => {
  if (window.scrollY > 40) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
