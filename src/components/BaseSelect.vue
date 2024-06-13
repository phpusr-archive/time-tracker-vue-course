<template>
  <div class="d-flex">
    <BaseButton :type="NEUTRAL_BUTTON_TYPE" @click="select(null)">
      <BaseIcon :name="ICON_X_MARK" />
    </BaseButton>
    <select
        class="ms-2 form-select text-truncate bg-gray-100 fs-3"
        @change="select(($event.target as HTMLSelectElement).value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { isUndefinedOrNull } from '../validators'
import { normalizeSelectValue } from '../functions'
import { NEUTRAL_BUTTON_TYPE } from '../constants'
import { ICON_X_MARK } from '../services/icons'
import { SelectOption } from '../types'

const props = defineProps<{
  selected: string | number | null
  options: SelectOption<number | string>[]
  placeholder: string
}>()

const emit = defineEmits<{
  select: [value: number | string | null]
}>()

const isNotSelected = computed((): boolean => isUndefinedOrNull(props.selected))

function select(value: string | null): void {
  emit('select', normalizeSelectValue(value))
}
</script>
