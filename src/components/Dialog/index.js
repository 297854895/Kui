import Vue from 'vue';
import kDialog from './Dialog.vue';

export default (options) => {
  const kdialog = Vue.component('k-dialog', {
    components: {
      'k-dialogs': kDialog
    },
    data() {
      return {
        show: false,
        cancelLoading: false,
        sureLoading: false
      }
    },
    mounted () {
      this.show = true;
      this.$on('close-dialog', () => {
        setTimeout(() => {
          this.show = false;
        }, 50);
      });
    },
    methods: {
      toggleLoading(data) {
        if (!this.show) return;
        const status = data.action === 'start' ? true : data.action === 'error' ? 'error' : false;
        if (!status) {
          this.$children[0].show = false;
          setTimeout(() => {
            this.show = false;
          }, 50);
          return;
        }
        if (status === 'error') {
          this[`${data.type}Loading`] = false;
          if (!data.error && typeof data.error !== 'function') return;
          data.error();
          return;
        }
        this[`${data.type}Loading`] = true;
      }
    },
    render(h) {
      if (this.show) {
        return h(
          'transition',
          {
            attrs: {
              name: 'k-dialog-fade-in'
            },
          },
          [
            h(
              'div',
              {
                attrs: {
                  class: 'k-dialog-wrap',
                },
                ref: 'DialogWrap'
              },
              [
                h(
                  'k-dialogs',
                  {
                    props: Object.assign({sureLoading: this.sureLoading, cancelLoading: this.cancelLoading}, options)
                  }
                )
              ]
            )
          ]
        )
      } else {
        return;
      }
    }
  });
  const _dialog = new kdialog().$mount();
  document.querySelector('body').appendChild(_dialog.$el);
  return _dialog;
}
