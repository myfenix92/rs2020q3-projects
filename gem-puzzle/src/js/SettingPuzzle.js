class SettingPuzzle {
  constructor() {
    this.chooseFieldBox = document.createElement('div');
    this.chooseField = document.createElement('p');
    this.chooseFieldSelect = document.createElement('select');
    this.chooseFieldBtn = document.createElement('btn');
    this.optionArray = ['threeField', 'fourField', 'fiveField', 'sixField', 'sevenField', 'eightField'];
    this.fragment = '';
  }

  init() {
    this.chooseFieldBox.classList.add('level', 'hidden');
    this.chooseFieldBtn.classList.add('chooseField');
    this.chooseFieldBtn.textContent = 'OK';

    for (let i = 0; i < this.optionArray.length; i += 1) {
      this.chooseFieldOption = document.createElement('option');
      this.chooseFieldOption.setAttribute('value', i + 3);
      this.chooseFieldOption.setAttribute('id', this.optionArray[i]);
      this.chooseFieldOption.textContent = `${i + 3}x${i + 3}`;
      this.chooseFieldSelect.append(this.chooseFieldOption);
    }

    this.chooseField.append(this.chooseFieldSelect);
    this.chooseFieldBox.append(this.chooseField, this.chooseFieldBtn);
    this.fragment = this.chooseFieldBox;
    return this.fragment;
  }
}

const settingPuzzle = new SettingPuzzle();

export { settingPuzzle };
