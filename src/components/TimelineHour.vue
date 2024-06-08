<template>
  <a href="#" :class="classes" @click.prevent="scrollToHour(hour, true)">{{ formattedHour }}</a>
</template>

<script setup>
import { currentHour } from '../functions'
import { isHourValid } from '../validators'
import { scrollToHour } from '../services/timeline-items'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
})

const formattedHour = `${props.hour.toString().padStart(2, '0')}:00`

const classes = [
  'hours rounded px-2 font-monospace fs-3',
  props.hour === currentHour() ? 'bg-purple-900 text-white' : 'bg-gray-100 text-secondary'
]

</script>
<style scoped>
li {
  border-color: #e1e1e1;
}
.hours {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
