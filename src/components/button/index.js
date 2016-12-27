import vButton from './template/button.vue';
vButton.install = function (Vue) {
  Vue.component(vButton.name, vButton);
};
export {vButton};
