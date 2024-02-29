import { MAX_HOUR, MIN_HOUR } from './constants.js'

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIN_HOUR; hour <= MAX_HOUR; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}
