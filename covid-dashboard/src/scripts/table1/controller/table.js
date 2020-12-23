import { TableModel } from '../model/tableModel';
import { CountryTable } from '../../table2/view/countryTable';
import {
    ModelGraphic, Model, eventChange, State,
} from '../../../index';
import { covidData } from '../../state';

document.getElementById('selectMoodShow').addEventListener('change', () => {
    const tableModel = new TableModel();
    const countryTable = new CountryTable();
    tableModel.getMoodTable(document.getElementById('selectMoodShow').value);
    if (document.getElementById('selectMoodShow').value === 'Total') {
        document.getElementById('chooseView').value = 'Total confirmed';
        countryTable.paintTable('Total confirmed', covidData.Countries);
        document.querySelector('.mapSelect').options.selectedIndex = 0;
        document.querySelector('.graphic').options.selectedIndex = 0;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    } else if (document.getElementById('selectMoodShow').value === 'New') {
        document.getElementById('chooseView').value = 'New confirmed';
        countryTable.paintTable('New confirmed', covidData.Countries);
        document.querySelector('.mapSelect').options.selectedIndex = 3;
        document.querySelector('.graphic').options.selectedIndex = 3;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    } else if (document.getElementById('selectMoodShow').value === 'Total per 100K population') {
        document.getElementById('chooseView').value = 'Total confirmed 100K';
        countryTable.paintTable('Total confirmed 100K', covidData.Countries);
        document.querySelector('.mapSelect').options.selectedIndex = 6;
        document.querySelector('.graphic').options.selectedIndex = 6;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    } else if (document.getElementById('selectMoodShow').value === 'New per 100K population') {
        document.getElementById('chooseView').value = 'New confirmed 100K';
        countryTable.paintTable('New confirmed 100K', covidData.Countries);
        document.querySelector('.mapSelect').options.selectedIndex = 9;
        document.querySelector('.graphic').options.selectedIndex = 9;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    }
});

document.querySelector('.btn_clear_country').addEventListener('click', () => {
    sessionStorage.clear();
    document.querySelector('.nameCountry').textContent = '';
    document.querySelector('.btn_clear_country').classList.add('view_btn');
    State.getTotalEveryDayData();
    setTimeout(() => {
        eventChange(0);
    }, 500);
});
