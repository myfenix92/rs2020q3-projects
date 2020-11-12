import { createPuzzle } from './CreatePuzzle';
import { checkEmptyBox } from './index';

class MoveBoxes {
  constructor() {
    this.activeBox = 0;
  }

  // eslint-disable-next-line consistent-return
  activeBoxes(event) {
    if (event.target.closest('.box')) {
      this.activeBox = event.target.closest('.box').dataset.num - 0;
      for (let i = 0; i < createPuzzle.randomArray.length; i += 1) {
        if (createPuzzle.randomArray[i] === this.activeBox) {
          this.activeBox = i;
          return this.activeBox;
        }
      }
    }
  }

  moveBoxes() {
    this.knockBox = new Audio();
    this.knockBox.src = 'audio/knock.mp3';
    if (checkEmptyBox) {
      this.numBufferBox = 0;
      if (createPuzzle.randomArray[this.activeBox + 1] === 0
      && (this.activeBox + 1) % createPuzzle.level !== 0) {
        document.querySelectorAll('.box')[this.activeBox + 1].after(document.querySelectorAll('.box')[this.activeBox]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox + 1];
        createPuzzle.randomArray[this.activeBox + 1] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
        localStorage.setItem('puzzle', createPuzzle.randomArray);
        localStorage.getItem('puzzle');
      } else if (createPuzzle.randomArray[this.activeBox - 1] === 0
      && (this.activeBox) % createPuzzle.level !== 0) {
        document.querySelectorAll('.box')[this.activeBox - 1].before(document.querySelectorAll('.box')[this.activeBox]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox - 1];
        createPuzzle.randomArray[this.activeBox - 1] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
        localStorage.setItem('puzzle', createPuzzle.randomArray);
        localStorage.getItem('puzzle');
      } else if (createPuzzle.randomArray[this.activeBox + createPuzzle.level] === 0) {
        this.numBufferBox = this.activeBox;
        document.querySelectorAll('.box')[this.activeBox + createPuzzle.level].before(document.querySelectorAll('.box')[this.activeBox]);
        document.querySelectorAll('.box')[this.numBufferBox].before(document.querySelectorAll('.box')[this.numBufferBox + createPuzzle.level]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox
        + createPuzzle.level];
        createPuzzle.randomArray[this.activeBox + createPuzzle.level] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
        localStorage.setItem('puzzle', createPuzzle.randomArray);
        localStorage.getItem('puzzle');
      } else if (createPuzzle.randomArray[this.activeBox - createPuzzle.level] === 0) {
        this.numBufferBox = this.activeBox;
        document.querySelectorAll('.box')[this.activeBox - createPuzzle.level].after(document.querySelectorAll('.box')[this.activeBox]);
        document.querySelectorAll('.box')[this.numBufferBox].after(document.querySelectorAll('.box')[this.numBufferBox - createPuzzle.level]);
        this.numBufferBox = createPuzzle.randomArray[this.activeBox];
        createPuzzle.randomArray[this.activeBox] = createPuzzle.randomArray[this.activeBox
        - createPuzzle.level];
        createPuzzle.randomArray[this.activeBox - createPuzzle.level] = this.numBufferBox;
        this.moveValue = +(document.querySelector('.move_value').textContent) + 1;
        this.knockBox.play();
        localStorage.setItem('puzzle', createPuzzle.randomArray);
        localStorage.getItem('puzzle');
      }
      if (this.moveValue === undefined) {
        document.querySelector('.move_value').textContent = 0;
      } else {
        document.querySelector('.move_value').textContent = this.moveValue;
      }
    }
  }
}

const moveBoxes = new MoveBoxes();

export { moveBoxes };
