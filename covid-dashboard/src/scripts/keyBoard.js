// eslint-disable-next-line import/prefer-default-export
// export let clickedElement = '';
const keyLayout = [[
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace', '♫',
    '!?', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}',
    'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '[', ']', 'enter',
    'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '\'', ',', '.', '?',
    'en', '🎤', 'space', '<', '^', 'v', '>'],
[
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace', '♫',
    '!?', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
    'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
    'done', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '.',
    'ru', '🎤', 'space', '<', '^', 'v', '>']];
const keyCode = [
    '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '8', '115',
    '16', '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221',
    '20', '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '222', '13',
    '', '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '220',
    '', '🎤', '32', '37', '38', '40', '39'];

let leng = 0;
let count = 0;
let countSpeach = 0;
let cursor = 0;
const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
    },
    eventHandlers: {
        oninput: null,
        onclose: null,
    },
    properties: {
        value: '',
        capsLock: false,
        shift: false,
        language: false,
    },

    init() {
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');
        // eslint-disable-next-line no-underscore-dangle
        this._toggleLangEn(false);
        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        document.querySelectorAll('.searchCountryTable').forEach((element) => {
            element.addEventListener('focus', () => {
                this.open(element.value, (currentValue) => {
                    // eslint-disable-next-line no-param-reassign
                    element.value = currentValue;
                });
            });
        });
    },

    // eslint-disable-next-line no-underscore-dangle
    _createKeys(keyLayout) {
        let fragment = '';
        fragment = document.createDocumentFragment();
        keyLayout.forEach((key) => {
            const keyElement = document.createElement('button');
            keyElement.setAttribute('data-keyCode', keyCode[keyLayout.indexOf(key)]);
            let insertLineBreak;
            if (leng === 0) {
                insertLineBreak = ['♫', '}', 'enter', '?'].indexOf(key) !== -1;
            } else {
                insertLineBreak = ['♫', 'ъ', 'enter', '.'].indexOf(key) !== -1;
            }
            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('keyboard__key');
            const keySound = document.createElement('audio');
            keySound.setAttribute('data-sound', keyCode[keyLayout.indexOf(key)]);
            switch (key) {
            case '🎤':
                keyElement.innerHTML = '🎤';
                keyElement.classList.add('keyboard__key--activatable');
                keyElement.addEventListener('click', () => {
                    if (countSpeach === 0) {
                        keyElement.classList.add('keyboard__key--active');
                        countSpeach = 1;
                    } else {
                        keyElement.classList.remove('keyboard__key--active');
                        countSpeach = 0;
                    }
                });
                break;

            case '♫':
                keyElement.innerHTML = '♫';
                keyElement.classList.add('keyboard__key--activatable', 'keyboard__key--active');
                keyElement.addEventListener('click', () => {
                    if (count === 0) {
                        keyElement.classList.remove('keyboard__key--active');
                        count = 1;
                    } else {
                        keyElement.classList.add('keyboard__key--active');
                        count = 0;
                    }
                });
                break;

            case 'backspace':
                keyElement.classList.add('keyboard__key--wide');
                keyElement.innerHTML = '<-';
                keyElement.addEventListener('click', () => {
                    if (window.getSelection().toString().length > 0) {
                        this.properties.value = this.properties.value.substring(0, document.querySelector('.searchCountryTable').selectionStart) + this.properties.value.substring(document.querySelector('.searchCountryTable').selectionEnd, this.properties.value.length);
                    } else if (document.querySelector('.searchCountryTable').selectionStart > 0) {
                        this.properties.value = this.properties.value.substring(0, document.querySelector('.searchCountryTable').selectionStart - 1) + this.properties.value.substring(document.querySelector('.searchCountryTable').selectionStart, this.properties.value.length);
                    }
                    cursor = document.querySelector('.searchCountryTable').selectionStart - 1;
                    // eslint-disable-next-line no-underscore-dangle
                    this._triggerEvent('oninput');
                });
                break;

            case 'caps':
                keyElement.classList.add('keyboard__key--activatable');
                keyElement.innerHTML = 'caps';
                keyElement.addEventListener('click', () => {
                    // eslint-disable-next-line no-underscore-dangle
                    this._toggleCapsLock();
                    keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
                });
                break;

            case '!?':
                keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
                keyElement.innerHTML = '!?';
                keyElement.addEventListener('click', () => {
                    // eslint-disable-next-line no-underscore-dangle
                    this._toggleShift();
                    keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
                });
                break;

            case 'en':
                keyElement.innerHTML = 'en';
                keyElement.addEventListener('click', () => {
                    leng = 1;
                    // eslint-disable-next-line no-underscore-dangle
                    this._toggleLangEn(true);
                });
                break;

            case 'ru':
                keyElement.innerHTML = 'ru';
                keyElement.addEventListener('click', () => {
                    leng = 0;
                    // eslint-disable-next-line no-underscore-dangle
                    this._toggleLangEn(true);
                });
                break;

            case 'enter':
                keyElement.innerHTML = 'enter';
                keyElement.addEventListener('click', () => {
                    this.setCursor('\n');
                    cursor = document.querySelector('.searchCountryTable').selectionStart + 1;
                    // eslint-disable-next-line no-underscore-dangle
                    this._triggerEvent('oninput');
                });
                break;

            case 'space':
                keyElement.classList.add('keyboard__key--extra-wide');
                keyElement.innerHTML = 'space';
                keyElement.addEventListener('click', () => {
                    this.setCursor(' ');
                    cursor = document.querySelector('.searchCountryTable').selectionStart + 1;
                    // eslint-disable-next-line no-underscore-dangle
                    this._triggerEvent('oninput');
                });
                break;

            case 'done':
                keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
                keyElement.innerHTML = 'hide';
                keyElement.addEventListener('click', () => {
                    this.close();
                    // eslint-disable-next-line no-underscore-dangle
                    this._triggerEvent('onclose');
                });
                break;

            case '<':
                keyElement.innerHTML = '<';
                keyElement.addEventListener('click', () => {
                    cursor = document.querySelector('.searchCountryTable').selectionStart - 1;
                    // eslint-disable-next-line no-underscore-dangle
                    this._triggerEvent('oninput');
                });
                break;

            case '>':
                keyElement.innerHTML = '>';
                keyElement.addEventListener('click', () => {
                    cursor = document.querySelector('.searchCountryTable').selectionStart + 1;
                    // eslint-disable-next-line no-underscore-dangle
                    this._triggerEvent('oninput');
                });
                break;

            default:
                keyElement.textContent = key.toLowerCase();
                keyElement.addEventListener('click', () => {
                    if (key === 1 && this.properties.shift) {
                        this.setCursor('!');
                    } else if (key === 2 && this.properties.shift) {
                        this.setCursor('@');
                    } else if (key === 3 && this.properties.shift) {
                        this.setCursor('#');
                    } else if (key === 4 && this.properties.shift) {
                        this.setCursor('$');
                    } else if (key === 5 && this.properties.shift) {
                        this.setCursor('%');
                    } else if (key === 6 && this.properties.shift) {
                        this.setCursor('^');
                    } else if (key === 7 && this.properties.shift) {
                        this.setCursor('&');
                    } else if (key === 8 && this.properties.shift) {
                        this.setCursor('*');
                    } else if (key === 9 && this.properties.shift) {
                        this.setCursor('(');
                    } else if (key === 0 && this.properties.shift) {
                        this.setCursor(')');
                    } else {
                        this.setCursor((this.properties.capsLock || this.properties.shift ? key.toUpperCase() : key.toLowerCase()));
                    }
                    cursor = document.querySelector('.searchCountryTable').selectionStart + 1;
                    // eslint-disable-next-line no-underscore-dangle
                    this._triggerEvent('oninput');
                });
                break;
            }
            fragment.appendChild(keyElement);
            fragment.appendChild(keySound);
            if (insertLineBreak) {
                fragment.appendChild(document.createElement('br'));
            }
        });
        return fragment;
    },

    // eslint-disable-next-line no-underscore-dangle
    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] === 'function') {
            this.eventHandlers[handlerName](this.properties.value);
            document.querySelector('.searchCountryTable').focus();
            document.querySelector('.searchCountryTable').selectionStart = cursor;
            document.querySelector('.searchCountryTable').selectionEnd = cursor;
        }
    },

    // eslint-disable-next-line no-underscore-dangle
    _toggleLangEn(shown) {
        if (shown === false) {
            this.elements.main.classList.add('keyboard', 'keyboard--hidden');
            this.elements.keysContainer.classList.add('keyboard__keys');
            // eslint-disable-next-line no-underscore-dangle
            this.elements.keysContainer.appendChild(this._createKeys(keyLayout[leng]));
        } else {
            this.elements.main.remove();
            this.elements.main = document.createElement('div');
            this.elements.keysContainer = document.createElement('div');
            this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
            this.elements.main.appendChild(this.elements.keysContainer);
            document.body.appendChild(this.elements.main);
            document.querySelectorAll('.searchCountryTable').forEach((element) => {
                element.addEventListener('focus', () => {
                    this.open(element.value, (currentValue) => {
                        // eslint-disable-next-line no-param-reassign
                        element.value = currentValue;
                    });
                });
            });
            this.elements.main.classList.add('keyboard');
            this.elements.keysContainer.classList.add('keyboard__keys');
            // eslint-disable-next-line no-underscore-dangle
            this.elements.keysContainer.appendChild(this._createKeys(keyLayout[leng]));
        }
    },

    // eslint-disable-next-line no-underscore-dangle
    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
        // eslint-disable-next-line no-restricted-syntax
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    // eslint-disable-next-line no-underscore-dangle
    _toggleShift() {
        const newLocal = this;
        newLocal.properties.shift = !this.properties.shift;
        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
        // eslint-disable-next-line no-restricted-syntax
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                if (key.textContent === 1 && this.properties.shift) {
                    key.textContent = '!';
                } else if (key.textContent === 2 && this.properties.shift) {
                    key.textContent = '@';
                } else if (key.textContent === 3 && this.properties.shift) {
                    key.textContent = '#';
                } else if (key.textContent === 4 && this.properties.shift) {
                    key.textContent = '$';
                } else if (key.textContent === 5 && this.properties.shift) {
                    key.textContent = '%';
                } else if (key.textContent === 6 && this.properties.shift && key.getAttribute('data-keyCode') === 54) {
                    key.textContent = '^';
                } else if (key.textContent === 7 && this.properties.shift) {
                    key.textContent = '&';
                } else if (key.textContent === 8 && this.properties.shift) {
                    key.textContent = '*';
                } else if (key.textContent === 9 && this.properties.shift) {
                    key.textContent = '(';
                } else if (key.textContent === 0 && this.properties.shift) {
                    key.textContent = ')';
                } else if (key.textContent === '!' && !this.properties.shift) {
                    key.textContent = '1';
                } else if (key.textContent === '@' && !this.properties.shift) {
                    key.textContent = '2';
                } else if (key.textContent === '#' && !this.properties.shift) {
                    key.textContent = '3';
                } else if (key.textContent === '$' && !this.properties.shift) {
                    key.textContent = '4';
                } else if (key.textContent === '%' && !this.properties.shift) {
                    key.textContent = '5';
                } else if (key.textContent === '^' && !this.properties.shift && key.getAttribute('data-keyCode') === 54) {
                    key.textContent = '6';
                } else if (key.textContent === '&' && !this.properties.shift) {
                    key.textContent = '7';
                } else if (key.textContent === '*' && !this.properties.shift) {
                    key.textContent = '8';
                } else if (key.textContent === '(' && !this.properties.shift) {
                    key.textContent = '9';
                } else if (key.textContent === ')' && !this.properties.shift) {
                    key.textContent = '0';
                } else {
                    key.textContent = this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                }
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || '';
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove('keyboard--hidden');
    },

    setCursor(symb) {
        this.properties.value = this.properties.value.substring(0, document.querySelector('.searchCountryTable').selectionStart) + symb + this.properties.value.substring(document.querySelector('.searchCountryTable').selectionStart, this.properties.value.length);
    },

    close() {
        this.properties.value = '';
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add('keyboard--hidden');
    },
    keyEv() {
        document.addEventListener('keydown', (e) => {
            const code = e.which || e.keyCode;
            const button = document.querySelector(`button[data-keyCode="${code}"]`);
            if (button) {
                button.classList.add('press');
                setTimeout(() => {
                    button.classList.remove('press');
                }, 500);
            }
            if (code === 20) {
                button.classList.add('keyboard__key--active');
                // eslint-disable-next-line no-underscore-dangle
                this._toggleCapsLock();
            } else if (code === 16) {
                button.classList.add('keyboard__key--active');
                // eslint-disable-next-line no-underscore-dangle
                this._toggleShift();
            }
        });
        document.addEventListener('keyup', (e) => {
            this.properties.value = document.querySelector('.searchCountryTable').value;
            const code = e.which || e.keyCode;
            const button = document.querySelector(`button[data-keyCode="${code}"]`);
            if (code === 20) {
                button.classList.remove('keyboard__key--active');
            }
        });
    },
};

window.addEventListener('DOMContentLoaded', () => {
    Keyboard.init();
    Keyboard.keyEv();
});
