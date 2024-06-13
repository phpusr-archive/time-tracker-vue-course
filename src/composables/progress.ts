import { computed, type ComputedRef } from 'vue'
import { formatSeconds, getProgressColorClass } from '../functions'
import { useAppStore } from '../stores'
import type { Activity } from '../types'
import { ProgressColorClass } from '../enums'

export function useProgress(activity: Activity): {
  percentage: ComputedRef<number>,
  timeProgress: ComputedRef<string>,
  colorClass: ComputedRef<ProgressColorClass>,
  progressWidth: ComputedRef<string>
} {
  const store = useAppStore()

  const trackedSeconds = computed<number>(() =>
    store.calculateTrackedActivitySeconds(activity.id)
  )

  const percentage = computed<number>(() =>
    store.calculateActivityCompletionPercentage(activity, trackedSeconds.value)
  )

  const timeProgress = computed<string>(() => {
    return `${formatSeconds(trackedSeconds.value)} / ${formatSeconds(activity.secondsToComplete)}`
  })

  const colorClass = computed<ProgressColorClass>(() =>
    getProgressColorClass(percentage.value)
  )

  const progressWidth = computed<string>(() => Math.min(percentage.value, 100) + '%')

  return {
    percentage,
    timeProgress,
    colorClass,
    progressWidth
  }
}
