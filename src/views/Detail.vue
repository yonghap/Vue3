<template>
	<div class="content">
		<section class="detail" v-if="info">
			<h2 class="detail__title">
				{{ info.title }}
			</h2>
			<div class="detail__address">
				{{ info.addr1 }}
			</div>
			<div class="detail__buttons">
				<a
					:href="`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${info.title}`"
					target="_blank"
				>
					네이버 바로가기
				</a>
				<a
					:href="`https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&q=${info.title}`"
					target="_blank"
				>
					카카오 바로가기
				</a>
			</div>
			<ul class="detail__images">
				<li>
					<img :src="info.firstimage" :alt="info.title">
				</li>
			</ul>
			<p class="detail__description">
				{{ info.overview }}
			</p>
			<p class="detail__homepage" v-html="info.homepage">
			</p>
		</section>
	</div>
</template>

<script setup>
import {ref, onMounted, inject} from "vue"
import { useRoute } from 'vue-router'

const route = useRoute();
const factories = inject("factories");
const info = ref(null);

async function fetchData() {
	const result = await factories.place.getPlaceDetail(route.params.id);
	info.value = result.data.response.body.items.item[0];
}

onMounted(() => {
	fetchData();
})
</script>

<style lang="scss" scoped>
@import "@/assets/css/_partial/_variables.scss";

.detail {
	&__title {
		text-align:center;
	}
	&__buttons {
		margin:20px 0;
		padding-bottom:30px;
		border-bottom:1px solid $BORDER_DEFAULT;
		text-align:center;
		a {
			display:inline-block;
			margin:0 10px;
			padding:10px 20px;
			border:1px solid $BORDER_DEFAULT;
			font-weight:bold;
		}
	}
	&__address {
		margin:20px 0;
		font-weight:bold;
		text-align:center;
	}
	&__images {
		text-align:center;
	}
	&__description {
		margin:20px 0;
		line-height:1.8;
		word-break:keep-all;
	}
}
</style>