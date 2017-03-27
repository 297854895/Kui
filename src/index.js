import Kuicss from '../css/kui.css';

import Alert from './components/Alert/Alert.vue';
import BreadCrumb from './components/BreadCrumb/BreadCrumb.vue';
import BreadCrumbItem from './components/BreadCrumb/BreadCrumbItem.vue';
import Button from './components/Button/Button.vue';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.vue';
import Col from './components/Col/Col.vue';
import CheckBox from './components/CheckBox/CheckBox.vue';
import DropDown from './components/DropDown/DropDown.vue';
import DropDownItem from './components/DropDown/DropDownItem.vue';
import Layout from './components/Layout/Layout.vue';
import Modal from './components/Modal/Modal.vue';
import Page from './components/Page/Page.vue';
import Popover from './components/Popover/Popover.vue';
import Row from './components/Row/Row.vue';
import Switch from './components/Switch/Switch.vue';
import Tree from './components/Tree/Tree.vue';

import MainBus from './components/MainBus/index.js';
import Notification from './components/Notification/index.js';
import Message from './components/Message/index.js';
import Dialog from './components/Dialog/index.js';
import DialogEvent from './components/Dialog/Event.js';

exports.install = (Vue, options) => {
  Vue.component(Alert.name, Alert);
  Vue.component(BreadCrumb.name, BreadCrumb);
  Vue.component(BreadCrumbItem.name, BreadCrumbItem);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(CheckBox.name, CheckBox);
  Vue.component(Col.name, Col);
  Vue.component(DropDown.name, DropDown);
  Vue.component(DropDownItem.name, DropDownItem);
  Vue.component(Layout.name, Layout);
  Vue.component(Modal.name, Modal);
  Vue.component(Page.name, Page);
  Vue.component(Popover.name, Popover);
  Vue.component(Row.name, Row);
  Vue.component(Switch.name, Switch);
  Vue.component(Tree.name, Tree);

  Vue.prototype.$Kui = {
    MainBus,
    Notification,
    Message,
    Dialog,
    DialogEvent
  }
}
