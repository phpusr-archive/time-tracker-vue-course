<template>
  <div>
    <ul class="p-0">
      <ActivityItem v-for="activity in store.activities" :key="activity" :activity="activity" />
    </ul>

    <form class="sticky-bottom d-flex p-3" @submit.prevent="store.addActivity(newActivity)">
      <input type="text" class="form-control me-2" placeholder="Activity name" v-model="newActivity">
      <BaseButton>
        <PlusIcon />
      </BaseButton>
    </form>
  </div>
</template>
<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline/index.js'
import ActivityItem from '../components/ActivityItem.vue'
import BaseButton from '../components/BaseButton.vue'
import { useAppStore } from '../stores/index.js'
import { ref } from 'vue'

const store = useAppStore()

const newActivity = ref('')
</script>
<style scoped>
form {
  bottom: 68px;
}
</style>
