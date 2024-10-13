<template>
  <div class="content">
    <section class="main">
      <div class="box">
        <Areas></Areas>
      </div>
      <div></div>
      <div class="box">
        <Arrange></Arrange>
        <Suspense>
          <template #default>
            <List></List>
          </template>
          <template #fallback>
            <div>Loading...</div>
          </template>
        </Suspense>
      </div>
    </section>
  </div>
</template>

<script setup>
import Areas from "@/components/forms/Areas.vue";
import Arrange from "@/components/forms/Arrange.vue";
import List from "@/components/Elements/List.vue";
</script>
