<script setup lang="ts">
import type { useQuestionsStore } from '@/stores/counter'
import { inject } from 'vue'

const store = inject<ReturnType<typeof useQuestionsStore>>('store')
</script>

<template>
  <div class="about">
    {{ store?.answersCount }}

    <h1>here will be the qr</h1>
    <div class="field">
      <div class="white-square"></div>
      <div class="white-square"></div>
      <div class="white-square"></div>
      <div class="white-square"></div>
      <div class="white-square"></div>
      <div class="white-square"></div>
      <div class="white-square"></div>
      <div class="white-square"></div>
      <div class="white-square"></div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.field {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: calc(100vw - 4em);
  height: calc(100vw - 4em);
}
.white-square {
  background-color: blue;
}
</style>
