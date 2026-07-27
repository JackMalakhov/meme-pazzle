<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'
import CustomOption from './CustomOption.vue'
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
      <SupportIcon :active="!!form.q1" />
    </template>
    <template #heading>Как это называется?</template>
    <img class="image spacer" src="../assets/images/pahlava.png" alt="question 1" />
    <div class="options spacer">
      <CustomOption v-model="form.q1" value="pakhvala" name="q1">Пахвала</CustomOption>
      <CustomOption v-model="form.q1" value="pakhlava" name="q1">Пахлава</CustomOption>
      <CustomOption v-model="form.q1" value="pokhlava" name="q1">Похвала</CustomOption>
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_2">
    <template #icon>
      <SupportIcon :active="!!form.q2" />
    </template>
    <template #heading>На что она намекает?</template>
    <img class="image spacer" src="../assets/images/namek.png" alt="question 1" />
    <div class="options spacer">
      <CustomOption v-model="form.q2" value="answer 1" name="q2"
        >На пирожок с картошкой</CustomOption
      >
      <CustomOption v-model="form.q2" value="magic-stick" name="q2"
        >На волшебную палочку</CustomOption
      >
      <CustomOption v-model="form.q2" value="hotdog" name="q2">На сосиску в тесте</CustomOption>
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_3">
    <template #icon>
      <SupportIcon :active="!!form.q3" />
    </template>
    <template #heading>Что за песня?</template>
    <div class="spacer">🚗🛣️🪾🏘️♾️🌝🚪🧿🪬👹🧌😈🌊😢❓</div>
    <div class="options spacer">
      <CustomOption v-model="form.q3" value="pixies_que_sera_sera" name="q3">
        <template #option_icon>
          <div class="music">
            <img width="20px" src="../assets/images/melody.png" alt="melody" />
          </div>
        </template>
        Pixies - Que Sera Sera</CustomOption
      >
      <CustomOption v-model="form.q3" value="pixies_where_is_my_mind" name="q3">
        <template #option_icon>
          <div class="music">
            <img width="20px" src="../assets/images/melody.png" alt="melody" />
          </div>
        </template>
        Pixies - Where Is My Mind</CustomOption
      >
      <CustomOption v-model="form.q3" value="doris_day_whatever_will_be" name="q3">
        <template #option_icon>
          <div class="music">
            <img width="20px" src="../assets/images/melody.png" alt="melody" />
          </div>
        </template>
        Doris Day - Whatever Will Be</CustomOption
      >
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_4">
    <template #icon>
      <SupportIcon :active="!!form.q4" />
    </template>
    <template #heading>О чем рассказывает девочка?</template>
    <div class="images_30 spacer">
      <img class="image_30" src="../assets/images/fake_smile_1.jpeg" alt="fake_smile_1" />
      <img class="image_30" src="../assets/images/fake_smile_2.jpeg" alt="fake_smile_2" />
      <img class="image_30" src="../assets/images/fake_smile_3.jpeg" alt="fake_smile_3" />
    </div>
    <div class="options spacer">
      <CustomOption v-model="form.q4" value="lesson" name="q4">Дает урок флирта</CustomOption>
      <CustomOption v-model="form.q4" value="reaction" name="q4"
        >Про то как реагировать на неудачи</CustomOption
      >
      <CustomOption v-model="form.q4" value="flirt_fail" name="q4"
        >Про неудачный подкат</CustomOption
      >
    </div>
  </WelcomeItem>

  <WelcomeItem id="question_5">
    <template #icon>
      <SupportIcon :active="!!form.q5" />
    </template>
    <template #heading>Как зовут спортсмена?</template>

    <div class="options spacer">
      <CustomOption v-model="form.q5" value="quakin" name="q5">Геннадий Квакин</CustomOption>
      <CustomOption v-model="form.q5" value="bublik" name="q5">Александр Бублик</CustomOption>
      <CustomOption v-model="form.q5" value="shirinin" name="q5">Вадим Ширинкин</CustomOption>
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_6">
    <template #icon>
      <SupportIcon :active="!!form.q6" />
    </template>
    <template #heading>Где мы встретились впервые?</template>

    <div class="options spacer">
      <CustomOption v-model="form.q6" value="kavaler_party" name="q6"
        >На анонимной встрече поклонников глухих кавалеров</CustomOption
      >
      <CustomOption v-model="form.q6" value="aleksandr_3" name="q6"
        >На площади у памятника Александру&nbsp;III</CustomOption
      >
      <CustomOption v-model="form.q6" value="gold" name="q6"
        >На мастерклассе по использованию золота в интерьере</CustomOption
      >
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_7">
    <template #icon>
      <SupportIcon :active="!!form.q7" />
    </template>
    <template #heading>step 7</template>

    <div class="options spacer">
      <CustomOption v-model="form.q7" value="answer 1" name="q7">answer 1</CustomOption>
      <CustomOption v-model="form.q7" value="answer 2" name="q7">answer 2</CustomOption>
      <CustomOption v-model="form.q7" value="answer 3" name="q7">answer 3</CustomOption>
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_8">
    <template #icon>
      <SupportIcon :active="!!form.q8" />
    </template>
    <template #heading>step 8</template>

    <div class="options spacer">
      <CustomOption v-model="form.q8" value="answer 1" name="q8">answer 1</CustomOption>
      <CustomOption v-model="form.q8" value="answer 2" name="q8">answer 2</CustomOption>
      <CustomOption v-model="form.q8" value="answer 3" name="q8">answer 3</CustomOption>
    </div>
  </WelcomeItem>
  <WelcomeItem id="question_9">
    <template #icon>
      <SupportIcon :active="!!form.q9" />
    </template>
    <template #heading>step 9</template>

    <div class="options spacer">
      <CustomOption v-model="form.q9" value="answer 1" name="q9">answer 1</CustomOption>
      <CustomOption v-model="form.q9" value="answer 2" name="q9">answer 2</CustomOption>
      <CustomOption v-model="form.q9" value="answer 3" name="q9">answer 3</CustomOption>
    </div>
  </WelcomeItem>
</template>

<style scoped>
.options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.spacer {
  margin-top: 20px;
}
.image {
  max-width: 100%;
}

.images_30 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image_30 {
  max-width: 30%;
}
.music {
  width: 26px;
  height: 26px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: rgb(255, 230, 251);
}
</style>
