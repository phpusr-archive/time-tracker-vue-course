<template>
  <RouterView />
</template>

<script setup>
import { useAppState } from './composables/app-state'

useAppState()
</script>
