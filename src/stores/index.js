import { defineStore } from 'pinia'
import { generateTimelineItems } from '../functions.js'


const activities = ['Coding', 'Reading', 'Training']

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      timelineItems: generateTimelineItems(),
      activities
    }
  },
  getters: {
    activitySelectOptions: (state) => {
      return state.activities.map((label, value) => ({ label, value }))
    }
  },
  actions: {
    deleteActivity(activity) {
      this.activities = this.activities.filter(it => it !== activity)
    }
  }
})
