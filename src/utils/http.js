import axios from 'axios'

const baseUrl = '/';
const http = axios.create({
	baseURL : baseUrl,
})

// Axios 호출 전
http.interceptors.request.use((config) => {
		return config;
	}, (error) => {
		return Promise.reject(error);
	}
)

// Axios 호출 후
http.interceptors.response.use((response) => {
	return response
},async (error) => {
	return Promise.reject('error');
})

export default http