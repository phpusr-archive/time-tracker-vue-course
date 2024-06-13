import { ref } from 'vue'
import { now } from './time'

export const timelineItemRefs = ref([])

export function scrollToHour(hour = null, isSmooth = false) {
  hour ??= now.value.getHours()

  if (hour > 0) {
    const options = { behavior: isSmooth ? 'smooth' : 'instant' }
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}
