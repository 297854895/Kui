import Vue from 'vue';
import kMessage from './Message.vue';
const messages = Vue.extend(kMessage);

const MessageFn = (type, options) => {
  const _message = document.querySelectorAll('.k-message-wrap');
  if (_message.length === 0) {
    const kmessage = Vue.component('k-message', {
      mounted () {
        const _messages = new messages(Object.assign({type}, options)).$mount();
        this.$el.appendChild(_messages.$el);
      },
      render(h) {
        return h(
                  'div',
                  {
                    attrs: {
                      class: 'k-message-wrap'
                    }
                  }
                )
      }
    });
    const _kmessage = new kmessage().$mount();
    document.querySelector('body').appendChild(_kmessage.$el);
  }else {
    const _messages = new messages(Object.assign({type}, options)).$mount();
    _message[0].appendChild(_messages.$el);
  }
};
let Message = {};
['success', 'warning', 'error', 'default', 'info'].forEach((type)=>{
  Message[type] = (options) => {
    MessageFn(type, options);
  }
});
export default Message;
