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

    <div class="d-flex align-items-center mt-2">
      <BaseButton type="danger">
        <ArrowPathIcon/>
      </BaseButton>

      <div class="stopwatch-text flex-grow-1 d-flex align-items-center justify-content-center rounded font-monospace
        bg-gray-100 display-5 mx-2">
        00:00:00
      </div>

      <BaseButton type="warning" class="me-2">
        <PauseIcon/>
      </BaseButton>

      <BaseButton type="success">
        <PlayIcon/>
      </BaseButton>
    </div>
  </li>
</template>

<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import BaseSelect from './BaseSelect.vue'
import BaseButton from './BaseButton.vue'
import { isTimelineItemValid } from '../validators.js'
import TimelineHour from './TimelineHour.vue'
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
.stopwatch-text {
  height: 52px;
}
</style>
