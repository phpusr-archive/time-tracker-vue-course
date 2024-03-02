<template>
  <div>
    <ul class="p-0">
      <ActivityItem v-for="activity in store.activities" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import { useAppStore } from '../stores/index.js'

const store = useAppStore()
</script>
