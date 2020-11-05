const html = document.querySelector('html');
const themeSwitch = document.querySelector("#theme-switch");
let darkMode = localStorage.getItem('darkMode');

const changeToLight = () => {
  html.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
}

const changeToDark = () => {
  html.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

if(darkMode === 'enabled') {
  themeSwitch.checked = true;
  changeToDark();
}

themeSwitch.addEventListener('change', () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode !== 'enabled') changeToDark();
  else changeToLight();
});