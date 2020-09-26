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
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (number === '-') {
      if (this.currentOperand.includes('-')) {
        this.currentOperand = this.currentOperand.split('-');
        this.currentOperand = +(this.currentOperand[0] - this.currentOperand[1]).toFixed(5)
      } else
      if (this.currentOperand === '' || number === '-' || this.operation !== null) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
        return;
      } else {
        calculator.compute();
        calculator.updateDisplay();
      }
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand.includes('-')) {
      this.currentOperand = this.currentOperand.split('-');
      console.log(1)
      this.currentOperand = +(this.currentOperand[0] - this.currentOperand[1]).toFixed(5)
    }
    if (this.currentOperand === '') return;
    if (this.prevOperand !== '' && this.prevOperand !== '') {
      this.compute();
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
    if (isNaN(computation)) {
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

equalsBtn.addEventListener('click', buttons => {
  calculator.compute();
  calculator.updateDisplay();
})

allClearBtn.addEventListener('click', buttons => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteBtn.addEventListener('click', buttons => {
  calculator.delete();
  calculator.updateDisplay();
})