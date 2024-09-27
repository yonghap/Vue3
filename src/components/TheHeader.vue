<template>
  <header id="header" class="header">
    <section class="header__wrap">
      <h1 class="logo">
        TravelleR
      </h1>
      <div class="gnb">
        <Combobox
          :default-label="'지역선택'"
          :options="locations"
          v-model="selectedLocation"
          @setOption="seleteLocation"
        >
        </Combobox>
      </div>
    </section>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import Combobox from "@/components/forms/Combobox.vue";


const selectedLocation = ref('');
const locations = [
  { id : 1, name : '서울시' },
  { id : 2, name : '인천' },
  { id : 3, name : '대전' },
  { id : 4, name : '대구' },
  { id : 5, name : '광주' },
  { id : 6, name : '부산' },
  { id : 7, name : '울산' },
  { id : 8, name : '세종특별자치시' },
  { id : 31, name : '경기도' },
  { id : 32, name : '강원특별자치도' },
  { id : 33, name : '충청북도' },
  { id : 34, name : '충청남도' },
  { id : 35, name : '경상북도' },
  { id : 36, name : '경상남도' },
  { id : 37, name : '전라북도' },
  { id : 38, name : '전라남도' },
  { id : 39, name : '제주도' }
]

function seleteLocation(idx) {
  selectedLocation.value = idx;
  console.log(selectedLocation.value);
}
</script>

<!--<li ="1">서울</li>-->
<!--<li ="31">경기도</li>-->
<!--<li ="2">인천</li>-->
<!--<li ="3">대전</li>-->
<!--<li ="4">대구</li>-->
<!--<li ="5">광주</li>-->
<!--<li ="6">부산</li>-->
<!--<li ="7">울산</li>-->
<!--<li ="8">세종특별자치시</li>-->
<!--<li ="32">강원특별자치도</li>-->
<!--<li ="33">충청북도</li>-->
<!--<li ="34">충청남도</li>-->
<!--<li ="35">경상북도</li>-->
<!--<li ="36">경상남도</li>-->
<!--<li ="37">전라북도</li>-->
<!--<li ="38">전라남도</li>-->
<!--<li ="39">제주도</li>-->