import axios from 'axios';

const GASOLINE_URL = 'https://api.myjson.com/bins/hwi9z';

// will return promise
const getGasolineData = () => {
  return axios.get(GASOLINE_URL);
};

export { getGasolineData }; // eslint-disable-line
