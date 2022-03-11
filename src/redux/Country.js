import date from '../api/variables';

const FETCH_DATA = 'Countries/FETCH_DATA';

const initialState = [];

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const fetchCountryFromApi = () => (dispatch) => {
  const arr = [];
  fetch(`https://api.covid19tracking.narrativa.com/api/${date()}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((error) => {
      const errorText = document.getElementById('error');
      errorText.textContent = error;
    })
    .then((data) => {
      const list = data.dates[date()].countries;
      const obj = Object.entries(list);
      obj.forEach((ele) => {
        const newObj = {};
        const [name, obj] = ele;
        newObj.name = name;
        newObj.id = obj.id;
        newObj.code = obj.today_new_confirmed;
        arr.push(newObj);
      });
      dispatch(fetchData(arr));
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
