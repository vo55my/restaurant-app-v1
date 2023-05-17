import 'regenerator-runtime';
import '../styles/main.scss';
import './main.js'
import './restaurant.js';
import './food.js';

const menuBtn = document.querySelector('#menu');
const menuDrawer = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', (e) => {
  menuDrawer.classList.toggle('open');
  e.stopPropagation();
});

mainElement.addEventListener('click', (e) => {
  menuDrawer.classList.remove('open');
  e.stopPropagation();
});

function scrollDown() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) nav.classList.add('scroll');
  else nav.classList.remove('scroll');
}

window.onscroll = () => scrollDown();