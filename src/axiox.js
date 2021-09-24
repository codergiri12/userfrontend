import axios from 'axios';
const api = 'http://localhost:8000'

// const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL : api,
  headers:{
    'Authorization': `Bearer ${window.localStorage.getItem('token')}`
  }
});
export default axiosInstance;