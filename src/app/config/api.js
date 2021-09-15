import axios from 'axios';

const api = axios.create({
    baseURL: "http://uniup.ddns.net:9001/api"

});

export default api

