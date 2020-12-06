/* eslint-disable import/prefer-default-export */
import { levelItem } from '../constants/index';
import { htmlText, getLocalStorageData, HelpersClass } from '../helpers/index';

export const CreateLevel = class {
  constructor() {
    this.htmlRoot = document.querySelector('.html_text');
    this.layoutInsert = document.querySelector('.layout_block');
    this.levelTextRoot = document.querySelector('.level_text');
  }

  init(level) {
    // eslint-disable-next-line eqeqeq
    if (getLocalStorageData('level') == undefined) {
      document.querySelector('.level_nav').insertAdjacentHTML('afterbegin', levelItem);
    } else {
      document.querySelector('.level_nav').insertAdjacentHTML('afterbegin', getLocalStorageData('level_item'));
    }
    document.querySelectorAll('.level_item').forEach((e) => {
      if (e.classList.contains('level_now')) {
        e.classList.remove('level_now');
      }
    });
    document.querySelectorAll('.level_item').forEach((e) => {
      if (e.classList.contains('wrong_answer')) {
        e.classList.remove('right_answer');
      }
    });
    document.querySelectorAll('.level_item')[level - 1].classList.add('level_now');
    this.layoutInsert.insertAdjacentHTML('beforeend', htmlText[`level_${level}`].layoutCode);
    this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText[`level_${level}`].text);
    this.levelTextRoot.insertAdjacentHTML('afterbegin', htmlText[`level_${level}`].levelText);
    document.querySelector('.facts_text').insertAdjacentHTML('afterbegin', htmlText[`level_${level}`].factsText);
  }

  templateHTMLCode(level) {
    document.querySelector('.level_nav').innerHTML = '';
    this.htmlRoot.textContent = '';
    this.layoutInsert.textContent = '';
    this.levelTextRoot.textContent = '';
    document.querySelector('.facts_text').textContent = '';
    this.init(level);
    document.querySelectorAll('.circle').forEach((planet) => {
      planet.classList.add('animation_stop');
    });
    switch (level) {
      case 1:
        HelpersClass.classToggle('.sun');
        break;
      case 2:
        HelpersClass.classesAllToggle('.earth_group');
        break;
      case 3:
        HelpersClass.classesAllToggle('.satellite');
        break;
      case 4:
        HelpersClass.classToggle('.mercury');
        HelpersClass.classToggle('.mars');
        break;
      case 5:
        HelpersClass.classToggle('.earth');
        break;
      case 6:
        HelpersClass.classesAllToggle('.giant_group');
        break;
      case 7:
        HelpersClass.classToggle('.saturn');
        break;
      case 8:
        HelpersClass.classesAllToggle('.circle');
        HelpersClass.classesAllToggle('.satellite');
        HelpersClass.classToggle('.sun');
        HelpersClass.classToggle('.earth');
        break;
      case 9:
        HelpersClass.classToggle('.jupiter');
        break;
      case 10:
        HelpersClass.classToggle('.neptune');
        break;
      default:
        break;
    }
  }
};
