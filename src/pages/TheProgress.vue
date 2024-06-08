<template>
  <ul class="list-group list-group-flush">
    <ProgressItem
        v-for="activity in store.trackedActivities"
        :key="activity.id"
        :activity="activity"
    ></ProgressItem>
  </ul>
</template>

<script setup>
import ProgressItem from '../components/ProgressItem.vue'
import { useAppStore } from '../stores/index.js'

const store = useAppStore()


</script>
