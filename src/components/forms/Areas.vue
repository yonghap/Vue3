<!-- 지역 목록-->
<template>
	<div class="area">
		<ul class="area__list">
			<li v-for="area in areas" :key="area.id">
		          <button
			          type="button"
			          :class='area.id === store.currentArea ? "area__button area__button--active" : "area__button"'
			          @click="setArea(area.id)"
		          >
			          {{ area.name }}
		          </button>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import {storeToRefs} from "pinia";
import { useCommonStore } from '@/store/index'

const store = useCommonStore();
const { currentArea } = storeToRefs(store);
const factories = inject("factories");
const areas = ref(null);

function setArea(id) {
	store.updateArea(id);
}

async function fetchData() {
	areas.value = await factories.area.getAreaList();
}

onMounted(() => {
	fetchData();
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/_partial/_variables.scss";

.area {
	&__list {
		display:flex;
		flex-wrap:wrap;
		li {
			flex-basis:20%;
			margin-left:-1px;
			margin-bottom:-1px;
			text-align:center;
			border:1px solid $BORDER_DEFAULT;
		}
	}
	&__button {
		display:block;
		width:100%;
		height:42px;
		border:none;
		background:transparent;
		font-size:1rem;
		&--active {
			background:$BACKGROUND_POINT;
			color:$WHITE;
		}
	}
}
</style>