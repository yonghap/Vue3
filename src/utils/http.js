import axios from "axios";

const baseUrl = "/";
const instance = axios.create({
  baseURL: baseUrl,
});

// Axios 호출 전
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios 호출 후
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject("error");
  }
);

const http = {
  async get(url, params = null, config = null) {
    try {
      const res = await instance.get(url, { params: params, ...config });
      return res;
    } catch (e) {
      return console.log(e);
    }
  },
  async post(url, params = null, config = null) {
    try {
      const res = await instance.post(url, params, config);
      return res;
    } catch (e) {
      return console.log(e);
    }
  },
};

export default http;
