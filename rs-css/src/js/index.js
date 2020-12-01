import '../styles/index.scss';
import {
  ENTER_BTN, RESET_BTN, HELP_BTN, INPUT, NAV_LEVEL, LAYOUT, HTML_VIEWER, writeHTML, inputAnswer,
} from './constants';
import {
  chooseLevelNav, helpAnswer, resetGame, layoutMouseOver, layoutMouseOut,
  htmlBlockMouseOver, htmlBlockMouseOut, clickEnterBtn,
} from './helpers/helpers';

NAV_LEVEL.addEventListener('click', chooseLevelNav);
HELP_BTN.addEventListener('click', helpAnswer);
RESET_BTN.addEventListener('click', resetGame);
LAYOUT.addEventListener('mouseover', layoutMouseOver);
LAYOUT.addEventListener('mouseout', layoutMouseOut);
HTML_VIEWER.addEventListener('mouseover', htmlBlockMouseOver);
HTML_VIEWER.addEventListener('mouseout', htmlBlockMouseOut);

ENTER_BTN.addEventListener('click', clickEnterBtn);
INPUT.addEventListener('keydown', clickEnterBtn);

document.addEventListener('DOMContentLoaded', () => {
  writeHTML.templateHTMLCode(inputAnswer.level);
});
