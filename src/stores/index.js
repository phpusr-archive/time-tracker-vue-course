import { defineStore } from 'pinia'
import { generateActivities, generateTimelineItems, id } from '../functions.js'


export const useAppStore = defineStore('app', {
  state: () => {
    return {
      timelineItems: generateTimelineItems(),
      activities: generateActivities()
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
        }
      })
      this.activities = this.activities.filter(it => it !== activity)
    },
    setActivityForTimelineItem(hour, activityId) {
      const timelineItem = this.timelineItems.find(it => it.hour === hour)
      if (!timelineItem) {
        return
      }

      const activity = this.activities.find(it => it.id === activityId)

      timelineItem.activityId = activity?.id || null
    },
    setSecondsToCompleteForActivity(activityId, secondsToComplete) {
      this.activities = this.activities.map(it => {
        if (it.id === activityId) {
          it.secondsToComplete = secondsToComplete
        }
        return it
      })
    }
  }
})
