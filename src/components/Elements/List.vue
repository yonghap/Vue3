<template>
	<ul class="list">
		<li v-for="item in list">
			<Card :info="item"></Card>
		</li>
	</ul>
</template>

<script setup>
import { inject, onMounted, ref, watch } from "vue"
import { storeToRefs } from 'pinia'
import Card from "@/components/Elements/Card.vue"
import { useCommonStore } from '@/store/index'

const store = useCommonStore();
const { currentArea, currentArrange } = storeToRefs(store);
const factories = inject("factories");
const list = ref(null);

watch( [currentArea, currentArrange], () => {
	fetchData();
	}, {
		deep: true
	}
);

async function fetchData() {
	const result = await factories.place.getPlaceList(store.currentArea, store.currentArrange);
	list.value = result.data.response.body.items.item;
}

onMounted(() => {
	fetchData();
});
</script>