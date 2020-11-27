import '../styles/index.scss';
import { htmlText } from './htmlText';
import { WriteHTML } from './Level';

document.querySelector('.css_text').insertAdjacentHTML('afterbegin', '{ <br>/* Styles would go here. */<br>}');

let level = htmlText.level_1.id;
const writeHTML = new WriteHTML();
const inputValue = document.querySelector('input');

let isAnswer = true;
let levelBuffer;

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();
  isAnswer = true;
  switch (inputValue.value) {
    case '#sun':
      levelBuffer = htmlText.level_2.id;
      break;
    case 'planet':
      levelBuffer = htmlText.level_3.id;
      break;
    case 'planet moon':
      levelBuffer = htmlText.level_4.id;
      break;
    case '.earth:visited':
      levelBuffer = htmlText.level_5.id;
      break;
    case '.small':
      levelBuffer = htmlText.level_6.id;
      break;
    case '.giant-group > planet':
    case '.giant-group>planet':
      levelBuffer = htmlText.level_7.id;
      break;
    case '.saturn[rings]':
      levelBuffer = htmlText.level_8.id;
      break;
    case 'planet:not(.inhabitable)':
      levelBuffer = htmlText.level_9.id;
      break;
    case 'planet:nth-child(5)':
      levelBuffer = htmlText.level_10.id;
      break;
    case 'planet:last-child':
      document.querySelectorAll('.circle').forEach((planet) => {
        planet.classList.add('animation_stop');
      });
      break;
    default:
      isAnswer = false;
      inputValue.value = '';
      ufoError();
      break;
  }

  if (isAnswer && level + 1 === levelBuffer) {
    level = levelBuffer;
    inputValue.value = '';
    writeHTML.templateHTMLCode(level);
    ufoWin();
  }
});

function ufoError() {
  document.querySelector('.ufo_answer').classList.remove('ufo_win');
  document.querySelector('.ufo_answer').classList.add('ufo_error');
}

function ufoWin() {
  document.querySelector('.ufo_answer').classList.add('ufo_win');
  document.querySelector('.ufo_answer').classList.remove('ufo_error');
}

document.addEventListener('DOMContentLoaded', () => {
  writeHTML.templateHTMLCode(level);
});
