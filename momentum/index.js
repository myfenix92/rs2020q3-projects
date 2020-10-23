class Momentum {

  constructor() {
    this.name = document.querySelector('.input_name');
    this.focus = document.querySelector('.input_focus');
    this.nameCity = document.querySelector('.name_city');
    this.imgArrNum = []
    this.newMas = []
    this.bodyImg = []
    this.i_time = ''
    this.hour
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
      if (e.code === 'Enter' && e.target.innerText.length !== 0) {
        localStorage.setItem('name', e.target.innerText);
        document.querySelector('.input_name').blur()
      } else if (e.code === 'Enter' && e.target.innerText.length === 0) {
        document.querySelector('.input_name').textContent = '[Enter Your Name]'
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
    if (e.type === 'keypress' || e.type === 'click') {
      if (e.code === 'Enter' && e.target.innerText.length !== 0) {
        localStorage.setItem('focus', e.target.innerText);
        document.querySelector('.input_focus').blur()
      } if ((e.code === 'Enter' || e.type === 'click') && e.target.innerText.length === 0) {
        document.querySelector('.input_focus').textContent = '[Enter Your Focus]'
        document.querySelector('.input_focus').blur()
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

   getNameCity() {
    if (localStorage.getItem('name_city') === null) {
        this.nameCity.textContent = 'Moscow'
    } else if (localStorage.getItem('name_city') === null) {
      this.nameCity.textContent = localStorage.getItem('name_city')
    } else {
      this.nameCity.textContent = localStorage.getItem('name_city')
    }
}

 setNameCity(e) {
    if (e.type === 'keypress') {
        if (e.code === 'Enter') {
            localStorage.setItem('name_city', e.target.innerText)
           document.querySelector('.name_city').blur()
        }
    } else {
        localStorage.setItem('name_city', e.target.innerText)
        getWeather()
    }
}

  getTime() {
    const timeSecond = document.querySelector('.time_block_second');
    const timeMinute = document.querySelector('.time_block_minute');
    const timeHour = document.querySelector('.time_block_hour');
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
    timeHour.textContent =  `${curDate.getHours()}`
    timeMinute.textContent = `:${curMinute}`;
    timeSecond.textContent = `:${curSeconds}`;
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
    if (hourData >= 6 && hourData < 12) {
      timeDay.textContent = timeDayArray[0];
    }
    if (hourData >= 12 && hourData < 18) {
      timeDay.textContent = timeDayArray[1];
    }
    if (hourData >= 18 && hourData <= 23) {
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
      this.bodyImg.push(`url(assest/night/${this.newMas[i]}.jpg)`)
    }
    for (let i = 6; i < 12; i++) {
      this.bodyImg.push(`url(assest/morning/${this.newMas[i]}.jpg)`)
    }
    for (let i = 12; i < 18; i++) {
      this.bodyImg.push(`url(assest/day/${this.newMas[i]}.jpg)`)
    }
    for (let i = 18; i < 24; i++) {
      this.bodyImg.push(`url(assest/evening/${this.newMas[i]}.jpg)`)
    }
    return this.bodyImg
  }

  changeHour() {
    if (this.hour !== document.querySelector('.time_block_hour').textContent) {
      this.hour = document.querySelector('.time_block_hour').textContent;
   changeHourBody(this.hour)
    }
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

function changeHourBody(hourValue) {
  document.querySelector('body').style.backgroundImage = `${momentum.bodyImg[hourValue]}`
}

async function getWeather() {
  let nameCityValue = document.querySelector('.name_city')
  const aboutWeather = document.querySelector('.about_weather')
  const iconWeather = document.querySelector('.icon_weather > img')
  const tempWeather = document.querySelector('.temp_weather')
  const humidityweather = document.querySelector('.humidity_weather')
  const speedWindWeather = document.querySelector('.speed_wind_weather')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCityValue.textContent}&lang=en&appid=cfab30bb66d89e8952405563767c1480&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  try {
    if (nameCityValue.textContent === '') {
      nameCityValue.textContent = 'Please, enter city'
      return
    }
    aboutWeather.textContent = data.weather[0].main;
    iconWeather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    tempWeather.innerHTML = `${Math.floor(data.main.temp)} &deg;C`;
    humidityweather.textContent = `${data.main.humidity}%`;
    speedWindWeather.textContent = `${data.wind.speed} m/s`;
  } catch (error) {
    nameCityValue.textContent = 'Invalid request, try again'
  }
}

function setCity(e) {
  if (e.code === 'Enter') {
    getWeather();
   city.blur();
  }
}

momentum.getName()
momentum.getFocus()
momentum.getNameCity()
setInterval(momentum.getTimeDay, 1000)

document.querySelector('.input_name').addEventListener('keypress', momentum.setName);
document.querySelector('.input_name').addEventListener('blur', momentum.setName);
document.querySelector('.input_focus').addEventListener('keypress', momentum.setFocus);
document.querySelector('.input_focus').addEventListener('click', momentum.setFocus);
document.querySelector('.input_focus').addEventListener('blur', momentum.setFocus);
document.querySelector('.quote_btn').addEventListener('click', momentum.getQuote)
document.querySelector('.name_city').addEventListener('keypress', momentum.setNameCity)
document.querySelector('.name_city').addEventListener('blur', momentum.setNameCity)
document.querySelector('.arrow').addEventListener('click', changeBody)

window.addEventListener('DOMContentLoaded', () => {
  setInterval(momentum.getTime, 1000);
  setInterval(momentum.changeHour, 1000)
  getWeather()
  momentum.getQuote();
  momentum.fillArr()
})