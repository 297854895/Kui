<template>
  <div
    :class="`k-col k-col-${span} ${left ? 'k-col-left-' + left : ''} ${right ? 'k-col-right-' + right : ''}`"
    :style="`${cssStyle}`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-col',
    props: {
      span: {
        type: String,
        default: '0'
      },
      left: {
        type: String,
        default: ''
      },
      right: {
        type: String,
        default: ''
      },
      cssStyle: {
        type: String,
        default: ''
      }
    }
  }
</script>
