
<template>
  <div :class="colorClasses" class="ms-2 d-flex align-items-center rounded px-2 font-monospace display-6">
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatSecondsWithSign } from '../functions'
import { isActivityValid } from '../validators'
import { useAppStore } from '../stores'

const { activity } = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const store = useAppStore()

const colorClasses = computed(() => {
  return remainingSeconds.value >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
})

const remainingSeconds = computed(() => {
  return store.calculateTrackedActivitySeconds(activity.id) - activity.secondsToComplete
})
</script>

<style scoped>

</style>
