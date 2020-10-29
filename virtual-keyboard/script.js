const wrapper = document.createElement('div')
const keyboard = document.createElement('div')
const keyboardKeys = document.createElement('div')
const textArea = document.createElement('textarea')
const aboutKeyboard = document.createElement('p')

let langValue = localStorage.getItem('lang') || 'en'
let keyCaps
let keyShift
let microBool = false
let key = ''
const systemKeys = [13, 14, 27, 28, 41, 42, 54, 55, 56, 57, 58, 59, 63]
let numberSystemKey = 0

const dictionary = {
  Backquote: {
    en: '`',
    ru: 'ё',
    shift: {
      en: '~',
      ru: 'Ё'
    }
  },
  Digit1: {
    en: '1',
    ru: '1',
    shift: {
      en: '!',
      ru: '!'
    }
  },
  Digit2: {
    en: '2',
    ru: '2',
    shift: {
      en: '@',
      ru: '"'
    }
  },
  Digit3: {
    en: '3',
    ru: '3',
    shift: {
      en: '#',
      ru: '№'
    }
  },
  Digit4: {
    en: '4',
    ru: '4',
    shift: {
      en: '$',
      ru: ';'
    }
  },
  Digit5: {
    en: '5',
    ru: '5',
    shift: {
      en: '%',
      ru: '%'
    }
  },
  Digit6: {
    en: '6',
    ru: '6',
    shift: {
      en: '^',
      ru: ':'
    }
  },
  Digit7: {
    en: '7',
    ru: '7',
    shift: {
      en: '&',
      ru: '?'
    }
  },
  Digit8: {
    en: '8',
    ru: '8',
    shift: {
      en: '*',
      ru: '*'
    }
  },
  Digit9: {
    en: '9',
    ru: '9',
    shift: {
      en: '(',
      ru: '('
    }
  },
  Digit0: {
    en: '0',
    ru: '0',
    shift: {
      en: ')',
      ru: ')'
    }
  },
  Minus: {
    en: '-',
    ru: '-',
    shift: {
      en: '_',
      ru: '_'
    }
  },
  Equal: {
    en: '=',
    ru: '=',
    shift: {
      en: '+',
      ru: '+'
    }
  },
  Backspace: {
    en: 'Backspace',
    ru: 'Backspace',
    shift: {
      en: 'Backspace',
      ru: 'Backspace'
    }
  },
  Tab: {
    en: 'Tab',
    ru: 'Tab',
    shift: {
      en: 'Tab',
      ru: 'Tab'
    }
  },
  KeyQ: {
    en: 'q',
    ru: 'й',
    shift: {
      en: 'Q',
      ru: 'Й'
    }
  },
  KeyW: {
    en: 'w',
    ru: 'ц',
    shift: {
      en: 'W',
      ru: 'Ц'
    }
  },
  KeyE: {
    en: 'e',
    ru: 'у',
    shift: {
      en: 'E',
      ru: 'У'
    }
  },
  KeyR: {
    en: 'r',
    ru: 'к',
    shift: {
      en: 'R',
      ru: 'К'
    }
  },
  KeyT: {
    en: 't',
    ru: 'е',
    shift: {
      en: 'T',
      ru: 'Е'
    }
  },
  KeyY: {
    en: 'y',
    ru: 'н',
    shift: {
      en: 'Y',
      ru: 'Н'
    }
  },
  KeyU: {
    en: 'u',
    ru: 'г',
    shift: {
      en: 'U',
      ru: 'Г'
    }
  },
  KeyI: {
    en: 'i',
    ru: 'ш',
    shift: {
      en: 'I',
      ru: 'Ш'
    }
  },
  KeyO: {
    en: 'o',
    ru: 'щ',
    shift: {
      en: 'O',
      ru: 'Щ'
    }
  },
  KeyP: {
    en: 'p',
    ru: 'з',
    shift: {
      en: 'P',
      ru: 'З'
    }
  },
  BracketLeft: {
    en: '[',
    ru: 'х',
    shift: {
      en: '{',
      ru: 'Х'
    }
  },
  BracketRight: {
    en: ']',
    ru: 'ъ',
    shift: {
      en: '}',
      ru: 'Ъ'
    }
  },
  Enter: {
    en: 'Enter',
    ru: 'Enter',
    shift: {
      en: 'Enter',
      ru: 'Enter'
    }
  },
  CapsLock: {
    en: 'CapsLock',
    ru: 'CapsLock',
    shift: {
      en: 'CapsLock',
      ru: 'CapsLock'
    }
  },
  KeyA: {
    en: 'a',
    ru: 'ф',
    shift: {
      en: 'A',
      ru: 'Ф'
    }
  },
  KeyS: {
    en: 's',
    ru: 'ы',
    shift: {
      en: 'S',
      ru: 'Ы'
    }
  },
  KeyD: {
    en: 'd',
    ru: 'в',
    shift: {
      en: 'D',
      ru: 'В'
    }
  },
  KeyF: {
    en: 'f',
    ru: 'а',
    shift: {
      en: 'F',
      ru: 'А'
    }
  },
  KeyG: {
    en: 'g',
    ru: 'п',
    shift: {
      en: 'G',
      ru: 'П'
    }
  },
  KeyH: {
    en: 'h',
    ru: 'р',
    shift: {
      en: 'H',
      ru: 'Р'
    }
  },
  KeyJ: {
    en: 'j',
    ru: 'о',
    shift: {
      en: 'J',
      ru: 'О'
    }
  },
  KeyK: {
    en: 'k',
    ru: 'л',
    shift: {
      en: 'K',
      ru: 'Л'
    }
  },
  KeyL: {
    en: 'l',
    ru: 'д',
    shift: {
      en: 'L',
      ru: 'Д'
    }
  },
  Semicolon: {
    en: ';',
    ru: 'ж',
    shift: {
      en: ':',
      ru: 'Ж'
    }
  },
  Quote: {
    en: "'",
    ru: 'э',
    shift: {
      en: '"',
      ru: 'Э'
    }
  },
  Backslash: {
    en: '\\',
    ru: '\\',
    shift: {
      en: '|',
      ru: '/'
    }
  },
  Delete: {
    en: 'Del',
    ru: 'Del',
    shift: {
      en: 'Del',
      ru: 'Del'
    }
  },
  ShiftLeft: {
    en: 'Shift',
    ru: 'Shift',
    shift: {
      en: 'Shift',
      ru: 'Shift'
    }
  },
  KeyZ: {
    en: 'z',
    ru: 'я',
    shift: {
      en: 'Z',
      ru: 'Я'
    }
  },
  KeyX: {
    en: 'x',
    ru: 'ч',
    shift: {
      en: 'X',
      ru: 'Ч'
    }
  },
  KeyC: {
    en: 'c',
    ru: 'с',
    shift: {
      en: 'C',
      ru: 'С'
    }
  },
  KeyV: {
    en: 'v',
    ru: 'м',
    shift: {
      en: 'V',
      ru: 'М'
    }
  },
  KeyB: {
    en: 'b',
    ru: 'и',
    shift: {
      en: 'B',
      ru: 'И'
    }
  },
  KeyN: {
    en: 'n',
    ru: 'т',
    shift: {
      en: 'N',
      ru: 'Т'
    }
  },
  KeyM: {
    en: 'm',
    ru: 'ь',
    shift: {
      en: 'M',
      ru: 'Ь'
    }
  },
  Comma: {
    en: ',',
    ru: 'б',
    shift: {
      en: '<',
      ru: 'Б'
    }
  },
  Period: {
    en: '.',
    ru: 'ю',
    shift: {
      en: '>',
      ru: 'Ю'
    }
  },
  Slash: {
    en: '/',
    ru: '.',
    shift: {
      en: '?',
      ru: ','
    }
  },
  ArrowUp: {
    en: '▲',
    ru: '▲',
    shift: {
      en: '▲',
      ru: '▲'
    }
  },
  ShiftRight: {
    en: 'Shift',
    ru: 'Shift',
    shift: {
      en: 'Shift',
      ru: 'Shift'
    }
  },
  ControlLeft: {
    en: 'Ctrl',
    ru: 'Ctrl',
    shift: {
      en: 'Ctrl',
      ru: 'Ctrl'
    }
  },
  MetaLeft: {
    en: 'Ru | Eng',
    ru: 'Ru | Eng',
    shift: {
      en: 'Ru | Eng',
      ru: 'Ru | Eng'
    }
  },
  AltLeft: {
    en: 'AL',
    ru: 'AL',
    shift: {
      en: 'AL',
      ru: 'AL'
    }
  },
  Space: {
    en: 'Space',
    ru: 'Space',
    shift: {
      en: 'Space',
      ru: 'Space'
    }
  },
  AltRight: {
    en: 'Alt',
    ru: 'Alt',
    shift: {
      en: 'Alt',
      ru: 'Alt'
    }
  },
  ArrowLeft: {
    en: '◄',
    ru: '◄',
    shift: {
      en: '◄',
      ru: '◄'
    }
  },
  ArrowDown: {
    en: '▼',
    ru: '▼',
    shift: {
      en: '▼',
      ru: '▼'
    }
  },
  ArrowRight: {
    en: '►',
    ru: '►',
    shift: {
      en: '►',
      ru: '►'
    }
  },
  ControlRight: {
    en: 'Ctrl',
    ru: 'Ctrl',
    shift: {
      en: 'Ctrl',
      ru: 'Ctrl'
    }
  },
}

