<template>
  <div
    :class="'k-row'"
    :style="`${cssStyle}`">
    <slot></slot>
    <div class="k-clear-float"></div>
  </div>
</template>
<script>
  export default {
    name: 'k-row',
    props: {
      cssStyle: {
        type: String,
        default: ''
      }
    }
  }
</script>
