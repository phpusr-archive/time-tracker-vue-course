<template>
  <div class="mt-5">
    <ul class="p-0">
      <TimelineItem
          v-for="timelineItem in store.timelineItems"
          :key="timelineItem.hour"
          :timeline-item="timelineItem"
          ref="timelineItemRefs"
          @scroll-to-hour="scrollToHour($event, true)"
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

onMounted(() => scrollToHour())

defineExpose({ scrollToHour })

function scrollToHour(hour = null, isSmooth = false) {
  hour ??= new Date().getHours()

  if (hour > 0) {
    const options = { behavior: isSmooth ? 'smooth' : 'instant' }
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}
</script>