function init() {
  wrapper.classList.add('wrapper')
  textArea.classList.add('text')
  keyboard.classList.add('keyboard')
  keyboardKeys.id = 'keyboard_keys'
  aboutKeyboard.innerHTML = 'Клавиатура сделана в ОС Windows, смена языка  левый Ctrl + Shift или клавиша Ru | Eng.'

  keyboardKeys.append(createKeys())
  keyboard.append(keyboardKeys)
  changeKeyboard(key, langValue, keyCaps)
  wrapper.append(textArea, keyboard, aboutKeyboard)
  document.body.append(wrapper)
}

document.addEventListener('keydown', (event) => keyDown(event));
document.addEventListener('keyup', (event) => keyUp(event));
document.addEventListener('mouseup', (event) => onMouseUp(event));
document.addEventListener('mousedown', (event) => onMouseDown(event));
document.addEventListener('mouseout', (event) => onMouseOut(event));

function systemKeyClick(event) {
  const audioSrcBackspace = new Audio('/audio/backspace.mp3');
  const audioSrcCapsLock = new Audio('/audio/caps.mp3');
  const audioSrcEnter = new Audio('/audio/enter.mp3');
  let audioSrcKey;
  const audioSrcShift = new Audio('/audio/shift.mp3');
  const audioSrcSpace = new Audio('/audio/space.mp3');
  if (localStorage.getItem('lang') === null || localStorage.getItem('lang') === 'en') {
    audioSrcKey = new Audio('/audio/enKey.mp3');
  } else {
    audioSrcKey = new Audio('/audio/key.mp3');
  }
  const {
    value: textValue,
    selectionStart: textAreaStart,
    selectionEnd: textAreaEnd
  } = textArea
  switch (event) {
    case 'CapsLock':
      audioSrcCapsLock.play();
      break;
    case 'Shift':
    case 'ShiftLeft':
    case 'ShiftRight':
      audioSrcShift.play();
      break;
    case 'Tab':
      textArea.value += '\t'
      audioSrcKey.play();
      break;
    case 'Enter':
      textArea.value += '\n';
      audioSrcEnter.play();
      break;
    case 'Space':
      textArea.value += ' ';
      audioSrcSpace.play();
      break;
    case 'Backspace':
      if (textAreaStart !== 0) {
        textArea.value = `${textValue.substring(0, textAreaStart - 1)}${textValue.substring(textAreaStart)}`
        PosCursor(textAreaStart - 1)
      }
      audioSrcBackspace.play();
      break;
    case 'Delete':
    case 'Del':
      if (textAreaEnd !== textValue.length) {
        textArea.value = `${textValue.substring(0, textAreaStart)}${textValue.substring(textAreaStart + 1)}`
        PosCursor(textAreaStart)
      }
      audioSrcKey.play();
      break;
    case '▲':
      PosCursor(0);
      audioSrcKey.play();
      break;
    case '▼':
      PosCursor(textValue.length);
      audioSrcKey.play();
      break;
    case '◄':
      PosCursor(textAreaStart - 1);
      audioSrcKey.play();
      break;
    case '►':
      PosCursor(textAreaStart + 1);
      audioSrcKey.play();
      break;
    default:
      audioSrcKey.play();
      break;
  }
}

