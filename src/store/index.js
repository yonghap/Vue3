import { defineStore } from 'pinia';
import Repository from '../api/RepositoryFactory';

const locationRepository = Repository().location;

export const uselocationStore = defineStore('location', {
	state: () => {
		return {
			currentLocation : null
		}
	},
	actions: {
		async getLocations() {
			try {
				const res = await locationRepository.getLocationList()
				return res;
			} catch (error) {
				return error
			}
		}
	},
})