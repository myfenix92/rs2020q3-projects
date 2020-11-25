import '../styles/index.scss';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

import { WriteHTML } from './Level';

const myCodeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "text/html",
  readOnly: true,
  theme: "ayu-dark",
  cursorHeight: 0,
});

const myCodeMirrorCSS = CodeMirror.fromTextArea(document.getElementById('css'), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "css",
  indentUnit: 2,
  readOnly: true,
  theme: "material",
  cursorHeight: 0,
});
myCodeMirrorCSS.setValue(`{\n\t/* Styles would go here. */\n}\n\n{\n\t/* Enter CSS selector and click 'Enter' or press Enter*/
}\n\n\n\n\n\n\n\n\n\n\n\n\n`);

let i = 1;
document.querySelectorAll('.CodeMirror-code > div').forEach((e) => {
  e.setAttribute('id', i);
  i += 1;
});

const writeHTML = new WriteHTML(2);

document.addEventListener('DOMContentLoaded', () => {
  writeHTML.templateHTMLCode();
})

export { myCodeMirror };
