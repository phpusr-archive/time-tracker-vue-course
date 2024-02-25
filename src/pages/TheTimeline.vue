<template>
  <div class="mt-5">
    <ul class="p-0">
      <TimelineItem v-for="timelineItem in timelineItems" :key="timelineItem.hour" :timelineItem="timelineItem" />
    </ul>
  </div>
</template>

<script setup>
import { generateTimelineItems } from '../functions.js'
import TimelineItem from '../components/TimelineItem.vue'

const timelineItems = generateTimelineItems()
</script>
