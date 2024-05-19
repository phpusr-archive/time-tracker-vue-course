<template>
  <header class="position-fixed w-100 d-flex align-items-center justify-content-between bg-white border-bottom p-3 sticky-top">
    <TheLogo @click.prevent="emit('navigate')" />
    <TheHeaderProgress />
  </header>
</template>
<script setup lang="ts">
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

const emit = defineEmits(['navigate'])

</script>
<style scoped>
header a {
  color: black;
  text-decoration: none;
}
</style>
