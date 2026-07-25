import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import type { QuestionsTypes } from './model/questions.types.ts'

const app = createApp(App).provide<QuestionsTypes>('quiz_answers', {
  q1: 'answer 1',
  q2: 'answer 1',
  q3: 'answer 1',
  q4: 'answer 1',
  q5: 'answer 1',
  q6: 'answer 1',
  q7: 'answer 1',
  q8: 'answer 1',
  q9: 'answer 1',
})

app.use(createPinia())
app.use(router)

app.mount('#app')
