<template>
  <li
      class="position-relative d-flex flex-column border-top py-5 px-4"
  >
    <TimelineHour :hour="timelineItem.hour" />

    <BaseSelect :selected="selectedActivityId" :options="options" placeholder="Rest" @select="selectedActivityId = $event" />
  </li>
</template>

<script setup>
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid } from '../validators.js'
import { ref } from 'vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectedActivityId = ref(1)
</script>

<style scoped>
li {
  border-color: #e1e1e1;
}
</style>
