<template>
  <span
    v-bind="bindAttr"
    class="k-dropdown"
    @mouseenter="hoverShowMenu"
    @mouseleave="hoverHideMenu">
    <k-button
      :dropDown="true"
      :radius="radius"
      :type="type"
      :disable="disable"
      :size="size"
      :fontSize="fontSize"
      :cssStyle="cssStyle"
      :className="className"
      :loading="loading"
      :icon="icon"
      :width="width"
      :dropMenuShow="show"
      @click="showMenu">
      {{this.buttonName}}
    </k-button>
    <transition name="k-dropdown-menu">
      <ul v-if="show" class="k-dropdown-menu k-absolute-menu k-border-box" @click="closeMenu">
        <slot></slot>
      </ul>
    </transition>
  </span>
</template>
<script>
  import Button from '../Button/Button.vue';
  export default {
    name: 'k-dropdown',
    components: {
      'k-button': Button
    },
    props: {
      oneMenu: {
        type: Boolean,
        default: true
      },
      buttonName: {
        type: String,
        default: 'DropDown'
      },
      bindAttr: {
        type: Object,
        default: () => {return {}}
      },
      eventType: {
        type: String,
        default: 'click'
      },
      radius: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'default'
      },
      disable: {
        type: Boolean,
        default: false
      },
      radius: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'normal'
      },
      fontSize: {
        type: String,
        default: '12px'
      },
      cssStyle: {
        type: String,
        default: ''
      },
      className: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      }
    },
    mounted() {
      if (!this.oneMenu) return;
      this.$Kui.MainBus.listen.$on('closeAllMenu', () => {
        if (this.show) {
          this.show = !this.show;
        }
      });
    },
    data() {
      return {
        show: false,
        showTimer: null
      }
    },
    methods: {
      closeMenu() {
        this.show = false;
      },
      showMenu() {
        if (this.eventType !== 'click') return;
        if (!this.show && this.oneMenu) {
          this.$Kui.MainBus.closeAllMenu('closeAllMenu');
        }
        this.show = !this.show;
      },
      hoverShowMenu() {
        if (this.eventType !== 'hover') return;
        if (this.oneMenu) {
          this.$Kui.MainBus.closeAllMenu('closeAllMenu');
        }
        if (this.showTimer) {
          clearTimeout(this.showTimer);
          this.showTimer = null;
        }
        this.show = true;
      },
      hoverHideMenu() {
        if (this.eventType !== 'hover') return;
        if (!this.show) return;
        this.showTimer = setTimeout(() => {
          this.show = false;
        }, 300);
      }
    }
  }
</script>
