/* eslint-disable import/prefer-default-export */
export const WinPuzzle = class {
  constructor() {
    this.winBlock = document.createElement('div');
    this.closeBtnWinBlock = document.createElement('button');
    this.winTitle = document.createElement('h3');
    this.winText = document.createElement('p');
    this.winTime = document.createElement('span');
    this.winMove = document.createElement('span');
    this.winImg = document.createElement('img');
  }

  init() {
    this.winBlock.classList.add('win_block');
    this.closeBtnWinBlock.classList.add('closeBtn_win_block');
    this.winTitle.classList.add('win_title');
    this.winText.classList.add('win_text');
    this.winTime.classList.add('win_time');
    this.winMove.classList.add('win_move');

    this.closeBtnWinBlock.textContent = 'X';
    this.winTitle.textContent = 'Congratulations!';
    this.winImg.src = './img/win.gif';

    this.winBlock.append(this.closeBtnWinBlock, this.winTitle, this.winText, this.winImg);
    document.querySelector('body').append(this.winBlock);
  }
};
