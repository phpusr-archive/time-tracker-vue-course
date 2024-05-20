<template>
  <div class="d-flex">
    <BaseButton :type="NEUTRAL_BUTTON_TYPE" @click="select(null)">
      <BaseIcon name="XMark" />
    </BaseButton>
    <select
        class="ms-2 form-select text-truncate bg-gray-100 fs-3"
        @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { isSelectOptionsValid, isSelectValueValid, isUndefinedOrNull } from '../validators'
import { normalizeSelectValue } from '../functions'
import { NEUTRAL_BUTTON_TYPE } from '../constants'

const props = defineProps({
  selected: [String, Number],
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

const emit = defineEmits({ select: isSelectValueValid })

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>
