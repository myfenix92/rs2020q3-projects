/* eslint-disable import/prefer-default-export */
import {
  selectorAnswer, createLevel, helpersClass, htmlTextLength,
} from '../constants/index';
import { getLocalStorageData, setLocalStorageData } from '../helpers/index';

export const InputAnswer = class {
  constructor() {
    this.isAnswer = true;
    this.inputValue = document.querySelector('input');
    this.levelBuffer = '';
    this.level = getLocalStorageData('level') || 1;
    this.rightAnswers = 0;
  }

  checkInputAnswer() {
    this.levelBuffer = selectorAnswer[this.inputValue.value] + 1;
  }

  clickEnter() {
    this.isAnswer = true;
    document.querySelectorAll('.level_item')[this.level - 1].classList.add('right_answer');
    this.checkInputAnswer();
    if (this.isAnswer && this.level + 1 === this.levelBuffer) {
      this.level = this.levelBuffer;
      setLocalStorageData('level', this.level);
      setLocalStorageData('level_item', document.querySelector('.level_nav').innerHTML);
      if (this.level !== htmlTextLength) {
        createLevel.templateHTMLCode(this.level);
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
        helpersClass.winText();
      }
      document.querySelector('.ufo_answer').classList.add('ufo_win');
    } else if (this.isAnswer && this.level + 1 !== this.levelBuffer) {
      this.isAnswer = false;
      document.querySelector('.ufo_answer').classList.add('ufo_error');
      document.querySelectorAll('.level_item')[this.level - 1].classList.remove('right_answer');
    }
    this.inputValue.value = '';
  }
};
