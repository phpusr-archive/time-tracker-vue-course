<template>
  <li
      class="position-relative d-flex flex-column border-top py-5 px-4"
  >
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <div class="d-flex">
      <button class="btn btn-reset bg-gray-100">
        <XMarkIcon class="reset-icon" />
      </button>
      <select name="" id="" class="ms-2 form-select text-truncate bg-gray-100 fs-3">
        <option selected disabled value="">Rest</option>
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
    </div>
  </li>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'

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
</script>

<style scoped>
li {
  border-color: #e1e1e1;
}
.bg-gray-100 {
  background: #e1e1e1;
}
.bg-purple-900 {
  background: #9314ab;
}
.hours {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-reset {
  width: 60px;
}
.btn-reset:enabled:hover {
  background: #d1d1d1;
}
.btn-reset:disabled {
  cursor: none;
  opacity: 50%;
}
.reset-icon {
  height: 30px;
}
</style>
