<template>
  <transition name="k-modal">
    <div
      v-show="show"
      :class="`k-modal-container ${show ? 'k-modal-container-show' : ''}`">
      <transition name="k-modal-wrap">
        <div
          v-show="modalShow"
          class="k-modal">
          <div class="k-modal-close">
            <k-button
              type="text"></k-button>
            <div class="k-clear-float"></div>
          </div>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
  import Button from '../Button/Button.vue';

  export default {
    name: 'k-modal',
    components: {
      'k-button': Button
    },
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        modalShow: false
      }
    },
    watch: {
      show(newValue) {
        this.modalShow = newValue;
      }
    }
  }
</script>
