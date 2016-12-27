import Modal from './js/main';
Modal.install = function (Vue) {
  Vue.prototype.$modal = Modal;
  Vue.prototype.$alert = Modal.alert;
  Vue.prototype.$confirm = Modal.confirm;
  Vue.prototype.$prompt = Modal.prompt;
};
export { Modal };
