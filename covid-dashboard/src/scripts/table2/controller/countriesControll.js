import { CountryTable } from '../view/countryTable';
import { CountriesTableModel } from '../model/countiesTableModel';
import { covidData } from '../../state';

const countriesTableModel = new CountriesTableModel();

document.getElementById('chooseView').addEventListener('change', () => {
    const countryTable = new CountryTable();
    countryTable.paintTable(document.getElementById('chooseView').value, covidData.Countries);
    countriesTableModel.tableConnect(document.getElementById('chooseView').value);
});
let countLetter = 0;
let countNumbers = 0;
document.getElementById('letter').addEventListener('click', () => {
    if (countLetter === 0) {
        countriesTableModel.sortLetters(countLetter);
        countLetter = 1;
    } else {
        countriesTableModel.sortLetters(countLetter);
        countLetter = 0;
    }
});
document.getElementById('number').addEventListener('click', () => {
    if (countNumbers === 0) {
        countriesTableModel.sortNumbers(countNumbers);
        countNumbers = 1;
    } else {
        countriesTableModel.sortNumbers(countNumbers);
        countNumbers = 0;
    }
});
