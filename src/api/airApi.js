import params from '../components/params';

const key = 'dc9a27d59b894afaaf797823a3420c36';
const url = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const city = 'http://api.openweathermap.org/geo/1.0/reverse?';

// lat={lat}&lon={lon}&limit=1&appid={API key}

const airApi = () => (
  params.map((param) => (
    Promise.all([
      fetch(`${url}lat=${param[0]}&lon=${param[1]}&appid=${key}`, {
        method: 'GET',
      }).then((res) => res.json()),
      fetch(`${city}lat=${param[0]}&lon=${param[1]}&limit=1&appid=${key}`, {
        method: 'GET',
      }).then((res) => res.json()),
    ])
  ))
);

export default airApi;
