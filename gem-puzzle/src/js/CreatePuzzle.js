import { settingPuzzle } from './SettingPuzzle';
import { rulesPuzzle } from './Rules';

class CreatePuzzle {
  constructor() {
    this.mainBox = document.createElement('div');
    this.navBox = document.createElement('div');
    this.main = document.createElement('main');
    this.box = this.mainBox.querySelectorAll('.box');
    this.ul = document.createElement('ul');
    this.liArray = ['Start Game', 'New Game', 'Best Scores', 'Rules', 'Settings'];
    this.liValue = document.querySelector('li');
    this.headerArray = ['time_block', 'move_block', 'pause_block'];
    this.header = document.createElement('header');
    this.headerDivInnerHTML = ['<p class="time_text">Time: <span class="time_value">00:00</span></p>', '<p class="move_text">Move: <span class="move_value">0</span></p>'];
    this.arrayBoxes = [];
    this.fragment = [];
    this.randomArray = [];
    this.level = 0;
    this.activeBox = 0;
  }

  init() {
    if (localStorage.getItem('puzzle') !== null) {
      this.level = Math.sqrt(localStorage.getItem('puzzle').split(',').length);
    } else {
      this.level = 4;
    }
    this.mainBox.classList.add('main_box');
    this.navBox.classList.add('menu_game');
    this.ul.classList.add('menu_game_items');
    this.mainBox.style.gridTemplateColumns = `repeat(${this.level}, 1fr)`;

    for (let i = 0; i < this.liArray.length; i += 1) {
      this.li = document.createElement('li');
      this.li.textContent = this.liArray[i];
      this.ul.append(this.li);
    }

    for (let i = 0; i < this.headerDivInnerHTML.length; i += 1) {
      this.headerDiv = document.createElement('div');
      this.headerDiv.classList.add(this.headerArray[i]);
      this.headerDiv.innerHTML = this.headerDivInnerHTML[i];
      this.header.append(this.headerDiv);
    }

    this.navBox.append(settingPuzzle.init(), rulesPuzzle.init(), this.ul);
    this.mainBox.append(...this.createBoxes());
    this.main.append(this.mainBox, this.navBox);
    document.body.append(this.header, this.main);
  }

  getRandom() {
    this.max = this.level ** 2;
    this.min = 0;
    this.randomNum = Math.floor(Math.random() * this.max + this.min);
    return this.randomNum;
  }

  getDefaultArray() {
    this.arrayBoxes = [];
    for (let i = 1; i <= this.level ** 2; i += 1) {
      if (i === this.level ** 2) {
        this.arrayBoxes.push(0);
      } else {
        this.arrayBoxes.push(i);
      }
    }
    return this.arrayBoxes;
  }

  getRandomArray() {
    this.randomArray = [];
    for (let i = 0; i < this.level ** 3; i += 1) {
      this.randomArray.push(this.getRandom());
    }
    this.randomArray = [...new Set(this.randomArray.concat(this.arrayBoxes))];
    return this.randomArray;
  }

  createBoxes() {
    this.fragment = [];
    this.solutionNumber = 0;
    this.mainBox.innerHTML = '';
    this.getDefaultArray();
    this.getRandomArray();
    if (localStorage.getItem('puzzle') !== null) {
      this.randomArray = localStorage.getItem('puzzle').split(',').map((e) => Number(e));
    } else {
      this.getRandomArray();
    }

    for (let i = 0; i < this.randomArray.length; i += 1) {
      if (this.randomArray[i] === 0) {
        this.boxElement = document.createElement('div');
        this.boxElement.classList.add('box', 'box_empty', 'box_start');
        this.boxElement.setAttribute('data-num', this.randomArray[i]);
      } else {
        this.boxElement = document.createElement('div');
        this.boxElement.classList.add('box', 'box_start');
        this.boxElement.textContent = this.randomArray[i];
        this.boxElement.setAttribute('data-num', this.randomArray[i]);
        this.boxElement.setAttribute('draggable', true);
      }
      this.fragment.push(this.boxElement);
    }

    for (let i = 0; i < this.randomArray.length; i += 1) {
      for (let j = i + 1; j < this.randomArray.length; j += 1) {
        if (this.randomArray[i] > this.randomArray[j] && this.randomArray[j] !== 0) {
          this.solutionNumber += 1;
        }
      }
    }

    if (this.randomArray.join('') === this.arrayBoxes.join('') || (this.solutionNumber + Math.trunc(this.randomArray.findIndex((el) => el === 0) / this.level + 1)) % 2 !== 0) {
      this.fragment = [];
      this.mainBox.append(...this.createBoxes());
    }

    localStorage.setItem('puzzle', createPuzzle.randomArray);
    this.mainBox.classList.add('main_box_start');
    return this.fragment;
  }
}

const createPuzzle = new CreatePuzzle();

export { createPuzzle };
