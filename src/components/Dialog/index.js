import Vue from 'vue';
import kDialog from './Dialog';
const kBus = new Vue();

export default (data) => {
  const kdialog = Vue.component('kdialog', {
    components: {
      'k-dialog': kDialog
    },
    data () {
      return {
        dialogData: data
      }
    },
    created () {
      kBus.$on('kdialog', (data) => {
        if (data) {
          this.$data.dialogData = data;
        }
      });
    },
    render (h) {
      return (
        <k-dialog set={this._data.dialogData}></k-dialog>
      )
    }
  });
  const _kdialog = new kdialog().$mount();
  document.querySelectorAll('body')[0].appendChild(_kdialog.$el);
};
