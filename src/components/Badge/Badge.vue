<template>
  <sup
    v-show="show"
    ref="badge"
    :class="`k-badge k-badge-${type} k-badge-size-${size}`">
    <span v-if="size !== 'mini'">{{count ? (max && count > max ? max + '+' : count) : ''}}</span>
  </sup>
</template>
<script>
  export default{
    name: 'k-badge',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      count: {
        type: Number,
        default: 0
      },
      show: {
        type: Boolean,
        default: true
      },
      max: {
        type: Number,
        default: 0
      }
    },
    updated() {
      this.setWidth();
    },
    mounted() {
      this.setWidth();
    },
    methods: {
      setWidth() {
        if (this.size === 'mini' || this.count <= 99) return;
        if (this.count > this.max) {
          var width = (''+this.count).split('').length * .5 + .75;
          this.$refs.badge.style.width = width + 'em';
          this.$refs.badge.style.right = - width/2 + 'em';
        }
      }
    }
  }
</script>
