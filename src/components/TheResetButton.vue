<template>
  <BaseButton :type="ButtonType.NEUTRAL" @click="resetState">Reset</BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import { useAppStore } from '../stores'
import { ButtonType } from '../enums'

const store = useAppStore()

function resetState(): void {
  store.resetActivities()
  store.resetTimelineItems()
}
</script>

<style scoped>

</style>
