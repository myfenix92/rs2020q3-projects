/* eslint-disable max-classes-per-file */
import '../css/style.css';
import '../css/style.scss';

class CreatePuzzle {
  constructor() {
    this.mainBox = document.createElement('div');
    this.navBox = document.createElement('div');
    this.chooseFieldBox = document.createElement('div');
    this.chooseField = document.createElement('p');
    this.chooseFieldSelect = document.createElement('select');
    this.chooseFieldBtn = document.createElement('btn');
    this.main = document.createElement('main');
    this.box = this.mainBox.querySelectorAll('.box');
    this.ul = document.createElement('ul');
    this.liArray = ['Start Game', 'New Game', 'Best Scores', 'Rules', 'Settings'];
    this.optionArray = ['threeField', 'fourField', 'fiveField', 'sixField', 'sevenField', 'eightField'];
    this.liValue = document.querySelector('li');
    this.headerArray = ['time_block', 'move_block', 'pause_block'];
    this.header = document.createElement('header');
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
    this.chooseFieldBox.classList.add('level', 'hidden');
    this.chooseFieldBtn.classList.add('chooseField');
    this.chooseFieldBtn.textContent = 'OK';
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

    for (let i = 0; i < this.optionArray.length; i += 1) {
      this.chooseFieldOption = document.createElement('option');
      this.chooseFieldOption.setAttribute('value', i + 3);
      this.chooseFieldOption.setAttribute('id', this.optionArray[i]);
      this.chooseFieldOption.textContent = `${i + 3}x${i + 3}`;
      this.chooseFieldSelect.append(this.chooseFieldOption);
    }

    this.chooseField.append(this.chooseFieldSelect);
    this.chooseFieldBox.append(this.chooseField, this.chooseFieldBtn);
    this.navBox.append(this.chooseFieldBox, this.ul);
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
    this.mainBox.innerHTML = '';
    this.getDefaultArray();
    this.getRandomArray();

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
    if (this.randomArray.join('') === this.arrayBoxes.join('')) {
      this.fragment = [];
      this.init();
    }
    this.mainBox.classList.add('main_box_start');
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
    this.knockBox = new Audio();
    this.knockBox.src = 'audio/knock.mp3';
    if (checkEmptyBox) {
      this.numBufferBox = 0;
      if (createPuzzle.randomArray[this.activeBox + 1] === 0
      && (this.activeBox + 1) % createPuzzle.level !== 0) {
        document.querySelectorAll('.box')[this.activeBox + 1].after(document.querySelectorAll('.box')[this.activeBox]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox + 1];
        createPuzzle.randomArray[this.activeBox + 1] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
      } else if (createPuzzle.randomArray[this.activeBox - 1] === 0
      && (this.activeBox) % createPuzzle.level !== 0) {
        document.querySelectorAll('.box')[this.activeBox - 1].before(document.querySelectorAll('.box')[this.activeBox]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox - 1];
        createPuzzle.randomArray[this.activeBox - 1] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
      } else if (createPuzzle.randomArray[this.activeBox + createPuzzle.level] === 0) {
        this.numBufferBox = this.activeBox;
        document.querySelectorAll('.box')[this.activeBox + createPuzzle.level].before(document.querySelectorAll('.box')[this.activeBox]);
        document.querySelectorAll('.box')[this.numBufferBox].before(document.querySelectorAll('.box')[this.numBufferBox + createPuzzle.level]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox
        + createPuzzle.level];
        createPuzzle.randomArray[this.activeBox + createPuzzle.level] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
      } else if (createPuzzle.randomArray[this.activeBox - createPuzzle.level] === 0) {
        this.numBufferBox = this.activeBox;
        document.querySelectorAll('.box')[this.activeBox - createPuzzle.level].after(document.querySelectorAll('.box')[this.activeBox]);
        document.querySelectorAll('.box')[this.numBufferBox].after(document.querySelectorAll('.box')[this.numBufferBox - createPuzzle.level]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox
        - createPuzzle.level];
        createPuzzle.randomArray[this.activeBox - createPuzzle.level] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
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
  event.preventDefault();
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
      boxOnCopy.style.width = `${boxOn.getBoundingClientRect().width}px`;
      boxOnCopy.style.height = `${boxOn.getBoundingClientRect().height}px`;
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

let min = 0;
let sec = 0;
function timer() {
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
let initTimer;

const move = new Move();
function game() {
  clearInterval(initTimer);
  sec = 0;
  min = 0;
  document.querySelector('.time_value').textContent = '00:00';
  document.querySelector('.move_value').textContent = 0;
  createPuzzle.mainBox.style.pointerEvents = 'auto';
}

document.addEventListener('mousemove', () => {
  window.getSelection().removeAllRanges();
});
createPuzzle.mainBox.addEventListener('mousedown', move.activeBoxes);
createPuzzle.mainBox.addEventListener('mouseup', move.moveBoxes);
createPuzzle.mainBox.addEventListener('dragstart', dragDrop);
createPuzzle.ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI' && event.target.textContent === 'New Game') {
    createPuzzle.mainBox.append(...createPuzzle.createBoxes());
    game();
    document.querySelectorAll('li')[0].textContent = 'Start Game';
    createPuzzle.mainBox.style.pointerEvents = 'none';
  } else
  if (event.target.tagName === 'LI' && event.target.textContent === 'Start Game') {
    document.querySelectorAll('li')[0].textContent = 'Pause Game';
    createPuzzle.mainBox.style.pointerEvents = 'auto';
    document.querySelectorAll('.main_box > .box').forEach((element) => {
      element.classList.remove('box_pause');
    });
    document.querySelectorAll('.main_box > .box').forEach((element) => {
      element.classList.remove('box_start');
    });
    createPuzzle.mainBox.classList.remove('main_box_start');
    timer();
  } else
  if (event.target.tagName === 'LI' && event.target.textContent === 'Pause Game') {
    document.querySelectorAll('li')[0].textContent = 'Start Game';
    clearInterval(initTimer);
    createPuzzle.mainBox.style.pointerEvents = 'none';
    document.querySelectorAll('.main_box > .box').forEach((element) => {
      element.classList.add('box_pause');
    });
  } else
  if (event.target.tagName === 'LI' && event.target.textContent === 'Settings') {
    document.querySelector('ul').classList.add('hidden');
    clearInterval(initTimer);
    createPuzzle.mainBox.style.pointerEvents = 'none';
    createPuzzle.chooseFieldBox.classList.remove('hidden');
  }
});

createPuzzle.chooseFieldSelect.addEventListener('change', () => {
  createPuzzle.level = +(document.querySelector('select').options[document.querySelector('select').selectedIndex].value);
  createPuzzle.mainBox.style.gridTemplateColumns = `repeat(${createPuzzle.level}, 1fr)`;
  createPuzzle.mainBox.style.gridAutoRows = '1fr';
  createPuzzle.mainBox.append(...createPuzzle.createBoxes());
});

createPuzzle.chooseFieldBtn.addEventListener('click', () => {
  document.querySelectorAll('li')[0].textContent = 'Start Game';
  game();
  document.querySelector('ul').classList.remove('hidden');
  createPuzzle.chooseFieldBox.classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', () => {
  createPuzzle.init();
  document.getElementById('fourField').setAttribute('selected', true);
});
