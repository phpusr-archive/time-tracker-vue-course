<template>
  <ul class="list-group list-group-flush">
    <li v-for="el in 10" class="d-flex flex-column p-4 list-group-item">
      <div class="text-truncate activity">Activity 1</div>
      <div class="d-flex overflow-hidden rounded bg-neutral-200">
        <div class="bg-red-500" style="width: 10%">&nbsp;</div>
      </div>
      <div class="d-flex justify-content-between font-monospace">
        <span>10%</span>
        <span>3:00 / 30:00</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
</script>

<style scoped>
.activity {
  font-size: 1.2rem;
}
</style>
