import axios from "axios";
axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: 'https://minical.shop/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
});

export default instance