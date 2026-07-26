import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { QuestionsTypes } from '@/model/questions.types'

export const useQuestionsStore = defineStore('questions', () => {
  const userAnswers = ref<QuestionsTypes | undefined>(undefined)
  const rightAnswers = ref<QuestionsTypes>({
    q1: 'pakhlava',
    q2: 'hotdog',
    q3: 'answer 1',
    q4: 'answer 1',
    q5: 'answer 1',
    q6: 'answer 1',
    q7: 'answer 1',
    q8: 'answer 1',
    q9: 'answer 1',
  })
  const answersCount = computed(
    () =>
      Object.entries(rightAnswers.value).filter(
        ([question, answer]) =>
          (userAnswers.value ?? {})[question as keyof QuestionsTypes] === answer,
      ).length,
  )

  const updateUserAnswers = (answers: QuestionsTypes) => {
    userAnswers.value = answers
  }

  return { userAnswers, rightAnswers, answersCount, updateUserAnswers }
})
