<template>
  <ul class="list">
    <li v-for="item in list">
      <Card :info="item"></Card>
    </li>
  </ul>
</template>

<script setup>
import { inject, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/store/index";
import Card from "@/components/Elements/Card.vue";

const store = useCommonStore();
const { currentArea, currentArrange } = storeToRefs(store);
const factories = inject("factories");
const list = ref(null);

const fetchData = async () => {
  store.isLoading = true;
  list.value = await factories.place.getPlaceList(
    store.currentArea,
    store.currentArrange
  );
  store.isLoading = false;
};

onMounted(() => {
  fetchData();
});

watch(
  [currentArea, currentArrange],
  () => {
    fetchData();
  },
  {
    deep: true,
  }
);
</script>
