import { defineStore } from 'pinia'
import { id } from '../functions'
import { MAX_HOUR, MIN_HOUR, SECONDS_IN_HOUR } from '../constants'
import { now } from '../time'

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
    },
    totalActivitySecondsToComplete(state) {
      return state.trackedActivities.reduce((acc, it) => acc + it.secondsToComplete, 0)
    }
  },
  actions: {
    setActivities(activities) {
      this.activities = activities
    },
    setTimelineItems(timelineItems) {
      this.timelineItems = timelineItems
    },
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
      if (trackedActivitySeconds <= 0 || activity.secondsToComplete <= 0) {
        return 0
      }

      return Math.round(trackedActivitySeconds / activity.secondsToComplete * 100)
    },
    calculateCompletionPercentage(totalTrackedSeconds) {
      if (totalTrackedSeconds <= 0 || this.totalActivitySecondsToComplete <= 0) {
        return 0
      }

      return Math.round(totalTrackedSeconds / this.totalActivitySecondsToComplete * 100)
    },
    deleteActivity(activity) {
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
