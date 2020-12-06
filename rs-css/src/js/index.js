import '../styles/index.scss';
import {
  RESET_BTN, HELP_BTN, HTML_VIEWER, inputAnswer, createLevel,
} from './constants/index';
import { HelpersClass } from './helpers/index';

const helpersClass = new HelpersClass();

document.addEventListener('click', helpersClass.chooseLevelNav);
HELP_BTN.addEventListener('click', HelpersClass.helpAnswer);
RESET_BTN.addEventListener('click', HelpersClass.resetGame);
document.addEventListener('mouseover', HelpersClass.layoutMouseOver);
document.addEventListener('mouseout', HelpersClass.layoutMouseOut);
HTML_VIEWER.addEventListener('mouseover', HelpersClass.htmlBlockMouseOver);
HTML_VIEWER.addEventListener('mouseout', HelpersClass.htmlBlockMouseOut);
document.addEventListener('click', HelpersClass.clickEnterBtn);
document.addEventListener('keydown', HelpersClass.clickEnterBtn);
document.querySelector('.menu__btn').addEventListener('click', HelpersClass.menuBurger);
document.getElementById('overlay').addEventListener('click', HelpersClass.overlayClick);

document.addEventListener('DOMContentLoaded', () => {
  createLevel.templateHTMLCode(inputAnswer.level);
  document.querySelector('.ufo_answer > img').src = './assets/images/ufo.png';
  document.querySelector('.logo_img').src = './assets/images/logo_rsschool.png';
});
