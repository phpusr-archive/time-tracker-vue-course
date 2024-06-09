import { computed } from 'vue'
import { formatSeconds, getProgressColorClass } from '../functions'
import { useAppStore } from '../stores'

export function useProgress(activity) {
  const store = useAppStore()

  const trackedSeconds = computed(() =>
    store.calculateTrackedActivitySeconds(activity.id)
  )

  const percentage = computed(() =>
    store.calculateActivityCompletionPercentage(activity, trackedSeconds.value)
  )

  const timeProgress = computed(() => {
    return `${formatSeconds(trackedSeconds.value)} / ${formatSeconds(activity.secondsToComplete)}`
  })

  const colorClass = computed(() =>
    getProgressColorClass(percentage.value)
  )

  const progressWidth = computed(() => Math.min(percentage.value, 100) + '%')

  return {
    percentage,
    timeProgress,
    colorClass,
    progressWidth
  }
}
