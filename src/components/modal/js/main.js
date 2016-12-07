const defaults = {
  title: '信息提示',
  modalFade: true,
  message: '',
  type: 'confirm',
  zIndex: 99999,
  closeOnClickModal: true,
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonDisabled: false,
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  customStyle: {
    width: '300px',
    height: '100px'
  },

  syncClose: false,
  isShowbtnLoading: false,

  /* transfer */
  /* 观察关键词 */

  keyWord: 'id',

  /* 显示内容的字段 */
  keyValue: 'label',

  transfer: false,
  dataSource: [],
  dataTarget: [],
  sourceSize: 0,
  sourceSelectSize: 0,
  targetSize: 0,
  targetSelectSize: 0,
  toLeftButtonDisabled: true,
  toRightButtonDisabled: true,
  leftAllChecked: false,
  rightAllChecked: false,
  onTransfer () {
    // do
  },
  onConfirm () {
    // do
  },
  onCancel () {
    // do
  }
};


import Vue from 'vue';
import msgboxVue from '../template/index';
import extend from 'extend';
import cfg from '../../../config';
var {prefix} = cfg;

const MessageBoxConstructor = Vue.extend(msgboxVue);


let currentMsg, instance;
let msgQueue = [];


const defaultCallback = (...ags) => {
  let [ins, action] = ags;
  if (currentMsg) {
    let callback = currentMsg.callback;
    if (typeof callback === 'function') {
      callback(ags);
    }
    if (currentMsg.resolve) {
      let $type = currentMsg.options.$type || currentMsg.options.type;

      if ($type === 'confirm' || $type === 'prompt') {
        if (action === 'confirm') {
            currentMsg.resolve(ags);
        } else if (action === 'cancel' && currentMsg.reject) {
          currentMsg.reject(ags);
        }
      } else {
        currentMsg.resolve(ags);
      }
    }
  }
};

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};


const showNextMsg = () => {
  if (!instance) {
    initInstance();
  }

  if (!instance.value || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      let options = currentMsg.options;
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape'].forEach(prop => {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      document.body.appendChild(instance.$el);

      Vue.nextTick(() => {
        instance.value = true;
      });
    }
  }
};
var Modal = function (options, callback) {

  if (typeof options === 'string') {
    options = {
      title: options
    };
    if (arguments[1]) {
      options.message = arguments[1];
    }
    if (arguments[2]) {
      options.type = arguments[2];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => { // eslint-disable-line
      msgQueue.push({
        options: extend({}, defaults, Modal.defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });
      showNextMsg();
    });
  } else {
    msgQueue.push({
      options: extend({}, defaults, Modal.defaults, options),
      callback: callback
    });

    showNextMsg();
  }
};

Modal.setDefaults = defaults => {
  Modal.defaults = defaults;
};

Modal.alert = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return Modal(extend({
    title: title,
    message: message,
    $type: 'alert',
    showCancelButton: false,
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

Modal.confirm = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return Modal(extend({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};
Modal.close = () => {
  instance.value = false;
  msgQueue = [];
  currentMsg = null;
};

export default Modal;
export { Modal };


