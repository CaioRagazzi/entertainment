import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
})

HTTP.interceptors.request.use(config => {
    config.params = {
        api_key: '861e58c6a138f67504e8efd54cafa989'
    }
    return config;
})


