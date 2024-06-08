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

const store = useAppStore()

const { index, activity } = defineProps(['index', 'activity'])

const progress = computed(() => store.getActivityProgress(activity))
const totalActivitySeconds = computed(() => store.getTotalActivitySeconds(activity.id))
const timeProgress = computed(() => `${formatSeconds(totalActivitySeconds.value)} / ${formatSeconds(activity.secondsToComplete)}`)
</script>

<style scoped>
.activity {
  font-size: 1.2rem;
}
</style>