function keyDown(event) {
  event.preventDefault();
  textArea.focus()
  systemKeyClick(event.code)
  if (event.ctrlKey && event.shiftKey) {
    changeLang()
  } else
  if (!event.shiftKey && event.code === 'CapsLock') {
    keyShift = false
    if (keyCaps) {
      keyCaps = false
    } else {

      keyCaps = true
    }
    keyboard.querySelectorAll('.pressed')[0].classList.toggle('pressed-active', keyCaps)
    changeKeyboard(key, langValue, keyShift, keyCaps)
  } else
  if (event.shiftKey && !keyCaps) {
    keyCaps = false
    keyShift = true
    changeKeyboard(key, langValue, keyShift, keyCaps)
    keyboard.querySelectorAll('.pressed')[1].classList.toggle('pressed-active', keyShift)
    keyboard.querySelectorAll('.pressed')[2].classList.toggle('pressed-active', keyShift)
  } else
  if (event.shiftKey && keyCaps) {
    keyCaps = true
    keyShift = true
    changeKeyboard(key, langValue, keyShift, keyCaps)
    keyboard.querySelectorAll('.pressed')[1].classList.toggle('pressed-active', keyShift)
    keyboard.querySelectorAll('.pressed')[2].classList.toggle('pressed-active', keyShift)
  } else 
  if (event.code === 'AltLeft' && microBool) {
    microBool = false
    keyboard.querySelector('#micro_btn').classList.toggle('pressed-active', microBool)
    recognition.addEventListener('end', recognition.stop);
    recognition.stop()
  } else if (event.code === 'AltLeft' && !microBool) {
    microBool = true
    keyboard.querySelector('#micro_btn').classList.toggle('pressed-active', microBool)
    recognition.addEventListener('end', recognition.start);
    recognition.start()
  }
  
  numberSystemKey = 0
  for (key in dictionary) {
    if (event.code === key) {
      keyboard.querySelectorAll('button')[numberSystemKey].classList.add('active')
      if (systemKeys.every((item) => item !== numberSystemKey)) {
        textArea.value += keyboard.querySelectorAll('button')[numberSystemKey].textContent
      }
      break;
    } else {
      numberSystemKey += 1
    }
  }
}

