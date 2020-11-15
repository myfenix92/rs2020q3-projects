/* eslint-disable import/no-cycle */
/* eslint-disable no-inner-declarations */
import '../css/style.css';
import '../css/style.scss';
import {
  createPuzzle, moveBoxes, rulesPuzzle, settingPuzzle, winPuzzle,
} from './constants';
import {
  closeWin, closeRules, closeSetting, chooseFieldSelect, menuClick, getVal,
} from './utils/helpers';

export let checkEmptyBox = true;

function dragDrop(event) {
  event.preventDefault();
  if (event.target.className !== 'box box_empty') {
    moveBoxes.activeBoxes(event);
    const coorEmptyX = document.querySelector('.box_empty').getBoundingClientRect().left;
    const coorEmptyY = document.querySelector('.box_empty').getBoundingClientRect().top;
    const allBoxes = document.querySelectorAll('.box');
    const boxOn = allBoxes[moveBoxes.activeBox];
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

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
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

document.addEventListener('mousemove', () => {
  window.getSelection().removeAllRanges();
});
createPuzzle.mainBox.addEventListener('mousedown', moveBoxes.activeBoxes);
createPuzzle.mainBox.addEventListener('mouseup', moveBoxes.moveBoxes);
createPuzzle.mainBox.addEventListener('mousedown', dragDrop);
createPuzzle.ul.addEventListener('click', menuClick);
settingPuzzle.chooseFieldSelect.addEventListener('change', chooseFieldSelect);
settingPuzzle.chooseFieldBtn.addEventListener('click', closeSetting);
rulesPuzzle.rulesBtn.addEventListener('click', closeRules);
winPuzzle.closeBtnWinBlock.addEventListener('click', closeWin);

window.addEventListener('DOMContentLoaded', () => {
  createPuzzle.init();
  if (localStorage.getItem('timeSec') === null && localStorage.getItem('timeMin') === null) {
    localStorage.setItem('timeSec', 0);
    localStorage.setItem('timeMin', 0);
    localStorage.setItem('move', 0);
  } else {
    document.querySelector('.move_value').textContent = localStorage.getItem('move');
    document.querySelector('.time_value').textContent = `${getVal(localStorage.getItem('timeMin'))}${localStorage.getItem('timeMin')}:${getVal(localStorage.getItem('timeSec'))}${localStorage.getItem('timeSec')}`;
  }
  winPuzzle.init();
  document.getElementById('fourField').selected = true;
});

window.addEventListener('beforeunload', () => {
  if (document.querySelector('.move_value').textContent === '0') {
    localStorage.clear();
  }
});
