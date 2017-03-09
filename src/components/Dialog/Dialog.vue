<template>
  <div class="k k-mask-dialog k-dialog-wrap" v-if="this.$data._set._showStatus">
    <div class="k-mask-dialog-bk"></div>
      <div class="k-dialog-container">
        <h1>
          {{this.$data._set.title ? this.$data._set.title : ''}}
          <i class="fa fa-close" style="" @click="close"></i>
        </h1>
        <p>{{this.$data._set.content ? this.$data._set.content : ''}}</p>
        <div class="k-dialog-button">
          <k-button type="primary" size="small" :callBack="sure">{{this.$data._set.button[0].label}}</k-button>
          <k-button size="small" :callBack="cancel">{{this.$data._set.button[1].label}}</k-button>
        </div>
      </div>
  </div>
</template>
<script>
  import kButton from '../Button/Button';
  let _setNone = false;
  let _setUpdate = false;
  export default {
    name: 'k-dialog',
    props: ['set'],
    components: {
      'k-button': kButton
    },
    beforeUpdate () {
      if (!this.$data._set._showStatus && _setNone) {
        _setNone = false;
        return;
      }
      if (_setUpdate) {
        return;
      }
      let _set_;
      if (this.set) {
        _set_ = {
          _showStatus: true,
          ...this.set
        }
      } else {
        _set_ = {
          _showStatus: false,
          button: [
            {label: '确定'},
            {label: '取消'}
          ],
          title: '',
          content: ''
        }
      }
      if (!_set_.button) {
        _set_.button = [
          {label: '确定'},
          {label: '取消'}
        ];
      } else if (!set_.button[0]) {
        _set_.button[0] = {label: '确定'};
      }else if (!set_.button[1]) {
        _set_.button[1] = {label: '取消'};
      }
      this.$data._set = _set_;
      _setUpdate = true;
    },
    methods: {
      close () {
        if (this.$data._set._showStatus) {
          const _dialog = document.querySelectorAll('.k-dialog-container')[0];
          _dialog.style.animationName = "dialogOut";
          setTimeout(()=>{
            this.$data._set._showStatus = false;
            _setNone = true;
            _setUpdate = false;
            _dialog.style.animationName = "dialogIn";
          }, 250);
        }
      },
      sure () {
        if (this.$data._set.button) {
          if (this.$data._set.button[0].CallBack){
            this.$data._set.button[0].CallBack();
          }
        }
        this.close();
      },
      cancel () {
        if (this.$data._set.button) {
          if (this.$data._set.button[1].CallBack){
            this.$data._set.button[1].CallBack();
          }
        }
        this.close();
      }
    },
    data () {
      let set_;
      if (this.set) {
        set_ = {
          _showStatus: true,
          ...this.set
        }
      } else {
        set_ = {
          _showStatus: false,
          button: [
            {label: '确定'},
            {label: '取消'}
          ],
          title: '',
          content: ''
        }
      }
      if (!set_.button) {
        set_.button = [
          {label: '确定'},
          {label: '取消'}
        ]
      } else if (!set_.button[0]) {
        set_.button[0] = {label: '取消'};
      }else if (!set_.button[1]) {
        set_.button[1] = {label: '取消'};
      }
      _setNone = false;
      return {
        _set: set_
      }
    }
  }
</script>
