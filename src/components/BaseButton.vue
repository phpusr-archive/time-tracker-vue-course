<template>
  <button class="btn btn-default bg-gray-100">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-default {
  width: 60px;
}
.btn-default:enabled:hover {
  background: #d1d1d1;
}
.btn-default:disabled {
  cursor: none;
  opacity: 50%;
}
</style>
