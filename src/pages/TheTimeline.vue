<template>
  <div class="mt-5">
    <ul class="p-0">
      <li
          v-for="{ hour } in timelineItems"
          :key="hour"
          class="position-relative d-flex flex-column border-top py-5 px-4"
      >
        <a href="#" class="hours rounded bg-gray-100 px-2 font-monospace fs-1 text-secondary">
          {{ hour }}:00
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { generateTimelineItems } from '../functions.js'

const timelineItems = generateTimelineItems()
</script>

<style scoped>
li {
  border-color: #e1e1e1;
}
.bg-gray-100 {
  background: #e1e1e1;
}
.hours {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
