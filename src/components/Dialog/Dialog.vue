<template>
  <transition name="k-dialog">
    <div
      class="k-dialog"
      v-show="show">
      <h3>
        {{this.$options.title || 'Dialog'}}
        <i class="fa fa-close k-dialog-close" @click="close"></i>
      </h3>
      <p class="k-dialog-content">{{this.$options.content || ''}}</p>
      <div class="k-dialog-button">
        <k-button @click="cancel">取消</k-button>
        <k-button
          :loading="loading"
          type="primary"
          @click="sure">确认</k-button>
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
    data() {
      return {
        show: false,
        loading: false
      }
    },
    mounted() {
      this.show = true;
    },
    methods: {
      loadingStart() {
        this.loading = true;
      },
      close() {
        this.show = false;
        this.$options.parent.$emit('close-dialog');
      },
      sure() {
        // if (this.$options.sure && typeof this.$options.sure === 'function') {
        //   this.loadingStart();
        //   // this.$options.sure();
        // } else {
        //   this.close();
        // }
      },
      cancel() {
        if (this.$options.cancel && typeof this.$options.cancel === 'function') {
          this.$options.cancel();
          this.close();
        } else {
          this.close();
        }
      }
    }
  }
</script>
