<template>
  <ul
    :class="`k-menu k-menu-${direction} ${border ? 'k-menu-border' : ''}`">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'k-menu',
    props: {
      direction: {
        type: String,
        default: 'x'
      },
      border: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
