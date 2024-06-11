<template>
  <RouterView />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import * as storage from './storage'
import { useAppStore } from './stores/index'
import { isToday } from './time'

const store = useAppStore()

loadState()

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilitychange)
})

onUnmounted(() => {
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

</script>
