import axios from 'axios';

const baseURL = "https://cv-backend-app.fly.dev/";
const USER_ID = 123;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'x-user-id': USER_ID,
  },
});

export default axiosClient;