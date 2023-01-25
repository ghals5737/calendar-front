import axios from "axios";
axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: 'https://3.38.30.106:8080/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
});

export default instance