import { computed, ref } from 'vue'
import { SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from './constants'

let timer = null

const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

export function startTimer() {
  timer = setInterval(() => {
    secondsSinceMidnight.value++
    if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
      secondsSinceMidnight.value = 0
    }
  }, 1000)
}

export function stopTimer() {
  clearInterval(timer)
}

function calculateSecondsSinceMidnight() {
  const now = new Date()
  return now.getHours() * SECONDS_IN_HOUR + now.getMinutes() * SECONDS_IN_MINUTE + now.getSeconds()
}


export const secondsSinceMidnightInPercentage = computed(() => {
  return secondsSinceMidnight.value / SECONDS_IN_DAY * 100
})
