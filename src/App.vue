<template>
	<div id="app">
		<component :is="route.meta.layout || 'div'">
			<TheHeader></TheHeader>
			<router-view/>
		</component>
		<hr>
	</div>
</template>

<script setup>
import TheHeader from "./layout/components/TheHeader.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
