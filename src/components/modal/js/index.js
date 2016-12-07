import Popup from 'vue-popup';
import extend from 'extend';
import {vButton} from '../../button/';
import {vCheckbox, vCheckboxGroup} from '../../checkbox';
import cfg from '../../../config';
var {prefix} = cfg;

/* 左右数据会有重复, 组件使用的数据会过滤掉左侧与右侧重复的数据 */
/* 确定后, 要返回左侧原始数据 */
var oldSource = [];
function checkeAll (arr, status) {
  arr.map((it, idx) => {
    let tmp = {};
    tmp = extend(arr[idx], {'defaultChecked': status});
    arr.splice(idx, tmp);
  });
}
function checkeSingle (arr, idx, status) {
  let tmp = {};
  if (!arr[idx]) {
    return;
  }
  if (arr[idx].hasOwnProperty('defaultChecked')) {
    status = !arr[idx].defaultChecked;
  } else {
    status = true;
  }

  tmp = extend(arr[idx], {'defaultChecked': status});
  arr.splice(idx, 1, tmp);
}

function resetSelectedSize (dir) {
  var num = 0, str;
  var o = {
    left: 'Source',
    right: 'Target'
  };

  this['data' + o[dir]].map(it => {
    if (it.defaultChecked) {
      num++;
    }
    // return true;
  });
  this[o[dir].toLowerCase() + 'SelectSize'] = num;
}

function transferData (raw, target, to) {
  var that = this;
  var tmp = [];

  var oTarget = {
    left: 'Source',
    right: 'Target'
  };
  var oRaw = {
    left: 'Target',
    right: 'Source'
  };

  var dataRaw = this['data' + oRaw[to]].filter(it => it.defaultChecked),
      dataTgt = this['data' + oRaw[to]].filter(it => !it.defaultChecked);

  var filterRaw = dataRaw.filter(it => {
    if (it.hasOwnProperty('defaultChecked')) {
      delete it.defaultChecked;
    }
    return it;
  }), filterTgt = dataTgt.filter(it => {
    if (it.hasOwnProperty('defaultChecked')) {
      delete it.defaultChecked;
    }
    return it;
  });

  this['data' + oRaw[to]] = [...filterTgt];
  this['data' + oTarget[to]] = [...this['data' + oTarget[to]], ...dataRaw];

  resetSelectedSize.call(this, 'left');
  resetSelectedSize.call(this, 'right');

}


