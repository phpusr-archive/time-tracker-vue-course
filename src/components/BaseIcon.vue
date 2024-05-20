<template>
  <component :is="icons[name]" />
</template>

<script setup>
import {
  ArrowPathIcon as ArrowPath,
  ChartBarIcon as ChartBar,
  ClockIcon as Clock,
  ListBulletIcon as ListBullet,
  PauseIcon as Pause,
  PlayIcon as Play,
  PlusIcon as Plus,
  TrashIcon as Trash,
  XMarkIcon as XMark
} from '@heroicons/vue/24/outline'

import { CheckCircleIcon as CheckCircleSolid, ClockIcon as ClockSolid } from '@heroicons/vue/24/solid'

const icons = {
  ChartBar, Clock, ListBullet, Trash, XMark, Plus, ArrowPath, Pause, Play,
  ClockSolid, CheckCircleSolid
}

defineProps({
  name: {
    type: String,
    required: true
  }
})

</script>

<style scoped>

</style>
