/* eslint-disable import/prefer-default-export */
import { myChart } from '../constants/index';
import { sumPopualtion, populationCountry } from '../../state';
import { State } from '../../../index';

export const ViewGraphicClass = class {
    init(label, data, color) {
        this.a = document.querySelector('.graphic').options.selectedIndex;
        if (document.querySelector('.graphic').options[this.a].value.includes('100K') && sessionStorage.getItem('country') == null) {
            this.everyDayData = Object.values(data).map((_, i) => +(Object.values(data)[i] / (sumPopualtion / 100000)).toFixed(4));
        } else if (document.querySelector('.graphic').options[this.a].value.includes('100K') && sessionStorage.getItem('country') != null) {
            State.getDataFromCountry(sessionStorage.getItem('country'));
            this.everyDayData = Object.values(data).map((_, i) => +(Object.values(data)[i] / (populationCountry / 100000)).toFixed(4));
        } else {
            this.everyDayData = Object.values(data);
        }
        this.graphicData = {
            labels: Object.keys(data),
            datasets: [{
                label,
                data: this.everyDayData,
                backgroundColor: color,
                borderJoinStyle: 'round',
                borderWidth: 1,
                showLine: true,
            }],
        };
        myChart.data = this.graphicData;
        myChart.update();
    }
};
