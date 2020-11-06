/* eslint-disable max-classes-per-file */
import '../css/style.css';
import '../css/style.scss';

let min = 0;
let sec = 0;

document.querySelector('.pause_btn').addEventListener('click', () => {
  const initTimer = setInterval(() => {
    sec += 1;
    if (sec >= 60) {
      min += 1;
      sec -= 60;
    }
    if (sec < 10) {
      if (min < 10) {
        document.querySelector('.time_value').innerHTML = `0${min}:0${sec}`;
      } else {
        document.querySelector('.time_value').innerHTML = `${min}:0${sec}`;
      }
    } else if (min < 10) {
      document.querySelector('.time_value').innerHTML = `0${min}:${sec}`;
    } else {
      document.querySelector('.time_value').innerHTML = `${min}:${sec}`;
    }
    if (createPuzzle.randomArray.join('') === createPuzzle.arrayBoxes.join('')) {
      clearInterval(initTimer);
    }
  }, 1000);
});

class CreatePuzzle {
  constructor() {
    this.mainBox = document.createElement('div');
    this.box = this.mainBox.querySelectorAll('.box');
    this.arrayBoxes = [];
    this.fragment = [];
    this.randomArray = [];
    this.level = 3;
    this.activeBox = 0;
  }

  init() {
    this.mainBox.classList.add('main_box');
    this.mainBox.append(...this.createBoxes());
    document.body.append(this.mainBox);
  }

  getRandom() {
    this.max = this.level ** 2;
    this.min = 0;
    this.randomNum = Math.floor(Math.random() * this.max + this.min);
    return this.randomNum;
  }

  getDefaultArray() {
    this.arrayBoxes = [];
    for (let i = 1; i <= this.level ** 2; i++) {
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
    for (let i = 0; i < this.level ** 3; i++) {
      this.randomArray.push(this.getRandom());
    }
    this.randomArray = [...new Set(this.randomArray.concat(this.arrayBoxes))];
    return this.randomArray;
  }

  createBoxes() {
    this.getDefaultArray();
    this.getRandomArray();

    for (let i = 0; i < this.randomArray.length; i++) {
      if (this.randomArray[i] === 0) {
        this.boxElement = document.createElement('div');
        this.boxElement.classList.add('box', 'box_empty');
        this.boxElement.setAttribute('data-num', this.randomArray[i]);
      } else {
        this.boxElement = document.createElement('div');
        this.boxElement.classList.add('box');
        this.boxElement.textContent = this.randomArray[i];
        this.boxElement.setAttribute('data-num', this.randomArray[i]);
      }
      this.fragment.push(this.boxElement);
    }
    if (this.randomArray.join('') === this.arrayBoxes.join('')) {
      this.fragment = [];
      this.init();
    }
    return this.fragment;
  }
}

const createPuzzle = new CreatePuzzle();

class Move {
  constructor() {
    this.activeBox = 0;
  }

  // eslint-disable-next-line consistent-return
  activeBoxes(event) {
    if (event.target.closest('.box')) {
      this.activeBox = event.target.closest('.box').dataset.num - 0;
      for (let i = 0; i < createPuzzle.randomArray.length; i++) {
        if (createPuzzle.randomArray[i] === this.activeBox) {
          this.activeBox = i;
          return this.activeBox;
        }
      }
    }
  }

  moveBoxes() {
    this.numBufferBox = 0;
    if (createPuzzle.randomArray[this.activeBox + 1] === 0
      && (this.activeBox + 1) % createPuzzle.level !== 0) {
      document.querySelectorAll('.box')[this.activeBox + 1].after(document.querySelectorAll('.box')[this.activeBox]);
      this.numBufferBox = createPuzzle.randomArray[this.activeBox];
      createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox + 1];
      createPuzzle.randomArray[this.activeBox + 1] = this.numBufferBox;
      this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
    } else if (createPuzzle.randomArray[this.activeBox - 1] === 0
      && (this.activeBox) % createPuzzle.level !== 0) {
      document.querySelectorAll('.box')[this.activeBox - 1].before(document.querySelectorAll('.box')[this.activeBox]);
      this.numBufferBox = createPuzzle.randomArray[this.activeBox];
      createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox - 1];
      createPuzzle.randomArray[this.activeBox - 1] = this.numBufferBox;
      this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
    } else if (createPuzzle.randomArray[this.activeBox + createPuzzle.level] === 0) {
      this.numBufferBox = this.activeBox;
      document.querySelectorAll('.box')[this.activeBox + createPuzzle.level].before(document.querySelectorAll('.box')[this.activeBox]);
      document.querySelectorAll('.box')[this.numBufferBox].before(document.querySelectorAll('.box')[this.numBufferBox + createPuzzle.level]);
      this.numBufferBox = createPuzzle.randomArray[this.activeBox];
      createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox
        + createPuzzle.level];
      createPuzzle.randomArray[this.activeBox + createPuzzle.level] = this.numBufferBox;
      this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
    } else if (createPuzzle.randomArray[this.activeBox - createPuzzle.level] === 0) {
      this.numBufferBox = this.activeBox;
      document.querySelectorAll('.box')[this.activeBox - createPuzzle.level].after(document.querySelectorAll('.box')[this.activeBox]);
      document.querySelectorAll('.box')[this.numBufferBox].after(document.querySelectorAll('.box')[this.numBufferBox - createPuzzle.level]);
      this.numBufferBox = createPuzzle.randomArray[this.activeBox];
      createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox
        - createPuzzle.level];
      createPuzzle.randomArray[this.activeBox - createPuzzle.level] = this.numBufferBox;
      this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
    }
    document.querySelector('.move_value').textContent = this.moveValue;
  }
}

const move = new Move();

document.querySelector('body').addEventListener('mousedown', move.activeBoxes);
document.querySelector('body').addEventListener('mouseup', move.moveBoxes);

window.addEventListener('DOMContentLoaded', () => {
  createPuzzle.init();
});
