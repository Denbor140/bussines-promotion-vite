const themeStorage = localStorage.getItem('theme');

const themeBtn = document.querySelector('.theme-btn');
const body = document.querySelector('body');

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
