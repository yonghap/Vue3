<template>
	<div class="card">
		<div class="card__image"
		     :style="{
				backgroundImage : `url(${info.firstimage})`
		     }"
		>
		</div>
		<h3 class="card__title">
			{{ info.title }}
		</h3>
		<p class="card__address">
			{{ info.addr1 }}
		</p>
	</div>
</template>

<script setup>
const props = defineProps({
	info : Object
})
</script>

<style lang="scss" scoped>
.card {
	cursor:pointer;
	&__image {
		padding-top:57.25%;
		background-size:cover;
		background-repeat:no-repeat;
		background-position:50% 50%;
	}
	&__title {
		margin:10px 0;
		font-size:1rem;
	}
	&__address {
		font-size:0.8rem;
		word-break:keep-all;
	}
}
</style>