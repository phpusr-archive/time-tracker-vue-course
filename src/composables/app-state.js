import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '../stores/index'
import * as storage from '../storage'
import { isToday } from '../time'

export function useAppState() {
  const store = useAppStore()

  loadState()

  onMounted(() => {
    console.log('App Mounted')
    document.addEventListener('visibilitychange', handleVisibilitychange)
  })

  onUnmounted(() => {
    console.log('App Unmounted')
    document.removeEventListener('visibilitychange', handleVisibilitychange)
  })

  function handleVisibilitychange() {
    document.visibilityState === 'hidden' ? saveState() : loadState()
  }

  function saveState() {
    console.info('Save state')
    storage.save({
      timelineItems: store.timelineItems,
      activities: store.activities
    })
  }

  function loadState() {
    console.info('Load state')
    const state = storage.load()
    if (state.activities) {
      store.setActivities(state.activities)
    }
    if (state.timelineItems && isToday(new Date(state.date))) {
      store.setTimelineItems(state.timelineItems)
    }
  }
}
