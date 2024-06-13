<template>
  <li
      class="position-relative d-flex flex-column border-top py-5 px-4"
  >
    <TimelineHour :hour="timelineItem.hour" />

    <BaseSelect
        :selected="timelineItem.activityId"
        :options="options"
        placeholder="Rest"
        @select="selectActivity"
    />

    <TimelineStopwatch :timelineItem="timelineItem" />
  </li>
</template>

<script setup lang="ts">
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { useAppStore } from '../stores'
import type { Activity, TimelineItem } from '../types'

const { timelineItem } = defineProps<{ timelineItem: TimelineItem }>()

const store = useAppStore()

const options = store.activitySelectOptions

function selectActivity(activityId: Activity['id'] | null): void {
  if (activityId) {
    store.setTimelineItemActivity(timelineItem.hour, activityId)
  }
}
</script>

<style scoped>
li {
  border-color: #e1e1e1;
}
</style>
