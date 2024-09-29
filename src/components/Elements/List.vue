<template>
	<ul class="list">
		<li v-for="item in placeInfo.list">
			<Card :info="item"></Card>
		</li>
	</ul>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from "vue"
import Card from "@/components/Elements/Card.vue"
import { useCommonStore } from '@/store/index'

const store = useCommonStore();
const factories = inject("factories");
const placeInfo = reactive({
	list : null
})

async function fetchData() {
	const result = await factories.place.getPlaceAllList();
	placeInfo.list = result.data.response.body.items.item;
}

onMounted(() => {
	fetchData();
});
</script>