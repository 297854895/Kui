import Vue from 'vue';
import kDialog from './Dialog';
const Dialogs = Vue.extend(kDialog);

export default (options) => {
  const kdialog = Vue.component('k-dialog', {
    template: `<div class="k-dialog-wrap"></div>`,
    mounted () {
      const _dialogs = new Dialogs(options).$mount();
      this.$el.appendChild(_dialogs.$el);
    }
  });
  const _dialog = new kdialog().$mount();
  document.querySelector('body').appendChild(_dialog.$el);
}
