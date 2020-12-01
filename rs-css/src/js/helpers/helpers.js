import { htmlText } from './htmlText';
import {
  levelItem, INPUT, writeHTML, inputAnswer, UFO_ITEM,
} from '../constants';

function chooseLevelNav(event) {
  const chooseLevel = +event.target.dataset.level;
  if (chooseLevel) {
    INPUT.value = '';
    inputAnswer.level = chooseLevel;
    localStorage.setItem('level', inputAnswer.level);
    localStorage.setItem('level_item', document.querySelector('.level_nav').innerHTML);
    writeHTML.templateHTMLCode(inputAnswer.level);
  }
}

function helpAnswer() {
  const text = htmlText[inputAnswer.level].selector;
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
  localStorage.setItem('level_item', document.querySelector('.level_nav').innerHTML);
}

function resetGame() {
  inputAnswer.level = htmlText[1].id;
  INPUT.value = '';
  document.querySelectorAll('.level_item').forEach((e) => {
    e.classList.remove('right_answer');
    e.classList.remove('wrong_answer');
  });
  localStorage.setItem('level', inputAnswer.level);
  localStorage.setItem('level_item', levelItem);
  writeHTML.templateHTMLCode(inputAnswer.level);
}

export {
  chooseLevelNav, helpAnswer, resetGame, layoutMouseOver,
  layoutMouseOut, htmlBlockMouseOver, htmlBlockMouseOut,
  clickEnterBtn,
};

function ufo() {
  if (UFO_ITEM.classList.contains('ufo_win')
  || UFO_ITEM.classList.contains('ufo_error')) {
    UFO_ITEM.classList.remove('ufo_win');
    UFO_ITEM.classList.remove('ufo_error');
  }
}

function layoutMouseOver(event) {
  let isTrue = true;
  const tagName = event.target.classList[1];
  document.querySelectorAll('.html_text>div>*').forEach((e) => {
    if (e.textContent.includes(tagName)) {
      e.classList.add('color_hover');
      isTrue = false;
    }
  });

  document.querySelectorAll('.html_text>div').forEach((e) => {
    if (e.textContent.includes(tagName) && isTrue) {
      e.classList.add('color_hover');
      e.querySelectorAll('div').forEach((el) => {
        el.classList.add('color_hover');
      });
    }
  });
  if (event.target.classList.contains('circle')) {
    event.target.classList.add('circle_hover');
  }
}

function layoutMouseOut(event) {
  document.querySelectorAll('.color_hover').forEach((e) => {
    e.classList.remove('color_hover');
  });
  if (event.target.classList.contains('circle')) {
    event.target.classList.remove('circle_hover');
  }
}

function htmlBlockMouseOver(event) {
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
    }
  });
}

function htmlBlockMouseOut() {
  document.querySelectorAll('.color_hover').forEach((e) => {
    e.classList.remove('color_hover');
  });
  document.querySelectorAll('.layout_block>div').forEach((e) => {
    e.classList.remove('circle_hover');
  });
}

function clickEnterBtn(event) {
  if (event.code === 'Enter' || event.target.textContent === 'Enter') {
    inputAnswer.clickEnter();
    setTimeout(ufo, 1000);
  }
}
