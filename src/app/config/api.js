import axios from 'axios';

const api = axios.create({
    baseURL: "http://aulanode.ddns.net:9001/api"

});

export default api

