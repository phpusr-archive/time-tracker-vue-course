<template>
  <RouterView />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import * as storage from './storage'
import { useAppStore } from './stores/index'

const store = useAppStore()

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilitychange)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilitychange)
})

function handleVisibilitychange() {
  if (document.visibilityState === 'hidden') {
    console.log('Save state')
    storage.save({
      timelineItems: store.timelineItems,
      activities: store.activities
    })
  }
}

</script>
