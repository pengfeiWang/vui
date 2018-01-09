import vTip from './js/';
// import './style/_index.scss';
vTip.install = function (Vue) {
  Vue.component(vTip.name, vTip);
};
export {vTip};

