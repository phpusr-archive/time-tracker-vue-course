<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { ButtonType } from '../enums'

const typeClasses: Record<ButtonType, string> = {
  [ButtonType.PRIMARY]: 'btn-primary',
  [ButtonType.SUCCESS]: 'btn-success',
  [ButtonType.WARNING]: 'btn-warning',
  [ButtonType.NEUTRAL]: 'btn-neutral',
  [ButtonType.DANGER]: 'btn-danger'
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: ButtonType }>(), {
  type: ButtonType.PRIMARY
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
