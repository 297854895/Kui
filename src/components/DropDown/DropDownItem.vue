<template>
  <li
    v-if="!disable"
    class="k-dropdown-menu-item">
    <slot></slot>
  </li><li
    v-else="disable"
    class="k-dropdown-menu-item k-dropdown-menu-item-disable" @click.stop>
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name: 'k-dropdown-item',
    props: {
      disable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
