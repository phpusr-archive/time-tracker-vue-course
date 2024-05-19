
<template>
  <div class="ms-2 d-flex align-items-center rounded px-2 font-monospace display-6 bg-purple-100 text-purple-600">
    {{ formatSeconds(activity.secondsToComplete) }}
  </div>
</template>

<script setup>
import { formatSeconds } from '../functions.js'
import { isActivityValid } from '../validators.js'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})
</script>

<style scoped>

</style>
