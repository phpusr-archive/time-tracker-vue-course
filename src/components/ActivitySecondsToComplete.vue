
<template>
  <div :class="colorClasses" class="ms-2 d-flex align-items-center rounded px-2 font-monospace display-6">
    {{ seconds }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatSeconds } from '../functions'
import { isActivityValid } from '../validators'
import { useAppStore } from '../stores/index'
import { getTotalActivitySeconds } from '../services/timeline-items'

const { activity } = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const store = useAppStore()

const colorClasses = computed(() => {
  return secondsDiff.value >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
})

const seconds = computed(() => {
  return sign.value + formatSeconds(secondsDiff.value)
})

const sign = computed(() => {
  return secondsDiff.value >= 0 ? '+' : '-'
})

const secondsDiff = computed(() => {
  return getTotalActivitySeconds(activity.id, store.timelineItems) - activity.secondsToComplete
})
</script>

<style scoped>

</style>
