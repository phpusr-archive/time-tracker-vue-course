<template>
  <component :is="ICONS[name]" />
</template>

<script setup lang="ts">
import { ICONS } from '../services/icons'
import type { IconName } from '../enums.js'

defineProps<{ name: IconName }>()
</script>

<style scoped>

</style>
