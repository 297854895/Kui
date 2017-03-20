import Vue from 'vue';
import kDialog from './Dialog.vue';
const Dialogs = Vue.extend(kDialog);

export default (options) => {
  const kdialog = Vue.component('k-dialog', {
    template: `<transition name="k-dialog-fade-in">
                 <div class="k-dialog-wrap" v-if="show" ref="DialogWrap"></div>
               </transition>`,
    data() {
      return {
        show: false
      }
    },
    watch: {
      show(newValue) {
        if (!newValue) return;
        const _dialogs = new Dialogs(Object.assign({parent: this}, options)).$mount();
        this.$nextTick(() => {
          this.$refs.DialogWrap.appendChild(_dialogs.$el);
        });
      }
    },
    mounted () {
      this.show = true;
      this.$on('close-dialog', () => {
        this.show = false;
      });
    }
  });
  const _dialog = new kdialog().$mount();
  document.querySelector('body').appendChild(_dialog.$el);
}
