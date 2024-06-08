<template>
  <li class="d-flex flex-column p-4 list-group-item">
    <div class="text-truncate activity">{{ activity.name }}</div>
    <div class="d-flex overflow-hidden rounded bg-neutral-200">
      <div :class="`bg-${color}-500`" :style="`width: ${progress}%`">&nbsp;</div>
    </div>
    <div class="d-flex justify-content-between font-monospace">
      <span>{{ progress }}%</span>
      <span>{{ timeProgress }}</span>
    </div>
  </li>
</template>

<script setup>
const { index } = defineProps(['index', 'activity'])

const color = ['red', 'yellow', 'blue', 'green'][index]
const progress = [10, 50, 70, 100][index]
const timeProgress = ['03:00 / 30:00', '15:00 / 30:00', '21:00 / 30:00', '30:00 / 30:00'][index]
</script>

<style scoped>
.activity {
  font-size: 1.2rem;
}
</style>
