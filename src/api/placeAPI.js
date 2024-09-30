import http from '../utils/http'

export default () => ({
	getPlaceAllList() {
		return http.get('http://apis.data.go.kr/B551011/KorService1/areaBasedList1?areaCode=1&arrange=O&contentTypeId=12&serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&');
	}
})