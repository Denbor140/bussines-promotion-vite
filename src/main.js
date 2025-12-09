const themeStorage = localStorage.getItem('theme');

const themeBtn = document.querySelector('.theme-btn');
const body = document.querySelector('body');

const burgerBtn = document.querySelector('.burger-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (themeStorage === 'dark') {
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
}

themeBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

mobileMenu.addEventListener('click', e => {
  if (e.target.closest('.mobile-close-btn')) {
    mobileMenu.classList.remove('is-open');
  }
});
