<template>
  <li class="d-flex flex-column p-3 divide-y">
    <div class="d-flex align-items-center">
      <BaseButton :type="DANGER_BUTTON_TYPE" @click="store.deleteActivity(activity)">
        <TrashIcon />
      </BaseButton>
      <div class="ms-2 text-truncate fs-3">{{ activity.name }}</div>
    </div>
    <div class="mt-2">
      <BaseSelect
          class="font-monospace"
          placeholder="h:mm"
          :selected="secondsToComplete"
          :options="periodSelectOptions"
          @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>
<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import { isActivityValid } from '../validators.js'
import { DANGER_BUTTON_TYPE } from '../constants.js'
import { useAppStore } from '../stores/index.js'

defineProps({
  activity: {
    type: String,
    required: true,
    validator: isActivityValid
  }
})

const periodSelectOptions = [15, 30, 45].map(it => ({ label: `0:${it}`, value: it }))

const secondsToComplete = ref(null)

const store = useAppStore()
</script>
