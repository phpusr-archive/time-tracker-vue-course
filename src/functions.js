import { MAX_HOUR, MIN_HOUR, SECONDS_IN_HOUR } from './constants.js'

export function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, index) => ({
    id: id(),
    name,
    secondsToComplete: index * SECONDS_IN_HOUR
  }))
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIN_HOUR; hour <= MAX_HOUR; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}
