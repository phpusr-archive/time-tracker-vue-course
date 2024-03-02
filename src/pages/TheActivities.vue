<template>
  <div>
    <ul class="p-0">
      <li v-for="activity in activities" :key="activity" class="d-flex flex-column p-3 divide-y">
        <div class="d-flex align-items-center">
          <BaseButton>
            <TrashIcon />
          </BaseButton>
          <div class="ms-2 text-truncate fs-3">{{ activity }}</div>
        </div>
        <div class="mt-2">
          <BaseSelect class="font-monospace" placeholder="h:mm" :options="periodSelectOptions" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'

const activities = ['Coding', 'Reading', 'Training']
const periodSelectOptions = [15, 30, 45].map(it => ({ label: `0:${it}`, value: it }))
</script>
<style scoped>

</style>
