<template>
  <div class="d-flex">
    <BaseButton @click="$emit('select', null)">
      <XMarkIcon />
    </BaseButton>
    <select
        class="ms-2 form-select text-truncate bg-gray-100 fs-3"
        @change="$emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js'
import { isNumberOrNull, isSelectOptionsValid, isUndefinedOrNull } from '../validators.js'
import { computed } from 'vue'

const props = defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: isSelectOptionsValid
  },
  placeholder: {
    required: true,
    type: String
  }
})

defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>
