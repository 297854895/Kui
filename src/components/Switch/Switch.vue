<template>
  <span
    v-bind="bindAttr"
    :class="`k k-switch k-switch-default k-switch-${status ? 'enable' : 'disable'} ${disable ? 'k-switch-status-disable' : ''}`"
    @click="handleClick">
    <a :class="`k-switch-default k-switch-circle ${status ? 'k-switch-right' : 'k-switch-left'} ${animate ? 'k-switch-animate' : ''}`"></a>
  </span>
</template>
<script>
  export default {
    name: 'k-switch',
    props: {
      status: {
        type: Boolean,
        default: false
      },
      disable: {
        type: Boolean,
        default: false
      },
      bindAttr: {
        type: Object,
        default: () => {return {}}
      }
    },
    data() {
      return {
        animate: false,
        animateStatus: false
      }
    },
    methods: {
      handleClick() {
        if (this.disable) return;
        if (this.animateStatus) return;
        setTimeout(() => {
          this.animate = false;
        }, 175);
        setTimeout(() => {
          this.animateStatus = false;
        }, 350);
        this.animate = true;
        this.animateStatus = true;
        this.$emit('click');
      }
    }
  }
</script>
