
<template>
  <div :class="colorClasses" class="ms-2 d-flex align-items-center rounded px-2 font-monospace display-6">
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatSecondsWithSign } from '../functions'
import { useAppStore } from '../stores'
import type { Activity } from '../types'

const { activity } = defineProps<{ activity: Activity }>()

const store = useAppStore()

const colorClasses = computed((): string => {
  return remainingSeconds.value >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
})

const remainingSeconds = computed((): number => {
  return store.calculateTrackedActivitySeconds(activity.id) - activity.secondsToComplete
})
</script>

<style scoped>

</style>
