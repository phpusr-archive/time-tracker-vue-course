<template>
  <div class="d-flex flex-column flex-grow-1">
    <ul v-if="store.activities.length" class="p-0 d-flex flex-column flex-grow-1">
      <ActivityItem v-for="activity in store.activities" :key="activity.id" :activity="activity" />
    </ul>

    <TheActivitiesEmptyState v-else />

    <TheActivityForm />
  </div>
</template>
<script setup lang="ts">
import ActivityItem from '../components/ActivityItem.vue'
import { useAppStore } from '../stores'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue'

const store = useAppStore()
</script>
<style scoped>
form {
  bottom: 68px;
}
</style>
