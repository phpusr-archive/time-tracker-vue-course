<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useAppState } from './composables/app-state'

useAppState()
</script>
