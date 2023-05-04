import axios from "axios";

// types
import type { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
});

instance.interceptors.request.use(
    async (config) => {
        return config;
    },
    function (error) {
        return error
    }
);

export default instance;