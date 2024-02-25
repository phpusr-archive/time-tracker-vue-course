<template>
  <nav class="sticky-bottom bg-white p-0">
    <ul class="d-flex align-items-center justify-content-around border-top m-0">
      <NavItem v-for="navItem in NAV_ITEMS" :key="navItem.action"
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
import NavItem from './NavItem.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { NAV_ITEMS } from '../constants'

const route = useRoute()
const currentPage = computed(() => route.path.split('/')[1])
</script>

<style scoped>
nav ul {
  list-style: none;
  padding-inline-start: 0;
}
.nav-icon {
  height: 30px;
}
</style>
