<template>
  <div
    :class="`k-alert k-alert-${type} k-alert-size-${size} ${radius ? 'k-alert-radius' : ''}`">
    <p>
      <i :class="returnIcon(type)"></i>
      <slot></slot>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'k-alert',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      radius: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      returnIcon(icon) {
        const type_ = icon;
        switch (type_) {
          case 'success':
            return 'fa fa-check-circle';
          case 'danger':
            return 'fa fa-times-circle';
          case 'info':
            return 'fa fa-info-circle';
          case 'warning':
            return 'fa fa-exclamation-triangle';
          default:
            return 'fa fa-telegram';
        }
      }
    }
  }
</script>
