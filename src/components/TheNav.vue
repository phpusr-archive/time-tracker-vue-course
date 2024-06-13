<template>
  <nav class="sticky-bottom bg-white p-0">
    <ul class="d-flex align-items-center justify-content-around border-top m-0">
      <NavItem
          v-for="navItem in NAV_ITEMS"
          :key="navItem.action"
          :nav-item="navItem"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'
</script>

<style scoped>
nav ul {
  list-style: none;
  padding-inline-start: 0;
}
</style>
