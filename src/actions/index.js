import axios from 'axios';


const API_KEY = '29a81c3065a84318bf81f806d938282f';
URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url =  `${URL}&q=${city},us`;
    const request = axios.get(url); //this is the promise
    console.log('Request:', request)

    return {
        type: FETCH_WEATHER,
        payload: request //promise returned as the payload
    }
}

