import { defineStore } from 'pinia'
import { currentHour, id } from '../functions'
import { MAX_HOUR, MIN_HOUR, SECONDS_IN_HOUR } from '../constants'

const activities = generateActivities()

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      activities,
      timelineItems: generateTimelineItems(),
    }
  },
  getters: {
    trackedActivities: (state) => {
      return state.activities.filter(it => it.secondsToComplete > 0)
    },
    activitySelectOptions: (state) => {
      return state.activities.map(({ id, name }) => ({ label: name, value: id }))
    }
  },
  actions: {
    addActivity(name) {
      this.activities.push({
        id: id(),
        name,
        secondsToComplete: 0
      })
    },
    calculateTrackedActivitySeconds(activityId) {
      return this.timelineItems.reduce((acc, it) => {
        if (it.activityId === activityId) {
          return acc + it.activitySeconds
        }
        return acc
      }, 0)
    },
    calculateActivityCompletionPercentage(activity, trackedActivitySeconds) {
      return Math.round(trackedActivitySeconds / activity.secondsToComplete * 100)
    },
    deleteActivity(activity) {
      this.timelineItems.forEach(it => {
        if (it.activityId === activity.id) {
          it.activityId = null
          if (it.hour !== currentHour()) {
            it.activitySeconds = 0
          }
        }
      })
      this.activities = this.activities.filter(it => it !== activity)
    },
    setActivitySecondsToComplete(activityId, secondsToComplete) {
      const activity = this.activities.find(it => it.id === activityId)
      if (activity) {
        activity.secondsToComplete = secondsToComplete || 0
      }
    },
    setTimelineItemActivity(hour, activityId) {
      const timelineItem = this.timelineItems.find(it => it.hour === hour)
      if (!timelineItem) {
        return
      }

      const activity = this.activities.find(it => it.id === activityId)

      timelineItem.activityId = activity?.id || null
    },
    startTimelineStopWatch(timelineId) {
      const timelineItem = this.timelineItems.find(it => it.hour === timelineId)
      if (timelineItem) {
        timelineItem.stopwatch = setInterval(() => {
          timelineItem.activitySeconds++
        }, 1000)
      }
    },
    stopTimelineStopWatch(timelineId, reset = false) {
      const timelineItem = this.timelineItems.find(it => it.hour === timelineId)
      if (timelineItem) {
        clearInterval(timelineItem.stopwatch)
        timelineItem.stopwatch = null
        if (reset) {
          timelineItem.activitySeconds = 0
        }
      }
    },
    isRunningTimelineStopWatch(timelineId) {
      const timelineItem = this.timelineItems.find(it => it.hour === timelineId)
      return !!timelineItem?.stopwatch
    }
  }
})

function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, index) => ({
    id: id(),
    name,
    secondsToComplete: index * SECONDS_IN_HOUR
  }))
}

function generateTimelineItems() {
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
