<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
import { DANGER_BUTTON_TYPE, NEUTRAL_BUTTON_TYPE, PRIMARY_BUTTON_TYPE } from '../constants.js'

const typeClasses = {
  [PRIMARY_BUTTON_TYPE]: 'btn-primary',
  [NEUTRAL_BUTTON_TYPE]: 'btn-neutral',
  [DANGER_BUTTON_TYPE]: 'btn-danger'
}
</script>

<script setup>
import { isButtonTypeValid } from '../validators.js'
import { PRIMARY_BUTTON_TYPE } from '../constants.js'

const props = defineProps({
  type: {
    type: String,
    default: PRIMARY_BUTTON_TYPE,
    validator: isButtonTypeValid
  }
})

const classes = 'btn ' + typeClasses[props.type]
</script>

<style scoped>
.btn {
  min-width: 60px;
  height: 52px;
}
.btn-primary {
  background: #b236c3;
  border-color: #b236c3;
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
