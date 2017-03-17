import Vue from 'vue';
import fontAwesome from './css/font-awesome.css';
import Kuicss from './css/kui.css';

import Button from './src/components/Button/Button.vue';
import ButtonGroup from './src/components/ButtonGroup/ButtonGroup.vue';
import Col from './src/components/Col/Col.vue';
import DropDown from './src/components/DropDown/DropDown.vue';
import DropDownItem from './src/components/DropDown/DropDownItem.vue';
import Layout from './src/components/Layout/Layout.vue';
import Row from './src/components/Row/Row.vue';
import Switch from './src/components/Switch/Switch.vue';

import MainBus from './src/components/MainBus/index.js';
import Notification from './src/components/Notification/index.js';
import Message from './src/components/Message/index.js';
import Dialog from './src/components/Dialog/index.js';

Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(Col.name, Col);
Vue.component(DropDown.name, DropDown);
Vue.component(DropDownItem.name, DropDownItem);
Vue.component(Layout.name, Layout);
Vue.component(Row.name, Row);
Vue.component(Switch.name, Switch);

Vue.prototype.$Kui = {
  MainBus,
  Notification,
  Message,
  Dialog
}
