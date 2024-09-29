import http from '../utils/http'
import Areas from '../data/areas'

export default () => ({
	getLocationList() {
		return Areas.locationData;
	}
})