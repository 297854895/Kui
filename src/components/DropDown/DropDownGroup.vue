<template>
  <div class="k-dropdown-group">
    <div v-if="title" class="k-dropdown-group-title" @click.stop>{{title}}</div>
    <ul :class="`k-dropdown-group-wrap ${title ? 'k-dropdown-group-indent' : ''}`">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'k-dropdown-group',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
