<template>
  <li
      class="position-relative d-flex flex-column border-top py-5 px-4"
  >
    <a href="#" :class="hourLinkClasses">
      {{ timelineItem.hour }}:00
    </a>
  </li>
</template>

<script setup>
const props = defineProps(['timelineItem'])

const hourLinkClasses = [
    'hours rounded px-2 font-monospace fs-1',
    props.timelineItem.hour === new Date().getHours() ? 'bg-purple-900 text-white' : 'bg-gray-100 text-secondary'
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
</style>
