import { v4 as uuidv4 } from 'uuid';
import airApi from '../api/airApi';

const FETCH_DATA = 'airPollution/FETCH_DATA';

const initialState = [];

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const fetchDataFromApi = () => (dispatch) => {
  const arr = [];
  const list = (obj) => {
    arr.push(obj);
    if (arr.length === 8) {
      console.log(arr);
      dispatch(fetchData(arr));
    }
  };
  const result = airApi();
  result.map((promise) => (
    promise
      .then((data) => {
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
        list(newObj);
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
    default:
      return state;
  }
};

export default reducer;
