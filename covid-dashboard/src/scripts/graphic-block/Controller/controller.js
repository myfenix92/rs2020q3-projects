/* eslint-disable import/prefer-default-export */
export const ControllerGraphicClass = class {
    constructor() {
        this.chooseValue;
    }

    changeSelect() {
        this.index = document.querySelector('.graphic').options.selectedIndex;
        this.chooseValue = document.querySelector('.graphic').options[this.index].value;
        return this.chooseValue;
    }
};
