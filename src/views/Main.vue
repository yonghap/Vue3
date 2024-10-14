<template>
  <div class="content">
    <section class="main">
      <div class="box">
        <Areas></Areas>
      </div>
      <div></div>
      <div class="box">
        <Arrange></Arrange>
        <List></List>
        <Loading></Loading>
      </div>
    </section>
  </div>
</template>

<script setup>
import Areas from "@/components/forms/Areas.vue";
import Arrange from "@/components/forms/Arrange.vue";
import List from "@/components/Elements/List.vue";
import Loading from "@/components/Elements/Loading.vue";
</script>
