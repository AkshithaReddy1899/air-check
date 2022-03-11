import { v4 as uuidv4 } from 'uuid';

const url = 'https://api.covid19tracking.narrativa.com/api/';
// api for lat and lon cordinates from city name
const latLonUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const openApiKey = '0da6b037ec6d2d2228fca229a97ce855';
// api for air pollution
const airPollutionUrl = 'http://api.openweathermap.org/data/2.5/air_pollution?';
// api for city name from lat and lon cordinates
const latLonReverse = 'http://api.openweathermap.org/geo/1.0/reverse?';

// http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}

const date = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().length === 1 ? `0${(today.getMonth() + 1).toString()}`
    : (today.getMonth() + 1).toString();
  const day = today.getDate().toString().length === 1 ? `0${today.getDate().toString()}`
    : today.getDate().toString();
  return `${year}-${month}-${day}`;
};

const dataObj = (data) => {
  const newObj = {
    id: uuidv4(),
    aqi: data[0].list[0].main.aqi,
    co: data[0].list[0].components.co,
    nh3: data[0].list[0].components.nh3,
    no: data[0].list[0].components.no,
    no2: data[0].list[0].components.no2,
    o3: data[0].list[0].components.o3,
    pm2_5: data[0].list[0].components.pm2,
    pm10: data[0].list[0].components.pm10,
    so2: data[0].list[0].components.so2,
  };
  return newObj;
};

export {
  url,
  date,
  latLonUrl,
  openApiKey,
  airPollutionUrl,
  latLonReverse,
  dataObj,
};
