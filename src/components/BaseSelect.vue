<template>
  <div class="d-flex">
    <BaseButton :type="NEUTRAL_BUTTON_TYPE" @click="select(null)">
      <BaseIcon :name="IconName.X_MARK" />
    </BaseButton>
    <select
        class="ms-2 form-select text-truncate bg-gray-100 fs-3"
        @change="select(($event.target as HTMLSelectElement).value)"
    >
      <option :selected="selected === null" disabled value="">{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts" generic="T extends number | string">
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { normalizeSelectValue } from '../functions'
import { NEUTRAL_BUTTON_TYPE } from '../constants'
import type { SelectOption } from '../types'
import { IconName } from '../enums'

defineProps<{
  options: SelectOption<T>[]
  selected: T | null
  placeholder: string
}>()

const emit = defineEmits<{
  select: [value: T | null]
}>()

function select(value: string | null): void {
  emit('select', normalizeSelectValue(value))
}
</script>
