import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "localhost:3000", // Replace with your API base URL
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent, like adding a token
    // config.headers.Authorization = `Bearer ${store.state.token}`;
    return config;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Do something with the response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
