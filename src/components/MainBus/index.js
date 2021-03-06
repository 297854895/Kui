import Vue from 'vue';
const vueMainBus = new Vue();
const MainBus = {};
['closeAllMenu', 'dialogEvent'].forEach((type)=>{
  MainBus[type] = (options, data) => {
    vueMainBus.$emit(options, data);
  };
});
MainBus.listen = vueMainBus;
export default MainBus;
