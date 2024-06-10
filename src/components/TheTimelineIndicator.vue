<template>
  <hr
      ref="indicatorRef"
      class="pe-none position-absolute z-3 w-100 border-bottom border-2 border-danger"
      :style="{ top: `${calculateTopOffset}px` }"
  >
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '../constants'

const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())
const indicatorRef = ref()

let timer = setInterval(() => {
  secondsSinceMidnight.value++
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
    secondsSinceMidnight.value = 0
  }
}, 1000)

onUnmounted(() => {
  clearInterval(timer)
})

const calculateTopOffset = computed(() => {
  return calculateSecondsSinceMidnightInPercentage.value / 100 * getTimelineHeight() - 18
})

const calculateSecondsSinceMidnightInPercentage = computed(() => {
  return secondsSinceMidnight.value / SECONDS_IN_DAY * 100
})

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
