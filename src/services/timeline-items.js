import { currentHour } from '../functions'
import { ref } from 'vue'

export const timelineItemRefs = ref([])

export function scrollToHour(hour = null, isSmooth = false) {
  hour ??= currentHour()

  if (hour > 0) {
    const options = { behavior: isSmooth ? 'smooth' : 'instant' }
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}
