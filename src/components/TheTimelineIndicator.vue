<template>
  <hr
      ref="indicatorRef"
      class="pe-none position-absolute z-3 w-100 border-bottom border-2 border-danger"
      :style="{ top: `${calculateTopOffset}px` }"
  >
</template>

<script setup>
import { computed, ref } from 'vue'
import { secondsSinceMidnightInPercentage } from '../services/time'

const indicatorRef = ref()

const calculateTopOffset = computed(() => {
  return secondsSinceMidnightInPercentage.value / 100 * getTimelineHeight() - 18
})

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}
</script>

<style scoped>

</style>
