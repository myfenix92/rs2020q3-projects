import { TableModel } from '../../table1/model/tableModel';
import { CountryTable } from '../view/countryTable';
import { covidData } from '../../state';

const tableModel = new TableModel();
const countryTable = new CountryTable();
// eslint-disable-next-line import/prefer-default-export
export class CountriesTableModel {
    // eslint-disable-next-line class-methods-use-this
    tableConnect(val) {
        if (sessionStorage.getItem('country')) {
            if (val === 'Total confirmed' || val === 'Total death' || val === 'Total recovered') {
                tableModel.getMoodTable('Total');
                document.getElementById('selectMoodShow').value = 'Total';
            } else if (val === 'New confirmed' || val === 'New death' || val === 'New recovered') {
                tableModel.getMoodTable('New');
                document.getElementById('selectMoodShow').value = 'New';
            } else if (val === 'Total confirmed 100K' || val === 'Total death 100K' || val === 'Total recovered 100K') {
                tableModel.getMoodTable('Total per 100K population');
                document.getElementById('selectMoodShow').value = 'Total per 100K population';
            } else if (val === 'New confirmed 100K' || val === 'New death 100K' || val === 'New recovered 100K') {
                tableModel.getMoodTable('New per 100K population');
                document.getElementById('selectMoodShow').value = 'New per 100K population';
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (val === 'Total confirmed' || val === 'Total death' || val === 'Total recovered') {
                tableModel.getMoodTable('Total');
                document.getElementById('selectMoodShow').value = 'Total';
            } else if (val === 'New confirmed' || val === 'New death' || val === 'New recovered') {
                tableModel.getMoodTable('New');
                document.getElementById('selectMoodShow').value = 'New';
            } else if (val === 'Total confirmed 100K' || val === 'Total death 100K' || val === 'Total recovered 100K') {
                tableModel.getMoodTable('Total per 100K population');
                document.getElementById('selectMoodShow').value = 'Total per 100K population';
            } else if (val === 'New confirmed 100K' || val === 'New death 100K' || val === 'New recovered 100K') {
                tableModel.getMoodTable('New per 100K population');
                document.getElementById('selectMoodShow').value = 'New per 100K population';
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    sortLetters(count) {
        if (count === 0) {
            // eslint-disable-next-line no-nested-ternary
            const newArr = covidData.Countries.sort((a, b) => ((a.Country > b.Country) ? 1 : ((b.Country > a.Country) ? -1 : 0)));
            newArr.reverse();
            countryTable.paintTable(document.getElementById('chooseView').value, newArr);
        } else {
            // eslint-disable-next-line no-nested-ternary
            const newArr = covidData.Countries.sort((a, b) => ((a.Country > b.Country) ? 1 : ((b.Country > a.Country) ? -1 : 0)));
            countryTable.paintTable(document.getElementById('chooseView').value, newArr);
        }
    }

    // eslint-disable-next-line class-methods-use-this
    sortNumbers(count) {
        if (count === 0) {
            // eslint-disable-next-line default-case
            switch (document.getElementById('chooseView').value) {
            case 'Total confirmed':
                // eslint-disable-next-line no-case-declarations
                const newArr = covidData.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr);
                break;
            case 'Total death':
                // eslint-disable-next-line no-case-declarations
                const newArr2 = covidData.Countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr2);
                break;
            case 'Total recovered':
                // eslint-disable-next-line no-case-declarations
                const newArr3 = covidData.Countries.sort((a, b) => b.TotalRecovered - a.TotalRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr3);
                break;
            case 'New confirmed':
                // eslint-disable-next-line no-case-declarations
                const newArr4 = covidData.Countries.sort((a, b) => b.NewConfirmed - a.NewConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr4);
                break;
            case 'New death':
                // eslint-disable-next-line no-case-declarations
                const newArr5 = covidData.Countries.sort((a, b) => b.NewDeaths - a.NewDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr5);
                break;
            case 'New recovered':
                // eslint-disable-next-line no-case-declarations
                const newArr6 = covidData.Countries.sort((a, b) => b.NewRecovered - a.NewRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr6);
                break;
            case 'Total confirmed 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr7 = covidData.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr7);
                break;
            case 'Total death 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr8 = covidData.Countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr8);
                break;
            case 'Total recovered 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr9 = covidData.Countries.sort((a, b) => b.TotalRecovered - a.TotalRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr9);
                break;
            case 'New confirmed 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr10 = covidData.Countries.sort((a, b) => b.NewConfirmed - a.NewConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr10);
                break;
            case 'New death 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr11 = covidData.Countries.sort((a, b) => b.NewDeaths - a.NewDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr11);
                break;
            case 'New recovered 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr12 = covidData.Countries.sort((a, b) => b.NewRecovered - a.NewRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr12);
                break;
            }
        } else {
        // eslint-disable-next-line default-case
            switch (document.getElementById('chooseView').value) {
            case 'Total confirmed':
                // eslint-disable-next-line no-case-declarations
                const newArr = covidData.Countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr);
                break;
            case 'Total death':
                // eslint-disable-next-line no-case-declarations
                const newArr2 = covidData.Countries.sort((a, b) => a.TotalDeaths - b.TotalDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr2);
                break;
            case 'Total recovered':
                // eslint-disable-next-line no-case-declarations
                const newArr3 = covidData.Countries.sort((a, b) => a.TotalRecovered - b.TotalRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr3);
                break;
            case 'New confirmed':
                // eslint-disable-next-line no-case-declarations
                const newArr4 = covidData.Countries.sort((a, b) => a.NewConfirmed - b.NewConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr4);
                break;
            case 'New death':
                // eslint-disable-next-line no-case-declarations
                const newArr5 = covidData.Countries.sort((a, b) => a.NewDeaths - b.NewDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr5);
                break;
            case 'New recovered':
                // eslint-disable-next-line no-case-declarations
                const newArr6 = covidData.Countries.sort((a, b) => a.NewRecovered - b.NewRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr6);
                break;
            case 'Total confirmed 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr7 = covidData.Countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr7);
                break;
            case 'Total death 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr8 = covidData.Countries.sort((a, b) => a.TotalDeaths - b.TotalDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr8);
                break;
            case 'Total recovered 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr9 = covidData.Countries.sort((a, b) => a.TotalRecovered - b.TotalRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr9);
                break;
            case 'New confirmed 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr10 = covidData.Countries.sort((a, b) => a.NewConfirmed - b.NewConfirmed);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr10);
                break;
            case 'New death 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr11 = covidData.Countries.sort((a, b) => a.NewDeaths - b.NewDeaths);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr11);
                break;
            case 'New recovered 100K':
                // eslint-disable-next-line no-case-declarations
                const newArr12 = covidData.Countries.sort((a, b) => a.NewRecovered - b.NewRecovered);
                countryTable.paintTable(document.getElementById('chooseView').value, newArr12);
                break;
            }
        }
    }
}
