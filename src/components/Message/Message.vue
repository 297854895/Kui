<template>
  <transition
    name="k-animate-top-in">
    <div
      class="k-message-container"
      ref="message"
      v-if="show">
      <div
        :class="`k-message ${this.$options.type ? 'k-message-' + this.$options.type : 'k-message-default'}`">
        <i :class="returnIcon(this.$options.type)"></i>{{this.$options.content ? this.$options.content : ''}}<i @click="close" v-if="!this.$options.remove" class="fa fa-close k-message-close"></i>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    name: 'k-message',
    data() {
      return {
        show: false
      }
    },
    mounted() {
      setTimeout(() => {
         this.show = true;
       }, 1);
       if (this.$options.remove) {
         setTimeout(() => {
           this.show = false;
         }, Number.parseInt(this.$options.remove));
       }
       const unWatch = this.$watch('show', (newValue, oldValue) => {
         if (!newValue) {
           this.show = false;
           unWatch();
         }
       });
    },
    methods: {
      close() {
        this.show = false;
      },
      returnIcon(type) {
        switch (type) {
          case 'success':
          return 'fa fa-check-circle';
          case 'error':
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
