<template>
  <hr
      ref="indicatorRef"
      class="pe-none position-absolute z-3 w-100 border-bottom border-2 border-danger"
      :style="{ top: `${calculateTopOffset}px` }"
  >
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { secondsSinceMidnightInPercentage, startTimer, stopTimer } from '../time'

const indicatorRef = ref()

startTimer()

onUnmounted(() => {
  stopTimer()
})

const calculateTopOffset = computed(() => {
  return secondsSinceMidnightInPercentage.value / 100 * getTimelineHeight() - 18
})

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}
</script>

<style scoped>

</style>
