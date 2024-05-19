<template>
  <li class="flex-grow-1">
    <router-link
        :to="`/${page}`"
        class="d-flex flex-column align-items-center p-2"
        :class="{
            'active-nav-item' : currentPage === page,
            'pe-none':  currentPage === page,
          }"
    >
      <slot></slot>
    </router-link>
  </li>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { isPageValid } from '../validators.js'

defineProps({
  page: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const route = useRoute()
const currentPage = computed(() => route.path.split('/')[1])
</script>

<style scoped>
nav li a {
  color: black;
  text-decoration: none;
}
.active-nav-item {
  background: #e9ecef;
}
</style>
