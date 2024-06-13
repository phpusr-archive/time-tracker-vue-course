<template>
  <router-link :to="`/${PAGE_DAY_COMPLETE}`" class="fs-6">
    <div v-if="dayComplete" class="d-flex align-items-center fs-6">
      Day complete
      <BaseIcon :name="IconName.CHECK_CIRCLE_SOLID" class="ms-2 text-success" style="height: 30px" />
    </div>
    <div v-else class="d-flex align-items-center fs-6">
      Progress
      <span class="ms-1">{{ percentage }}%</span>
      <div :class="`ms-2 text-success rounded-circle ${colorClass}`" style="width: 10px; height: 10px" />
    </div>
  </router-link>
</template>
<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { PAGE_DAY_COMPLETE } from '../constants'
import { useTotalProgress } from '../composables/total-progress'
import { IconName } from '../enums'

const { percentage, dayComplete, colorClass } = useTotalProgress()
</script>
