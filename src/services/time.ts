import { computed, ref } from 'vue'
import { MILLISECONDS_IN_SECOND, SECONDS_IN_DAY, SECONDS_IN_HOUR } from '../constants'

const TEST_SPEED_UP = 1

export const now = ref<Date>(today())

export const secondsSinceMidnightInPercentage = computed<number>(() => {
  return secondsSinceMidnight.value / SECONDS_IN_DAY * 100
})

const midnight = computed<number>(() => {
  return new Date(now.value).setHours(0, 0, 0, 0)
})

const secondsSinceMidnight = computed(() => {
  return (now.value as any - midnight.value) / MILLISECONDS_IN_SECOND
})

export function isToday(date: Date): boolean {
  return date.toDateString() === today().toDateString()
}

export function endOfHour(date: Date): Date {
  const endOfHour = new Date(date)
  endOfHour.setTime(endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND)
  endOfHour.setMinutes(0, 0, 0)
  return endOfHour
}

export function today(): Date {
  // noinspection UnnecessaryLocalVariableJS
  const date = new Date()
  //date.setHours(date.getHours() + 1)
  return date
}

let currentDateTimer: number|null = null

export function startCurrentDateTimer(): void {
  currentDateTimer = setInterval((): void => {
    now.value = new Date(now.value.getTime() + MILLISECONDS_IN_SECOND * TEST_SPEED_UP)
  }, 1000)
}

export function stopCurrentDateTimer(): void {
  currentDateTimer && clearInterval(currentDateTimer)
}
