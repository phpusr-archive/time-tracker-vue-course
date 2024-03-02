<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script setup>
import { isButtonTypeValid } from '../validators.js'
import { DANGER_BUTTON_TYPE, NEUTRAL_BUTTON_TYPE } from '../constants.js'

const props = defineProps({
  type: {
    type: String,
    default: 'neutral',
    validator: isButtonTypeValid
  }
})

const typeClasses = {
  [NEUTRAL_BUTTON_TYPE]: 'btn-neutral',
  [DANGER_BUTTON_TYPE]: 'btn-danger'
}

const classes = 'btn ' + typeClasses[props.type]
</script>

<style scoped>
.btn {
  min-width: 60px;
  height: 52px;
}
.btn-neutral {
  background: #e1e1e1;
}
.btn-neutral:enabled:hover {
  background: #d1d1d1;
}
.btn-neutral:disabled {
  cursor: none;
  opacity: 50%;
}
</style>
