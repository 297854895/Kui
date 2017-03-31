<template>
  <button
    v-bind="bindAttr"
    type="button"
    :class="`k-button k-button-${type} k-button-${size} ${disable ? 'k-button-disable' : ''} ${shape ? 'k-button-circle' : ''} ${radius ? 'k-button-radius' : ''} ${className}`"
    :style="`font-size: ${fontSize}; ${type === 'circle' ? '' : 'width:' + width + ';' } ${cssStyle}`"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <svg v-if="loading" class="icon iconkui-loading" viewBox="0 0 1024 1024" version="1.1">
      <path d="M512.212 31.667M512.005 63.932c-0.133 0-0.265 0.002-0.397 0.003 0 0-13.474-1.081-26.394 11.84-10.22 10.22-9.426 24.438-9.426 24.438s-0.053 14.906 8.79 23.749c12.762 12.762 27.03 11.535 27.03 11.535 208.174 0 376.932 168.758 376.932 376.932S719.781 889.36 511.608 889.36 134.676 720.602 134.676 512.428c0-0.274 0.005-0.547 0.005-0.821 0 0 0.755-14.594-10.441-25.79-10.417-10.417-24.521-9.638-24.521-9.638s-14.226-0.681-24.74 9.833c-12.948 12.948-11.045 25.595-11.045 25.595 0 0.133-0.003 0.266-0.003 0.399 0 247.464 200.61 448.074 448.074 448.074s448.074-200.61 448.074-448.074S759.469 63.932 512.005 63.932z" p-id="2685"></path>
    </svg>
    <span v-if="this.$slots.default"><slot></slot></span>
    <i :class="`iconkui icon-${this.dropMenuShow ? 'angleup' : 'angledown'}`" v-if="dropDown"></i>
  </button>
</template>
<script>
  export default {
    name: 'k-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      bindAttr: {
        type: Object,
        default: () => {return {}}
      },
      className: {
        type: String,
        default: ''
      },
      disable: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: ''
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
        default: 'inherit'
      },
      cssStyle: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: ''
      },
      dropDown: {
        type: Boolean,
        default: false
      },
      dropMenuShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick() {
        if (this.loading) return;
        this.$emit('click');
      },
      handleMouseEnter() {
        if (this.loading) return;
        this.$emit('mouseenter');
      },
      handleMouseLeave() {
        if (this.loading) return;
        this.$emit('mouseleave');
      }
    }
  }
</script>
