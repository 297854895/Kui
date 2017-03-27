<template>
  <div
    class="k-breadcrumb"
    :style="`${fontSize ? 'font-size:' + fontSize : ''}`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-breadcrumb',
    props: {
      fontSize: {
        type: String,
        default: ''
      }
    }
  }
</script>
