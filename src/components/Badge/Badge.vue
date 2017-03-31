<template>
  <sup
    :class="`k-badge k-badge-${type} k-badge-size-${size}`">
    <slot v-if="size !== 'mini'"></slot>
  </sup>
</template>
<script>
  export default{
    name: 'k-badge',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      }
    }
  }
</script>
