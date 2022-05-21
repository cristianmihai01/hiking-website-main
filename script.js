const nav = document.querySelector('.nav');
const navTrigger = document.querySelector('.header__nav-trigger');

// open / close menu
navTrigger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
