import http from '../utils/http'
import locations from '../data/locations'

export default {
	getLocationList() {
		return locations.locationData;
	},
}
