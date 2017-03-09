<template>
  <k-animate :show="show" direction='top' delay="1" :message="true" :remove="this.$options.remove === null ? null : (this.$options.remove ? this.$options.remove : 1800)">
    <div ref="messageDOM" :class="`k k-message ${this.$options.type ? 'k-message-' + this.$options.type : 'k-message-default'}`">
      <i :class="returnIcon(this.$options.type)"></i>{{this.$options.text ? this.$options.text : ''}}<i @click="close" v-if="this.$options.remove === null" class="fa fa-close k-message-close"></i>
    </div>
  </k-animate>
</template>
<script>
  import kAnimate from '../Animate/Animate';
  export default{
    name: 'k-message',
    components: {
      'k-animate': kAnimate
    },
    data() {
      return {
        show: true
      }
    },
    methods: {
      close() {
        this.$data.show = false;
      },
      returnIcon(type) {
        switch (type) {
          case 'success':
          return 'k fa fa-check-circle';
          case 'error':
          return 'k fa fa-times-circle';
          case 'info':
          return 'k fa fa-info-circle';
          case 'warning':
          return 'k fa fa-exclamation-triangle';
          default:
          return 'k fa fa-telegram';
        }
      }
    }
  }
</script>
