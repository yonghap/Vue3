<template>
  <div class="list-wrap">
    <ul class="list">
      <li v-for="item in list">
        <Card :info="item"></Card>
      </li>
    </ul>
    <Pagination></Pagination>
  </div>
</template>

<script setup>
import { inject, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/store/index";
import Card from "@/components/Elements/Card.vue";
import Pagination from "@/components/forms/Pagination.vue";

const store = useCommonStore();
const factories = inject("factories");
const { currentArea, currentArrange } = storeToRefs(store);
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
