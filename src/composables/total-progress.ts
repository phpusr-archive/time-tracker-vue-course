import { useAppStore } from '../stores'
import { computed, type ComputedRef } from 'vue'
import { getProgressColorClass } from '../functions'
import type { ProgressColorClass } from '../enums'

export function useTotalProgress(): {
  percentage: ComputedRef<number>,
  colorClass: ComputedRef<ProgressColorClass>,
  dayComplete: ComputedRef<boolean>
} {
  const store = useAppStore()

  const percentage = computed<number>(() => {
    const totalTrackedSeconds = store.trackedActivities.map(activity => {
      const trackedSeconds = store.calculateTrackedActivitySeconds(activity.id)
      return Math.min(trackedSeconds, activity.secondsToComplete)
    }).reduce((acc, it) => acc + it, 0)

    return store.calculateCompletionPercentage(totalTrackedSeconds)
  })

  const colorClass = computed<ProgressColorClass>(() => {
    return getProgressColorClass(percentage.value)
  })

  const dayComplete = computed(() => {
    return percentage.value >= 100
  })

  return { percentage, colorClass, dayComplete }
}
