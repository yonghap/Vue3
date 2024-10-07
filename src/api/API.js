import { inject } from "vue";
import areaAPI from './areaAPI'
import placeAPI from './placeAPI'

export default {
	install(app, options) {
		const factories = {
			area : areaAPI(),
			place : placeAPI()
		}
		app.provide('factories', factories)
	},
};
