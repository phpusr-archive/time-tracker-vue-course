import { computed, ref } from 'vue'
import { MILLISECONDS_IN_SECOND, SECONDS_IN_DAY, SECONDS_IN_HOUR } from './constants'

const TEST_SPEED_UP = 1

export function isToday(date) {
  return date.toDateString() === today().toDateString()
}

export function endOfHour(date) {
  const endOfHour = new Date(date)
  endOfHour.setTime(endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND)
  endOfHour.setMinutes(0, 0, 0)
  return endOfHour
}

export function today() {
  const date = new Date()
  //date.setHours(date.getHours() + 1)
  return date
}

export function tomorrow() {
  const date = today()
  date.setDate(date.getDate() + 1)
  return date
}

export const now = ref(today())

export const secondsSinceMidnightInPercentage = computed(() => {
  return secondsSinceMidnight.value / SECONDS_IN_DAY * 100
})

const midnight = computed(() => {
  return new Date(now.value).setHours(0, 0, 0, 0)
})

const secondsSinceMidnight = computed(() => {
  return (now.value - midnight.value) / MILLISECONDS_IN_SECOND
})

let currentDateTimer = null

export function startCurrentDateTimer() {
  currentDateTimer = setInterval(() => {
    now.value = new Date(now.value.getTime() + MILLISECONDS_IN_SECOND * TEST_SPEED_UP)
  }, 1000)
}

export function stopCurrentDateTimer() {
  clearInterval(currentDateTimer)
}
