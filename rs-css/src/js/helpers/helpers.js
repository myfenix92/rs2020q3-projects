/* eslint-disable import/prefer-default-export */
import {
  levelItem, INPUT, inputAnswer, UFO_ITEM, createLevel,
} from '../constants/index';
import { htmlText, setLocalStorageData } from './index';

export const HelpersClass = class {
  chooseLevelNav(event) {
    this.chooseLevel = +event.target.dataset.level;
    if (this.chooseLevel) {
      INPUT.value = '';
      inputAnswer.level = this.chooseLevel;
      setLocalStorageData('level', inputAnswer.level);
      setLocalStorageData('level_item', document.querySelector('.level_nav').innerHTML);
      createLevel.templateHTMLCode(inputAnswer.level);
    }
    if (event.target.tagName === 'LI') {
      document.getElementById('overlay').classList.remove('filter_menu');
      document.getElementById('menu__toggle').checked = false;
    }
  }

  static menuBurger() {
    if (document.getElementById('overlay').classList.contains('filter_menu')) {
      document.getElementById('overlay').classList.remove('filter_menu');
    } else if (!document.getElementById('overlay').classList.contains('filter_menu')) {
      document.getElementById('overlay').classList.add('filter_menu');
    }
  }

  static overlayClick() {
    document.getElementById('menu__toggle').checked = false;
    document.getElementById('overlay').classList.remove('filter_menu');
  }

  winText() {
    this.winText = document.createElement('p');
    this.winText.classList.add('win_text');
    if (inputAnswer.rightAnswers === 10) {
      this.winText.textContent = `Поздравляю! Вы правильно выбрали все селекторы!`;
    } else {
      this.winText.textContent = `Молодец! Вы самостоятельно решили ${inputAnswer.rightAnswers} из 10 уровней.
      Нужно стараться лучше. Чтобы выиграть нужно начать заново.`;
    }
    document.querySelector('.layout_block').textContent = '';
    document.querySelector('.layout_block').append(this.winText);
    setLocalStorageData('level', 1);
    setLocalStorageData('level_item', levelItem);
  }

  static helpAnswer() {
    document.getElementById('overlay').classList.remove('filter_menu');
    document.getElementById('menu__toggle').checked = false;
    const text = htmlText[`level_${inputAnswer.level}`].selector;
    // https://myrusakov.ru/js-typing-effect.html
    let line = 0;
    let count = 0;
    let result = '';
    function typeLine() {
      const interval = setTimeout(
        () => {
          result += text[line][count];
          INPUT.value = `${result}`;

          count += 1;
          if (count >= text[line].length) {
            count = 0;
            line += 1;
            if (line === text.length) {
              clearTimeout(interval);
              INPUT.value = result;
              return true;
            }
          }
          typeLine();
        }, getRandomInt(getRandomInt(250 * 1.5)),
      );
    }
    typeLine();

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    INPUT.focus();
    document.querySelectorAll('.level_item')[inputAnswer.level - 1].classList.add('wrong_answer');
    setLocalStorageData('level_item', document.querySelector('.level_nav').innerHTML);
  }

  static resetGame() {
    document.getElementById('overlay').classList.remove('filter_menu');
    document.getElementById('menu__toggle').checked = false;
    inputAnswer.level = 1;
    INPUT.value = '';
    document.querySelectorAll('.level_item').forEach((e) => {
      e.classList.remove('right_answer');
      e.classList.remove('wrong_answer');
    });
    setLocalStorageData('level', inputAnswer.level);
    setLocalStorageData('level_item', levelItem);
    createLevel.templateHTMLCode(inputAnswer.level);
  }

  static layoutMouseOver(event) {
    let isTrue = true;
    const tagName = event.target.classList[1];
    document.querySelectorAll('.html_text>div>*').forEach((e) => {
      if (e.textContent.includes(tagName)) {
        e.classList.add('color_hover');
        document.querySelector('.title').textContent = e.textContent;
        isTrue = false;
      }
    });

    document.querySelectorAll('.html_text>div').forEach((e) => {
      if (e.textContent.includes(tagName) && isTrue) {
        e.classList.add('color_hover');
        const numTitleTag = +e.textContent.indexOf('>');
        const titleTag = `${e.textContent.slice(0, numTitleTag).replace('/', '')}/>`;
        document.querySelector('.title').textContent = titleTag;
        e.querySelectorAll('div').forEach((el) => {
          el.classList.add('color_hover');
        });
      }
    });

    if (event.target.classList.contains('circle')) {
      event.target.classList.add('circle_hover');
      document.querySelector('.title').classList.remove('hide');
      document.querySelector('.title').classList.add('show');
      document.querySelector('.title').style.top = `${event.target.offsetTop + event.target.offsetHeight + document.querySelector('.layout_block').offsetTop + (document.querySelector('.layout_block').offsetTop * 0.3)}px`;
      document.querySelector('.title').style.left = `${event.target.offsetLeft + document.querySelector('.layout_block').offsetLeft + ((event.target.offsetWidth - document.querySelector('.title').offsetWidth) / 2)}px`;
    }
  }

  static layoutMouseOut(event) {
    document.querySelectorAll('.color_hover').forEach((e) => {
      e.classList.remove('color_hover');
    });
    if (event.target.classList.contains('circle')) {
      event.target.classList.remove('circle_hover');
    }
    document.querySelector('.title').classList.add('hide');
    document.querySelector('.title').classList.remove('show');
  }

  static htmlBlockMouseOver(event) {
    const numTitleTag = +event.target.textContent.indexOf('>');
    const titleTag = `${event.target.textContent.slice(0, numTitleTag).replace('/', '')}/>`;
    const numQuotesClass = event.target.closest('div').textContent.indexOf('"');
    const word = event.target.closest('div').textContent.substring(numQuotesClass + 1, numQuotesClass + 4);
    event.target.classList.add('color_hover');
    if (word === 'gia') {
      document.querySelectorAll('.giant_group').forEach((e) => {
        e.classList.add('circle_hover');
      });
    }
    document.querySelectorAll('.html_text>div').forEach((e) => {
      e.querySelectorAll('div').forEach((el) => {
        if (e.classList.contains('color_hover')) {
          el.classList.add('color_hover');
        }
      });
    });

    document.querySelectorAll('.layout_block>div').forEach((e) => {
      if (e.classList[1].includes(word)) {
        e.classList.add('circle_hover');
        document.querySelector('.title').textContent = titleTag;
        document.querySelector('.title').classList.remove('hide');
        document.querySelector('.title').classList.add('show');
        document.querySelector('.title').style.top = `${e.offsetTop + e.offsetHeight + document.querySelector('.layout_block').offsetTop + (document.querySelector('.layout_block').offsetTop * 0.3)}px`;
        document.querySelector('.title').style.left = `${e.offsetLeft + document.querySelector('.layout_block').offsetLeft + ((e.offsetWidth - document.querySelector('.title').offsetWidth) / 2)}px`;
      }
    });
  }

  static htmlBlockMouseOut() {
    document.querySelectorAll('.color_hover').forEach((e) => {
      e.classList.remove('color_hover');
    });
    document.querySelectorAll('.layout_block>div').forEach((e) => {
      e.classList.remove('circle_hover');
    });
    document.querySelector('.title').classList.add('hide');
    document.querySelector('.title').classList.remove('show');
  }

  static clickEnterBtn(event) {
    INPUT.focus();
    if (event.code === 'Enter' || event.target.textContent === 'Enter') {
      inputAnswer.clickEnter();
      setTimeout(() => {
        if (UFO_ITEM.classList.contains('ufo_win')
        || UFO_ITEM.classList.contains('ufo_error')) {
          UFO_ITEM.classList.remove('ufo_win');
          UFO_ITEM.classList.remove('ufo_error');
        }
      }, 1000);
    }
  }

  static classesAllToggle(className) {
    return document.querySelectorAll(className).forEach((planet) => {
      planet.classList.toggle('animation_stop');
    });
  }

  static classToggle(className) {
    return document.querySelector(className).classList.toggle('animation_stop');
  }
};
