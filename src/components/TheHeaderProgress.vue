<template>
  <router-link :to="`/${PAGE_DAY_COMPLETE}`" class="fs-6">
    <div v-if="!true" class="d-flex align-items-center fs-6">
      Day complete
      <BaseIcon name="CheckCircleSolid" class="ms-2 text-success" style="height: 30px" />
    </div>
    <div v-else class="d-flex align-items-center fs-6">
      Progress
      <span class="ms-1">20%</span>
      <div class="ms-2 text-success rounded-circle bg-danger" style="width: 10px; height: 10px"></div>
    </div>
  </router-link>
</template>
<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { PAGE_DAY_COMPLETE } from '../constants'
</script>
