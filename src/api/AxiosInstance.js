import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8081/',
})

instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
        console.log(localStorage.getItem('access_token'));
        return config;
    }
)

instance.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = {...error.config};
        originalRequest._isRetry = true;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            try {
                const response = await instance.get("/auth/access_token");
                console.log(response);
                localStorage.setItem('access_token', response.data.access_token);
                return instance.request(originalRequest);
            } catch (error) {
                console.log('Authentication error');
            }
        }
        throw error;
    }
);