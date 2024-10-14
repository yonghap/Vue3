<template>
  <div class="card" @click="goDetail(info.contentid)">
    <div
      class="card__image"
      :style="{
        backgroundImage: `url(${
          info.firstimage
            ? info.firstimage
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNklEQVR4nO3Zv6rUQBTH8VFE8AEUtbW1v2AlFnYW1hY+goWFrZ1rKfgAFnZ21sKCwsrmfBOCLmwhWOm1shC8KAiOHJiL3MtkMzOZzU5gfxBYkmLz2XPmT7LG7FNoROStiNC27SUz5QAVYIGPk8Y0TXMR+OAwa+CKmWqaPaagAEfALU9lij6MB2KniDEdEDuVMUMMpGQMsZBSMaRASsSQCikNwxBISRiGQjS6F9M9WY692Wq1Og88BQ5F5Csw03OjQHJi9MY968NsNEiuNtNKeCDfRoXkwLh2OgERkS+jQubz+bmhbdbRWk9Gg1RVdV1EPonIzSEYN9hnWhkZe7ADB8B31wavtzGbbR2iFQB+HCMWi8WFXawzDIHUdX0H+OUQL4/HyOmMgSEVAtwD/jjEc2vt2U1ftG0MKRDggYj8dYjHoV8WMmb0nL6GEhGJnO3iICLyyAEU8tBEZlNlPE+h69DKBUOstWeAZ+68ttR9kxhfZU6fi53tCIHoIAZeuEr8Bu6mIrowfbC2B9MLcQvUK4f4Cdw2meJrpeVyebnj+npTm/VCROSN+6wL3oHJnL5fvg2sTC/EHYe6BckNqKrqRi4MAZDPwLXcCL0hbdVcGPogdV1fNZmj64TvhoZgyP08EhLgXdeCl4phF5C+9M1Wjed6kZCUylAqJKEytlhICsaUColos/IhIZUJXdl3eRzF/NlUMsTGYMyU0hTy4jxLmj2m0LQnp+bKTDnt/zcv73d9L/uYjvwDmPeBwlJG4WgAAAAASUVORK5CYII='
        })`,
        backgroundSize: `${info.firstimage ? '' : '15% auto'}`,
        backgroundColor: '#DDDDDD',
      }"
    ></div>
    <h3 class="card__title">
      {{ info.title }}
    </h3>
    <p class="card__address">
      {{ info.addr1 }}
    </p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  info: Object,
});
function goDetail(id) {
  router.push({
    name: "place",
    params: {
      id: id,
    },
  });
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  &__image {
    padding-top: 57.25%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  &__title {
    margin: 10px 0;
    font-size: 1rem;
  }
  &__address {
    font-size: 0.8rem;
    word-break: keep-all;
  }
}
</style>
