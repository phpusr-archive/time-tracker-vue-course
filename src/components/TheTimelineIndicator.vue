<template>
  <hr
      ref="indicatorRef"
      class="pe-none position-absolute z-3 w-100 border-bottom border-2 border-danger"
      :style="{ top: `${calculateTopOffset()}px` }"
  >
</template>

<script setup>
import { ref } from 'vue'
import { SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '../constants.js'

const indicatorRef = ref()

function calculateTopOffset() {
  return calculateSecondsSinceMidnightInPercentage() / 100 * getTimelineHeight() - 18
}

function calculateSecondsSinceMidnightInPercentage() {
  return calculateSecondsSinceMidnight() / SECONDS_IN_DAY * 100
}

function calculateSecondsSinceMidnight() {
  const now = new Date()
  return now.getHours() * SECONDS_IN_HOUR + now.getMinutes() * SECONDS_IN_MINUTE + now.getSeconds()
}

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}
</script>

<style scoped>

</style>
