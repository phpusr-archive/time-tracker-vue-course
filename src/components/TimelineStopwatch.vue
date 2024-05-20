<template>
  <div class="d-flex align-items-center mt-2">
    <BaseButton
        type="danger"
        :disabled="timelineItem.activitySeconds === 0"
        @click="store.stopTimelineStopWatch(timelineItem.hour, true)"
    >
      <ArrowPathIcon/>
    </BaseButton>

    <div class="stopwatch-text flex-grow-1 d-flex align-items-center justify-content-center rounded font-monospace
          bg-gray-100 display-5 mx-2">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>

    <BaseButton
        v-if="!store.isRunningTimelineStopWatch(timelineItem.hour)"
        type="success"
        :disabled="isStartDisabled"
        @click="store.startTimelineStopWatch(timelineItem.hour)"
    >
      <PlayIcon/>
    </BaseButton>

    <BaseButton
        v-else
        type="warning"
        @click="store.stopTimelineStopWatch(timelineItem.hour)"
    >
      <PauseIcon/>
    </BaseButton>

  </div>
</template>

<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline/index'
import BaseButton from './BaseButton.vue'
import { isTimelineItemValid } from '../validators'
import { useAppStore } from '../stores'
import { currentHour, formatSeconds } from '../functions'

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const store = useAppStore()

const isStartDisabled = timelineItem.hour !== currentHour()
</script>

<style scoped>
.stopwatch-text {
  height: 52px;
}
</style>
