import { defineStore } from 'pinia'
import { generateTimelineItems } from '../functions.js'


const activities = ['Coding', 'Reading', 'Training']

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      timelineItems: generateTimelineItems(),
      activities,
      activitySelectOptions: generateActivitySelectOptions()
    }
  }
})

function generateActivitySelectOptions() {
  return activities.map((label, value) => ({ label, value }))
}
