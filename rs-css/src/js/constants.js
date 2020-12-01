import { WriteHTML } from './Create Level/index';
import { InputAnswer } from './Input Answer/index';

const levelItem = `<li class="level_item" data-level="1">ID Selector</li>
<li class="level_item" data-level="2">Type Selector</li>
<li class="level_item" data-level="3">Descendant Selector</li>
<li class="level_item" data-level="4">Pseudo Selector :visited</li>
<li class="level_item" data-level="5">Class Selector</li>
<li class="level_item" data-level="6">Child Selector</li>
<li class="level_item" data-level="7">Attribute Selector</li>
<li class="level_item" data-level="8">:not Selector</li>
<li class="level_item" data-level="9">:nth-child() Selector</li>
<li class="level_item" data-level="10">:last-child Selector</li>`;
const writeHTML = new WriteHTML();
const inputAnswer = new InputAnswer();
const ENTER_BTN = document.querySelector('.input_btn');
const RESET_BTN = document.querySelector('.reset_btn');
const HELP_BTN = document.querySelector('.help_btn');
const INPUT = document.querySelector('input');
const NAV_LEVEL = document.querySelector('.level_nav');
const LAYOUT = document.querySelector('.layout_block');
const HTML_VIEWER = document.querySelector('.html_text');
const UFO_ITEM = document.querySelector('.ufo_answer');

export {
  ENTER_BTN, RESET_BTN, HELP_BTN, INPUT, NAV_LEVEL, LAYOUT, HTML_VIEWER,
  writeHTML, inputAnswer, levelItem, UFO_ITEM,
};
