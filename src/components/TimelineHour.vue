<template>
  <a href="#" :class="classes" @click.prevent="scrollToHour(hour, true)">{{ formattedHour }}</a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { scrollToHour } from '../services/timeline-items'
import { now } from '../services/time'
import type { Hour } from '../types'

const { hour } = defineProps<{ hour: Hour }>()

const formattedHour = `${hour.toString().padStart(2, '0')}:00`

const classes = computed<string[]>(() => [
  'hours rounded px-2 font-monospace fs-3',
  hour === now.value.getHours() ? 'bg-purple-900 text-white' : 'bg-gray-100 text-secondary'
])

</script>
<style scoped>
li {
  border-color: #e1e1e1;
}

/*noinspection CssUnusedSymbol*/
.hours {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
