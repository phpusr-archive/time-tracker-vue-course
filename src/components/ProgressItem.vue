<template>
  <li class="d-flex flex-column p-4 list-group-item">
    <div class="text-truncate activity">{{ activity.name }}</div>
    <div class="d-flex overflow-hidden rounded bg-neutral-200">
      <div :class="[colorClass, 'transition-width']" :style="{ width: progressWidth }">&nbsp;</div>
    </div>
    <div class="d-flex justify-content-between font-monospace">
      <span>{{ percentage }}%</span>
      <span>{{ timeProgress }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useProgress } from '../composables/progress'
import type { Activity } from '../types'

const { activity } = defineProps<{ activity: Activity }>()

const { percentage, timeProgress, colorClass, progressWidth } = useProgress(activity)
</script>

<style scoped>
.activity {
  font-size: 1.2rem;
}
.transition-width {
  transition: width 0.3s ease;
}
</style>