function keyUp(event) {
  event.preventDefault();
  if (event.code === 'Tab') {
    textArea.focus()
  } else if (!event.shiftKey) {
    keyShift = false
    changeKeyboard(key, langValue, keyShift, keyCaps)

  }
  numberSystemKey = 0
  for (key in dictionary) {
    if (event.code === key) {
      keyboard.querySelectorAll('button')[numberSystemKey].classList.remove('active')
      keyboard.querySelectorAll('.pressed')[1].classList.toggle('pressed-active', keyShift)
      keyboard.querySelectorAll('.pressed')[2].classList.toggle('pressed-active', keyShift)
      break;
    } else {
      numberSystemKey += 1
    }
  }
}

function onMouseOut(event) {
  if (event.relatedTarget !== 'BUTTON') {
    event.target.classList.remove('active')
  }
}

let bool = false;

function onMouseDown(event) {
  let cursor;
  if (event.target.tagName === 'BUTTON') {
    event.target.classList.add('active')
    const keyValue = event.target.textContent
    systemKeyClick(event.target.textContent)
    switch (keyValue) {
      case 'CapsLock':
        if (keyCaps) {
          keyCaps = false
        } else {
          keyCaps = true
        }
        changeKeyboard(key, langValue, keyShift, keyCaps)
        keyboard.querySelectorAll('.pressed')[0].classList.toggle('pressed-active', keyCaps)
        textArea.value += ''
        break;
      case 'Shift':
        if (keyShift) {
          keyShift = false
        } else {
          keyShift = true
        }
        changeKeyboard(key, langValue, keyShift, keyCaps)
        keyboard.querySelectorAll('.pressed')[1].classList.toggle('pressed-active', keyShift)
        keyboard.querySelectorAll('.pressed')[2].classList.toggle('pressed-active', keyShift)
        textArea.value += ''
        break;
      case 'Ru | Eng':
        changeLang();
        break;
      case 'AL':
        if (!microBool) {
          microBool = true
          recognition.abort()
          recognition.addEventListener('end', recognition.start);
          recognition.start()
        } else {
          microBool = false
          recognition.addEventListener('end', recognition.abort);
          recognition.abort()
        }
        keyboard.querySelector('#micro_btn').classList.toggle('pressed-active', microBool)
        textArea.value += ''
      case 'Backspace':
      case 'Tab':
      case 'Enter':
      case 'Del':
      case 'Ctrl':
      case 'Space':
      case 'Win':
      case 'Alt':
      case '▲':
      case '◄':
      case '▼':
      case '►':
        textArea.value += ''
        break;
      default:
        cursor = textArea.selectionStart + 1;
        textArea.value = `${textArea.value.substring(0, textArea.selectionStart)}${keyValue}${textArea.value.substring(textArea.selectionEnd, textArea.value.length)}`;
        PosCursor(cursor);
    }
  }
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = localStorage.getItem('lang');

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');
    
    if (e.results[0].isFinal) {
      textArea.value = `${textArea.value} ${transcript}`
    }
});


