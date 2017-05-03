import axios from 'axios';

const API_KEY = 'd1879bbe9630aefc7d42e8f67df9d3ab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city},us`;
   const request = axios.get(url);

   return {
      type: FETCH_WEATHER,
      payload: request
   };
}
