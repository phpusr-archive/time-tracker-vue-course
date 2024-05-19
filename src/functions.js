import { MAX_HOUR, MIN_HOUR, MINUTES_IN_HOUR, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from './constants'
import { isUndefinedOrNull } from './validators'

export function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, index) => ({
    id: id(),
    name,
    secondsToComplete: index * SECONDS_IN_HOUR
  }))
}

export function generateTimelineItems(activities) {
  const timelineItems = []
  for (let hour = MIN_HOUR; hour <= MAX_HOUR; hour++) {
    const randomActivityIndex = Math.round(Math.random() * (activities.length - 1))
    //const randomActivitySeconds = randomActivityIndex === activities.length ? 0 : Math.round(Math.random() * 7200)

    //const activityId = randomActivityIndex === activities.length ? null : activities[randomActivityIndex].id
    let activityId = randomActivityIndex === activities.length ? null : activities[randomActivityIndex].id
    if (hour > 4) {
      activityId = null
    }
    const randomActivitySeconds = activityId === null ? 0 : Math.round(Math.random() * 1000)

    timelineItems.push({
      hour,
      activityId,
      activitySeconds: randomActivitySeconds
    })
  }
  return timelineItems
}

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

export function getTotalActivitySeconds(activityId, timelineItems) {
  return timelineItems.reduce((acc, it) => {
    if (it.activityId === activityId) {
      return acc + it.activitySeconds
    }
    return acc
  }, 0)
}

export function normalizeSelectValue(value) {
  return isUndefinedOrNull(value) || isNaN(value) ? value : +value
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
