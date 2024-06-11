import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '../stores/index'
import * as storage from '../storage'
import { isToday, today } from '../time'
import { MILLISECONDS_IN_SECOND, SECONDS_IN_HOUR } from '../constants'

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
    timelineItem.activitySeconds += calculateIdleSeconds(lastActiveAt)
  }
  return timelineItems
}

function calculateIdleSeconds(lastActiveAt) {
  let idleMilliseconds = today() - lastActiveAt
  if (lastActiveAt.getHours() !== today().getHours()) {
    idleMilliseconds = getEndOfIdleHour(lastActiveAt) - lastActiveAt
  }

  return Math.round(idleMilliseconds / MILLISECONDS_IN_SECOND)
}

function getEndOfIdleHour(lastActiveAt) {
  const endOfIdleHour = new Date(lastActiveAt)
  endOfIdleHour.setTime(endOfIdleHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND)
  endOfIdleHour.setMinutes(0, 0, 0)
  return endOfIdleHour
}
