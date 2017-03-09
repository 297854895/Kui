<template>
  <span :class="`k-button-group${radius ? ' k-button-group-radius' : ''}`">
    <slot></slot>
  </span>
</template>
<script>
  export default {
    name: 'k-button-group',
    props: {
      radius: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
