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
            return 'iconkui icon-success';
          case 'error':
            return 'iconkui icon-error';
          case 'info':
            return 'iconkui icon-info';
          case 'warning':
            return 'iconkui icon-warning';
          default:
            return 'iconkui icon-telegram';
        }
      }
    }
  }
</script>
