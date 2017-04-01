<template>
  <div class="k-menu-submenu-group">
    <div
      v-if="title"
      class="k-menu-submenu-group-title">{{title}}</div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-menu-submenu-group',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
