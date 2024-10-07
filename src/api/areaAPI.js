import http from '../utils/http'
import Areas from '../data/areas'

export default () => ({
	getAreaList() {
		return Areas.locationData;
	}
})