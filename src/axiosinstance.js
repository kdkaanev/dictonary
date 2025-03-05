import axios from 'axios';

const axiosTA = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosTA;
