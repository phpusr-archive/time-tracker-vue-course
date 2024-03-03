<template>
  <form class="sticky-bottom d-flex p-3" @submit.prevent="store.addActivity(activity)">
    <input type="text" class="form-control me-2" placeholder="Activity name" v-model="activity">
    <BaseButton>
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
</script>
