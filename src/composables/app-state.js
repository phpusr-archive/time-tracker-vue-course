import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '../stores/index'
import * as storage from '../storage'
import { isToday, today } from '../time'
import { MILLISECONDS_IN_SECOND } from '../constants'

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
    const lastActiveAt = new Date(state.lastActiveAt)
    if (state.timelineItems && isToday(lastActiveAt)) {
      store.setTimelineItems(syncIdleSeconds(state.timelineItems, lastActiveAt))
    }
  }
}

function syncIdleSeconds(timelineItems, lastActiveAt) {
  const timelineItem = timelineItems.find(it => it.stopwatch != null)
  if (timelineItem) {
    timelineItem.activitySeconds += Math.round((today() - lastActiveAt) / MILLISECONDS_IN_SECOND)
  }
  return timelineItems
}
