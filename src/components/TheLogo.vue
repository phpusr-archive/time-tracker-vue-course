<template>
  <a href="#" @click.prevent="handleClick" class="d-flex align-items-center">
    <BaseIcon :name="IconName.CLOCK_SOLID" class="logo" />
    <h1 class="ms-2 text-nowrap m-0">TimeTracker</h1>
  </a>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import BaseIcon from './BaseIcon.vue'
import { scrollToHour } from '../services/timeline-items'
import { IconName, PageName } from '../enums'

const router = useRouter()
const route = useRoute()

function handleClick(): void {
  if (route.path.slice(1) === PageName.TIMELINE) {
    scrollToHour(null, true)
  } else {
    router.push('/' + PageName.TIMELINE)
  }
}
</script>
<style scoped>
.logo {
  height: 50px;
}
h1 {
  font-size: 1.5rem;
}
</style>
