import Vue from 'vue';
import kNotification from './Notification.vue';
const notifications = Vue.extend(kNotification);

const NotificationFn = (type, options) => {
  const _notification = document.querySelectorAll('.k-notification-wrap');
  if (_notification.length === 0) {
    const knotification = Vue.component('knotification', {
      mounted () {
        const _notifications = new notifications(Object.assign({type}, options)).$mount();
        this.$el.appendChild(_notifications.$el);
      },
      render(h) {
        return h(
                  'div',
                  {
                    attrs: {
                      class: 'k-notification-wrap'
                    }
                  }
                )
      }
    });
    const _knotification = new knotification().$mount();
    document.querySelector('body').appendChild(_knotification.$el);
  }else {
    const _notifications = new notifications(Object.assign({type}, options)).$mount();
    _notification[0].appendChild(_notifications.$el);
  }
};
const Notification = {};
['success', 'warning', 'error', 'default', 'info'].forEach((type)=>{
  Notification[type] = (options) => {
    NotificationFn(type, options);
  }
});
export default Notification;
