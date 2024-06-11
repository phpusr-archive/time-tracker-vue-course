<template>
  <header class="position-fixed w-100 d-flex align-items-center justify-content-between bg-white border-bottom p-3 sticky-top">
    <TheLogo />
    <div class="d-flex align-items-center">
      <TheResetButton class="me-2" />
      <TheHeaderProgress />
    </div>
  </header>
</template>
<script setup lang="ts">
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
import TheResetButton from './TheResetButton.vue'
</script>
<style scoped>
header a {
  color: black;
  text-decoration: none;
}
</style>
