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
import { useAppStore } from '../stores/index.js'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const store = useAppStore()
const options = store.activitySelectOptions

const selectedActivityId = ref(0)
</script>

<style scoped>
li {
  border-color: #e1e1e1;
}
</style>
