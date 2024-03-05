import { MAX_HOUR, MIN_HOUR, SECONDS_IN_HOUR } from './constants.js'

export function generateActivities() {
  return [
    {
      id: id(),
      name: 'Coding',
      secondsToComplete: 0
    },
    {
      id: id(),
      name: 'Training',
      secondsToComplete: SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Reading',
      secondsToComplete: 2 * SECONDS_IN_HOUR
    }
  ]
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
