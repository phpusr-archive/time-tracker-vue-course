<template>
  <li class="d-flex flex-column p-4 list-group-item">
    <div class="text-truncate activity">{{ activity.name }}</div>
    <div class="d-flex overflow-hidden rounded bg-neutral-200">
      <div :class="colorClass" :style="`width: ${percentage}%`">&nbsp;</div>
    </div>
    <div class="d-flex justify-content-between font-monospace">
      <span>{{ percentage }}%</span>
      <span>{{ timeProgress }}</span>
    </div>
  </li>
</template>

<script setup>
import { isActivityValid } from '../validators'
import { useProgress } from '../composables/progress'

const { activity } = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const { percentage, timeProgress, colorClass } = useProgress(activity)
</script>

<style scoped>
.activity {
  font-size: 1.2rem;
}
</style>
