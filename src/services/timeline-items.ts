import { ref } from 'vue'
import { now } from './time'

export const timelineItemRefs = ref<any>([])

export function scrollToHour(hour: number|null = null, isSmooth: boolean = false): void {
  hour ??= now.value.getHours()

  if (hour > 0) {
    const options = { behavior: isSmooth ? 'smooth' : 'instant' }
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}
