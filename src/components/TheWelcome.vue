<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import CustomOption from './CustomOption.vue'
import FoodIcon from './icons/iconFood.vue'
import { inject, onMounted, ref, watch } from 'vue'
import type { QuestionsTypes } from '../model/questions.types.ts'
import type { useQuestionsStore } from '../stores/counter.ts'

const store = inject<ReturnType<typeof useQuestionsStore>>('store')
const initialValue = {
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  q6: '',
  q7: '',
  q8: '',
  q9: '',
}

const form = ref<QuestionsTypes>(initialValue)
const updateStorage = (option: QuestionsTypes) => {
  const value = localStorage.getItem('questions')

  localStorage.setItem(
    'questions',
    JSON.stringify({ ...(value ? JSON.parse(value) : {}), ...option }),
  )
}

onMounted(() => {
  const value = localStorage.getItem('questions')
  if (value) {
    const parsedValues: QuestionsTypes = JSON.parse(value)
    form.value = { ...form.value, ...parsedValues }
  }
})
watch(
  form,
  (value) => {
    updateStorage(value)
    store?.updateUserAnswers(value)
    console.log(store)
  },
  { deep: true },
)
</script>

<template>
  <WelcomeItem id="question_1">
    <template #icon>
      <FoodIcon :active="!!form.q1" />
    </template>
    <template #heading>Как это называется?</template>
    <img class="image" src="../assets/images/pahlava.png" alt="question 1" />
    <div class="options">
      <CustomOption v-model="form.q1" value="pakhvala" name="q1">Пахвала</CustomOption>
      <CustomOption v-model="form.q1" value="pakhlava" name="q1">Пахлава</CustomOption>
      <CustomOption v-model="form.q1" value="pokhlava" name="q1">Похвала</CustomOption>
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_2">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>На что она намекает?</template>
    <img class="image" src="../assets/images/namek.png" alt="question 1" />
    <div class="options">
      <CustomOption v-model="form.q2" value="answer 1" name="q2">Пирожок с картошкой</CustomOption>
      <CustomOption v-model="form.q2" value="magic-stick" name="q2">Волшебную палочку</CustomOption>
      <CustomOption v-model="form.q2" value="hotdog" name="q2">Сосиску в тесте</CustomOption>
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_3">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>step 3</template>

    <div class="options">
      <CustomOption v-model="form.q3" value="answer 1" name="q3">answer 1</CustomOption>
      <CustomOption v-model="form.q3" value="answer 2" name="q3">answer 2</CustomOption>
      <CustomOption v-model="form.q3" value="answer 3" name="q3">answer 3</CustomOption>
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_4">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>step 4</template>

    <div class="options">
      <CustomOption v-model="form.q4" value="answer 1" name="q4">answer 1</CustomOption>
      <CustomOption v-model="form.q4" value="answer 2" name="q4">answer 2</CustomOption>
      <CustomOption v-model="form.q4" value="answer 3" name="q4">answer 3</CustomOption>
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_5">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>step 5</template>

    <div class="options">
      <CustomOption v-model="form.q5" value="answer 1" name="q5">answer 1</CustomOption>
      <CustomOption v-model="form.q5" value="answer 2" name="q5">answer 2</CustomOption>
      <CustomOption v-model="form.q5" value="answer 3" name="q5">answer 3</CustomOption>
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_5">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>step 5</template>

    <div class="options">
      <CustomOption v-model="form.q6" value="answer 1" name="q6">answer 1</CustomOption>
      <CustomOption v-model="form.q6" value="answer 2" name="q6">answer 2</CustomOption>
      <CustomOption v-model="form.q6" value="answer 3" name="q6">answer 3</CustomOption>
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_5">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>step 5</template>

    <div class="options">
      <CustomOption v-model="form.q7" value="answer 1" name="q7">answer 1</CustomOption>
      <CustomOption v-model="form.q7" value="answer 2" name="q7">answer 2</CustomOption>
      <CustomOption v-model="form.q7" value="answer 3" name="q7">answer 3</CustomOption>
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_5">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>step 5</template>

    <div class="options">
      <CustomOption v-model="form.q8" value="answer 1" name="q8">answer 1</CustomOption>
      <CustomOption v-model="form.q8" value="answer 2" name="q8">answer 2</CustomOption>
      <CustomOption v-model="form.q8" value="answer 3" name="q8">answer 3</CustomOption>
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_5">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>step 5</template>

    <div class="options">
      <CustomOption v-model="form.q9" value="answer 1" name="q9">answer 1</CustomOption>
      <CustomOption v-model="form.q9" value="answer 2" name="q9">answer 2</CustomOption>
      <CustomOption v-model="form.q9" value="answer 3" name="q9">answer 3</CustomOption>
    </div>
  </WelcomeItem>
</template>

<style scoped>
.options {
  display: flex;
  gap: 10px;
}
.image {
  max-width: 100%;
}
</style>
