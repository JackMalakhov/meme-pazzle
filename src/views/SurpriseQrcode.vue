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
        <!-- 1 top left -->
        <div
          :class="{
            'white-square': true,
            'top-left': true,
            'white-square-transparent': answersCount > 0,
          }"
        ></div>
        <!-- 2 top -->
        <div
          :class="{
            'white-square': true,
            'top-left': answersCount > 0,
            'white-square-transparent': answersCount > 1,
          }"
        ></div>
        <!-- 3 top right -->
        <div
          :class="{
            'white-square': true,
            'top-left': answersCount > 1,
            'top-right': true,
            'white-square-transparent': answersCount > 2,
          }"
        ></div>
        <!-- 4  left -->
        <div
          :class="{
            'white-square': true,
            'top-left': answersCount > 0,
            'white-square-transparent': answersCount > 3,
          }"
        ></div>
        <!-- 5  center -->
        <div
          :class="{
            'white-square': true,
            'top-left': answersCount > 3,
            'white-square-transparent': answersCount > 4,
          }"
        ></div>
        <!-- 6  right -->
        <div
          :class="{
            'white-square': true,
            'top-left': answersCount > 4,
            'top-right': answersCount > 2,
            'white-square-transparent': answersCount > 5,
          }"
        ></div>
        <!-- 7  bottom left -->
        <div
          :class="{
            'white-square': true,
            'bottom-left': true,
            'top-left': answersCount > 3,
            'white-square-transparent': answersCount > 6,
          }"
        ></div>
        <!-- 8 bottom  -->
        <div
          :class="{
            'white-square': true,
            'top-left': answersCount > 6,
            'bottom-left': answersCount > 6,
            'white-square-transparent': answersCount > 7,
          }"
        ></div>
        <!-- 9 bottom right  -->
        <div
          :class="{
            'white-square': true,
            'top-left': answersCount > 7,
            'bottom-left': answersCount > 7,
            'top-right': answersCount > 5,
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
  border-top-left-radius: 5px;
}

.top-right {
  border-top-right-radius: 5px;
}
.bottom-left {
  border-bottom-left-radius: 5px;
}
.bottom-right {
  border-bottom-right-radius: 5px;
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
