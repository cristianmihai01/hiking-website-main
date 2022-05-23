const nav = document.querySelector('.nav');
const navTrigger = document.querySelector('.header__nav-trigger');
const header = document.querySelector('.header');

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
