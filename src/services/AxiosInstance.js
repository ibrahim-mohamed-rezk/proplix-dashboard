import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lemonchiffon-octopus-104052.hostingersite.com/api/v1/dashboard/agent/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { store } = require('../store/store');
    const token = store.getState().auth?.auth?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;