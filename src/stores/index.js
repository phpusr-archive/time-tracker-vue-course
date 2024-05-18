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
      this.activities = this.activities.filter(it => it !== activity)
    },
    setActivityForTimelineItem(hour, activityId) {
      const timelineItem = this.timelineItems.find(it => it.hour === hour)
      if (!timelineItem) {
        return
      }

      timelineItem.activityId = activityId
    }
  }
})
