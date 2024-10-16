<template>
  <div class="pagination">
    <button class="pagination__button">&lt;</button>
    <button class="pagination__button">1</button>
    <button class="pagination__button pagination__number--active">2</button>
    <button class="pagination__button">3</button>
    <button class="pagination__button">&gt;</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/_partial/_variables.scss";

.pagination {
  padding: 20px 0;
  text-align: center;
  &__button {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    font-size: 12px;
    color: $TEXT_GRAY_LIGHT;
    &--active {
      font-weight: bold;
      color: $TEXT_DEFAULT;
    }
  }
}
</style>
