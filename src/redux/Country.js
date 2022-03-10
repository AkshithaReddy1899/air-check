import { url, date } from '../api/variables';

const FETCH_DATA = 'Countries/FETCG_DATA';

const initialState = [];

export const fetchData = (arr) => ({
  type: FETCH_DATA,
  payload: arr,
});

export const fetchCountryFromApi = () => (dispatch) => {
  fetch(`${url}${date()}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((error) => {
      const errorText = document.getElementById('error');
      errorText.textContent = error;
    })
    .then((data) => {
      const country = data.dates[date()].countries;
      const obj = Object.values(country);
      dispatch(fetchData(obj));
    });
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
