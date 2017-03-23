<template>
  <transition name="k-modal">
    <div
      v-show="show"
      class="k-modal-container k-modal-container-show"
      @click.stop="close_">
      <transition name="k-modal-wrap">
        <div
          v-show="modalStatus"
          class="k-modal"
          @click.stop="">
          <div class="k-modal-close" v-if="title !== false">
            <h3 class="k-modal-title">{{title}}</h3>
            <k-button
              @click="close_"
              type="text"></k-button>
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
      },
      title: {
        type: String || Boolean,
        default: ''
      },
      close: {
        type: Function
      }
    },
    data() {
      return {
        modalStatus: false
      }
    },
    watch: {
      show(newValue) {
        if (!newValue) return;
        this.modalStatus = newValue;
      }
    },
    methods: {
      close_() {
        if (this.close && typeof this.close === 'function') {
          this.modalStatus = false;
          this.close();
        }
      }
    }
  }
</script>
