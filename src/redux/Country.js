const FETCH_DATA = 'Countries/FETCH_DATA';

const initialState = [];

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const fetchCountryFromApi = () => (dispatch) => {
  const arr = [];
  fetch('https://www.universal-tutorial.com/api/countries/', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJha3NoaXRoYXJlZGR5MTg5OUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJGekJxX2YzWldIekRtcDV5UmdjWTJSTmpfOG5nUFhQc2RtYXdNdFk0M0dVYU1qbjYwczRMRkF6RW9aSUo0cFVBR2J3In0sImV4cCI6MTY0Njk5MTI0Nn0.Ad_BNCQ6XA2wv9Lkc22JhgtNmoBzseniNvJ2IPjlrm4',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      const errorText = document.getElementById('error');
      errorText.textContent = error;
    })
    .then((data) => {
      console.log(data);
      Object.entries(data).forEach(([key, value]) => {
        const obj = {};
        obj.id = key;
        obj.name = value.country_name;
        obj.c_code = value.country_phone_code;
        obj.code = value.country_short_name;
        arr.push(obj);
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
