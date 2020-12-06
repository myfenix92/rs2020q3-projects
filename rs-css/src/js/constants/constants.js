import { CreateLevel } from '../Create Level/index';
import { htmlText, HelpersClass } from '../helpers/index';
import { InputAnswer } from '../Input Answer/index';

const levelItem = `<li class="level_item" data-level="1">ID Selector</li>
<li class="level_item" data-level="2">Type Selector</li>
<li class="level_item" data-level="3">Descendant Selector</li>
<li class="level_item" data-level="4">Class Selector</li>
<li class="level_item" data-level="5">Pseudo Selector :visited</li>
<li class="level_item" data-level="6">Child Selector</li>
<li class="level_item" data-level="7">Attribute Selector</li>
<li class="level_item" data-level="8">:not Selector</li>
<li class="level_item" data-level="9">:nth-child() Selector</li>
<li class="level_item" data-level="10">:last-child Selector</li>`;

const selectorAnswer = {
  '#sun': htmlText.level_1.id,
  planet: htmlText.level_2.id,
  'planet satellite': htmlText.level_3.id,
  '.small': htmlText.level_4.id,
  '.earth:visited': htmlText.level_5.id,
  '.giant_group>planet': htmlText.level_6.id,
  '.giant_group > planet': htmlText.level_6.id,
  '.saturn[rings]': htmlText.level_7.id,
  'planet[rings]': htmlText.level_7.id,
  'planet:not(.inhabited)': htmlText.level_8.id,
  'planet:nth-child(5)': htmlText.level_9.id,
  'planet:last-child': htmlText.level_10.id,
};

const helpersClass = new HelpersClass();
const createLevel = new CreateLevel();
const inputAnswer = new InputAnswer();
const htmlTextLength = Object.keys(htmlText).length;
const ENTER_BTN = document.querySelector('.input_btn');
const RESET_BTN = document.querySelector('.reset_btn');
const HELP_BTN = document.querySelector('.help_btn');
const INPUT = document.querySelector('.input_css');
const NAV_LEVEL = document.querySelector('.level_nav');
const LAYOUT = document.querySelector('.layout_block');
const HTML_VIEWER = document.querySelector('.html_text');
const UFO_ITEM = document.querySelector('.ufo_answer');

export {
  ENTER_BTN, RESET_BTN, HELP_BTN, INPUT, NAV_LEVEL, LAYOUT, HTML_VIEWER,
  createLevel, inputAnswer, levelItem, UFO_ITEM, selectorAnswer, helpersClass,
  htmlTextLength,
};
