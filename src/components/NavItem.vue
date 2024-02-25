<template>
  <li class="flex-grow-1">
    <!--suppress RequiredAttributes -->
    <router-link v-bind="$attrs" class="d-flex flex-column align-items-center p-2">
      <slot></slot>
    </router-link>
  </li>
</template>

<script lang="ts">
export default  {
  inheritAttrs: false
}
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
