<template>
  <div class="mt-5">
    <ul class="p-0">
      <TimelineItem
          v-for="timelineItem in store.timelineItems"
          :key="timelineItem.hour"
          :timeline-item="timelineItem"
          ref="timelineItemRefs"
          @scroll-to-hour="scrollToHour(timelineItem.hour, true)"
      />
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { useAppStore } from '../stores'
import { scrollToHour, timelineItemRefs } from '../services/timeline-items'

const store = useAppStore()

onMounted(() => scrollToHour())
</script>
