import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
	const currentArea = ref(0);
	const getCurrentArea = computed(() => currentArea.value);
	const updateArea = (id) => { currentArea.value = id };
	return {
		currentArea,
		getCurrentArea,
		updateArea
	}
});
