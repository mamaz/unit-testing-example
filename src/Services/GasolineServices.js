import axios from 'axios';

// const GASOLINE_URL = 'https://api.myjson.com/bins/hwi9z';
// const GASOLINE_URL = 'https://api.myjson.com/bins/ovphj';
// const GASOLINE_URL = 'https://api.myjson.com/bins/izilj';
const GASOLINE_URL = 'https://api.myjson.com/bins/1gbsh3';

// will return promise
const getGasolineData = () => {
  return axios.get(GASOLINE_URL);
};

export { getGasolineData }; // eslint-disable-line
