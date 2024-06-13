<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import {
  DANGER_BUTTON_TYPE,
  NEUTRAL_BUTTON_TYPE,
  PRIMARY_BUTTON_TYPE,
  SUCCESS_BUTTON_TYPE,
  WARNING_BUTTON_TYPE
} from '../constants'
import type { ButtonType } from '../types'

const typeClasses: Record<ButtonType, string> = {
  [PRIMARY_BUTTON_TYPE]: 'btn-primary',
  [SUCCESS_BUTTON_TYPE]: 'btn-success',
  [WARNING_BUTTON_TYPE]: 'btn-warning',
  [NEUTRAL_BUTTON_TYPE]: 'btn-neutral',
  [DANGER_BUTTON_TYPE]: 'btn-danger'
}
</script>

<script setup lang="ts">

const props = withDefaults(defineProps<{ type?: ButtonType }>(), {
  type: PRIMARY_BUTTON_TYPE
})

const classes = ['btn', typeClasses[props.type]]
</script>

<style scoped>
/*noinspection CssUnusedSymbol*/
.btn {
  min-width: 60px;
  height: 52px;
}
/*noinspection CssUnusedSymbol*/
.btn-primary {
  background: #b236c3;
  border-color: #b236c3;
}
/*noinspection CssUnusedSymbol*/
.btn-neutral {
  background: #e1e1e1;
}
/*noinspection CssUnusedSymbol*/
.btn-neutral:enabled:hover {
  background: #d1d1d1;
}
/*noinspection CssUnusedSymbol*/
.btn-neutral:disabled {
  cursor: none;
  opacity: 50%;
}
</style>
