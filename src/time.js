import { computed, ref } from 'vue'
import { MILLISECONDS_IN_SECOND, SECONDS_IN_DAY } from './constants'

let timer = null

export const now = ref(new Date())

export const secondsSinceMidnightInPercentage = computed(() => {
  return secondsSinceMidnight.value / SECONDS_IN_DAY * 100
})

const midnight = computed(() => {
  return new Date(now.value).setHours(0, 0, 0, 0)
})

const secondsSinceMidnight = computed(() => {
  return (now.value - midnight.value) / MILLISECONDS_IN_SECOND
})

export function startTimer() {
  timer = setInterval(() => {
    now.value = new Date()
  }, 1000)
}

export function stopTimer() {
  clearInterval(timer)
}
