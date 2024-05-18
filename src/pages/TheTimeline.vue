<template>
  <div class="mt-5">
    <ul class="p-0">
      <TimelineItem
          v-for="timelineItem in store.timelineItems"
          :key="timelineItem.hour"
          :timelineItem="timelineItem"
          ref="timelineItemRefs"
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

onMounted(scrollToCurrentTimelineItem)

function scrollToCurrentTimelineItem() {
  const currentHour = new Date().getHours()
  if (currentHour > 0) {
    timelineItemRefs.value[currentHour - 1].$el.scrollIntoView()
  }
}
</script>
