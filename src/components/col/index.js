import vCol from './template/col.vue';
vCol.install = function (Vue) {
  Vue.component(vCol.name, vCol);
};
export {vCol};

