<template>
  <li class="flex-grow-1">
    <router-link
        :to="`/${navItem.action}`"
        @click="handleClick"
        class="d-flex flex-column align-items-center p-2"
        :class="{ 'active-nav-item' : currentPage === navItem.action }"
    >
      <BaseIcon :name="navItem.icon" class="nav-icon" />
      {{ navItem.title }}
    </router-link>
  </li>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { isNavItemValid } from '../validators'
import { PAGE_TIMELINE } from '../constants'
import { scrollToHour } from '../services/timeline-items'

defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid
  }
})

const route = useRoute()
const currentPage = computed(() => route.path.slice(1))

function handleClick() {
  if (route.path.slice(1) === PAGE_TIMELINE) {
    scrollToHour(null, true)
  }
}
</script>

<style scoped>
li a {
  color: black;
  text-decoration: none;
}
.active-nav-item {
  background: #e9ecef;
}
.nav-icon {
  height: 30px;
}
</style>
