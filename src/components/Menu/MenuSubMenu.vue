<template>
  <transition name="k-submenu">
    <ul
      @click.stop="handleClick"
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
      handleClick() {
        this.show = false;
      }
    }
  }
</script>
