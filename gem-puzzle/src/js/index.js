/* eslint-disable max-classes-per-file */
import '../css/style.css';
import '../css/style.scss';

class CreatePuzzle {
  constructor() {
    this.mainBox = document.createElement('div');
    this.navBox = document.createElement('div');
    this.main = document.createElement('main');
    this.box = this.mainBox.querySelectorAll('.box');
    this.overlay = document.createElement('div');
    this.ul = document.createElement('ul');
    this.liArray = ['New Game', 'Saved Game', 'Best Scores', 'Rules', 'Settings'];
    this.liValue = document.querySelector('li');
    this.headerArray = ['time_block', 'move_block', 'pause_block'];
    this.header = document.createElement('header');
    this.btn = document.createElement('button');
    this.btnHeader = document.querySelector('.pause_btn');
    this.headerDivInnerHTML = ['<p class="time_text">Time: <span class="time_value">00:00</span></p>', '<p class="move_text">Move: <span class="move_value">0</span></p>'];
    this.arrayBoxes = [];
    this.fragment = [];
    this.randomArray = [];
    this.level = 4;
    this.activeBox = 0;
  }

  init() {
    this.mainBox.classList.add('main_box');
    this.navBox.classList.add('menu_game');
    this.ul.classList.add('menu_game_items');
    this.btn.classList.add('pause_btn');
    this.overlay.classList.add('overlay');
    for (let i = 0; i < 5; i += 1) {
      this.li = document.createElement('li');
      this.li.textContent = this.liArray[i];
      this.ul.append(this.li);
    }

    for (let i = 0; i < 2; i += 1) {
      this.headerDiv = document.createElement('div');
      this.headerDiv.classList.add(this.headerArray[i]);
      this.headerDiv.innerHTML = this.headerDivInnerHTML[i];
      this.header.append(this.headerDiv);
    }
    this.btn.textContent = 'Pause';
    this.header.append(this.btn);
    this.navBox.append(this.ul);
    this.mainBox.append(...this.createBoxes());
    this.main.append(this.overlay, this.mainBox, this.navBox);
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
    this.mainBox.innerHTML = '';
    this.getDefaultArray();
    this.getRandomArray();

    for (let i = 0; i < this.randomArray.length; i += 1) {
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
      for (let i = 0; i < createPuzzle.randomArray.length; i += 1) {
        if (createPuzzle.randomArray[i] === this.activeBox) {
          this.activeBox = i;
          return this.activeBox;
        }
      }
    }
  }

  moveBoxes() {
    if (checkEmptyBox) {
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
      if (this.moveValue === undefined) {
        document.querySelector('.move_value').textContent = 0;
      } else {
        document.querySelector('.move_value').textContent = this.moveValue;
      }
    }
  }
}

let checkEmptyBox = true;
function dragDrop(event) {
  if (event.target.className !== 'box box_empty') {
    move.activeBoxes(event);
    const coorEmptyX = document.querySelector('.box_empty').getBoundingClientRect().left;
    const coorEmptyY = document.querySelector('.box_empty').getBoundingClientRect().top;
    const allBoxes = document.querySelectorAll('.box');
    const boxOn = allBoxes[move.activeBox];
    const boxOnCopy = boxOn.cloneNode(true);
    boxOnCopy.classList.add('box_copy');
    const shiftX = event.clientX - boxOn.getBoundingClientRect().left;
    const shiftY = event.clientY - boxOn.getBoundingClientRect().top;
    const boxWidth = boxOn.getBoundingClientRect().width / 2;
    document.querySelector('.main_box').append(boxOnCopy);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      boxOnCopy.style.left = `${pageX - shiftX}px`;
      boxOnCopy.style.top = `${pageY - shiftY}px`;
      if (pageX - shiftX > coorEmptyX - boxWidth && pageX - shiftX < coorEmptyX + boxWidth
      && pageY - shiftY > coorEmptyY - boxWidth && pageY - shiftY < coorEmptyY + boxWidth) {
        checkEmptyBox = true;
      } else {
        checkEmptyBox = false;
      }
      if (boxOn.getBoundingClientRect().left === (pageX - shiftX)
    && boxOnCopy.getBoundingClientRect().top === pageY - shiftY) {
        checkEmptyBox = true;
      }
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    function removeEvent() {
      document.querySelector('.main_box').removeChild(boxOnCopy);
      boxOn.classList.remove('box_empty');
      document.removeEventListener('mousemove', onMouseMove);
      boxOnCopy.onmouseup = null;
    }

    boxOnCopy.addEventListener('mouseup', removeEvent);
    boxOn.classList.add('box_empty');
    boxOnCopy.ondragstart = function () {
      return false;
    };
  }
}

