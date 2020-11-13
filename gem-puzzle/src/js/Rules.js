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

    this.rulesText.textContent = 'Цель игры — перемещая костяшки по коробке, добиться упорядочивания их по номерам слева-направо в виде змейки, так чтобы пустая клетка оказалась в нижнем правом углу, желательно сделав как можно меньше перемещений. Игра сохраняет свое положение как только вы передвинули костяшку и при перезагрузке появляется сохраненное в этот момент поле. В разделе Settings можно выбрать размер поля и включить/выключить звук передвижения костяшек. По умолчанию звук включен.';
    this.rulesBox.append(this.rulesText, this.rulesBtn);
    this.fragment = this.rulesBox;
    return this.fragment;
  }
}

const rulesPuzzle = new RulesPuzzle();

export { rulesPuzzle };
