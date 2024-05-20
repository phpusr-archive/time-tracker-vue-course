import { currentHour } from '../functions.js'
import { ref } from 'vue'

export const timelineItemRefs = ref([])

export function getTotalActivitySeconds(activityId, timelineItems) {
  return timelineItems.reduce((acc, it) => {
    if (it.activityId === activityId) {
      return acc + it.activitySeconds
    }
    return acc
  }, 0)
}

export function scrollToHour(hour = null, isSmooth = false) {
  hour ??= currentHour()

  if (hour > 0) {
    const options = { behavior: isSmooth ? 'smooth' : 'instant' }
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}
