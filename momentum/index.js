class Momentum {

  constructor() {
    this.name = document.querySelector('.input_name');
    this.focus = document.querySelector('.input_focus');
    this.imgArrNum = []
    this.newMas = []
    this.bodyImg = []
    this.i_time = ''
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
    const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = weekArray[curDate.getDay()];
    const dayOfMonth = curDate.getDate();
    const month = monthArray[curDate.getMonth()];
    date.textContent = `${dayOfWeek} ${dayOfMonth} ${month}`;
    const curSeconds = curDate.getSeconds() < 10 ? `0${curDate.getSeconds()}` : curDate.getSeconds();
    const curMinute = curDate.getMinutes() < 10 ? `0${curDate.getMinutes()}` : curDate.getMinutes();
    time.textContent = `${curDate.getHours()}:${curMinute}:${curSeconds}`;
  }

  async getQuote() {
    const quote = document.querySelector('.quote_block');
    const quoteAuthor = document.querySelector('.quote_author');
    const url = `https://api.quotable.io/random`;
    const res = await fetch(url);
    const data = await res.json();
    quote.textContent = data.content;
    quoteAuthor.textContent = data.author;
  }

  getTimeDay() {
    const timeDay = document.querySelector('.time_day');
    const hourData = new Date().getHours();
    const timeDayArray = ['morning', 'day', 'evening', 'night'];

    if (hourData >= 0 && hourData < 6) {
      timeDay.textContent = timeDayArray[3];
    }
    if (hourData > 5 && hourData < 12) {
      timeDay.textContent = timeDayArray[0];
    }
    if (hourData > 11 && hourData < 18) {
      timeDay.textContent = timeDayArray[1];
    }
    if (hourData > 17 && hourData <= 23) {
      timeDay.textContent = timeDayArray[2];
    }
    return timeDay;
  }

  getRandom() {
    const max = 20;
    const min = 1;
    let randomNum = Math.floor(Math.random() * max + min)
    return randomNum;
  }

  fillArr() {
    let a;
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < 6; i++) {
        a = this.getRandom()
        if (this.imgArrNum.includes(a)) {
          i--;
        } else {
          this.imgArrNum.push(a)
        }
      }
      this.newMas = this.newMas.concat(this.imgArrNum)
      this.imgArrNum = []
    }

    for (let i = 0; i < 6; i++) {
      this.bodyImg.push(`url(/assest/night/${this.newMas[i]}.jpg)`)
    }
    for (let i = 6; i < 12; i++) {
      this.bodyImg.push(`url(/assest/morning/${this.newMas[i]}.jpg)`)
    }
    for (let i = 12; i < 18; i++) {
      this.bodyImg.push(`url(/assest/day/${this.newMas[i]}.jpg)`)
    }
    for (let i = 18; i < 24; i++) {
      this.bodyImg.push(`url(/assest/evening/${this.newMas[i]}.jpg)`)
    }
    this.i_time = new Date().getHours()
    document.querySelector('body').style.backgroundImage = `${this.bodyImg[this.i_time]}`
    return this.bodyImg
  }
}

let momentum = new Momentum();

function changeBody() {
  if (momentum.i_time > 22) {
    momentum.i_time = 0;
  } else {
    momentum.i_time++
  }
  document.querySelector('body').style.backgroundImage = `${momentum.bodyImg[momentum.i_time]}`;
}

momentum.getName()
momentum.getFocus()
momentum.getTimeDay()
document.querySelector('.input_name').addEventListener('keypress', momentum.setName);
document.querySelector('.input_name').addEventListener('blur', momentum.setName);
document.querySelector('.input_focus').addEventListener('keypress', momentum.setFocus);
document.querySelector('.input_focus').addEventListener('blur', momentum.setFocus);
document.querySelector('.quote_btn').addEventListener('click', momentum.getQuote)
document.querySelector('.arrow').addEventListener('click', changeBody)

window.addEventListener('DOMContentLoaded', () => {
  setInterval(momentum.getTime, 1000);
  momentum.getQuote();
  momentum.fillArr()
})