import { countriesData } from '../../state';

// eslint-disable-next-line import/prefer-default-export
export class CountryTable {
// eslint-disable-next-line class-methods-use-this
    paintTable(value, arr) {
        document.querySelector('.countryTbody').innerHTML = '';
        let popul100;
        // eslint-disable-next-line default-case
        switch (value) {
        case 'Total confirmed':
            for (let i = 0; i < arr.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${arr[i].TotalConfirmed}</td></tr>`;
            }
            break;
        case 'Total death':
            for (let i = 0; i < arr.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${arr[i].TotalDeaths}</td></tr>`;
            }
            break;
        case 'Total recovered':
            for (let i = 0; i < arr.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${arr[i].TotalRecovered}</td></tr>`;
            }
            break;
        case 'New confirmed':
            for (let i = 0; i < arr.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${arr[i].NewConfirmed}</td></tr>`;
            }
            break;
        case 'New death':
            for (let i = 0; i < arr.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${arr[i].NewDeaths}</td></tr>`;
            }
            break;
        case 'New recovered':
            for (let i = 0; i < arr.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${arr[i].NewRecovered}</td></tr>`;
            }
            break;
        case 'Total confirmed 100K':
            for (let i = 0; i < arr.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === arr[i].CountryCode);
                popul100 = arr[i].TotalConfirmed / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'Total death 100K':
            for (let i = 0; i < arr.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === arr[i].CountryCode);
                popul100 = arr[i].TotalDeaths / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'Total recovered 100K':
            for (let i = 0; i < arr.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === arr[i].CountryCode);
                popul100 = arr[i].TotalRecovered / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'New confirmed 100K':
            for (let i = 0; i < arr.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === arr[i].CountryCode);
                popul100 = arr[i].NewConfirmed / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'New death 100K':
            for (let i = 0; i < arr.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === arr[i].CountryCode);
                popul100 = arr[i].NewDeaths / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'New recovered 100K':
            for (let i = 0; i < arr.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === arr[i].CountryCode);
                popul100 = arr[i].NewRecovered / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td><img class="flag" src="${arr[i].flag.flag}"></td><td>${arr[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        }
    }
}
