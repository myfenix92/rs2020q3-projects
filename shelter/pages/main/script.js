const pets = [{
    "name": "Katrine",
    "img": "../../assets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

//burger

document.querySelector('.menu__btn').onclick = function () {
  document.getElementById('overlay').classList.toggle('filter_menu')
};


document.querySelector('.header_menu_items').addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    document.getElementById('overlay').classList.remove('filter_menu')
  }
})

document.getElementById('overlay').addEventListener('click', () => {
  document.getElementById('menu__toggle').checked = false;
  document.getElementById('overlay').classList.remove('filter_menu');
})

let slider = document.querySelector('.slider_content')
const MESSAGE_BTN = document.querySelector('.message_btn')
const MESSAGE_BLOCK = document.getElementById('message_pets_block')



let petImg = document.querySelector('.message_pet_img > img')
let petName = document.querySelector('.pet_name')
let petType = document.querySelector('.pet_type')
let petBreed = document.querySelector('.pet_breed')
let petDescription = document.querySelector('.pet_description')
let petAge = document.querySelector('.pet_age')
let petInoculations = document.querySelector('.pet_inoculations')
let petDiseases = document.querySelector('.pet_diseases')
let petParasites = document.querySelector('.pet_parasites')

function closePopUp() {
  MESSAGE_BLOCK.style.display = 'none'
}

function openPopUp(event) {
  if (event.target.closest('.slider')) {
    MESSAGE_BLOCK.style.display = 'block'
  }

  for (let i = 0; i < pets.length; i++) {
    if (event.target.closest('.slider')) {
      if (event.target.closest('.slider').children[1].innerText === pets[i].name){
      petImg.src = pets[i].img
      petName.innerText = pets[i].name
      petType.innerText = pets[i].type
      petBreed.innerText = pets[i].breed
      petDescription.innerText = pets[i].description
      petAge.innerText = pets[i].age
      petInoculations.innerText = pets[i].inoculations
      petDiseases.innerText = pets[i].diseases
      petParasites.innerText = pets[i].parasites
      }
    } else if (!event.target.closest('.slider') && !event.target.closest('#message_pet')) {
      closePopUp()
    }
  }
}

document.addEventListener('click', openPopUp)
MESSAGE_BTN.addEventListener('click', closePopUp)

//slider
function shuffledArr() {
  return (Math.random() - 0.5)
};

let curItem = 0
let isEnabled = true
let nextItem;

function changeCurItem(n) {
  let items = document.querySelectorAll('.slider')
  curItem = (n + items.length) % items.length
}

function hideItem(direction) {
  let items = document.querySelectorAll('.slider')
  isEnabled = false
  items[curItem].classList.add(direction)
  items[curItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction)
    this.classList.remove('active_slider')
    isEnabled = true
  })
}


function showItem(direction) {
  let items = document.querySelectorAll('.slider')
  let activeItems = document.querySelectorAll('.active_slider').length
  if (curItem + activeItems > items.length) {
    nextItem = curItem + activeItems - 1 - items.length;
  } else {
    nextItem = curItem + activeItems - 1;
  }

  items[nextItem].classList.add('next', direction)
  items[nextItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction)
    this.classList.add('active_slider')
    isEnabled = true
  })
}

function previousItem(n) {
  hideItem('to-right')
  changeCurItem(n - 1)
  showItem('from-left')

}

function nexItem(n) {
  hideItem('to-left')
  changeCurItem(n + 1)
  showItem('from-right')
}

document.querySelector('.arrow-left').addEventListener('click', function () {
  let items = document.querySelectorAll('.slider')
  let activeItems = document.querySelectorAll('.active_slider').length
  items = [...items].sort(shuffledArr)
  if (isEnabled) {
    for (let i = 0; i < activeItems; i++) {
      previousItem(curItem);
    }
  }
})

document.querySelector('.arrow-right').addEventListener('click', function () {
  let items = document.querySelectorAll('.slider')
  let activeItems = document.querySelectorAll('.active_slider').length
  items = [...items].sort(shuffledArr)
  if (isEnabled) {
    for (let i = 0; i < activeItems; i++) {
      nexItem(curItem);
    }
  }
})

function visibleSlide() {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    for (let i = 0; i < 3; i++) {
      document.querySelectorAll('.slider')[i].classList.add('active_slider')
    }
  } else
  if (window.matchMedia("(max-width: 1279px)").matches && window.matchMedia("(min-width: 768px)").matches) {
    for (let i = 0; i < 2; i++) {
      document.querySelectorAll('.slider')[i].classList.add('active_slider')
    }
  } else if (window.matchMedia("(max-width: 767px)").matches && window.matchMedia("(min-width: 320px)").matches) {
    for (let i = 0; i < 1; i++) {
      document.querySelectorAll('.slider')[i].classList.add('active_slider')
    }
  }
}

function changeWidth() {
  if (document.documentElement.clientWidth >= 1280) {
    visibleSlide();
  } else if (document.documentElement.clientWidth <= 1279 && document.documentElement.clientWidth >= 768) {
    document.querySelectorAll('.slider').forEach((e) => {
      if (e.classList.contains('active_slider')) {
        e.classList.remove('active_slider')
      }
    })
    visibleSlide();
  } else if (document.documentElement.clientWidth <= 767 && document.documentElement.clientWidth >= 320) {
    document.querySelectorAll('.slider').forEach((e) => {
      if (e.classList.contains('active_slider')) {
        e.classList.remove('active_slider')
      }
    })
    visibleSlide();
  }
}



function createSlider() {
  let fragment = [];
  for (let i = 0; i < pets.length; i++) {
    let slide = document.createElement('div');
    slide.classList.add('slider');

    let sliderImg = document.createElement('img')
    let sliderName = document.createElement('p')
    let sliderBtn = document.createElement('button')
    sliderImg.classList.add('slider_img')
    sliderName.classList.add('slider_name-pets')
    sliderBtn.classList.add('slider_btn')
    sliderImg.src = pets[i].img;
    sliderName.innerText = pets[i].name;
    sliderBtn.innerText = 'Learn more';

    slide.append(sliderImg, sliderName, sliderBtn)
    fragment.push(slide);
  }

  return fragment;
}

function init() {
  slider.append(...createSlider())
  changeWidth()
}

window.addEventListener('resize', changeWidth, false);
window.addEventListener('load', init)