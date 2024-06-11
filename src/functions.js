import { MINUTES_IN_HOUR, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from './constants'
import { isUndefinedOrNull } from './validators'

export function generatePeriodSelectOptions() {
  const periodInMinutes = [15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480]
  return periodInMinutes.map(it => ({
    label: generatePeriodSelectOptionsLabel(it),
    value: it * SECONDS_IN_MINUTE
  }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR).toString().padStart(2, '0')
  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value) {
  return isUndefinedOrNull(value) || isNaN(value) ? value : +value
}

export function formatSecondsWithSign(seconds) {
  const sign = seconds >= 0 ? '+' : '-'
  return `${sign}${formatSeconds(seconds)}`
}

export function formatSeconds(seconds) {
  if (seconds < 0) {
    seconds *= -1
  }

  const hours = Math.floor(seconds / SECONDS_IN_HOUR).toString().padStart(2, '0')
  const minutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE).toString().padStart(2, '0')
  const remainingSeconds = (seconds % SECONDS_IN_MINUTE).toString().padStart(2, '0')

  return `${hours}:${minutes}:${remainingSeconds}`
}

export function getProgressColorClass(progress) {
  if (progress < 33) {
    return 'bg-red-500'
  }

  if (progress < 66) {
    return 'bg-yellow-500'
  }

  if (progress < 100) {
    return 'bg-blue-500'
  }

  return 'bg-green-500'
}
