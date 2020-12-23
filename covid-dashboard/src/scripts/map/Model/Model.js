/* eslint-disable import/prefer-default-export */
import { ViewMap, Controller } from '../constants/index';

export const ModelClass = class {
    constructor() {
        this.apiName = 'TotalConfirmed';
    }

    changeColorCircle() {
        this.select = Controller.changeSelect();
        switch (this.select) {
        case 'Total death':
            this.apiName = 'TotalDeaths';
            ViewMap.addCircle(this.apiName, 'yellow', 1.5);
            break;
        case 'Total confirmed':
            this.apiName = 'TotalConfirmed';
            ViewMap.addCircle(this.apiName, 'red', 40);
            break;
        case 'Total recovered':
            this.apiName = 'TotalRecovered';
            ViewMap.addCircle(this.apiName, 'lightblue', 25);
            break;
        case 'New confirmed':
            this.apiName = 'NewConfirmed';
            ViewMap.addCircle(this.apiName, 'red', 0.4);
            break;
        case 'New death':
            this.apiName = 'NewDeaths';
            ViewMap.addCircle(this.apiName, 'yellow', 0.005);
            break;
        case 'New recovered':
            this.apiName = 'NewRecovered';
            ViewMap.addCircle(this.apiName, 'lightblue', 0.3);
            break;
        case 'Total death 100K':
            this.apiName = 'TotalDeaths100K';
            ViewMap.addCircle(this.apiName, 'yellow', 0.003);
            break;
        case 'Total confirmed 100K':
            this.apiName = 'TotalConfirmed100K';
            ViewMap.addCircle(this.apiName, 'red', 0.2);
            break;
        case 'Total recovered 100K':
            this.apiName = 'TotalRecovered100K';
            ViewMap.addCircle(this.apiName, 'lightblue', 0.15);
            break;
        case 'New confirmed 100K':
            this.apiName = 'NewConfirmed100K';
            ViewMap.addCircle(this.apiName, 'red', 0.003);
            break;
        case 'New death 100K':
            this.apiName = 'NewDeaths100K';
            ViewMap.addCircle(this.apiName, 'yellow', 0.0001);
            break;
        case 'New recovered 100K':
            this.apiName = 'NewRecovered100K';
            ViewMap.addCircle(this.apiName, 'lightblue', 0.004);
            break;
        default:
            break;
        }
        return this.apiName;
    }
};
