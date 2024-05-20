import { defineStore } from 'pinia'
import { generateActivities, generateTimelineItems, id } from '../functions'

const activities = generateActivities()

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      activities,
      timelineItems: generateTimelineItems(activities),
    }
  },
  getters: {
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
    deleteActivity(activity) {
      this.timelineItems.forEach(it => {
        if (it.activityId === activity.id) {
          it.activityId = null
          it.activitySeconds = 0
        }
      })
      this.activities = this.activities.filter(it => it !== activity)
    },
    setTimelineItemActivity(hour, activityId) {
      const timelineItem = this.timelineItems.find(it => it.hour === hour)
      if (!timelineItem) {
        return
      }

      const activity = this.activities.find(it => it.id === activityId)

      timelineItem.activityId = activity?.id || null
    },
    setSecondsToCompleteForActivity(activityId, secondsToComplete) {
      const activity = this.activities.find(it => it.id === activityId)
      if (activity) {
        activity.secondsToComplete = secondsToComplete || 0
      }
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
