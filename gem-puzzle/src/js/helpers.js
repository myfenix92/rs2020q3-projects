import { createPuzzle } from './CreatePuzzle';
import { winPuzzle } from './WinPuzzle';
import { settingPuzzle } from './SettingPuzzle';
import { rulesPuzzle } from './Rules';

export const getVal = (val) => (val < 10 ? 0 : '');
let interval;
export let min = 0; let
  sec = 0;
let isSoundCheck;

function timer() {
  interval = setInterval(() => {
    localStorage.setItem('move', document.querySelector('.move_value').textContent);
    sec = +(localStorage.getItem('timeSec')) + 1;
    min = +(localStorage.getItem('timeMin'));
    if (sec >= 60) {
      min = +(localStorage.getItem('timeMin')) + 1;
      sec -= 60;
    }
    localStorage.setItem('timeSec', sec);
    localStorage.setItem('timeMin', min);
    document.querySelector('.time_value').textContent = `${getVal(min)}${localStorage.getItem('timeMin')}:${getVal(sec)}${localStorage.getItem('timeSec')}`;
    if (createPuzzle.randomArray.join('') === createPuzzle.arrayBoxes.join('')) {
      clearInterval(interval);
      winPuzzle.winText.textContent = `Ура! Вы решили головоломку за ${document.querySelector('.time_value').textContent} и ${document.querySelector('.move_value').textContent} ходов.`;
      winPuzzle.winBlock.classList.remove('close_win_block');
      winPuzzle.winBlock.classList.add('show_win_block');
    }
  }, 1000);
}

function game() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  document.querySelector('.time_value').textContent = '00:00';
  document.querySelector('.move_value').textContent = 0;
  createPuzzle.mainBox.style.pointerEvents = 'auto';
}

function menuClick(event) {
  if (event.target.tagName === 'LI' && event.target.textContent === 'New Game') {
    localStorage.clear();
    createPuzzle.mainBox.append(...createPuzzle.createBoxes());
    game();
    document.querySelectorAll('li')[0].textContent = 'Start Game';
    createPuzzle.mainBox.style.pointerEvents = 'none';
    localStorage.setItem('timeSec', sec);
    localStorage.setItem('timeMin', min);
    localStorage.setItem('move', 0);
    localStorage.setItem('puzzle', createPuzzle.randomArray);
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
    localStorage.setItem('timeSec', localStorage.getItem('timeSec'));
    localStorage.setItem('timeMin', localStorage.getItem('timeMin'));
  } else
  if (event.target.tagName === 'LI' && event.target.textContent === 'Pause Game') {
    document.querySelectorAll('li')[0].textContent = 'Start Game';
    clearInterval(interval);
    createPuzzle.mainBox.style.pointerEvents = 'none';
    document.querySelectorAll('.main_box > .box').forEach((element) => {
      element.classList.add('box_pause');
    });
  } else
  if (event.target.tagName === 'LI' && event.target.textContent === 'Rules') {
    document.querySelector('ul').classList.toggle('hidden');
    rulesPuzzle.rulesBox.classList.toggle('hidden');
  } else
  if (event.target.tagName === 'LI' && event.target.textContent === 'Settings') {
    document.querySelector('ul').classList.add('hidden');
    clearInterval(interval);
    createPuzzle.mainBox.style.pointerEvents = 'none';
    settingPuzzle.chooseFieldBox.classList.toggle('hidden');
    document.querySelectorAll('.main_box > .box').forEach((element) => {
      element.classList.add('box_pause');
    });
  }
}

function chooseFieldSelect(event) {
  isSoundCheck = event.target.value;
  localStorage.clear();
  createPuzzle.level = +(document.querySelector('select').options[document.querySelector('select').selectedIndex].value);
  createPuzzle.mainBox.style.gridTemplateColumns = `repeat(${createPuzzle.level}, 1fr)`;
  createPuzzle.mainBox.append(...createPuzzle.createBoxes());
}

function closeSetting() {
  if (isSoundCheck === undefined) {
    document.querySelector('ul').classList.remove('hidden');
    settingPuzzle.chooseFieldBox.classList.toggle('hidden');
    createPuzzle.mainBox.style.pointerEvents = 'none';
    document.querySelectorAll('li')[0].textContent = 'Start Game';
  } else {
    localStorage.clear();
    sec = 0;
    min = 0;
    localStorage.setItem('timeMin', min);
    localStorage.setItem('timeSec', sec);
    game();
    document.querySelectorAll('li')[0].textContent = 'Start Game';
    document.querySelector('ul').classList.remove('hidden');
    settingPuzzle.chooseFieldBox.classList.toggle('hidden');
    createPuzzle.mainBox.style.pointerEvents = 'none';
  }
}

function closeRules() {
  document.querySelector('ul').classList.toggle('hidden');
  rulesPuzzle.rulesBox.classList.toggle('hidden');
}

function closeWin() {
  winPuzzle.winBlock.classList.remove('show_win_block');
  winPuzzle.winBlock.classList.add('close_win_block');
  localStorage.clear();
  createPuzzle.mainBox.append(...createPuzzle.createBoxes());
  document.querySelectorAll('li')[0].textContent = 'Start Game';
  localStorage.setItem('timeSec', 0);
  localStorage.setItem('timeMin', 0);
  document.querySelector('.time_value').textContent = '00:00';
  document.querySelector('.move_value').textContent = 0;
}

export {
  closeWin, closeRules, closeSetting, chooseFieldSelect, menuClick,
};
