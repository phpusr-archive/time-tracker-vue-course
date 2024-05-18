<template>
  <div class="d-flex align-items-center mt-2">
    <BaseButton type="danger" @click="stop()">
      <ArrowPathIcon/>
    </BaseButton>

    <BaseButton type="warning" class="ms-2" @click="pause()">
      <PauseIcon/>
    </BaseButton>

    <div class="stopwatch-text flex-grow-1 d-flex align-items-center justify-content-center rounded font-monospace
          bg-gray-100 display-5 mx-2">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>

    <BaseButton type="success" @click="start()">
      <PlayIcon/>
    </BaseButton>
  </div>
</template>

<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from './BaseButton.vue'
import { isTimelineItemValid } from '../validators.js'
import { useAppStore } from '../stores/index.js'
import { formatSeconds } from '../functions.js'

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const store = useAppStore()

let stopwatchInterval = null

function start() {
  stopwatchInterval = setInterval(() => {
    store.incrementTimelineItemActivitySeconds(timelineItem.hour)
  }, 1000)
}

function pause() {
  clearInterval(stopwatchInterval)
}

function stop() {
  clearInterval(stopwatchInterval)
  store.resetTimelineItemActivitySeconds(timelineItem.hour);
}
</script>

<style scoped>
.stopwatch-text {
  height: 52px;
}
</style>
