<template>
  <div class="d-flex align-items-center mt-2">
    <BaseButton
        type="danger"
        :disabled="timelineItem.activitySeconds === 0"
        @click="store.stopTimelineStopWatch(timelineItem.hour, true)"
    >
      <BaseIcon :name="ICON_ARROW_PATH" />
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
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>

    <BaseButton
        v-else
        type="warning"
        @click="store.stopTimelineStopWatch(timelineItem.hour)"
    >
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>

  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { isTimelineItemValid } from '../validators'
import { useAppStore } from '../stores'
import { formatSeconds } from '../functions'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '../services/icons'
import { now } from '../time'

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const store = useAppStore()

const isStartDisabled = computed(() => {
  return timelineItem.hour !== now.value.getHours()
})

watchEffect(() => {
  if (isStartDisabled.value) {
    store.stopTimelineStopWatch(timelineItem.hour)
  }
})
</script>

<style scoped>
.stopwatch-text {
  height: 52px;
}
</style>
