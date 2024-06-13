<template>
  <div class="mt-5 position-relative">
    <TheTimelineIndicator />
    <ul class="p-0">
      <TimelineItem
          v-for="timelineItem in store.timelineItems"
          :key="timelineItem.hour"
          :timeline-item="timelineItem"
          ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import TheTimelineIndicator from '../components/TheTimelineIndicator.vue'
import { useAppStore } from '../stores'
import { scrollToHour, timelineItemRefs } from '../services/timeline-items'
import { startCurrentDateTimer, stopCurrentDateTimer } from '../services/time'

const store = useAppStore()

onMounted(() => {
  startCurrentDateTimer()
  scrollToHour()
})

onUnmounted(() => {
  stopCurrentDateTimer()
})

</script>
