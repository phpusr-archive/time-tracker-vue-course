<template>
  <div>
    <ul class="p-0">
      <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
<script setup>
import ActivityItem from '../components/ActivityItem.vue'

const activities = ['Coding', 'Reading', 'Training']
</script>
