import axios from "axios";
axios.defaults.withCredentials = true;
//https://minical.shop/api
const local='http://localhost:8080/api'
const prd='https://minical.shop/api'
const instance = axios.create({
    baseURL: prd,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar', 'Access-Control-Allow-Origin' : '*'},
    withCredentials: true
});

export default instance