/* eslint-disable no-loop-func */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-await-in-loop */
import regeneratorRuntime from 'regenerator-runtime';

export let covidData;
export let countriesData;
export let allDayCases;
export let allDayDeaths;
export let allDayRecovered;
export let sumPopualtion = 0;
export let dataFromCountry;
export let populationCountry;
export let country100K;
export const StateClass = class {
    async getCovidData() {
        try {
            // https://cors-anywhere.herokuapp.com/
            this.url = 'https://api.covid19api.com/summary';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data.Message === '') {
                covidData = this.data;
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getCountriesData() {
        try {
            this.url = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag;alpha2Code';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            countriesData = this.data;
            for (let i = 0; i < countriesData.length; i += 1) {
                sumPopualtion += countriesData[i].population;
            }
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                this.flag = countriesData.find((el) => el.alpha2Code === covidData.Countries[i].CountryCode);
                covidData.Countries[i].flag = this.flag;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getCovidDataCountries() {
        try {
            this.url = 'https://disease.sh/v3/covid-19/countries';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                if (i === 138) {
                    covidData.Countries[i].centerCountry = [43, 21];
                } else {
                    this.center = this.data.find((el) => el.countryInfo.iso2 === covidData.Countries[i].CountryCode);
                    covidData.Countries[i].centerCountry = [this.center.countryInfo.lat, this.center.countryInfo.long];
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    getCalculatePopulation() {
        for (this.i = 0; this.i < covidData.Countries.length; this.i += 1) {
            covidData.Countries[this.i].TotalConfirmed100K = +(covidData.Countries[this.i].TotalConfirmed / (countriesData.find((e) => e.alpha2Code === covidData.Countries[this.i].CountryCode).population / 100000)).toFixed(2);
            covidData.Countries[this.i].TotalDeaths100K = +(covidData.Countries[this.i].TotalDeaths / (countriesData.find((e) => e.alpha2Code === covidData.Countries[this.i].CountryCode).population / 100000)).toFixed(2);
            covidData.Countries[this.i].TotalRecovered100K = +(covidData.Countries[this.i].TotalRecovered / (countriesData.find((e) => e.alpha2Code === covidData.Countries[this.i].CountryCode).population / 100000)).toFixed(2);
            covidData.Countries[this.i].NewConfirmed100K = +(covidData.Countries[this.i].NewConfirmed / (countriesData.find((e) => e.alpha2Code === covidData.Countries[this.i].CountryCode).population / 100000)).toFixed(2);
            covidData.Countries[this.i].NewDeaths100K = +(covidData.Countries[this.i].NewDeaths / (countriesData.find((e) => e.alpha2Code === covidData.Countries[this.i].CountryCode).population / 100000)).toFixed(2);
            covidData.Countries[this.i].NewRecovered100K = +(covidData.Countries[this.i].NewRecovered / (countriesData.find((e) => e.alpha2Code === covidData.Countries[this.i].CountryCode).population / 100000)).toFixed(2);
        }
        covidData.Global.TotalConfirmed100K = +(covidData.Global.TotalConfirmed / (sumPopualtion / 100000)).toFixed(2);
        covidData.Global.TotalDeaths100K = +(covidData.Global.TotalDeaths / (sumPopualtion / 100000)).toFixed(2);
        covidData.Global.TotalRecovered100K = +(covidData.Global.TotalRecovered / (sumPopualtion / 100000)).toFixed(2);
        covidData.Global.NewConfirmed100K = +(covidData.Global.NewConfirmed / (sumPopualtion / 100000)).toFixed(2);
        covidData.Global.NewDeaths100K = +(covidData.Global.NewDeaths / (sumPopualtion / 100000)).toFixed(2);
        covidData.Global.NewRecovered100K = +(covidData.Global.NewRecovered / (sumPopualtion / 100000)).toFixed(2);
    }

    async getTotalEveryDayData() {
        try {
            this.url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=366';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            allDayCases = this.data.cases;
            allDayDeaths = this.data.deaths;
            allDayRecovered = this.data.recovered;
        } catch (error) {
            console.log(error);
        }
    }

    async getDataFromCountry(nameCountry) {
        try {
            this.url = `https://api.covid19api.com/total/country/${nameCountry}`;
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            dataFromCountry = this.data;
            populationCountry = countriesData.find((e) => e.alpha2Code === sessionStorage.getItem('country')).population;
            this.dayData = [];
            this.numCases = [];
            this.numDeaths = [];
            this.numRecovered = [];
            for (let i = 0; i < dataFromCountry.length; i += 1) {
                this.dayData.push(dataFromCountry[i].Date);
                this.numCases.push(dataFromCountry[i].Confirmed);
                this.numDeaths.push(dataFromCountry[i].Deaths);
                this.numRecovered.push(dataFromCountry[i].Recovered);
            }
            this.dayData = this.dayData.map((e) => e.slice(2, 10).replaceAll('-', '/').repeat(2).slice(3, 10)
                .split(''));
            this.dayData.map((_, i) => this.dayData[i].splice(5, 0, '/'));
            this.dayData = this.dayData.map((e) => e.join(''));
            allDayCases = Object.assign(...this.dayData.map((n, i) => ({ [n]: this.numCases[i] })));
            allDayDeaths = Object.assign(...this.dayData.map((n, i) => ({ [n]: this.numDeaths[i] })));
            allDayRecovered = Object.assign(...this.dayData.map((n, i) => ({ [n]: this.numRecovered[i] })));
        } catch (error) {
            console.log(error);
        }
    }

    getNewEveryDayData(newDay, data) {
        newDay.push(Object.values(data)[0]);
        for (this.i = 0; this.i < Object.values(data).length - 1; this.i += 1) {
            newDay.push(Object.values(data)[this.i + 1] - Object.values(data)[this.i]);
        }
        return Object.assign(...Object.keys(data).map((n, i) => ({ [n]: newDay.map((e) => (e < 0 ? e = 0 : e))[i] })));
    }
};
