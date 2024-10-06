import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
	const currentArea = ref('');
	const currentArrange = ref('A');
	const getCurrentArea = computed(() => currentArea.value);
	const getCurrentArrange = computed(() => currentArrange.value);
	const updateArea = (id) => { currentArea.value = id };
	const updateArrange = (type) => { currentArrange.value = type };
	return {
		currentArea,
		currentArrange,
		getCurrentArea,
		getCurrentArrange,
		updateArea,
		updateArrange
	}
});
