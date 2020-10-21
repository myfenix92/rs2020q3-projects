class Momentum {

  constructor() {
    this.name = document.querySelector('.input_name');
    this.focus = document.querySelector('.input_focus');
  }

  getName() {
    if (localStorage.getItem('name') === null) {
      this.name.textContent = '[Enter Your Name]'
    } else {
      this.name.textContent = localStorage.getItem('name')
    }
  }

  setName(e) {
    if (e.type === 'keypress') {
      if (e.code === 'Enter') {
        localStorage.setItem('name', e.target.innerText);
        document.querySelector('.input_name').blur()
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }

  getFocus() {
    if (localStorage.getItem('focus') === null) {
      this.focus.textContent = '[Enter Your Focus]'
    } else {
      this.focus.textContent = localStorage.getItem('focus')
    }
    
  }

  setFocus(e) {
    if (e.type === 'keypress') {
      if (e.code === 'Enter') {
        localStorage.setItem('focus', e.target.innerText);
        document.querySelector('.input_focus').blur()
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

  getTime() {
    const time = document.querySelector('.time_block');
    const date = document.querySelector('.date_block');
    const curDate = new Date();
    const weekArray  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = weekArray[curDate.getDay()];
    const dayOfMonth = curDate.getDate();
    const month = monthArray[curDate.getMonth()];
    date.textContent = `${dayOfWeek} ${dayOfMonth} ${month}`;
    const curSeconds = curDate.getSeconds() < 10 ? `0${curDate.getSeconds()}` : curDate.getSeconds();
    const curMinute = curDate.getMinutes() < 10 ? `0${curDate.getMinutes()}` : curDate.getMinutes();
    time.textContent = `${curDate.getHours()}:${curMinute}:${curSeconds}`;
  }
} 

let momentum = new Momentum()

momentum.getName()
momentum.getFocus()
document.querySelector('.input_name').addEventListener('keypress', momentum.setName);
document.querySelector('.input_name').addEventListener('blur', momentum.setName);
document.querySelector('.input_focus').addEventListener('keypress', momentum.setFocus);
document.querySelector('.input_focus').addEventListener('blur', momentum.setFocus);

window.addEventListener('DOMContentLoaded', () => {
  setInterval(momentum.getTime, 1000)
})