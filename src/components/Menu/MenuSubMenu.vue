<template>
  <transition name="k-submenu">
    <ul
      @click="handleClick"
      class="k-menu-submenu"
      v-show="show">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  export default {
    name: 'k-menu-submenu',
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.$on('toggleShow', () => {
        this.show = !this.show;
      });
      this.$on('show', () => {
        this.show = true;
      });
      this.$on('close', () => {
        this.show = false;
      })
    },
    methods: {
      handleClick(evt) {
        const direction = this.$parent.$parent.$el.className.indexOf('y') > 0 ? 'y' : 'x';
        const eventType = this.$parent.eventType;
        if (direction === 'x') {
          evt.stopPropagation();
        }
        if (eventType === 'hover') {
          // todo active item
          console.log('active item');
        }
        this.show = false;
      }
    }
  }
</script>
