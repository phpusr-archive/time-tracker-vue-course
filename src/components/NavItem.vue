<template>
  <li class="flex-grow-1">
    <router-link
        :to="`/${navItem.action}`"
        class="d-flex flex-column align-items-center p-2"
        :class="{
            'active-nav-item' : currentPage === navItem.action,
            'pe-none':  currentPage === navItem.action,
          }"
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

defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid
  }
})

const route = useRoute()
const currentPage = computed(() => route.path.split('/')[1])
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
