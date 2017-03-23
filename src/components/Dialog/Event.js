import Vue from 'vue';
import MainBus from '../MainBus/index.js';

export default (options) => {
  MainBus.dialogEvent('dialogEvent', options);
}