function removeLeft (left, right, key) {
  var len = left.length, rLen = right.length;
  var i, ri;
  if (!len | !rLen) {return left;}
  for (i = 0 ; i < left.length; i++) {
    for (ri = 0; ri < right.length; ri++) {
      if (left[i][key] === right[ri][key]) {
        left.splice(i, 1);
        removeLeft(left, right, key);
        break;
      }
    }
  }
  return left;
}
function filterData () {
  let left = this.dataSource, right = this.dataTarget;
  left = removeLeft(left, right, this.keyWord);

  for (let i = 0, len = this.dataSource.length; i < len; i++) {
    oldSource.push(extend({}, this.dataSource[i]));
  }
}
function initTransferprops () {
  filterData.call(this);
  this.showCancelButton = true;
  this.sourceSize = this.dataSource.length;
  this.targetSize = this.dataTarget.length;
}
export default {


  mixins: [Popup],

  props: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    }
  },

  components: {vButton, vCheckbox, vCheckboxGroup},

  computed: {
    typeClass () {
      return {
        [`${this.prefixCls}-modal-message-${this.type}`]: this.type
      };
    }
  },

  methods: {

    doClose () {
      this.value = false;
      this._closing = true;

      this.onClose && this.onClose();

      this.opened = false;

      if (!this.transition) {
        this.doAfterClose();
      }
    },

    handleAction (action) {
      var callback = this.callback;
      if (this.isShowbtnLoading) {
        return;
      }
      if (action === 'cancel') {
        this.value = false;
        callback(this, action);
        return;
      }
      if (this.transfer) {
        callback(this, action, oldSource);
      } else {
        if (!this.syncClose) {
          this.value = false;
        }
        callback(this, action);
      }
    },

    /* left || right */
    selectAll (obj) {
      let {ev, checked, el, name} = obj;
      let {target} = ev;
      let dir = name;
      // do
      if (checked) {
        if (dir === 'left') {
          checkeAll(this.dataSource, true);
          // this.toRightButtonDisabled = false;
          this.sourceSelectSize = this.dataSource.length;
        } else {
          checkeAll(this.dataTarget, true);
          // this.toLeftButtonDisabled = false;
          this.targetSelectSize = this.dataTarget.length;
        }
      } else {
        if (dir === 'left') {
          checkeAll(this.dataSource, false);
          // this.toRightButtonDisabled = true;
          this.sourceSelectSize = 0;
        } else {
          checkeAll(this.dataTarget, false);
          // this.toLeftButtonDisabled = true;
          this.targetSelectSize = 0;
        }
      }
    },

    /* left || right , 当前方向数据的索引, 选中的当前行 */
    selectSingle (obj) {
      let {checked, index, selecte, groupEl, name} = obj;
      let dir = name;
      // do
      if (dir === 'left') {
        checkeSingle(this.dataSource, index);
      } else {
        checkeSingle(this.dataTarget, index);
      }
      resetSelectedSize.call(this, dir);
    },

    /* 转移到 left || right */
    transferDirection (to) {
      let raw, target, str;
      // do
      if (to === 'left') {
        raw = this.dataTarget;
        target = this.dataSource;
        str = 'Left';
      } else {
        raw = this.dataSource;
        target = this.dataTarget;
        str = 'Right';
      }
      transferData.call(this, raw, target, to);
    },

    /* 方向 选中行 验证是否 选中 */
    isContains (dir, row) {
      // do
    }
  },

  watch: {
    sourceSelectSize (num) {
      // do
      if (num === this.dataSource.length) {
        this.leftAllChecked = true;
      } else {
        this.leftAllChecked = false;
      }
      if (num) {
        this.toRightButtonDisabled = false;
      } else {
        this.toRightButtonDisabled = true;
        this.leftAllChecked = false;
      }
    },
    targetSelectSize (num) {
      // do
      if (num === this.dataTarget.length) {
        this.rightAllChecked = true;
      } else {
        this.rightAllChecked = false;
      }
      if (num) {
        this.toLeftButtonDisabled = false;
      } else {
        this.toLeftButtonDisabled = true;
        this.rightAllChecked = false;
      }
    },
    dataSource (arr) {
      this.sourceSize = arr.length;
    },

    dataTarget (arr) {
      this.targetSize = arr.length;
    },
    transfer (v) {
      // s
      // if (v) {
      //   filterData.call(this);
      //   this.showCancelButton = true;
      //   this.sourceSize = this.dataSource.length;
      //   this.targetSize = this.dataTarget.length;
      // }
    },
    value (v) {
      // s
      if (v) {
        if (this.transfer) {
          initTransferprops.call(this);
        }
        if (this.type === 'confirm') {
          this.showCancelButton = true;
        }
      }
    }
  },
  mounted () {
    // do
    if (this.transfer) {
      initTransferprops.call(this);
    }
  },
  data () {
    return {
      prefixCls: prefix,
      title: '信息提示',
      type: '',
      message: '',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      confirmButtonDisabled: false,
      callback () {
        // do codeing
      },
      customStyle: {
      },
      /* 由回调控制关闭 */
      syncClose: false,
      transfer: false,
      isShowbtnLoading: false,
      dataSource: [],
      dataTarget: [],
      sourceSize: 0,
      sourceSelectSize: 0,
      targetSize: 0,
      targetSelectSize: 0,
      toLeftButtonDisabled: true,
      toRightButtonDisabled: true,
      leftAllChecked: false,
      rightAllChecked: false
    };
  }
};
