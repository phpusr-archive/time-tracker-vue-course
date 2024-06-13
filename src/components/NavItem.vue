<template>
  <li class="flex-grow-1">
    <router-link
        :to="`/${navItem.action}`"
        @click="handleClick"
        class="d-flex flex-column align-items-center p-2"
        :class="currentPage === navItem.action ? 'active-nav-item' : 'nav-item'"
    >
      <BaseIcon :name="navItem.icon" class="nav-icon" />
      {{ navItem.title }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { scrollToHour } from '../services/timeline-items'
import type { NavItem } from '../types'
import { PageName } from '../enums'

defineProps<{
  navItem: NavItem
}>()

const route = useRoute()
const currentPage = computed((): string => route.path.slice(1))

function handleClick(): void {
  if (route.path.slice(1) === PageName.TIMELINE) {
    scrollToHour(null, true)
  }
}
</script>

<style scoped>
li a {
  color: black;
  text-decoration: none;
}

/*noinspection CssUnusedSymbol*/
.nav-item:hover {
  background: #f8fbff;
}

/*noinspection CssUnusedSymbol*/
.active-nav-item {
  background: #e9ecef;
}
.nav-icon {
  height: 30px;
}
</style>
