import menuTemplate from '../templates/menu-item.hbs';
import menuObject from '../menu.json';

const menu = document.querySelector('.js-menu');
const menuItems = menuTemplate(menuObject);

menu.insertAdjacentHTML('beforeend', menuItems);