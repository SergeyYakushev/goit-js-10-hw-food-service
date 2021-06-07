import cardTemplate from '../templates/cards.hbs'
import cards from './menu.json'
import './styles.css';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const markUp = cardTemplate(cards);

const menuItemsEl = document.querySelector('.js-menu');

menuItemsEl.insertAdjacentHTML('beforeend', markUp);


const body = document.querySelector('body');
const themeSwitcher = document.querySelector(".theme-switch__toggle");



themeSwitcher.addEventListener('change', clickHandler);
themeSwitcher.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);


function clickHandler(e) {

    if (themeSwitcher.checked) {
        setDarkTheme()
    } else {
        setLightTheme()
    }
}

function setLocalStorage(e) {
    if (themeSwitcher.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function getThemeFromLocalStorage() {
    const themeInLocalStrg = localStorage.getItem('theme');
    if (themeInLocalStrg === Theme.DARK) {
        body.classList.add(Theme.DARK);
        themeSwitcher.checked = true;
    }
}

function setDarkTheme() {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
}