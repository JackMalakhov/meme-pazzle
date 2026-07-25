<script setup lang="ts">
import type { useQuestionsStore } from '@/stores/counter'
import { inject } from 'vue'

const store = inject<ReturnType<typeof useQuestionsStore>>('store')
</script>

<template>
  {{ store?.answersCount }}
  <div class="about">
    <h1>here will be the qr</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
