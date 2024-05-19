<template>
  <div class="mt-5">
    <ul class="p-0">
      <TimelineItem
          v-for="timelineItem in store.timelineItems"
          :key="timelineItem.hour"
          :timeline-item="timelineItem"
          ref="timelineItemRefs"
          @scroll-to-hour="scrollToHour"
      />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { useAppStore } from '../stores'
import { onMounted, ref } from 'vue'

const store = useAppStore()

const timelineItemRefs = ref([])

onMounted(() => scrollToHour(new Date().getHours()))

function scrollToHour(hour) {
  if (hour > 0) {
    timelineItemRefs.value[hour - 1].$el.scrollIntoView()
  }
}
</script>
