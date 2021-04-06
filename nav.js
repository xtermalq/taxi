const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');

const isNavbarOpen = localStorage.getItem('navbar-open') === 'true';
if (isNavbarOpen) {
  hamburger.classList.add('hamburger--active');
  nav.classList.add('nav--active');
}

const handleClick = e => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav--active');
  // localStorage.setItem('navbar-open', true);
  e.stopPropagation();
};

const handleNavClick = e => {
  e.stopPropagation();
};

const handleCloseClick = () => {
  hamburger.classList.remove('hamburger--active');
  nav.classList.remove('nav--active');
  localStorage.setItem('navbar-open', false);
};

hamburger.addEventListener('click', handleClick);
nav.addEventListener('click', handleNavClick);
document.addEventListener('click', handleCloseClick);
