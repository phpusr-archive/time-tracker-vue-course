import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '../stores'
import * as storage from '../services/storage'
import { endOfHour, isToday, today } from '../services/time'
import { MILLISECONDS_IN_SECOND } from '../constants'
import type { TimelineItem } from '../types'

export function useAppState(): void {
  const store = useAppStore()

  loadState()

  onMounted((): void => {
    console.log('App Mounted')
    document.addEventListener('visibilitychange', handleVisibilitychange)
  })

  onUnmounted((): void => {
    console.log('App Unmounted')
    document.removeEventListener('visibilitychange', handleVisibilitychange)
  })

  function handleVisibilitychange() {
    document.visibilityState === 'hidden' ? saveState() : loadState()
  }

  function saveState(): void {
    console.info('Save state')
    storage.save({
      timelineItems: store.timelineItems,
      activities: store.activities
    })
  }

  function loadState(): void {
    console.info('Load state')
    const state = storage.load()
    if (state.activities) {
      store.setActivities(state.activities)
    }
    const lastActiveAt = state.lastActiveAt ? new Date(state.lastActiveAt) : new Date()
    if (state.timelineItems && isToday(lastActiveAt)) {
      store.setTimelineItems(syncIdleSeconds(state.timelineItems, lastActiveAt))
    }

    store.startActiveTimelineStopWatches()
  }
}

function syncIdleSeconds(timelineItems: TimelineItem[], lastActiveAt: Date): TimelineItem[] {
  const timelineItem = timelineItems.find(it => it.stopwatch != null)
  if (timelineItem) {
    timelineItem.activitySeconds += calculateIdleSeconds(lastActiveAt)
  }
  return timelineItems
}

function calculateIdleSeconds(lastActiveAt: Date): number {
  let idleMilliseconds
  if (lastActiveAt.getHours() === today().getHours()) {
    idleMilliseconds = today().getTime() - lastActiveAt.getTime()
  } else {
    idleMilliseconds = endOfHour(lastActiveAt).getTime() - lastActiveAt.getTime()
  }

  return Math.round(idleMilliseconds / MILLISECONDS_IN_SECOND)
}
