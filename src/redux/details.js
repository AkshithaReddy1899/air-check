import { v4 as uuidv4 } from 'uuid';

const GET_DETAILS = 'apiPollution/GET_DATA';

const initialState = [];

export const getData = (arr) => ({
  type: GET_DETAILS,
  payload: arr,
});

export const getDetailsFromAPI = (param) => async (dispatch) => {
  console.log(param);
  await fetch(`https://restcountries.com/v3.1/name/${param}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((error) => {
      const errorText = document.getElementsByClassName('error');
      errorText.textContent = error;
    })
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const item = {};
        item.num = key;
        item.id = uuidv4();
        item.flag = value.flags.svg;
        item.name = value.name.common;
        item.official = value.name.official;
        item.pop = value.population;
        item.area = value.area;
        item.cap = value.capital;
        item.car = value.car.side;
        item.continent = value.continent;
        item.region = value.region;
        item.subregion = value.subregion;
        dispatch(getData(item));
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
