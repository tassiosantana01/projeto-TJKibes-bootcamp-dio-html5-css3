"use strict";

function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  var lightMode = 'Light Mode';
  var darkMode = 'Dark Mode';

  if (h1.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + "ON";
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + "ON";
}

var darkModeClass = 'dark-mode';
var button = document.getElementById('mode-selector');
var h1 = document.getElementById('page-title');
var body = document.getElementsByTagName('body')[0];
var footer = document.getElementsByTagName('footer')[0];
button.addEventListener('click', changeMode);