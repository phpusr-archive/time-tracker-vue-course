<template>
  <form class="sticky-bottom d-flex p-3 border-top" @submit.prevent="submit()">
    <input
        type="text"
        class="form-control me-2 activity-input"
        placeholder="Activity name"
        v-model="name"
    >
    <BaseButton :disabled="!name.trim()">
      <BaseIcon :name="IconName.PLUS" />
    </BaseButton>
  </form>
</template>
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import BaseButton from './BaseButton.vue'
import { useAppStore } from '../stores'
import { IconName } from '../enums'

const store = useAppStore()

const name = ref<string>('')

async function submit(): Promise<void> {
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
