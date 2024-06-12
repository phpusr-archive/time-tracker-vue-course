<template>
  <BaseButton type="neutral" @click="resetState">Reset</BaseButton>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
import { useAppStore } from '../stores'

const store = useAppStore()

function resetState() {
  store.resetActivities()
  store.resetTimelineItems()
}
</script>

<style scoped>

</style>
