<template>
  <router-link to="/" class="d-flex align-items-center">
    <ClockIcon class="logo" />
    <h1 class="ms-2 text-nowrap m-0">TimeTracker</h1>
  </router-link>
</template>
<script setup lang="ts">
import { ClockIcon } from '@heroicons/vue/24/solid'
</script>
<style scoped>
.logo {
  height: 50px;
}
h1 {
  font-size: 1.5rem;
}
</style>
