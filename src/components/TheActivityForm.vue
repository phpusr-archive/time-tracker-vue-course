<template>
  <form class="sticky-bottom d-flex p-3 border-top" @submit.prevent="submit()">
    <input
        type="text"
        class="form-control me-2 activity-input"
        placeholder="Activity name"
        v-model="name"
    >
    <BaseButton :disabled="!name.trim()">
      <PlusIcon />
    </BaseButton>
  </form>
</template>
<script setup>
import { nextTick, ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { useAppStore } from '../stores'

const store = useAppStore()

const name = ref('')

async function submit() {
  store.addActivity(name.value)
  name.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>
<style scoped>
.activity-input {
  font-size: 1.5rem;
  font-weight: 500;
}
.activity-input::placeholder {
  color: #8c8c8c;
}
</style>
