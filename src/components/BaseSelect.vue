<template>
  <div class="d-flex">
    <BaseButton>
      <XMarkIcon />
    </BaseButton>
    <select class="ms-2 form-select text-truncate bg-gray-100 fs-3">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js'

defineProps(['selected', 'options', 'placeholder'])
</script>

<style scoped>

</style>
