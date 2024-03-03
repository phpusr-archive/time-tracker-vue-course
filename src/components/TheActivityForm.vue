<template>
  <form class="sticky-bottom d-flex p-3" @submit.prevent="submit()">
    <input
        type="text"
        class="form-control me-2"
        placeholder="Activity name"
        v-model="activity"
    >
    <BaseButton :disabled="!activity.trim()">
      <PlusIcon />
    </BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from './BaseButton.vue'
import { useAppStore } from '../stores/index.js'

const store = useAppStore()

const activity = ref('')

function submit() {
  store.addActivity(activity.value)
  activity.value = ''
}
</script>
