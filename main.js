// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let px = window.innerHeight;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--px', `${px}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--px', `${px}px`);
});

// Date of Footer

const date = document.getElementById('date');
const d = new Date();
date.textContent = d.getFullYear();

// Add class

const label = document.body.querySelector('#isRegulations');
const i = document.body.querySelector('#myI');

function toggleClass() {
  i.classList.toggle('fas');
  i.classList.toggle('fa-check');
}

label.addEventListener('click', toggleClass);
