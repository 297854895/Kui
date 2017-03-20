import Vue from 'vue';
const vueMainBus = new Vue();
const MainBus = {};
['closeAllMenu', 'toggleDialogButtonStatus'].forEach((type)=>{
  MainBus[type] = (options) => {
    vueMainBus.$emit(options);
  };
});
MainBus.listen = vueMainBus;
export default MainBus;
