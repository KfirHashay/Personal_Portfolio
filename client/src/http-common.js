import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-kfir-portfolio.cloudfunctions.net/app',
  headers: {
    'Content-type': 'application/json',
  },
});

export default instance;
