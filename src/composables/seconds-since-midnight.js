import { computed, onUnmounted, ref } from 'vue'
import { SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '../constants.js'

function calculateSecondsSinceMidnight() {
  const now = new Date()
  return now.getHours() * SECONDS_IN_HOUR + now.getMinutes() * SECONDS_IN_MINUTE + now.getSeconds()
}

export function useSecondsSinceMidnight() {
  const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

  const secondsSinceMidnightInPercentage = computed(() => {
    return secondsSinceMidnight.value / SECONDS_IN_DAY * 100
  })

  let timer = setInterval(() => {
    secondsSinceMidnight.value++
    if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
      secondsSinceMidnight.value = 0
    }
  }, 1000)

  onUnmounted(() => {
    clearInterval(timer)
  })

  return {
    secondsSinceMidnightInPercentage
  }
}
