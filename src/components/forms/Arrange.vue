<template>
	<div class="arrange">
		<button
			type="button"
			:class='"A" === store.currentArrange ? "arrange__button arrange__button--active" : "arrange__button"'
			@click="setArrange('A')"
		>제목순</button>
		<button
			type="button"
			:class='"C" === store.currentArrange ? "arrange__button arrange__button--active" : "arrange__button"'
			@click="setArrange('C')"
		>수정일순</button>
		<button
			type="button"
			:class='"D" === store.currentArrange ? "arrange__button arrange__button--active" : "arrange__button"'
			@click="setArrange('D')"
		>생성일순</button>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCommonStore } from '@/store/index'

const store = useCommonStore();
const { currentArrange } = store;

function setArrange(type) {
	store.updateArrange(type);
}
</script>

<style lang="scss" scoped>
.arrange {
	margin-bottom:20px;
	text-align:right;
	&__button {
		margin-left:15px;
		border:none;
		background:transparent;
		font-size:0.9rem;
		&--active {
			text-decoration:underline;
			font-weight:bold;
		}
	}
}
</style>