const move = new Move();
let initTimer;
function game(event) {
  if (event.target.tagName === 'LI' && event.target.textContent === 'New Game') {
    clearInterval(initTimer);
    sec = 0;
    min = 0;
    document.querySelector('.time_value').textContent = '00:00';
    document.querySelector('.move_value').textContent = 0;
    createPuzzle.mainBox.append(...createPuzzle.createBoxes());
    createPuzzle.btn.style.visibility = 'visible';
    createPuzzle.mainBox.style.pointerEvents = 'auto';
    createPuzzle.overlay.style.display = 'none';
    initTimer = setInterval(() => {
      sec += 1;
      if (sec >= 60) {
        min += 1;
        sec -= 60;
      }
      if (sec < 10) {
        if (min < 10) {
          document.querySelector('.time_value').textContent = `0${min}:0${sec}`;
        } else {
          document.querySelector('.time_value').textContent = `${min}:0${sec}`;
        }
      } else if (min < 10) {
        document.querySelector('.time_value').textContent = `0${min}:${sec}`;
      } else {
        document.querySelector('.time_value').textContent = `${min}:${sec}`;
      }
      if (createPuzzle.randomArray.join('') === createPuzzle.arrayBoxes.join('')) {
        clearInterval(initTimer);
      }
    }, 1000);
  }
}

createPuzzle.mainBox.addEventListener('mousedown', move.activeBoxes);
createPuzzle.mainBox.addEventListener('mouseup', move.moveBoxes);
createPuzzle.mainBox.addEventListener('mousedown', dragDrop);
createPuzzle.ul.addEventListener('click', game);

let min = 0;
let sec = 0;

createPuzzle.btn.addEventListener('click', () => {
  createPuzzle.btn.classList.toggle('pause_btn_click');
  if (createPuzzle.btn.textContent === 'Pause') {
    clearInterval(initTimer);
    createPuzzle.btn.textContent = 'Resume Game';
    createPuzzle.mainBox.style.pointerEvents = 'none';
    createPuzzle.overlay.style.display = 'block';
  } else
  if (createPuzzle.btn.textContent === 'Resume Game') {
    createPuzzle.btn.textContent = 'Pause';
    createPuzzle.mainBox.style.pointerEvents = 'auto';
    createPuzzle.overlay.style.display = 'none';
    initTimer = setInterval(() => {
      sec += 1;
      if (sec >= 60) {
        min += 1;
        sec -= 60;
      }
      if (sec < 10) {
        if (min < 10) {
          document.querySelector('.time_value').textContent = `0${min}:0${sec}`;
        } else {
          document.querySelector('.time_value').textContent = `${min}:0${sec}`;
        }
      } else if (min < 10) {
        document.querySelector('.time_value').textContent = `0${min}:${sec}`;
      } else {
        document.querySelector('.time_value').textContent = `${min}:${sec}`;
      }
      if (createPuzzle.randomArray.join('') === createPuzzle.arrayBoxes.join('')) {
        clearInterval(initTimer);
      }
    }, 1000);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  createPuzzle.init();
});
