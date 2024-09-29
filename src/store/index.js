import { ref } from "vue";
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
	const currentArea = ref(0);
	return { currentArea }
});
