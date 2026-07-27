<script setup lang="ts">
import type { useQuestionsStore } from '@/stores/counter'
import { computed, inject } from 'vue'

const store = inject<ReturnType<typeof useQuestionsStore>>('store')

const answersCount = computed(() => store?.answersCount ?? 0)
</script>

<template>
  <div class="about">
    <div class="field">
      <a
        class="qrcode"
        href="https://yandex.ru/maps?text=59.859347,30.145602&si=fkdyuz52r1c369nb357hck27hc"
        target="_black"
        ><img class="qrcode_image" src="../assets/images/qrcode.png" alt="qrcode"
      /></a>

      <div class="quares" v-if="answersCount !== 9">
        <div
          :class="{
            'white-square': true,
            'top-left': true,
            'white-square-transparent': answersCount > 0,
          }"
        ></div>
        <div :class="{ 'white-square': true, 'white-square-transparent': answersCount > 1 }"></div>
        <div
          :class="{
            'white-square': true,
            'top-right': true,
            'white-square-transparent': answersCount > 2,
          }"
        ></div>
        <div :class="{ 'white-square': true, 'white-square-transparent': answersCount > 3 }"></div>
        <div :class="{ 'white-square': true, 'white-square-transparent': answersCount > 4 }"></div>
        <div :class="{ 'white-square': true, 'white-square-transparent': answersCount > 5 }"></div>
        <div
          :class="{
            'white-square': true,
            'bottom-left': true,
            'white-square-transparent': answersCount > 6,
          }"
        ></div>
        <div :class="{ 'white-square': true, 'white-square-transparent': answersCount > 7 }"></div>
        <div
          :class="{
            'white-square': true,
            'bottom-right': true,
            'white-square-transparent': answersCount > 8,
          }"
        ></div>
      </div>
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

  .field {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .quares {
    width: 100%;
  }
}
@media (max-width: 1024px) {
  .quares {
    width: calc(100vw - 2em);
  }
}
.field {
  position: relative;
  margin-top: 20px;
}

.top-left {
  border-radius: 5px 0px 0px 0px;
}

.top-right {
  border-radius: 0px 5px 0px 0px;
}
.bottom-left {
  border-radius: 0px 0px 0px 5px;
}
.bottom-right {
  border-radius: 0px 0px 5px 0px;
}

.quares {
  position: absolute;
  display: grid;
  aspect-ratio: 1 / 1;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.white-square {
  background-color: rgb(216, 182, 211);
}
.white-square-transparent {
  opacity: 0;
}
.qrcode {
  max-width: 100%;
  position: absolute;
}
.qrcode_image {
  max-width: 100%;
}
</style>
