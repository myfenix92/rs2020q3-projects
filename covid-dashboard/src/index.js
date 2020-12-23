import './style/style.scss';
import './style/keyBoard.scss';
/* eslint-disable import/prefer-default-export */
import { Table } from './scripts/table1/view/tablePaint';
import { CountryTable } from './scripts/table2/view/countryTable';
import {
    StateClass, allDayCases, covidData,
} from './scripts/state';
import './style/style.css';
import './style/keyBoard.css';
import { countryData } from './scripts/map/constants/Country';
import { map, ViewMap, Model } from './scripts/map/constants/index';
import { ControllerClass } from './scripts/map/Controller/index';
import rememberCountry from './scripts/general/search';
import './scripts/keyBoard';
import { TableModel } from './scripts/table1/model/tableModel';
import { IfError } from './scripts/general/ifError';
import { ViewGraphicClass } from './scripts/graphic-block/View/index';
import { ModelClass } from './scripts/graphic-block/Model/index';
import { CountriesTableModel } from './scripts/table2/model/countiesTableModel';

import './scripts/table1/controller/table';
import './scripts/table2/controller/countriesControll';

const ViewGraphic = new ViewGraphicClass();
const State = new StateClass();
const countryTable = new CountryTable();
const table = new Table();
const ModelGraphic = new ModelClass();
const tableModel = new TableModel();
const countriesTableModel = new CountriesTableModel();
let geojson;

function style() {
    return {
        weight: 1,
        opacity: 1,
        color: '#666',
        dashArray: '',
        fillColor: '#555',
    };
}

document.querySelectorAll('.full_screen').forEach((el) => el.addEventListener('click', (e) => {
    document.querySelector('main').classList.toggle('main_full');
    if (e.target.closest('div').classList.contains('graphic_block')) {
        document.querySelector('.container').classList.toggle('view_block');
        document.querySelector('.countryBlock').classList.toggle('view_block');
        document.querySelector('.map_block').classList.toggle('view_block');
        document.getElementById('myChart').style.width = `${564}px`;
        document.getElementById('myChart').height = 282;
        document.getElementById('myChart').style.width = `${282}px`;
        document.getElementById('myChart').height = 282;
    }
    if (e.target.closest('div').classList.contains('countryBlock')) {
        document.querySelector('.graphic_block').classList.toggle('view_block');
        document.querySelector('.container').classList.toggle('view_block');
        document.querySelector('.map_block').classList.toggle('view_block');
    }
    if (e.target.closest('div').classList.contains('map_block')) {
        document.querySelector('.container').classList.toggle('view_block');
        document.querySelector('.countryBlock').classList.toggle('view_block');
        document.querySelector('.graphic_block').classList.toggle('view_block');

        document.getElementById('map').classList.toggle('map_size');
        setTimeout(() => { map.invalidateSize(); }, 400);
    }
    if (e.target.closest('div').classList.contains('container')) {
        document.querySelector('.graphic_block').classList.toggle('view_block');
        document.querySelector('.countryBlock').classList.toggle('view_block');
        document.querySelector('.map_block').classList.toggle('view_block');
        document.querySelector('.tableBlock').classList.toggle('tableBlock_size');
    }
}));

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: ViewMap.highlightFeature,
        mouseout: ControllerClass.resetHighlight,
        click: (e) => {
            const layers = e.target;
            rememberCountry(layers.feature.properties.id);
            document.querySelector('.nameCountry').textContent = layers.feature.properties.name;
            document.querySelector('.btn_clear_country').classList.remove('view_btn');
            State.getDataFromCountry(layers.feature.properties.id);
            eventChange(0);
            setTimeout(() => {
                ModelGraphic.changeColorGraphic();
                tableModel.getMoodTable('Total');
            }, 1000);
        },
    });
}

export function eventChange(select) {
    document.querySelector('.mapSelect').options.selectedIndex = select;
    document.querySelector('.graphic').options.selectedIndex = select;
    document.querySelector('#chooseView').options.selectedIndex = select;
    ModelGraphic.changeColorGraphic();
    Model.changeColorCircle();
    countryTable.paintTable(document.querySelector('.table2select').options[select].value, covidData.Countries);
    countriesTableModel.tableConnect(document.getElementById('chooseView').value);
}

document.querySelector('.mapSelect').addEventListener('change', () => {
    eventChange(document.querySelector('.mapSelect').options.selectedIndex);
});
document.querySelector('.graphic').addEventListener('change', () => {
    eventChange(document.querySelector('.graphic').options.selectedIndex);
});
document.querySelector('.table2select').addEventListener('change', () => {
    eventChange(document.querySelector('.table2select').options.selectedIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    State.getCovidData();
    State.getTotalEveryDayData();
    setTimeout(() => { State.getCountriesData(); State.getCovidDataCountries(); }, 1000);
});
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!covidData || covidData === 'undefined') {
            const error = new IfError();
            error.ifErrorView();
            setTimeout(() => {
                State.getCovidData();
                window.location.reload();
            }, 3000);
        } else {
            sessionStorage.clear();
            document.getElementById('chooseView').value = 'Total confirmed';
            countryTable.paintTable(document.getElementById('chooseView').value, covidData.Countries);
            table.paintTableSelect();
            table.paintTableHeader();
            tableModel.getMoodTable('Total');
            ViewMap.init();
            setTimeout(() => {
                ViewMap.addCircle('TotalConfirmed', 'red', 40);
                ViewGraphic.init('Total confirmed', allDayCases, 'red');
                geojson = L.geoJson(countryData, {
                    style,
                    onEachFeature,
                }).addTo(map);
            }, 2000);
        }
    }, 1000);
});

export {
    geojson, State, ModelGraphic, Model, ViewGraphic,
};
