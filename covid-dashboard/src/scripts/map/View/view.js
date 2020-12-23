/* eslint-disable import/prefer-default-export */
import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import {
    map, grayscale, info, legend, Model,
} from '../constants/index';
import { covidData } from '../../state';
import { State } from '../../..';

export const ViewMapClass = class {
    constructor() {
        this.nameCountryHover = '';
        this.locationCircle = L.circle();
    }

    init() {
        legend.onAdd = this.addLegend;
        info.update = this.updateInfo;
        info.onAdd = this.addInfo;
        grayscale.addTo(map);
        info.addTo(map);
        legend.addTo(map);
        grayscale.addTo(map);
    }

    addCircle(name, color, size) {
        document.querySelectorAll(`path[stroke="${this.stroke}"]`).forEach((e) => e.remove());
        this.circleOptions = {
            color,
            fillColor: color,
            fillOpacity: 0.3,
        };
        State.getCalculatePopulation();
        for (let i = 0; i < covidData.Countries.length; i += 1) {
            this.location = L.circle(covidData.Countries[i].centerCountry,
                (Math.round(covidData.Countries[i][name] / size)), this.circleOptions);
            this.location.addTo(map);
        }
        this.stroke = document.querySelectorAll('path')[document.querySelectorAll('path').length - 1].getAttribute('stroke');
    }

    addInfo() {
        this.div = L.DomUtil.create('div', 'info');
        this.div.innerHTML = '<h4>Statistic</h4> <br /> Hover over a country';
        return this.div;
    }

    updateInfo(props) {
        if (props != undefined) {
            covidData.Countries.forEach((e) => {
                if (props.id === e.CountryCode) {
                    this.nameCountryHover = e[Model.changeColorCircle()];
                }
            });
            this.div.innerHTML = `<h4>Statistic</h4>${props
                ? `<b class="name_country">${props.name}</b><br />${typeof (this.nameCountryHover) === 'number' ? this.nameCountryHover : 'No data'} cases`
                : 'Hover over a country'}`;
        } else {
            this.div.innerHTML = '<h4>Statistic</h4><br />Hover over a country';
        }
        this.nameCountryHover = '';
    }

    static style() {
        return {
            weight: 1,
            opacity: 1,
            color: '#666',
            fillColor: '#555',
        };
    }

    highlightFeature(e) {
        this.layer = e.target;
        this.layer.setStyle({
            weight: 2,
            color: 'white',
            dashArray: '3',
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            this.layer.bringToFront();
        }
        info.update(this.layer.feature.properties);
    }

    addLegend() {
        this.mas = [];
        this.div = L.DomUtil.create('div', 'info legend');
        this.grades = ['1', '1K', '3K', '20K', '50K', '100K', '250K', '400K', '500K', '1M', '5M'];
        this.labels = [];
        for (let i = 0; i < this.grades.length; i += 1) {
            this.from = this.grades[i];
            this.to = this.grades[i + 1];
            this.labels.push(
                `<p class="legend_items"><i class="legend-info" style="background-color: red; width: ${5 + i}px; height: ${5 + i}px"></i> ${this.from}${this.to ? `&ndash;${this.to}</p>` : '+'}`,
            );
        }
        this.div.innerHTML = this.labels.join('');
        return this.div;
    }
};
