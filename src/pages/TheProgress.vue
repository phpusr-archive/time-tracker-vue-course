<template>
  <ul v-if="store.trackedActivities.length > 0" class="list-group list-group-flush">
    <ProgressItem
        v-for="activity in store.trackedActivities"
        :key="activity.id"
        :activity="activity"
    ></ProgressItem>
  </ul>
  <TheProgressEmptyState v-else />
</template>

<script setup lang="ts">
import ProgressItem from '../components/ProgressItem.vue'
import TheProgressEmptyState from '../components/TheProgressEmptyState.vue'
import { useAppStore } from '../stores'

const store = useAppStore()
</script>
