<template>
  <nav class="sticky-bottom bg-white p-0">
    <ul class="d-flex align-items-center justify-content-around border-top m-0">
      <NavItem v-for="navItem in navItems" :key="navItem.action"
               :to="`/${navItem.action}`"
               :class="{
                 'active-nav-item' : currentPage === navItem.action,
                 'pe-none':  currentPage === navItem.action,
               }">
        <component :is="navItem.icon" class="nav-icon" />
        {{ navItem.title }}
      </NavItem>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import NavItem from "./NavItem.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'

const navItems = [
  { title: 'Timeline', action: PAGE_TIMELINE, icon: ClockIcon },
  { title: 'Activities', action: PAGE_ACTIVITIES, icon: ListBulletIcon },
  { title: 'Progress', action: PAGE_PROGRESS, icon: ChartBarIcon }
]

const route = useRoute()
const currentPage = computed(() => route.path.split('/')[1])
</script>
<style scoped>
nav ul {
  list-style: none;
}
.nav-icon {
  height: 30px;
}
</style>
