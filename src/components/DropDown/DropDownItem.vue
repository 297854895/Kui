<template>
  <li :class="`k-dropdown-menu-item ${icon ? 'k-dropdown-menu-item-icon' : ''}`">
    <i v-if="icon" :class="`${icon} k-dropdown-menu-item-i`"></i>
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name: 'k-dropdown-item',
    props: {
      icon: {
        type: String,
        default: ''
      }
    }
  }
</script>
