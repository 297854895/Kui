<template>
  <span
    class="k-popover-wrap"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @click="click"
    ref="Popover">
    <slot></slot>
    <transition name="k-popover">
      <div
        ref="PopoverDOM"
        :class="`k-popover k-popover-${dire}`"
        v-show="show"
        :style="`${cssStyle}`"
        @mouseenter.stop
        @mouseleave.stop
        @click.stop>
        <div class="k-popover-arrow"></div>
        <slot name="Popover"></slot>
      </div>
    </transition>
  </span>
</template>
<script>
  export default {
    name: 'k-popover',
    props: {
      direction: {
        type: String,
        default: 'top'
      },
      eventType: {
        type: String,
        default: 'hover'
      },
      cssStyle: {
        type: String,
        default: ''
      }
    },
    updated() {
      if (!this.show) return;
      let direction = this.direction
      const PopoverDOM = this.$refs.PopoverDOM;
      const Popover = this.$refs.Popover;
      const PopoverHeight = Popover.offsetHeight;
      const PopoverWidth = Popover.offsetWidth;
      const PopoverDOMHeight = PopoverDOM.offsetHeight;
      const PopoverDOMWidth = PopoverDOM.offsetWidth;
      const viewInfo = this.getViewportSize();
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
      const offsetLeft = Popover.offsetLeft - scrollLeft;
      const offsetTop = Popover.offsetTop - scrollTop;
      const offsetRight = viewInfo.width - offsetLeft - PopoverWidth;
      const offsetBottom = viewInfo.height - offsetTop - PopoverHeight;
      let num = direction === 'top' || direction ==='bottom' ? PopoverHeight : PopoverWidth;
      num += (direction === 'top' || direction ==='bottom' ? PopoverDOMHeight : 0);
      let marginLeft = 0;
      let marginTop = 0;
      switch (direction) {
        case 'right':
          marginLeft = num + 10;
          marginTop = -((PopoverHeight + PopoverDOMHeight)/ 2);
          break;
        case 'left':
          marginLeft = -(PopoverDOMWidth + 10);
          marginTop = -((PopoverHeight + PopoverDOMHeight)/ 2);
          break;
        case 'bottom':
          marginTop = 8;
          break;
        default:
          marginTop = -(num + 8);
      }
      switch (this.dire) {
        case 'right':
          if (offsetRight < marginLeft) {
            marginLeft = -(PopoverDOMWidth + 10);
            PopoverDOM.className = PopoverDOM.className.replace('right', 'left');
          }
          break;
        case 'bottom':
          if (offsetBottom < marginTop + PopoverDOMHeight) {
            marginTop = -(num + 8);
            PopoverDOM.className = PopoverDOM.className.replace('bottom', 'top');
          }
          break;
        case 'left':
          if (offsetLeft < Math.abs(marginLeft)) {
            marginLeft = num + 10;
            PopoverDOM.className = PopoverDOM.className.replace('left', 'right');
          }
          break;
        default:
          if (offsetTop < Math.abs(marginTop)) {
            marginTop = 8;
            PopoverDOM.className = PopoverDOM.className.replace('top', 'bottom');
          }
      }
      PopoverDOM.style.marginTop = marginTop + 'px';
      if (!marginLeft) return;
      PopoverDOM.style.marginLeft = marginLeft + 'px';
    },
    data() {
      return {
        dire: this.direction,
        show: false,
        showTimer: null
      }
    },
    methods: {
      getViewportSize () {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        };
      },
      mouseenter() {
        if (this.eventType === 'click') return;
        if (this.show === true) {
          if (this.showTimer) {
            clearTimeout(this.showTimer);
            this.showTimer = null;
            this.show = true;
            return;
          }
          return;
        }
        setTimeout(() => {
          this.show = true;
        }, 50);
      },
      mouseleave() {
        if (this.eventType === 'click') return;
        this.showTimer = setTimeout(() => {
          this.show = false;
        }, 200);
        return;
      },
      click() {
        if (this.eventType === 'hover') return;
        this.show = !this.show;
      }
    }
  }
</script>
