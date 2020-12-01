/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { htmlText } from '../helpers/htmlText';
import { levelItem } from '../constants';

export const WriteHTML = class {
  constructor() {
    this.htmlRoot = document.querySelector('.html_text');
    this.layoutInsert = document.querySelector('.layout_block');
    this.levelTextRoot = document.querySelector('.level_text');
  }

  init(level) {
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem('level_item') == undefined) {
      document.querySelector('.level_nav').insertAdjacentHTML('afterbegin', levelItem);
    } else {
      document.querySelector('.level_nav').insertAdjacentHTML('afterbegin', localStorage.getItem('level_item'));
    }
    document.querySelectorAll('.level_item').forEach((e) => {
      if (e.classList.contains('level_now')) {
        e.classList.remove('level_now');
      }
    });
    document.querySelectorAll('.level_item')[level - 1].classList.add('level_now');
    this.layoutInsert.insertAdjacentHTML('beforeend', htmlText[level].layoutCode);
    this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText[level].text);
    this.levelTextRoot.insertAdjacentHTML('afterbegin', htmlText[level].levelText);
  }

  templateHTMLCode(level) {
    document.querySelector('.level_nav').innerHTML = '';
    this.htmlRoot.textContent = '';
    this.layoutInsert.textContent = '';
    this.levelTextRoot.textContent = '';
    this.init(level);
    document.querySelectorAll('.circle').forEach((planet) => {
      planet.classList.add('animation_stop');
    });
    switch (level) {
      case 1:
        document.querySelector('.sun').classList.remove('animation_stop');
        break;
      case 2:
        document.querySelectorAll('.earth_group').forEach((planet) => {
          planet.classList.remove('animation_stop');
        });
        break;
      case 3:
        document.querySelectorAll('.satellite').forEach((planet) => {
          planet.classList.remove('animation_stop');
        });
        break;
      case 4:
        document.querySelector('.earth').classList.remove('animation_stop');
        break;
      case 5:
        document.querySelector('.mercury').classList.remove('animation_stop');
        document.querySelector('.mars').classList.remove('animation_stop');
        break;
      case 6:
        document.querySelectorAll('.giant_group').forEach((circle) => {
          circle.classList.remove('animation_stop');
        });
        break;
      case 7:
        document.querySelector('.saturn').classList.remove('animation_stop');
        break;
      case 8:
        document.querySelectorAll('.circle').forEach((planet) => {
          planet.classList.remove('animation_stop');
        });
        document.querySelectorAll('.satellite').forEach((planet) => {
          planet.classList.add('animation_stop');
        });
        document.querySelector('.sun').classList.add('animation_stop');
        document.querySelector('.earth').classList.add('animation_stop');
        break;
      case 9:
        document.querySelector('.jupiter').classList.remove('animation_stop');
        break;
      case 10:
        document.querySelector('.neptune').classList.remove('animation_stop');
        break;
      default:
        break;
    }
  }
};
