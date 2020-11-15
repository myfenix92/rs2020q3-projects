/* eslint-disable import/prefer-default-export */
export const SettingPuzzle = class {
  constructor() {
    this.chooseFieldBox = document.createElement('div');
    this.chooseField = document.createElement('p');
    this.chooseFieldSelect = document.createElement('select');
    this.chooseFieldBtn = document.createElement('btn');
    this.volumeMoveBox = document.createElement('input');
    this.volumeLabel = document.createElement('label');
    this.volumeText = document.createElement('span');
    this.optionArray = ['threeField', 'fourField', 'fiveField', 'sixField', 'sevenField', 'eightField'];
    this.fragment = '';
  }

  init() {
    this.chooseFieldBox.classList.add('level', 'hidden');
    this.chooseFieldBtn.classList.add('chooseField');
    this.volumeLabel.classList.add('volume');
    this.volumeText.classList.add('text_volume');
    this.volumeMoveBox.classList.add('check_volume');
    this.chooseFieldBtn.textContent = 'OK';
    this.volumeMoveBox.setAttribute('type', 'checkbox');
    for (let i = 0; i < this.optionArray.length; i += 1) {
      this.chooseFieldOption = document.createElement('option');
      this.chooseFieldOption.setAttribute('value', i + 3);
      this.chooseFieldOption.setAttribute('id', this.optionArray[i]);
      this.chooseFieldOption.textContent = `${i + 3}x${i + 3}`;
      this.chooseFieldSelect.append(this.chooseFieldOption);
    }

    this.volumeLabel.append(this.volumeMoveBox, this.volumeText);
    this.chooseField.append(this.chooseFieldSelect);
    this.chooseFieldBox.append(this.chooseField, this.volumeLabel, this.chooseFieldBtn);
    this.fragment = this.chooseFieldBox;
    return this.fragment;
  }
};
