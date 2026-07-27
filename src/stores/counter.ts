import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { QuestionsTypes } from '@/model/questions.types'

export const useQuestionsStore = defineStore('questions', () => {
  const openedPage = ref<'quiz' | 'surprise'>('quiz')

  const userAnswers = ref<QuestionsTypes | undefined>(undefined)
  const rightAnswers = ref<Omit<QuestionsTypes, 'q9'> & { q9: string[] }>({
    q1: 'pakhlava',
    q2: 'hotdog',
    q3: 'pixies_que_sera_sera',
    q4: 'flirt_fail',
    q5: 'quakin',
    q6: 'aleksandr_3',
    q7: 'leviOsa',
    q8: 'dvulichnost',
    q9: ['charlidze', 'trusozhoriks', 'the_cutest_dog', 'all_variants'],
  })
  const answersCount = computed(
    () =>
      Object.entries(rightAnswers.value).filter(([question, answer]) => {
        const userAnswer = (userAnswers.value ?? {})[question as keyof QuestionsTypes]
        if (userAnswer === undefined) {
          return false
        }
        if (typeof answer === 'string') {
          return userAnswer === answer
        }
        if (Array.isArray(answer)) {
          return answer.includes(userAnswer)
        }
      }).length,
  )

  const updateUserAnswers = (answers: QuestionsTypes) => {
    userAnswers.value = answers
  }

  const updateOpenedPage = (page: 'quiz' | 'surprise') => {
    openedPage.value = page
  }

  return {
    userAnswers,
    rightAnswers,
    answersCount,
    updateUserAnswers,
    openedPage,
    updateOpenedPage,
  }
})
