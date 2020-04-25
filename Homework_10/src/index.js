'use strict';

import items from './menu.json';
import menuItem from './templates/menu-item.hbs';

import './styles.css';

const refs = {
  body: document.querySelector('body'),
  switchButton: document.querySelector('.js-switch-input'),
  menuList: document.querySelector('.js-menu'),
};

// Зміна теми
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const persistedTheme = localStorage.getItem('theme');

if (persistedTheme === Theme.DARK) {
  refs.body.classList.add('dark-theme');
  refs.switchButton.setAttribute('checked', 'true');
} else {
  refs.body.classList.add('light-theme');
}

refs.switchButton.addEventListener('change', e => {
  if (refs.body.classList.contains('dark-theme') === true) {
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  }
});

// Створення елементів меню (Шаблонізація)

buildMenu(items);

function buildMenu(items) {
  const markup = items.map(item => menuItem(item)).join('');

  refs.menuList.insertAdjacentHTML('beforeend', markup);
}
