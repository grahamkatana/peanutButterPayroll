import axios from 'axios';
const BASE_URL = 'https://peanut-butter-payroll.onrender.com/api/v1/';


export const baseApi = axios.create({
  baseURL: BASE_URL,
});

baseApi.defaults.headers.common['Content-Type'] = 'application/json';