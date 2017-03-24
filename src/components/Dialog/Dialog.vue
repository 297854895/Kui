<template>
  <transition name="k-dialog">
    <div
      class="k-dialog"
      v-show="show">
      <h3 class="k-dialog-title">
        {{this.title}}
        <k-button
          @click="close"
          type="text"></k-button>
      </h3>
      <p class="k-dialog-content">{{this.content}}</p>
      <div class="k-dialog-button" @click.stop>
        <k-button
          :loading="cancelLoading"
          size="large"
          @click="_cancel">取消</k-button>
        <k-button
          :loading="sureLoading"
          size="large"
          type="primary"
          @click="_sure">确认</k-button>
      </div>
    </div>
  </transition>
</template>
<script>
  import Button from '../Button/Button.vue';

  export default {
    name: 'k-dialog',
    components: {
      'k-button': Button
    },
    props: {
      title: {
        type: String,
        default: 'Dialog'
      },
      content: {
        type: String,
        default: ''
      },
      cancelLoading: {
        type: Boolean,
        default: false
      },
      sureLoading: {
        type: Boolean,
        default: false
      },
      sure: {
        type: Function
      },
      cancel: {
        type: Function
      }
    },
    data() {
      return {
        show: false,
      }
    },
    mounted() {
      this.show = true;
    },
    methods: {
      close() {
        this.show = false;
        this.$parent.$emit('close-dialog');
      },
      _sure() {
        if (this.sure && typeof this.sure === 'function') {
          this.sure();
        } else {
          this.close();
        }
      },
      _cancel() {
        if (this.cancel && typeof this.cancel === 'function') {
          this.cancel();
        } else {
          this.close();
        }
      }
    }
  }
</script>
