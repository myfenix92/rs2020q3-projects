/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { htmlText } from './htmlText';

export const WriteHTML = class {
  constructor() {
    this.htmlRoot = document.querySelector('.html_text');
    this.sunItem = document.querySelector('.sun');
    this.earthGroupItem = document.querySelectorAll('.earth_group');
    this.moonItem = document.querySelectorAll('.moon');
    this.earthItem = document.querySelector('.earth');
    this.marsItem = document.querySelector('.mars');
    this.mercuryItem = document.querySelector('.mercury');
    this.circleItem = document.querySelectorAll('.circle');
    this.giantGroupItem = document.querySelectorAll('.giant_group');
    this.saturnItem = document.querySelector('.saturn');
    this.jupiterItem = document.querySelector('.jupiter');
    this.neptuneItem = document.querySelector('.neptune');
  }

  templateHTMLCode(level) {
    this.htmlRoot.textContent = '';
    switch (level) {
      case 1:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_1.text);
        this.sunItem.classList.add('visible');
        break;
      case 2:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_2.text);
        this.earthGroupItem.forEach((planet) => {
          planet.classList.add('visible');
        });
        this.sunItem.classList.add('visible', 'animation_stop');
        break;
      case 3:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_3.text);
        this.earthGroupItem.forEach((planet) => {
          planet.classList.add('visible', 'animation_stop');
        });
        this.moonItem.forEach((moon) => {
          moon.classList.add('visible');
        });
        this.sunItem.classList.add('visible', 'animation_stop');
        break;
      case 4:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_4.text);
        this.earthGroupItem.forEach((planet) => {
          planet.classList.add('visible', 'animation_stop');
        });
        this.earthItem.classList.remove('animation_stop');
        this.moonItem.forEach((moon) => {
          moon.classList.add('visible', 'animation_stop');
        });
        this.sunItem.classList.add('visible', 'animation_stop');
        break;
      case 5:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_5.text);
        this.earthGroupItem.forEach((planet) => {
          planet.classList.add('visible', 'animation_stop');
        });
        this.marsItem.classList.remove('animation_stop');
        this.mercuryItem.classList.remove('animation_stop');
        this.moonItem.forEach((moon) => {
          moon.classList.add('visible', 'animation_stop');
        });
        this.sunItem.classList.add('visible', 'animation_stop');
        break;
      case 6:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_6.text);
        this.circleItem.forEach((planet) => {
          planet.classList.add('visible', 'animation_stop');
        });
        this.giantGroupItem.forEach((planet) => {
          planet.classList.remove('animation_stop');
        });
        break;
      case 7:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_7.text);
        this.circleItem.forEach((planet) => {
          planet.classList.add('visible', 'animation_stop');
        });
        this.saturnItem.classList.remove('animation_stop');
        break;
      case 8:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_8.text);
        this.circleItem.forEach((planet) => {
          planet.classList.add('visible');
          planet.classList.remove('animation_stop');
        });
        this.moonItem.forEach((moon) => {
          moon.classList.add('animation_stop');
        });
        this.earthItem.classList.add('animation_stop');
        this.sunItem.classList.add('animation_stop');
        break;
      case 9:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_9.text);
        this.circleItem.forEach((planet) => {
          planet.classList.add('visible', 'animation_stop');
        });
        this.jupiterItem.classList.remove('animation_stop');
        break;
      case 10:
        this.htmlRoot.insertAdjacentHTML('afterbegin', htmlText.level_10.text);
        this.circleItem.forEach((planet) => {
          planet.classList.add('visible', 'animation_stop');
        });
        this.neptuneItem.classList.remove('animation_stop');
        break;
      default:
        break;
    }
  }
};
