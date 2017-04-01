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
      this.parentRoot = parent;
      parent.$on(`toggle-submenu-active-${parent._uid}`, () => {
        this.actived = false;
      });
    },
    data() {
      return {
        actived: this.active,
        parentRoot: null
      }
    },
    methods: {
      handleClick(evt) {
        if (this.actived) return;
        const direction = this.parentRoot.$el.className.indexOf('y') > 0 ? 'y' : 'x';
        const parent = this.$parent.$el.className === 'k-menu-submenu-group' ? this.$parent.$parent : this.$parent;
        if (direction === 'y' && parent.$parent.eventType === 'click') {
          evt.stopPropagation();
        }
        this.parentRoot.$emit(`toggle-submenu-active-${this.parentRoot._uid}`);
        this.$emit('click');
        this.$nextTick(() => {
          this.actived = true;
        });
      }
    }
  }
</script>
