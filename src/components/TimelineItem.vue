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

<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { isTimelineItemValid } from '../validators.js'
import { useAppStore } from '../stores/index.js'

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const store = useAppStore()
const options = store.activitySelectOptions

function selectActivity(activityId) {
  store.setActivityForTimelineItem(timelineItem.hour, activityId)
}
</script>

<style scoped>
li {
  border-color: #e1e1e1;
}
</style>
