<template>
  <the-header />

  <main class="d-flex flex-column flex-grow-1">
    <RouterView />
  </main>

  <the-nav />
</template>
<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheNav from './TheNav.vue'
</script>

