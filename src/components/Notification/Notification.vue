<template>
  <transition name="k-notification-fade">
    <div :class="'k-notification ' + (this.$options.type ? 'k-notification-' + this.$options.type : 'k-notification-default')" v-if="show">
      <div class="k-notification-left">
        <i :class="returnIcon(this.$options.type)"></i>
      </div><div class="k-notification-right">
        <h3 class="k-notification-title">
          <span>{{returnTitle(this.$options.type, this.$options.title)}}</span>
          <i class="k-notification-close" @click="close"></i>
        </h3>
        <p>{{this.$options.content ? this.$options.content : ''}}</p>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    name: 'k-notification',
    methods: {
      close() {
        this.$data.show = false;
      },
      returnTitle(type, title) {
        switch (type) {
          case 'success':
          if(!title) return '成功';
          return title;
          case 'error':
          if(!title) return '错误';
          return title;
          case 'info':
          if(!title) return '信息';
          return title;
          case 'warning':
          if(!title) return '警告';
          return title;
          default:
          if(!title) return '提示';
          return title;
        }
      },
      returnIcon(type) {
        switch (type) {
          case 'success':
          return 'iconkui icon-success';
          case 'error':
          return 'iconkui icon-error';
          case 'info':
          return 'iconkui icon-info';
          case 'warning':
          return 'iconkui icon-warning';
          default:
          return 'iconkui icon-telegram';
        }
      }
    },
    mounted() {
      this.show = true;
      if (!this.autoClose) return;
      const timer = setTimeout(()=>{
        this.show = false;
      }, this.delay ? this.delay : 3000);
    },
    data() {
      return {
        show: false,
        ...this.$options
      }
    }
  }
</script>
