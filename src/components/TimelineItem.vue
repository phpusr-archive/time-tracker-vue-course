<template>
  <li
      class="position-relative d-flex flex-column border-top py-5 px-4"
  >
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>

    <BaseSelect :selected="selectedActivityId" :options="options" placeholder="Rest" />
  </li>
</template>

<script setup>
import BaseSelect from './BaseSelect.vue'

const props = defineProps(['timelineItem'])

const hourLinkClasses = [
    'hours rounded px-2 font-monospace fs-1',
    props.timelineItem.hour === new Date().getHours() ? 'bg-purple-900 text-white' : 'bg-gray-100 text-secondary'
]

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectedActivityId = 2
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
