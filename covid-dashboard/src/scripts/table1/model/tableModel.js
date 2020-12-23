import { Table } from '../view/tablePaint';
import { countriesData, covidData } from '../../state';

const table = new Table();

// eslint-disable-next-line import/prefer-default-export
export class TableModel {
    // eslint-disable-next-line class-methods-use-this
    getMoodTable(elemVal) {
        if (sessionStorage.getItem('country')) {
            const country = covidData.Countries.find((element) => element.CountryCode === sessionStorage.getItem('country'));
            // eslint-disable-next-line default-case
            switch (elemVal) {
            case 'Total':
                table.paintTableTotalCountry(country.TotalConfirmed, country.TotalDeaths, country.TotalRecovered);
                break;
            case 'New':
                table.paintTableTotalCountry(country.NewConfirmed, country.NewDeaths, country.NewRecovered);
                break;
            case 'Total per 100K population':
                this.calculate100(country.TotalConfirmed, country.TotalDeaths, country.TotalRecovered);
                break;
            case 'New per 100K population':
                this.calculate100(country.NewConfirmed, country.NewDeaths, country.NewRecovered);
                break;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (elemVal === 'Total') {
                table.paintTableTotal(covidData.Global.TotalConfirmed, covidData.Global.TotalDeaths, covidData.Global.TotalRecovered);
            } else if (elemVal === 'New') {
                table.paintTableTotal(covidData.Global.NewConfirmed, covidData.Global.NewDeaths, covidData.Global.NewRecovered);
            } else if (elemVal === 'Total per 100K population') {
                table.paintTableTotal(covidData.Global.TotalConfirmed100K, covidData.Global.TotalDeaths100K, covidData.Global.TotalRecovered100K);
            } else if (elemVal === 'New per 100K population') {
                table.paintTableTotal(covidData.Global.NewConfirmed100K, covidData.Global.NewDeaths100K, covidData.Global.NewRecovered100K);
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    calculate100(conf, death, recov) {
        const population = countriesData.find((element) => element.alpha2Code === sessionStorage.getItem('country'));
        const cases100 = conf / (population.population / 100000);
        const death100 = death / (population.population / 100000);
        const recovered100 = recov / (population.population / 100000);
        table.paintTable100(cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2));
    }
}
