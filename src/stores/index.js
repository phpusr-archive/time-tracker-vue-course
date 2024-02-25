import { defineStore } from 'pinia'
import { generateTimelineItems } from '../functions.js'

export const useTimelineStore = defineStore('app', {
  state: () => {
    return {
      timelineItems: generateTimelineItems()
    }
  }
})
