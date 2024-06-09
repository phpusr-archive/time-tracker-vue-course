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

<script setup>
import { onMounted } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import TheTimelineIndicator from '../components/TheTimelineIndicator.vue'
import { useAppStore } from '../stores'
import { scrollToHour, timelineItemRefs } from '../services/timeline-items'

const store = useAppStore()

onMounted(() => scrollToHour())
</script>