function onMouseUp(event) {
  textArea.focus()
  event.preventDefault()
  if (event.target.tagName === 'BUTTON') {
    event.target.classList.remove('active')
  }
}

function PosCursor(position) {
  textArea.focus()
  textArea.selectionStart = position
  textArea.selectionEnd = position
}

function changeLang() {
  langValue = langValue === 'en' ? 'ru' : 'en'
  localStorage.setItem('lang', langValue)
  changeKeyboard(key, langValue, keyShift, keyCaps)
}

function changeKeyboard(keys, lang, isShift, isCaps) {
  numberSystemKey = 0
  for (key in dictionary) {
    if (!isCaps && !isShift) {
      keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang]
    } else if (isCaps && !isShift) {
      if (systemKeys.some((item) => item === numberSystemKey)) {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang]
      } else {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang].toUpperCase()
      }
    } else if (isShift && !isCaps) {
      keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key].shift[lang]
    } else if (isShift && isCaps) {
      if (systemKeys.some((item) => item === numberSystemKey)) {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang]
      } else {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key].shift[lang].toLowerCase()
      }
    }
    numberSystemKey += 1
  }
  return keys
}

function createKeys() {
  const fragment = document.createDocumentFragment()
  for (const el in dictionary) {
    const keyCreate = document.createElement('button')
    keyCreate.setAttribute('type', 'button')
    switch (el) {
      case 'Backspace':
      case 'Enter':
        keyCreate.classList.add('key')
        keyCreate.classList.add('key_middle-wide')
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        keyCreate.classList.add('key')
        keyCreate.classList.add('key_middle-wide')
        keyCreate.classList.add('pressed')
        break;
      case 'Tab':
      case 'MetaLeft':
        keyCreate.classList.add('key')
        keyCreate.classList.add('key_meta')
        break;
      case 'Space':
        keyCreate.classList.add('key')
        keyCreate.classList.add('key_extra-wide')
        break;
      case 'AltRight':
      case 'ControlRight':
      case 'ControlLeft':
      case 'Delete':
        keyCreate.classList.add('key')
        keyCreate.classList.add('key_wide')
        break;
      case 'CapsLock':
        keyCreate.classList.add('key')
        keyCreate.classList.add('key_middle-wide')
        keyCreate.classList.add('pressed')
        break;
      case 'AltLeft':
        keyCreate.classList.add('key')
        keyCreate.classList.add('key_wide')
        keyCreate.classList.add('pressed')
        keyCreate.id = 'micro_btn'
        break;
      default:
        keyCreate.classList.add('key')
    }

    fragment.append(keyCreate)
  }
  return fragment
}

window.addEventListener('DOMContentLoaded', () => {
  init()
})