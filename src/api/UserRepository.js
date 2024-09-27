import http from '../utils/http'

const resource = 'https://jsonplaceholder.typicode.com/users';
export default {
	get() {
		return http.get(`${resource}`);
	},
	getUsers() {
		return http.get(`${resource}/1`)
	}
}