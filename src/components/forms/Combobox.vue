<template>
  <div class="combobox">
    <div class="combobox__wrap">
      <div class="combobox__form">
        <input type="text" class="combobox__input" readonly :value="selectedOption ? selectedOption : defaultLabel">
        <i class="combobox__icon"></i>
      </div>
      <ul class="combobox__list">
        <li v-for="item in options" :key="item.id">
          <span @click="onSelect(item.name)">
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(["setOption"]);
const props = defineProps({
  defaultLabel : String,
  options : Array
})

const selectedOption = ref('');
const onSelect = (option) => {
  selectedOption.value = option;
  emit('setOption', option);
}
</script>

<style lang="scss" scoped>
  .combobox {
    position:relative;
    border-radius:0.5rem;
    &__form {
      position:relative;
      overflow:hidden;
      border-radius:0.25em;
      &:after {
        content:'';
        display:block;
        position:absolute;
        top:0;
        right:0;
        width:44px;
        height:44px;
        background:#36536f;
      }
    }
    &__input {
      position:relative;
      width:220px;
      height:44px;
      padding:10px 54px 10px 16px;
      border:none;
      background:#2c3e50;
      outline:none;
      font-family:inherit;
      font-size:16px;
      color:#fff;
      box-sizing:border-box;
    }
    &__icon {
      display:inline-block;
      position:absolute;
      top:11px;
      right:11px;
      width:22px;
      height:22px;
      background:url(data:image/png;base64,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);
      background-size:cover;
      z-index:10;
    }
    &__list {
      position:absolute;
      top:50px;
      width:100%;
      background:#fff;
      box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
      li {
        & > span {
          display:block;
          padding:12px 10px;
          font-size:14px;
          &.active {
            background:#0080cc;
            color:#fefefe;
          }
        }
        &:hover {
          & > span {
            background:#ccc;
          }
        }
      }
    }
  }
</style>