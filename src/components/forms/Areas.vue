<!-- 지역 목록-->
<template>
	<div class="area">
		<ul class="area__list">
			<li v-for="area in areaInfo.areas" :key="area.id">
		          <button type="button" :class='area.id === areaInfo.currentArea ? "area__button area__button--active" : "area__button"'>
			          {{ area.name }}
		          </button>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { reactive, onMounted, inject } from 'vue';
import { useCommonStore } from '@/store/index'

const store = useCommonStore();
const factories = inject("factories");
const areaInfo = reactive({
	areas : null,
	currentArea : store.currentArea
})

async function fetchData() {
	areaInfo.areas = await factories.area.getLocationList();
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