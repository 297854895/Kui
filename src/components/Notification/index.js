import Vue from 'vue';
import kNotification from './Notification';
const notifications = Vue.extend(kNotification);

const NotificationFn = (type, options) => {
  const _notification = document.querySelectorAll('.k-notification-wrap');
  if (_notification.length === 0) {
    const knotification = Vue.component('knotification', {
      template: `<div class="k-notification-wrap"></div>`,
      mounted () {
        const _notifications = new notifications({type: type,...options}).$mount();
        this.$el.appendChild(_notifications.$el);
      }
    });
    const _knotification = new knotification().$mount();
    document.querySelectorAll('body')[0].appendChild(_knotification.$el);
  }else {
    const _notifications = new notifications({type: type,...options}).$mount();
    _notification[0].appendChild(_notifications.$el);
  }
};
let Notification = {};
['success', 'warning', 'error', 'default', 'info'].forEach((type)=>{
  Notification[type] = (options) => {
    NotificationFn(type, options);
  }
});
export default Notification;
