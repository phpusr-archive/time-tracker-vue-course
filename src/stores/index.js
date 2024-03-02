import { defineStore } from 'pinia'
import { generateTimelineItems } from '../functions.js'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      timelineItems: generateTimelineItems(),
      activities: ['Coding', 'Reading', 'Training']
    }
  }
})
