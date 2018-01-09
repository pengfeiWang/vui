import vTable from './template/';
vTable.install = function (Vue) {
  Vue.component(vTable.name, vTable);
};
export {vTable};
