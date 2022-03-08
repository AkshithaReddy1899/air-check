import { v4 as uuidv4 } from 'uuid';
import airApi from '../api/airApi';

const FETCH_DATA = 'airPollution/FETCH_DATA';
const SEARCH_DATA = 'airPollution/SEARCH_DATA';
const url = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const latLon = 'http://api.openweathermap.org/geo/1.0/reverse?';
const city = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const key = 'dc9a27d59b894afaaf797823a3420c36';

const initialState = [];

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const searchData = (payload) => ({
  type: SEARCH_DATA,
  payload,
});

const dataObj = (data) => {
  const newObj = {
    id: uuidv4(),
    city: data[1][0].name,
    state: data[1][0].state,
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

export const searchDataFromApi = (cityname) => (dispatch) => {
  const obj = [];
  fetch(`${city}${cityname}&limit=1&appid=${key}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      obj.push(data[0].lat);
      obj.push(data[0].lon);

      Promise.all([
        fetch(`${url}lat=${obj[0]}&lon=${obj[1]}&appid=${key}`, {
          method: 'GET',
        }).then((res) => res.json()),
        fetch(`${latLon}lat=${obj[0]}&lon=${obj[1]}&limit=1&appid=${key}`, {
          method: 'GET',
        }).then((res) => res.json()),
      ])
        .then((data) => {
          dispatch(searchData(dataObj(data)));
        });
    });
};

export const fetchDataFromApi = () => (dispatch) => {
  const arr = [];
  const list = (obj) => {
    arr.push(obj);
    if (arr.length === 8) {
      dispatch(fetchData(arr));
    }
  };
  const result = airApi();
  result.map((promise) => (
    promise
      .then((data) => {
        list(dataObj(data));
      })
      .catch((err) => {
        console.log(err);
      })
  ));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, action.payload];
    case SEARCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
