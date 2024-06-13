import { type ComponentPublicInstance, ref } from 'vue'
import { now } from './time'
import { Hour } from '../types'

export const timelineItemRefs = ref<ComponentPublicInstance[] | null>(null)

export function scrollToHour(hour: Hour|null = null, isSmooth: boolean = false): void {
  hour ??= now.value.getHours() as Hour

  if (hour > 0 && timelineItemRefs.value) {
    const options = { behavior: isSmooth ? 'smooth' : 'instant' }
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}
