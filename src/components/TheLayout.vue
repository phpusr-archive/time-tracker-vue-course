<template>
  <the-header @navigate="goTo" />

  <main class="d-flex flex-column flex-grow-1">
    <RouterView ref="pageRef" />
  </main>

  <the-nav />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from './TheHeader.vue'
import TheNav from './TheNav.vue'
import { useRoute, useRouter } from 'vue-router'
import { PAGE_TIMELINE } from '../constants'

const pageRef = ref()
const route = useRoute()
const router = useRouter()

function goTo() {
  console.log('path', route.path)
  if (route.path.slice(1) === PAGE_TIMELINE) {
    pageRef.value.$.subTree.component.exposed.scrollToHour(null, true)
  } else {
    router.push('/' + PAGE_TIMELINE)
  }
}
</script>
<style scoped>
main {
  margin-top: 83px;
}
</style>
