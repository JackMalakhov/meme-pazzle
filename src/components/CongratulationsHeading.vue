<script setup lang="ts">
import type { useQuestionsStore } from '@/stores/counter'
import { computed, inject } from 'vue'
const store = inject<ReturnType<typeof useQuestionsStore>>('store')
const answersCount = computed(() => store?.answersCount ?? 0)
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="dark-pink">Мариша с днем рождения! 😘🎉🥳</h3>
    <h4 v-if="answersCount === 0" class="dark-pink">Пройди квиз и получи сюрприз 🎁</h4>
    <h4 v-if="answersCount > 0 && answersCount < 3" class="dark-pink">
      Отличное начало! Продолжай в том же духе 🎁
    </h4>
    <h4 v-if="answersCount > 2 && answersCount < 5" class="dark-pink">
      Вау! Щелкаешь вопросы как семечки! Очень круто! 🎁
    </h4>
    <h4 v-if="answersCount > 4 && answersCount < 7" class="dark-pink">
      Кажется только начали а уже половина квеста пройдена! 🎁
    </h4>
    <h4 v-if="answersCount > 6 && answersCount < 9" class="dark-pink">
      Финишная прямая! Осталось всего пара вопросов! 🎁
    </h4>
    <h4 v-if="answersCount === 9" class="dark-pink">
      Ура! Ты супер! Сюрприз открыт, можно забирать! 🎁
    </h4>
    <h4 v-if="answersCount === 9" class="dark-pink">
      P.S. Кстати, на qr-код можно просто нажать 😉
    </h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3,
.dark-pink {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3,
  .dark-pink {
    text-align: left;
  }
}
</style>
