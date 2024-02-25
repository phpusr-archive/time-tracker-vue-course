<template>
  <header class="d-flex align-items-center justify-content-between bg-white border-bottom p-3 sticky-top">
    <TheLogo />
    <TheHeaderProgress />
  </header>
</template>
<script setup lang="ts">
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue';

</script>
<style scoped>
header a {
  color: black;
  text-decoration: none;
}
</style>
