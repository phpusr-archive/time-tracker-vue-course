<template>
  <div class="d-flex align-items-center mt-2">
    <BaseButton type="danger" @click="reset()" :disabled="timelineItem.activitySeconds === 0">
      <ArrowPathIcon/>
    </BaseButton>

    <div class="stopwatch-text flex-grow-1 d-flex align-items-center justify-content-center rounded font-monospace
          bg-gray-100 display-5 mx-2">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>

    <BaseButton v-if="!isRunning" type="success" @click="start()" :disabled="isStartDisabled">
      <PlayIcon/>
    </BaseButton>

    <BaseButton v-else type="warning" @click="stop()">
      <PauseIcon/>
    </BaseButton>

  </div>
</template>

<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from './BaseButton.vue'
import { isTimelineItemValid } from '../validators.js'
import { useAppStore } from '../stores/index.js'
import { formatSeconds } from '../functions.js'
import { ref } from 'vue'

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const store = useAppStore()

const isRunning = ref(0)

const isStartDisabled = timelineItem.hour !== new Date().getHours()

function start() {
  isRunning.value = setInterval(() => {
    store.incrementTimelineItemActivitySeconds(timelineItem.hour)
  }, 1000)
}

function stop() {
  clearInterval(isRunning.value)
  isRunning.value = 0
}

function reset() {
  stop()
  store.resetTimelineItemActivitySeconds(timelineItem.hour);
}

</script>

<style scoped>
.stopwatch-text {
  height: 52px;
}
</style>
