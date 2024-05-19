<template>
  <li class="d-flex flex-column p-3 divide-y">
    <div class="d-flex align-items-center">
      <BaseButton :type="DANGER_BUTTON_TYPE" @click="store.deleteActivity(activity)">
        <TrashIcon />
      </BaseButton>
      <div class="ms-2 text-truncate fs-3">{{ activity.name }}</div>
    </div>
    <div class="mt-2 d-flex">
      <BaseSelect
          class="font-monospace flex-grow-1"
          placeholder="hh:mm"
          :selected="activity.secondsToComplete || null"
          :options="PERIOD_SELECT_OPTIONS"
          @select="updateSecondsToComplete"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete > 0" :activity="activity" />
    </div>
  </li>
</template>
<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { isActivityValid } from '../validators'
import { DANGER_BUTTON_TYPE, PERIOD_SELECT_OPTIONS } from '../constants'
import { useAppStore } from '../stores'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'

const { activity } = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const store = useAppStore()

function updateSecondsToComplete(secondsToComplete) {
  store.setSecondsToCompleteForActivity(activity.id, secondsToComplete || 0)
}
</script>
