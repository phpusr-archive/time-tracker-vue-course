<template>
  <component :is="ICONS[name]" />
</template>

<script setup>
import { ICONS } from '../services/icons'
import { isIconValid } from '../validators'

defineProps({
  name: {
    type: String,
    required: true,
    validator: isIconValid
  }
})

</script>

<style scoped>

</style>
