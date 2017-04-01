<template>
  <li
    @click="handleClick"
    :class="`k-menu-item ${actived ? 'k-menu-item-active' : ''}`">
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name: 'k-menu-submenu-item',
    props: {
      active: {
        type: Boolean,
        default: false
      },
    },
    mounted() {
      const parent = this.$parent.$el.className === 'k-menu-submenu-group' ? this.$parent.$parent.$parent.$parent : this.$parent.$parent.$parent;
      parent.$on(`toggle-submenu-active-${parent._uid}`, () => {
        this.actived = false;
      });
    },
    data() {
      return {
        actived: this.active,
      }
    },
    methods: {
      handleClick(evt) {
        if (this.actived) return;
        const parent = this.$parent.$el.className === 'k-menu-submenu-group' ? this.$parent.$parent.$parent.$parent : this.$parent.$parent.$parent;
        const direction = parent.$el.className.indexOf('y') > 0 ? 'y' : 'x';
        if (direction === 'y') {
          evt.stopPropagation();
        }
        parent.$emit(`toggle-submenu-active-${parent._uid}`);
        this.$emit('click');
        this.$nextTick(() => {
          this.actived = true;
        });
      }
    }
  }
</script>
