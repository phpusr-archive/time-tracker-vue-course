<template>
  <li class="d-flex flex-column p-3 divide-y">
    <div class="d-flex align-items-center">
      <BaseButton :type="ButtonType.DANGER" @click="store.deleteActivity(activity)">
        <BaseIcon :name="IconName.TRASH" />
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
      <RemainingActivitySeconds v-if="activity.secondsToComplete > 0" :activity="activity" />
    </div>
  </li>
</template>
<script setup lang="ts">
import RemainingActivitySeconds from './RemainingActivitySeconds.vue'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import BaseIcon from './BaseIcon.vue'
import { PERIOD_SELECT_OPTIONS } from '../constants'
import { useAppStore } from '../stores'
import type { Activity } from '../types'
import { ButtonType, IconName } from '../enums'

const { activity } = defineProps<{
  activity: Activity
}>()

const store = useAppStore()

function updateSecondsToComplete(secondsToComplete: number | null): void {
  if (secondsToComplete != null) {
    store.setActivitySecondsToComplete(activity.id, secondsToComplete)
  }
}
</script>
