import { useAppStore } from '../stores'
import { computed } from 'vue'
import { getProgressColorClass } from '../functions'

export function useTotalProgress() {
  const store = useAppStore()

  const percentage = computed(() => {
    const totalTrackedSeconds = store.trackedActivities.map(activity => {
      const trackedSeconds = store.calculateTrackedActivitySeconds(activity.id)
      return Math.min(trackedSeconds, activity.secondsToComplete)
    }).reduce((acc, it) => acc + it, 0)

    return store.calculateCompletionPercentage(totalTrackedSeconds)
  })

  const colorClass = computed(() => {
    return getProgressColorClass(percentage.value)
  })

  const dayComplete = computed(() => {
    return percentage.value >= 100
  })

  return { percentage, colorClass, dayComplete }
}
