<template>
  <div class="mt-5">
    <ul class="p-0">
      <TimelineItem v-for="timelineItem in store.timelineItems" :key="timelineItem.hour" :timelineItem="timelineItem" />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { useAppStore } from '../stores/index.js'

const store = useAppStore()
</script>
