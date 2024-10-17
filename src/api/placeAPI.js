import http from "../utils/http";

export default () => ({
  async getPlaceList(id, type) {
    const params = id
      ? "&areaCode=" + id + "&arrange=" + type
      : "&arrange=" + type;
    const url =
      "http://apis.data.go.kr/B551011/KorService1/areaBasedList1?contentTypeId=12&serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json" +
      params;
    const result = await http.get(url);
    return result.data.response.body;
  },
  getPlaceDetail(id) {
    return http.get(
      "https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&defaultYN=Y&overviewYN=Y&_type=JSON&firstImageYN=Y&addrinfoYN=Y&contentId=" +
        id
    );
  },
});
