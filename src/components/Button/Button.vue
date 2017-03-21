<template>
  <button
    v-bind="bindAttr"
    type="button"
    :class="`k-button k-button-${type} k-button-${size} ${disable ? 'k-button-disable' : ''} ${shape ? 'k-button-circle' : ''} ${radius ? 'k-button-radius' : ''} ${className}`"
    :style="`font-size: ${fontSize}; ${type === 'circle' ? '' : 'width:' + width + ';' } ${cssStyle}`"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <i :class="icon" v-if="icon && !loading"></i><i v-else-if="loading" class="fa fa-spinner fa-spin"></i><span v-if="this.$slots.default"><slot></slot></span><i :style="`${this.dropMenuShow ? 'transform: rotate(180deg)' : ''}`" class="fa fa-angle-down" v-if="dropDown"></i>
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
        default: '12px'
      },
      cssStyle: {
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
