<template>
  <RouterView />
</template>

<script setup>
import { useAppState } from './composables/app-state'
import { useAppStore } from './stores'

useAppState()

const store = useAppStore()
store.startActiveTimelineStopWatches()
</script>
