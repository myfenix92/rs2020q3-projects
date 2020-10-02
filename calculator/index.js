class Calculator {
  constructor(prevText, currentText) {
    this.prevText = prevText;
    this.currentText = currentText;
    this.readyToReset = false;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.prevOperand = '';
    this.operation = undefined;
    this.readyToReset = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (isNaN(this.currentOperand)) {
      this.currentOperand = '';
    }
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (number === '-') {
      if (this.operation !== undefined && this.currentOperand !== '' && this.prevOperand !== '') {
        calculator.compute();
        calculator.updateDisplay();
        this.readyToReset = false;
        this.currentOperand = +(this.currentText.innerText);
      } else {
        if (this.currentOperand.includes('-')) {
          if (this.currentOperand.split('-')[0] === '' && this.currentOperand.split('-').length === 3) {
            this.currentOperand = this.currentOperand.split('-');
            this.currentOperand = +((this.currentOperand[1] * (-1)) - this.currentOperand[2]).toFixed(5);
          } else
          if (this.currentOperand.split('-')[0] !== '' && this.currentOperand.split('-').length === 2) {
            this.currentOperand = this.currentOperand.split('-');
            this.currentOperand = +(this.currentOperand[0] - this.currentOperand[1]).toFixed(5);
          }
        }
      }
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.prevOperand !== '' && this.prevOperand !== '') {
      this.compute();
    }
    if (this.prevOperand.includes('-')) {
      if (this.prevOperand.split('-')[0] === '' && this.prevOperand.split('-').length === 3) {
        this.prevOperand = this.prevOperand.split('-');
        this.prevOperand = +((this.prevOperand[1] * (-1)) - this.prevOperand[2]).toFixed(5);
      } else
      if (this.prevOperand.split('-')[0] !== '' && this.prevOperand.split('-').length === 2) {
        this.prevOperand = this.prevOperand.split('-');
        this.prevOperand = +(this.prevOperand[0] - this.prevOperand[1]).toFixed(5);
      }
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    let prev = parseFloat(this.prevOperand);
    let current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = +(prev + current).toFixed(5);
        break;
      case '*':
        computation = +(prev * current).toFixed(5);
        break;
      case '/':
        if (current === 0) {} else {
          computation = +(prev / current).toFixed(5);
        }
        break;
      case '√':
        computation = Math.pow(prev, 1 / current);
        break;
      case '^':
        computation = Math.pow(prev, current);
        break;
      default:
        return
    }
    if (isNaN(computation) || !isFinite(computation)) {
      this.clear();
      this.currentOperand = 'Error';
      this.readyToReset = true;
    } else {
      this.readyToReset = true;
      this.currentOperand = computation;
      this.operation = undefined;
      this.prevOperand = '';
    }
  }

  updateDisplay() {
    this.currentText.innerText = this.currentOperand;
    if (this.operation != null) {
      this.prevText.innerText = `${this.prevOperand} ${this.operation}`;
    } else {
      this.prevText.innerText = '';
    }
  }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevText = document.querySelector('[data-prev]');
const currentText = document.querySelector('[data-current]');

const calculator = new Calculator(prevText, currentText);

numberBtns.forEach(buttons => {
  buttons.addEventListener('click', () => {
    if (calculator.prevOperand === "" &&
      calculator.currentOperand !== "" &&
      calculator.readyToReset) {
      calculator.currentOperand = "";
      calculator.readyToReset = false;
    }
    calculator.appendNumber(buttons.innerText);
    calculator.updateDisplay();
  })
})

operationBtns.forEach(buttons => {
  buttons.addEventListener('click', () => {
    calculator.chooseOperation(buttons.innerText);
    calculator.updateDisplay();
  })
})

equalsBtn.addEventListener('click', () => {
  if (calculator.currentOperand.includes('-')) {
    if (calculator.currentOperand.split('-')[0] === '' && calculator.currentOperand.split('-').length === 3) {
      calculator.currentOperand = calculator.currentOperand.split('-');
      calculator.currentOperand = +((calculator.currentOperand[1] * (-1)) - calculator.currentOperand[2]).toFixed(5);
    } else
    if (calculator.currentOperand.split('-')[0] !== '' && calculator.currentOperand.split('-').length === 2) {
      calculator.currentOperand = calculator.currentOperand.split('-');
      calculator.currentOperand = +(calculator.currentOperand[0] - calculator.currentOperand[1]).toFixed(5);
    }
  }
  calculator.compute();
  calculator.updateDisplay();
  calculator.readyToReset = true;
  calculator.currentOperand = +(currentText.innerText);
})

allClearBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
})