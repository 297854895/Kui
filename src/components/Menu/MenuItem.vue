<template>
  <li
    @click="handleClick"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    :class="`k-menu-item ${actived ? 'k-menu-item-active' : ''}`">
    <slot></slot><i class="iconkui icon-angledown k-menu-item-arrow" v-if="subMenu"></i>
  </li>
</template>
<script>
  export default {
    name: 'k-menu-item',
    props: {
      active: {
        type: Boolean,
        default: false
      },
      eventType: {
        type: String,
        default: 'hover'
      }
    },
    mounted() {
      this.$children.forEach((item) => {
        if (item.$options._componentTag === 'k-menu-submenu') {
          this.subMenu = true;
          this.menuVue = item;
        }
      });
      this.$parent.$on(`toggle-menu-active-${this.$parent._uid}`, (data) => {
        if (this.menuVue && data.direction === 'x') {
          this.menuVue.$emit('close');
          if (data.currentMenu) {
            data.currentMenu.$emit('show');
          }
        }
        this.actived = false;
      });
    },
    data() {
      return {
        actived: this.active,
        subMenu: false,
        menuVue: null
      }
    },
    methods: {
      handleClick() {
        const direction = this.$parent.$el.className.indexOf('y') > 0 ? 'y' : 'x';
        if (this.eventType === 'click' && this.subMenu) {
          this.menuVue.$emit('toggleShow');
        }
        if (this.actived) return;
        this.$parent.$emit(`toggle-menu-active-${this.$parent._uid}`, {direction: direction, currentMenu: this.menuVue});
        this.$emit('click');
        this.$nextTick(() => {
          this.actived = true;
        });
      },
      mouseenter() {
        if (this.eventType !== 'hover' || !this.subMenu) return;
        this.menuVue.$emit('show');
      },
      mouseleave() {
        if (this.eventType !== 'hover' || !this.subMenu) return;
        this.menuVue.$emit('close');
      }
    }
  }
</script>
