<template>
  <div>
    <ul class="p-0">
      <ActivityItem v-for="activity in store.activities" :key="activity" :activity="activity" />
    </ul>

    <TheActivityForm />
  </div>
</template>
<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import { useAppStore } from '../stores/index.js'
import TheActivityForm from '../components/TheActivityForm.vue'

const store = useAppStore()
</script>
<style scoped>
form {
  bottom: 68px;
}
</style>
