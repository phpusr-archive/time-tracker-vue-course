<template>
  <hr
      ref="indicatorRef"
      class="pe-none position-absolute z-3 w-100 border-bottom border-2 border-danger"
      :style="{ top: `${calculateTopOffset}px` }"
  >
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { secondsSinceMidnightInPercentage } from '../services/time'

const indicatorRef = ref<HTMLHRElement | null>(null)

const calculateTopOffset = computed((): number => {
  return secondsSinceMidnightInPercentage.value / 100 * getTimelineHeight() - 18
})

function getTimelineHeight(): number {
  return indicatorRef.value?.parentElement?.getBoundingClientRect().height || 0
}
</script>

<style scoped>

</style>
