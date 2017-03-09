import Vue from 'vue';
import fontAwesome from './css/font-awesome.css';
import Kuicss from './css/kui.css';

import Button from './src/components/Button/Button.vue';
import ButtonGroup from './src/components/ButtonGroup/ButtonGroup.vue';
import DropDown from './src/components/DropDown/DropDown.vue';
import DropDownItem from './src/components/DropDown/DropDownItem.vue';

import MainBus from './src/components/MainBus/index.js';
import Notification from './src/components/Notification/index.js';

Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(DropDown.name, DropDown);
Vue.component(DropDownItem.name, DropDownItem);

Vue.prototype.$Kui = {
  MainBus,
  Notification,
}
