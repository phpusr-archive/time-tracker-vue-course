import { defineStore } from 'pinia'
import { id } from '../functions'
import { MAX_HOUR, MIN_HOUR, SECONDS_IN_HOUR } from '../constants'
import { now } from '../time'

interface AppState {
  activities: Activity[]
  timelineItems: TimelineItem[]
}

interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

interface ActivitySelectOption {
  label: string
  value: string
}

interface TimelineItem {
  hour: number
  activityId: string | null
  activitySeconds: number
  stopwatch: number | null
}

const activities: Activity[] = []

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      activities,
      timelineItems: [],
    }
  },
  getters: {
    trackedActivities: (state): Activity[] => {
      return state.activities.filter(it => it.secondsToComplete > 0)
    },
    activitySelectOptions: (state): ActivitySelectOption[] => {
      return state.activities.map(({ id, name }) => ({ label: name, value: id }))
    },
    totalActivitySecondsToComplete(): number {
      return this.trackedActivities.reduce((acc: number, it: Activity) => acc + it.secondsToComplete, 0)
    }
  },
  actions: {
    setActivities(activities: Activity[]): void {
      this.activities = activities
    },
    resetActivities(): void {
      this.setActivities(generateActivities())
    },
    setTimelineItems(timelineItems: TimelineItem[]): void {
      this.timelineItems = timelineItems
    },
    resetTimelineItems(): void {
      this.setTimelineItems(generateTimelineItems(this.activities))
    },
    addActivity(name: string): void {
      this.activities.push({
        id: id(),
        name,
        secondsToComplete: 0
      })
    },
    calculateTrackedActivitySeconds(activityId: string): number {
      return this.timelineItems.reduce((acc, it) => {
        if (it.activityId === activityId) {
          return acc + it.activitySeconds
        }
        return acc
      }, 0)
    },
    calculateActivityCompletionPercentage(activity: Activity, trackedActivitySeconds: number): number {
      if (trackedActivitySeconds <= 0 || activity.secondsToComplete <= 0) {
        return 0
      }

      return Math.round(trackedActivitySeconds / activity.secondsToComplete * 100)
    },
    calculateCompletionPercentage(totalTrackedSeconds: number): number {
      if (totalTrackedSeconds <= 0 || this.totalActivitySecondsToComplete <= 0) {
        return 0
      }

      return Math.round(totalTrackedSeconds / this.totalActivitySecondsToComplete * 100)
    },
    deleteActivity(activity: Activity): void {
      this.timelineItems.forEach(it => {
        if (it.activityId === activity.id) {
          it.activityId = null
          if (it.hour !== now.value.getHours()) {
            it.activitySeconds = 0
          }
        }
      })
      this.activities = this.activities.filter(it => it !== activity)
    },
    setActivitySecondsToComplete(activityId: string, secondsToComplete: number): void {
      const activity = this.activities.find(it => it.id === activityId)
      if (activity) {
        activity.secondsToComplete = secondsToComplete || 0
      }
    },
    setTimelineItemActivity(hour: number, activityId: String): void {
      const timelineItem = this.timelineItems.find(it => it.hour === hour)
      if (!timelineItem) {
        return
      }

      const activity = this.activities.find(it => it.id === activityId)

      timelineItem.activityId = activity?.id || null
    },
    startActiveTimelineStopWatches(): void {
      const timelineItem = this.timelineItems.find(it => it.stopwatch != null)
      if (timelineItem) {
        this.startTimelineStopWatch(timelineItem.hour)
        console.log(`Timer ${timelineItem.hour} started`)
      }
    },
    startTimelineStopWatch(timelineId: number): void {
      const timelineItem = this.timelineItems.find(it => it.hour === timelineId)
      if (timelineItem) {
        timelineItem.stopwatch = setInterval(() => {
          timelineItem.activitySeconds++
        }, 1000)
      }
    },
    stopTimelineStopWatch(timelineId: number, reset: boolean = false): void {
      const timelineItem = this.timelineItems.find(it => it.hour === timelineId)
      if (timelineItem) {
        if (timelineItem.stopwatch) {
          clearInterval(timelineItem.stopwatch)
        }
        timelineItem.stopwatch = null
        if (reset) {
          timelineItem.activitySeconds = 0
        }
      }
    },
    isRunningTimelineStopWatch(timelineId: number): boolean {
      const timelineItem = this.timelineItems.find(it => it.hour === timelineId)
      return !!timelineItem?.stopwatch
    }
  }
})

function generateActivities(): Activity[] {
  return ['Coding', 'Training', 'Reading'].map((name, index) => ({
    id: id(),
    name,
    secondsToComplete: index * SECONDS_IN_HOUR
  }))
}

function generateTimelineItems(activities: Activity[]): TimelineItem[] {
  const timelineItems = []
  for (let hour = MIN_HOUR; hour <= MAX_HOUR; hour++) {
    const randomActivityIndex = Math.round(Math.random() * (activities.length - 1))
    //const randomActivitySeconds = randomActivityIndex === activities.length ? 0 : Math.round(Math.random() * 7200)

    //const activityId = randomActivityIndex === activities.length ? null : activities[randomActivityIndex].id
    let activityId = randomActivityIndex === activities.length ? null : activities[randomActivityIndex].id
    if (hour > 4) {
      activityId = null
    }
    const randomActivitySeconds = activityId === null ? 0 : Math.round(Math.random() * 1000)

    timelineItems.push({
      hour,
      activityId,
      activitySeconds: randomActivitySeconds,
      stopwatch: null
    })
  }
  return timelineItems
}
