import axios from 'axios';

const api = axios.create({
    baseURL: "https://aulanode.ddns.net:9001/api"

});

export default api

