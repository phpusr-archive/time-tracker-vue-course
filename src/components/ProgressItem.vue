<template>
  <li class="d-flex flex-column p-4 list-group-item">
    <div class="text-truncate activity">{{ activity.name }}</div>
    <div class="d-flex overflow-hidden rounded bg-neutral-200">
      <div :class="getProgressColorClass(progress)" :style="`width: ${progress}%`">&nbsp;</div>
    </div>
    <div class="d-flex justify-content-between font-monospace">
      <span>{{ progress }}%</span>
      <span>{{ timeProgress }}</span>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '../stores/index'
import { formatSeconds, getProgressColorClass } from '../functions'
import { isActivityValid } from '../validators'

const store = useAppStore()

const { activity } = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const progress = computed(() => store.getActivityProgress(activity))
const timeProgress = computed(() => {
  const totalActivitySeconds = store.getTotalActivitySeconds(activity.id)
  return `${formatSeconds(totalActivitySeconds)} / ${formatSeconds(activity.secondsToComplete)}`
})
</script>

<style scoped>
.activity {
  font-size: 1.2rem;
}
</style>
