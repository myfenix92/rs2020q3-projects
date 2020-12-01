/* eslint-disable import/prefer-default-export */
import { htmlText } from '../helpers/htmlText';
import { writeHTML, levelItem } from '../constants';

export const InputAnswer = class {
  constructor() {
    this.isAnswer = true;
    this.inputValue = document.querySelector('input');
    this.levelBuffer = '';
    this.level = +localStorage.getItem('level') || 1;
    this.rightAnswers = 0;
  }

  checkInputAnswer() {
    switch (this.inputValue.value) {
      case '#sun':
        this.levelBuffer = htmlText[2].id;
        break;
      case 'planet':
        this.levelBuffer = htmlText[3].id;
        break;
      case 'planet satellite':
        this.levelBuffer = htmlText[4].id;
        break;
      case '.earth:visited':
        this.levelBuffer = htmlText[5].id;
        break;
      case '.small':
        this.levelBuffer = htmlText[6].id;
        break;
      case '.giant_group > planet':
      case '.giant_group>planet':
        this.levelBuffer = htmlText[7].id;
        break;
      case 'planet[rings]':
        this.levelBuffer = htmlText[8].id;
        break;
      case 'planet:not(.inhabitable)':
        this.levelBuffer = htmlText[9].id;
        break;
      case 'planet:nth-child(5)':
        this.levelBuffer = htmlText[10].id;
        break;
      case 'planet:last-child':
        this.levelBuffer = 11;
        document.querySelector('.level_now').classList.remove('level_now');
        break;
      default:
        this.isAnswer = false;
        document.querySelector('.ufo_answer').classList.add('ufo_error');
        document.querySelectorAll('.level_item')[this.level - 1].classList.remove('right_answer');
        this.inputValue.value = '';
        break;
    }
  }

  clickEnter() {
    this.isAnswer = true;
    this.winText = document.createElement('p');
    this.winText.classList.add('win_text');
    document.querySelectorAll('.level_item')[this.level - 1].classList.add('right_answer');
    this.checkInputAnswer();
    if (this.isAnswer && this.level + 1 === this.levelBuffer) {
      this.level = this.levelBuffer;
      localStorage.setItem('level', this.level);
      localStorage.setItem('level_item', document.querySelector('.level_nav').innerHTML);
      if (this.level !== 11) {
        writeHTML.templateHTMLCode(this.level);
      } else {
        this.rightAnswers = 0;
        document.querySelectorAll('.level_item').forEach((e) => {
          if (e.classList.contains('wrong_answer')) {
            e.classList.remove('right_answer');
          }
        });
        document.querySelectorAll('.level_item').forEach((e) => {
          if (e.classList.contains('right_answer')) {
            this.rightAnswers += 1;
          }
        });
        if (this.rightAnswers === 10) {
          this.winText.textContent = `Поздравляю! Вы правильно выбрали все селекторы!`;
        } else {
          this.winText.textContent = `Молодец! Вы самостоятельно решили ${this.rightAnswers} из 10 уровней.
          Нужно стараться лучше. Чтобы выиграть нужно начать заново.`;
        }
        document.querySelector('.layout_block').textContent = '';
        document.querySelector('.layout_block').append(this.winText);
        localStorage.setItem('level', 1);
        localStorage.setItem('level_item', levelItem);
      }
      document.querySelector('.ufo_answer').classList.add('ufo_win');
    } else if (this.isAnswer && this.level + 1 !== this.levelBuffer) {
      this.isAnswer = false;
      document.querySelector('.ufo_answer').classList.add('ufo_error');
    }
    document.querySelectorAll('.level_item').forEach((e) => {
      if (e.classList.contains('wrong_answer')) {
        e.classList.remove('right_answer');
      }
    });
    this.inputValue.value = '';
  }
};
