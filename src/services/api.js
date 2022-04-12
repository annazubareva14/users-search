import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json'
};
const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: HEADERS
});

export default instance;
