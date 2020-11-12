class RulesPuzzle {
  constructor() {
    this.rulesBox = document.createElement('div');
    this.rulesText = document.createElement('p');
    this.rulesBtn = document.createElement('btn');
    this.fragment = '';
  }

  init() {
    this.rulesBox.classList.add('rules', 'hidden');
    this.rulesBtn.classList.add('rulesBtn');
    this.rulesBtn.textContent = 'OK';

    this.rulesText.textContent = 'Цель игры — перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений. В разделе Settings можно выбрать размер поля.';
    this.rulesBox.append(this.rulesText, this.rulesBtn);
    this.fragment = this.rulesBox;
    return this.fragment;
  }
}

const rulesPuzzle = new RulesPuzzle();

export { rulesPuzzle };
