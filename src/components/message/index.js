import Message from './js/main.js';
Message.install = function (Vue) {
  Vue.prototype.$message = Message;
};
export {Message};
