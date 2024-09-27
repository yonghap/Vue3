import http from '../utils/http'

const resource = 'https://jsonplaceholder.typicode.com/posts';
export default {
	get() {
		return http.get(`${resource}`);
	},
	getPosts() {
		return http.get(`${resource}/1`)
	},
	getPhotos() {
		return http.get('https://dummyjson.com/products');
	},
	getGameList() {
		return http.get('http://apis.data.go.kr/B551011/KorService1/areaBasedList1?areaCode=1&arrange=O&contentTypeId=12&serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json');
		// return http.get('http://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=AppTest');
	},
	getGameDetail(id) {
		return http.get('http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId='+ id +'&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&overviewYN=Y&_type=json');
	}
}
