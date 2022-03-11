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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJwcmFuZWV0aGFyZWRkeTEyOThAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiMndNUHZ0VWhLMkM1UGtVZURHWXhBMl95a3ViUkRWMnR6bzVKU1k4UXF3elZOMDh4YVIxRHVMelpGVlVRLTFQREUyNCJ9LCJleHAiOjE2NDcwODYwNzl9.h-eFVVClRfKsFf3h13LKxkZsJ_qLOUtwTdIoYTVYX-g',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      const errorText = document.getElementById('error');
      errorText.textContent = error;
    })
    .then((data) => {
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
