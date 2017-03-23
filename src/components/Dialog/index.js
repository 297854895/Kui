import Vue from 'vue';
import kDialog from './Dialog.vue';
import MainBus from '../MainBus/index.js';

export default (options) => {
  let container = document.querySelector('.k-dialog-container');
  if (container) {
    MainBus.dialogEvent('dialogEvent', options);
    return;
  }
  const kdialog = Vue.component('k-dialog', {
    components: {
      'k-dialogs': kDialog
    },
    data() {
      return {
        show: false,
        options: options,
        cancelLoading: false,
        sureLoading: false,
        container: ''
      }
    },
    mounted () {
      this.show = true;
      this.$on('close-dialog', () => {
        setTimeout(() => {
          this.show = false;
        }, 50);
      });
      MainBus.listen.$on('dialogEvent', (event) => {
        if (event.type === 'loading') {
          this.toggleLoading(event);
          return;
        }
        this.initData(event);
        container.className = `k-dialog-container k-dialog-container-show ${event.radius === false ? '' : 'k-dialog-radius'}`;
        this.show = true;
      });
    },
    methods: {
      close() {
        this.$children[0].show = false;
        setTimeout(() => {
          this.show = false;
        }, 50);
      },
      initData(data) {
        this.cancelLoading = false;
        this.sureLoading = false;
        this.options = data;
      },
      toggleLoading(data) {
        if (!this.show) return;
        const status = data.action === 'start' ? true : data.action === 'error' ? 'error' : false;
        if (!status) {
          this.close();
          return;
        }
        if (status === 'error') {
          this[`${data.button}Loading`] = false;
          if (data.close) {
            this.close();
          }
          if (!data.error && typeof data.error !== 'function') return;
          data.error();
          return;
        }
        this[`${data.button}Loading`] = true;
      },
      leave() {
        this.container = this.$el.parentNode;
      },
      afterLeave() {
        this.container.className = 'k-dialog-container';
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
            on: {
              'leave': this.leave,
              'after-leave': this.afterLeave
            }
          },
          [
            h(
              'div',
              {
                attrs: {
                  class: 'k-dialog-wrap',
                },
                on: {
                  click: this.close
                }
              },
              [
                h(
                  'k-dialogs',
                  {
                    props: Object.assign({sureLoading: this.sureLoading, cancelLoading: this.cancelLoading}, this.options)
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
  container = document.createElement('div');
  container.className = `k-dialog-container k-dialog-container-show ${options.radius === false ? '' : 'k-dialog-radius'}`;
  container.appendChild(_dialog.$el);
  document.querySelector('body').appendChild(container);
}
